<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshop.cn.team
// +----------------------------------------------------------------------
namespace app\admin\logic;

use app\api\cache\TokenCache;
use app\common\logic\AccountLogLogic;
use app\common\logic\LogicBase;
use app\common\logic\UserLevelLogic;
use app\common\model\AccountLog;
use app\common\model\Order;
use app\common\model\Pay;
use app\common\model\User;
use app\common\model\UserLevel;
use app\common\server\UrlServer;
use think\Db;
use think\Exception;

class UserLogic extends LogicBase
{
    /**
     * 列表
     * @param $get
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public static function lists($get){
        $user = new User();

        $where = [];
        $where[] = ['del','=', '0'];

        //查询
        if(isset($get['keyword']) && $get['keyword']){
            $where[] = [$get['keyword_type'],'like','%'.$get['keyword'].'%'];
        }
        //等级查询
        if(isset($get['level']) && $get['level'] != ''){
            $where[] = ['level','=',$get['level']];
        }

        //分组查询
        if(isset($get['group_id']) && $get['group_id']){
            $where[] = ['group_id','=',$get['group_id']];
        }
        //消费金额
        if(isset($get['total_amount_start']) && $get['total_amount_start']){
            $where[] = ['total_order_amount','>=',$get['total_amount_start']];
        }
        if(isset($get['total_amount_end']) && $get['total_amount_end']){
            $where[] = ['total_order_amount','<=',$get['total_amount_end']];
        }

        //注册时间
        if(isset($get['start_time']) && $get['start_time']!=''){
            $where[] = ['create_time','>=',strtotime($get['start_time'])];
        }
        if(isset($get['end_time']) && $get['end_time']!=''){
            $where[] = ['create_time','<=',strtotime($get['end_time'])];
        }

        $user_count = $user
                    ->where($where)
                    ->count();

        $user_list = $user
                    ->where($where)
                    ->field('password,pay_password,salt',true)
                    ->page($get['page'],$get['limit'])
                    ->order('id desc')
                    ->select()->toArray();
        //会员分组
        $user_group = Db::name('user_group')->where(['del'=>0])->column('name','id');
        //会员等级
        $user_level = Db::name('user_level')->where(['del'=>0])->column('name','id');

        $all_user_list = $user->where(['del'=>0])->column('sn,nickname,avatar,mobile,level','id');
        $group_list = db::name('user_group')->where(['del'=>0])->column('name','id');

        foreach ($user_list as &$item){
            $item['total_amount'] = round($item['user_money'] + $item['earnings'], 2);
            $item['group_name'] = '-';
            $item['level_name'] = '无等级';
            //会员所属分组
            if(isset($user_group[$item['group_id']])){
                $item['group_name'] = $user_group[$item['group_id']];
            }

            if(isset($user_level[$item['level']])){
                $item['level_name'] = $user_level[$item['level']];
            }


            if ($item['avatar'] != '/static/common/image/default/user.png') {
                $item['abs_avatar'] = $item['avatar'] ? UrlServer::getFileUrl($item['avatar']) : '';
            } else {
                $item['abs_avatar'] = '/static/common/image/default/user.png';
            }

            // 上级推荐人
            $item['first_leader_info'] = User::getUserInfo($item['first_leader']);

            //推荐下级人数
            $item['fans'] = User::where([
                ['first_leader|second_leader', '=', $item['id']],
                ['del', '=', 0]
            ])->count();


            if(isset($group_list[$item['group_id']])){
                $item['group_name'] = $group_list[$item['group_id']];
            }

        }

        return ['count'=>$user_count , 'lists'=>$user_list];
    }

    public static function exportFile($get)
    {
        $where[] = ['del','=', '0'];

        //查询
        if(isset($get['keyword']) && $get['keyword']){
            $where[] = [$get['keyword_type'],'like','%'.$get['keyword'].'%'];
        }
        //等级查询
        if(isset($get['level']) && $get['level'] != ''){
            $where[] = ['level','=',$get['level']];
        }
        //分组查询
        if(isset($get['group_id']) && $get['group_id']){
            $where[] = ['group_id','=',$get['group_id']];
        }
        //消费金额
        if(isset($get['total_amount_start']) && $get['total_amount_start']){
            $where[] = ['total_order_amount','>=',$get['total_amount_start']];
        }
        if(isset($get['total_amount_end']) && $get['total_amount_end']){
            $where[] = ['total_order_amount','<=',$get['total_amount_end']];
        }

        //注册时间
        if(isset($get['start_time']) && $get['start_time']!=''){
            $where[] = ['create_time','>=',strtotime($get['start_time'])];
        }
        if(isset($get['end_time']) && $get['end_time']!=''){
            $where[] = ['create_time','<=',strtotime($get['end_time'])];
        }

        $user_list = Db::name('user')->where($where)
            ->order('id desc')
            ->select();

        //会员分组
        $user_group = Db::name('user_group')->where(['del'=>0])->column('name','id');
        //会员等级
        $user_level = Db::name('user_level')->where(['del'=>0])->column('name','id');
        // 所有会员信息
        $all_user_list = User::where(['del'=>0])->column('sn,nickname,mobile,level','id');

        $exportData = [];
        foreach ($user_list as $item){
            $groupName = '-';
            $levelName = '无等级';
            //会员所属分组
            if(isset($user_group[$item['group_id']])){
                $groupName = $user_group[$item['group_id']];
            }

            if(isset($user_level[$item['level']])){
                $levelName = $user_level[$item['level']];
            }

            $referrer_user_info = '';
            $referrer_nickname = '';
            $referrer_sn = '';
            $referrer_mobile = '';
            $referrer_level_name = '-';
            if(isset($all_user_list[$item['first_leader']])){
                $referrer_user = $all_user_list[$item['first_leader']];
                $referrer_nickname = $referrer_user['nickname'];
                $referrer_sn = $referrer_user['sn'];
                $referrer_mobile = $referrer_user['mobile'];
                if(isset($user_level[$referrer_user['level']])){
                    $referrer_level_name =$user_level[$referrer_user['level']];
                }
                $referrer_user_info.= '【昵称:'.$referrer_nickname.' 编号:'.$referrer_sn. ' 手机:'. $referrer_mobile . ' 等级:'. $referrer_level_name.'】';
            }
            $loginTime = date('Y-m-d H:i:s', $item['login_time']);

            $exportData[] = [$item['sn'], $item['nickname'], $levelName, $groupName, $referrer_user_info, $item['total_order_amount'], $item['user_money'], $item['user_integral'], $loginTime];
        }

        $exportTitle = ['会员编号', '会员昵称', '会员等级', '会员分组', '推荐人信息', '消费金额', '账户余额', '积分', '最后登录时间'];
        $exportExt = 'xls';
        return ['exportTitle'=> $exportTitle, 'exportData' => $exportData, 'exportExt'=>$exportExt, 'exportName'=>'会员列表'.date('Y-m-d H:i:s')];
    }

    /**
     * Notes: 获取会员信息
     * @param $id
     * @param bool $getdata 是否获取原始数据
     * @param bool $expenditure 是否显示会员消费
     * @return User|mixed
     */
    public static function getUser($id,$getdata = false,$expenditure = false){
        $user =  User::get($id);
        $user->append(['level_name','group_name']);
        if($getdata){
            $user = $user->getData();
            if($user['birthday']) $user['birthday'] = date('Y-m-d',$user['birthday']);
        }
        $user['abs_avatar'] = UrlServer::getFileUrl($user['avatar']);
        if($expenditure){
            //本月的消费金额
            $month_amount = Db::name('order')
                        ->where('order_status','not in',[Order::STATUS_CLOSE,Order::STATUS_WAIT_PAY])
                        ->where(['user_id'=>$id,'pay_status'=>Pay::ISPAID])
                        ->whereTime('create_time', 'month')
                        ->sum('order_amount');
            //本月的订单笔数
            $month_num = Db::name('order')
                       ->where('order_status','not in',[Order::STATUS_CLOSE,Order::STATUS_WAIT_PAY])
                       ->where(['user_id'=>$id,'pay_status'=>Pay::ISPAID])
                       ->whereTime('create_time', 'month')
                       ->count();
            //累计消费笔数
            $total_num =Db::name('order')
                        ->where('order_status','not in',[Order::STATUS_CLOSE,Order::STATUS_WAIT_PAY])
                        ->where(['user_id'=>$id,'pay_status'=>Pay::ISPAID])
                        ->sum('order_amount');
            $avg_amount = Db::name('order')
                        ->where('order_status','not in',[Order::STATUS_CLOSE,Order::STATUS_WAIT_PAY])
                        ->where(['user_id'=>$id,'pay_status'=>Pay::ISPAID])
                        ->avg('order_amount');
            $user['month_amount'] = '￥'.round($month_amount,2);
            $user['month_num'] = round($month_num,2);
            $user['total_num'] = round($total_num,2);
            $user['avg_amount'] = '￥'.round($avg_amount,2);
            //分销会员
            $user['distribution_tips'] = '否';
            $user['superior_referrer'] = '-';
            $user['superior_referrer_sn'] = '-';
            if($user['is_distribution']){
                $user['distribution_tips'] = '是';
                $superior_referrer = Db::name('user')->where(['id'=>$user['first_leader']])->field('nickname,sn')->findOrEmpty();
                $user['superior_referrer'] = '-';
                $user['superior_referrer_sn'] = '-';
                if($superior_referrer) {
                    $user['superior_referrer'] = $superior_referrer['nickname'];
                    $user['superior_referrer_sn'] = $superior_referrer['sn'];
                }
            }
            // 头像
            $user['avatar'] = UrlServer::getFileUrl($user['avatar']);
        }
        return $user;
    }
    /*
     * 批量设置会员分组
     */
    public static function setGroup($post){
        return Db::name('user')->where(['id'=>$post['user_ids']])->update(['group_id'=>$post['group_id']]);
    }

    public static function  fans($params)
    {
        $where = [];
        // 一级
        if ($params['type'] == 'one') {
            $where[] = ['first_leader', '=', $params['id']];
        }
        // 二级粉丝
        if ($params['type'] == 'two') {
            $where[] = ['second_leader', '=', $params['id']];
        }
        if(isset($params['keyword']) && !empty($params['keyword'])) {
            $where[] = [$params['field'], 'like', '%'. $params['keyword'] . '%'];
        }

        $lists = User::field('id,sn,nickname,avatar,first_leader')
            ->where($where)
            ->page($params['page'], $params['limit'])
            ->select()
            ->toArray();

        $count = User::field('id,sn,nickname,avatar,first_leader')
            ->where($where)
            ->count();

        foreach($lists as &$item) {
            $item['avatar'] = empty($item['avatar']) ? '' : UrlServer::getFileUrl($item['avatar']);
            $item['first_leader_info'] = User::getUserInfo($item['first_leader']);
            $item['fans'] = User::where([
                ['first_leader|second_leader', '=', $item['id']],
                ['del', '=', 0]
            ])->count();
        }
        return [
            'lists' => $lists,
            'count' => $count,
        ];
    }

    /*
     * 用户账户调整
     */
    public static function adjustAccount($post_data){
        Db::startTrans();
        try {
            $update_data = [];
            $account_log = [];
            //余额调整
            if ($post_data['type'] == 'money') {
                $number = $post_data['money'];
                $change_type = 1;
                $source_type = AccountLog::admin_add_money;
                $money_sql = Db::raw('user_money + ' . $post_data['money']);
                if ($post_data['money_handle'] == 0) {
                    $change_type = 2;
                    $source_type = AccountLog::admin_reduce_money;
                    $money_sql = Db::raw('user_money - ' . $post_data['money']);
                }
                $update_data['user_money'] = $money_sql;
                $account_log[] = [
                    'number'        => $number,
                    'change_type'   => $change_type,
                    'source_type'   => $source_type,
                    'remark'        => $post_data['money_remark'],
                ];
            }
            //积分调整
            if ($post_data['type'] == 'integral') {
                $number = $post_data['integral'];
                $change_type = 1;
                $source_type = AccountLog::admin_add_integral;
                $integral_sql = Db::raw('user_integral + ' . $post_data['integral']);

                if ($post_data['integral_handle'] == 0) {
                    $change_type = 2;
                    $source_type = AccountLog::admin_reduce_integral;
                    $integral_sql = Db::raw('user_integral - ' . $post_data['integral']);
                }
                $update_data['user_integral'] = $integral_sql;
                $account_log[] = [
                    'number'        => $number,
                    'change_type'   => $change_type,
                    'source_type'   => $source_type,
                    'remark'        => $post_data['integral_remark'],
                ];
            }
            //成长值调整
            if ($post_data['type'] == 'growth') {
                $number = $post_data['growth'];
                $change_type = 1;
                $source_type = AccountLog::admin_add_growth;
                $growth_sql = Db::raw('user_growth + ' . $post_data['growth']);

                if ($post_data['growth_handle'] == 0) {
                    $change_type = 2;
                    $source_type = AccountLog::admin_reduce_growth;
                    $growth_sql = Db::raw('user_growth - ' . $post_data['growth']);
                }
                $update_data['user_growth'] = $growth_sql;
                $account_log[] = [
                    'number'        => $number,
                    'change_type'   => $change_type,
                    'source_type'   => $source_type,
                    'remark'        => $post_data['growth_remark'],
                ];
            }

            //佣金调整
            if ($post_data['type'] == 'earnings') {
                $number = $post_data['earnings'];
                $change_type = 1;
                $source_type = AccountLog::admin_inc_earnings;
                $money_sql = Db::raw('earnings + ' . $post_data['earnings']);
                if ($post_data['earnings_handle'] == 0) {
                    $change_type = 2;
                    $source_type = AccountLog::admin_reduce_earnings;
                    $money_sql = Db::raw('earnings - ' . $post_data['earnings']);
                }
                $update_data['earnings'] = $money_sql;
                $account_log[] = [
                    'number'        => $number,
                    'change_type'   => $change_type,
                    'source_type'   => $source_type,
                    'remark'        => $post_data['earnings_remark'],
                ];
            }

            Db::name('user')->where('id', $post_data['id'])->update($update_data);
            foreach ($account_log as $item => $value){
                AccountLogLogic::AccountRecord($post_data['id'],$value['number'],$value['change_type'],$value['source_type'],$value['remark']);
            }
            if (isset($post_data['growth_handle'])) {
                UserLevelLogic::updateUserLevel($post_data['id']);
            }
            Db::commit();
            return true;
        } catch (Exception $e) {
            Db::rollback();
            return false;
        }
    }


    public static function adjustLevel($post_data){

        return Db::name('user')->where('id',$post_data['id'])->update(['level'=>$post_data['level']]);
    }
    /*
     * 获取分组
     */
    public static function getGroupList(){
        return Db::name('user_group')->where(['del'=>0])->field('id,name')->select();
    }

    /*
     * 获取等级
     */
    public static function getLevelList()
    {
        return UserLevel::getSelectList();
    }

    /*
     * 编辑会员
     */
    public static function edit($post){
        $user = User::get($post['id']);
        if (!empty($post['password'])) {
            //生成密码
            $post['password'] = create_password($post['password'], $user->salt);
        } else {
            unset($post['password']);
        }
        $post['update_time'] = time();
        $post['birthday'] = strtotime($post['birthday']);

        //如果用户被禁用,设置当前用户token超时
        if ($post['disable'] == 1) {
            //设置token超时
            Db::name('session')
                ->where(['user_id' => $user['id']])
                ->update(['expire_time' => time()]);

            //清除token缓存
            $tokens = Db::name('session')
                ->where(['user_id' => $user['id']])
                ->select();

            if(count($tokens) > 0) {
                foreach ($tokens as $item) {
                    $token_cache = new TokenCache($item['token']);
                    $token_cache->del();
                }
            }
        }

        return $user->allowField(true)->save($post);
    }

    public static function getList($get){
        switch ($get['type']){
            case 0://下单明细
                $order = new Order();
                $count = $order->alias('o')
                        ->where(['user_id'=>$get['user_id']])
                        ->where('order_status','not in',[Order::STATUS_CLOSE,Order::STATUS_WAIT_PAY])
                        ->count();

                $list = $order->alias('o')
                        ->where(['user_id'=>$get['user_id']])
                        ->where('order_status','not in',[Order::STATUS_CLOSE,Order::STATUS_WAIT_PAY])
                        ->page($get['page'],$get['limit'])
                        ->order('id desc')
                        ->field('o.id,order_sn,total_num,pay_time,total_amount,order_amount,discount_amount,
                                o.create_time,consignee,province,city,district,o.address,mobile')
                        ->select();

                break;
            case 1://积分明细
                $account_log =new AccountLog();
                $count = $account_log
                        ->where(['user_id'=>$get['user_id'],'source_type'=>AccountLog::integral_change])
                        ->count();
                $list = $account_log
                        ->where(['user_id'=>$get['user_id'],'source_type'=>AccountLog::integral_change])
                        ->page($get['page'],$get['limit'])
                        ->order('id desc')
                        ->select();
                break;
            case 2://签到明细
                $account_log =new AccountLog();
                $count = $account_log
                        ->where(['user_id'=>$get['user_id'],'source_type'=>AccountLog::sign_in_integral])
                        ->count();
                $list = $account_log
                        ->where(['user_id'=>$get['user_id'],'source_type'=>AccountLog::sign_in_integral])
                        ->page($get['page'],$get['limit'])
                        ->order('id desc')
                        ->select();
                break;
            case 3://余额明细
                $account_log = new AccountLog();
                $count = $account_log
                    ->where(['user_id'=>$get['user_id'],'source_type'=>AccountLog::money_change])
                    ->count();
                $list = $account_log
                    ->where(['user_id'=>$get['user_id'],'source_type'=>AccountLog::money_change])
                    ->page($get['page'],$get['limit'])
                    ->order('id desc')
                    ->select();
                break;
            case 4://推广明细
                $count = 1;
                $first_leader = Db::name('user')->where(['id'=>$get['user_id']])->value('first_leader');
                $list = [];
                if($first_leader){
                    $user = new User();
                    $list = $user
                            ->where(['id'=>$first_leader])
                            ->field('id,sn,nickname,mobile,avatar,level,sex,create_time,total_order_amount,user_money,user_integral')
                            ->order('id desc')
                            ->select();
                    $level_list = Db::name('user_level')->where(['del'=>0])->column('name','id');
                    foreach ($list as &$item) {
                        $item['avatar'] = UrlServer::getFileUrl($item['avatar']);
                        $item['level_name'] = '-';
                        if(isset($level_list[$item['level']])){
                            $item['level_name'] = $level_list[$item['level']];
                        }
                    }
                }
                break;
            case 5://收货地址
                $count = Db::name('user_address')
                            ->where(['user_id'=>$get['user_id'],'del'=>0])
                            ->count();
                $list = Db::name('user_address')
                            ->where(['user_id'=>$get['user_id'],'del'=>0])
                            ->order('id desc')
                            ->select();
                foreach ($list as &$item){
                    $item['default'] = '否';
                    $region = Db::name('dev_region')
                        ->where('id', 'IN', [$item['province_id'], $item['city_id'], $item['district_id']])->order('level asc')->column('name');
                    $region_desc = implode('', $region);
                    $item['address'] = $region_desc.$item['address'];
                    if($item['is_default']){
                        $item['default'] = '是';
                    }
                }
                break;
        }

        return ['count'=>$count , 'lists'=>$list];
    }

  /**
   * 转账记录
   */
  public static function transferRecord($get)
  {
    $where = [];
    // 开始时间
    if(!empty($get['start_time'])) {
      $where[] = ['create_time', '>=', strtotime($get['start_time'])];
    }
    // 结束时间
    if(!empty($get['end_time'])) {
      $where[] = ['create_time', '<=', strtotime($get['end_time'])];
    }

    $list = Db::name('user_transfer')
      ->where($where)
      ->page($get['page'], $get['limit'])
      ->order('create_time', 'desc')
      ->select();

    $count = Db::name('user_transfer')->count();

    // 获取转账人及收款人信息
    foreach($list as &$item) {
      $transferFromInfo = Db::name('user')->alias('u')
        ->field('u.sn, u.nickname, u.avatar, ul.name as user_level_name')
        ->leftJoin('user_level ul', 'u.level=ul.id')
        ->where('u.id', $item['transfer_from_id'])->find();
      $transferToInfo = Db::name('user')->alias('u')
      ->field('u.sn, u.nickname, u.avatar, ul.name as user_level_name')
      ->leftJoin('user_level ul', 'u.level=ul.id')
      ->where('u.id', $item['transfer_to_id'])->find();
      $item['from_nickname'] = $transferFromInfo['nickname'];
      $item['from_avatar'] = UrlServer::getFileUrl($transferFromInfo['avatar']);
      $item['from_sn'] = $transferFromInfo['sn'];
      $item['from_level_name'] = $transferFromInfo['user_level_name'] ?? '无等级';
      $item['to_nickname'] = $transferToInfo['nickname'];
      $item['to_avatar'] = UrlServer::getFileUrl($transferToInfo['avatar']);
      $item['to_sn'] = $transferToInfo['sn'];
      $item['to_level_name'] = $transferToInfo['user_level_name'] ?? '无等级';
      $item['create_time'] = date('Y-m-d H:i:s', $item['create_time']);
    }

    $data = [
      'count' => $count,
      'list' => $list
    ];
    return $data;
  }

    public static function userLists()
    {
        $where[] = ['del', '=', 0];
        // 用户信息
        if (isset($params['keyword']) && !empty($params['keyword'])) {
            $where[] = ['sn|nickname', 'like', '%'. $params['keyword'] .'%'];
        }

        $lists = \app\common\model\User::field('id,sn,nickname,id as distribution')
            ->where($where)
            ->page($params['page'], $params['limit'])
            ->select()
            ->toArray();
        $count = User::where($where)->count();

        return [
            'count' => $count,
            'lists' => $lists,
        ];
    }

    public static function adjustFirstLeader($params)
    {
        Db::startTrans();
        try {
            switch($params['type']) {
                // 指定推荐人
                case 'assign':
                    $formatData = self::assignFirstLeader($params);
                    break;
                // 设置推荐人为系统,即清空上级
                case 'system':
                    $formatData = self::clearFirstLeader($params);
                    break;
            }

            $user = User::findOrEmpty($params['id']);
            // 旧关系链
            if (!empty($user->ancestor_relation)) {
                $old_ancestor_relation = $user->id . ',' .$user->ancestor_relation;
            } else {
                $old_ancestor_relation = $user->id;
            }

            // 更新当前用户的分销关系
            User::where(['id' => $params['id']])->update($formatData);

            //更新当前用户下级的分销关系
            $data = [
                'second_leader' => $formatData['first_leader'],
                'third_leader' => $formatData['second_leader'],
                'update_time'  => time()
            ];
            User::where(['first_leader' => $params['id']])->update($data);

            //更新当前用户下下级的分销关系
            $data = [
                'third_leader' => $formatData['first_leader'],
                'update_time'  => time()
            ];
            User::where(['second_leader' => $params['id']])->update($data);

            //更新当前用户所有后代的关系链
            Db::name('user')
                ->where("find_in_set({$params['id']},ancestor_relation)")
                ->exp('ancestor_relation', "replace(ancestor_relation,'{$old_ancestor_relation}','" . trim("{$params['id']},{$formatData['ancestor_relation']}", ',') . "')")
                ->update();

            Db::commit();
            return true;
        } catch(\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }

    public static function assignFirstLeader($params)
    {
        if (empty($params['first_id'])) {
            throw new \think\Exception('请选择推荐人');
        }
        $firstLeader = User::field(['id', 'first_leader', 'second_leader', 'third_leader', 'ancestor_relation'])
            ->where('id', $params['first_id'])
            ->findOrEmpty()
            ->toArray();
        if(empty($firstLeader)) {
            throw new \think\Exception('推荐人不存在');
        }
        if ($params['first_id'] == $params['id']) {
            throw new \think\Exception('不能指定上级是自己');
        }
        $ancestorArr = explode(',', trim($firstLeader['ancestor_relation']));
        if(!empty($ancestorArr) && in_array($params['id'], $ancestorArr)) {
            throw new \think\Exception('不能指定推荐人为自己的下级');
        }

        // 上级
        $first_leader_id = $firstLeader['id'];
        // 上上级
        $second_leader_id = $firstLeader['first_leader'];
        // 上上上级
        $third_leader_id = $firstLeader['second_leader'];
        // 拼接关系链
        $firstLeader['ancestor_relation'] = $firstLeader['ancestor_relation'] ?? ''; // 清空null值及0
        $my_ancestor_relation = $first_leader_id. ',' . $firstLeader['ancestor_relation'];
        // 去除两端逗号
        $my_ancestor_relation = trim($my_ancestor_relation, ',');
        $data = [
            'first_leader' => $first_leader_id,
            'second_leader' => $second_leader_id,
            'third_leader' => $third_leader_id,
            'ancestor_relation' => $my_ancestor_relation,
            'update_time'  => time()
        ];
        return $data;
    }

    public static function clearFirstLeader($params)
    {
        $data = [
            'first_leader' => 0,
            'second_leader' => 0,
            'third_leader' => 0,
            'ancestor_relation' => '',
            'update_time'  => time()
        ];
        return $data;
    }

    public static function getInfo($id)
    {
        $user =  User::field('id,sn,level,nickname,avatar,birthday,group_id,sex,mobile,create_time,login_time,user_money,user_growth,earnings,first_leader')
            ->findOrEmpty($id);
        if($user->isEmpty()) {
            return [];
        }

        $user =$user->toArray();
        $orderWhere = [
            'user_id' => $id,
            'del' => 0,
            'pay_status' => 1
        ];
        // 上级推荐人
        $user['first_leader_info'] = User::getUserInfo($user['first_leader']);
        // 推荐下级人数
        $user['fans'] = User::where([
            ['first_leader|second_leader', '=', $user['id']],
            ['del', '=', 0],
        ])->count();
        // 总资产
        $user['assets'] = $user['user_money'] + $user['earnings'];
        // 总订单数
        $user['order_num'] = Order::where($orderWhere)->count();
        // 总消费金额
        $user['total_amount'] = Order::where($orderWhere)->sum('order_amount');
        $user['total_amount'] = round($user['total_amount'] ,2);
        // 平均消费单价
        $user['avg_amount'] = Order::where($orderWhere)->avg('order_amount');
        $user['avg_amount'] = round($user['avg_amount'], 2);
        // 头像
        $user['avatar'] = UrlServer::getFileUrl($user['avatar']);
        // 用户等级
        $levelName = UserLevel::where('id', $user['level'])->value('name');
        $user['level_name'] = empty($levelName) ? '无等级' : $levelName;
        // 会员分组
        $user['user_group'] = Db::name('user_group')->where('id', $user['group_id'])->value('name');

        return $user;
    }
}