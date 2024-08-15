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

use app\common\server\ConfigServer;
use think\facade\Env;

/**
 * PC商城逻辑层
 * Class Pc
 * @package app\admin\logic
 */
class Pc
{
    /**
     * @notes 获取PC商城设置
     * @return array
     * @author Tab
     * @date 2021/8/14 14:56
     */
    public static function getConfig()
    {
        $config = [
            'is_open' => ConfigServer::get('pc', 'is_open', 1),
            'page' => ConfigServer::get('pc', 'page', 1),
            'page_url' => ConfigServer::get('pc', 'page_url', ''),
            'pc_url' => request()->domain() . '/pc'
        ];

        return $config;
    }

    /**
     * @notes PC商城设置
     * @param $params
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @throws \think\exception\PDOException
     * @author Tab
     * @date 2021/8/14 14:57
     */
    public static function set($params)
    {
        ConfigServer::set('pc', 'is_open', $params['is_open']);
        ConfigServer::set('pc', 'page', $params['page']);
        ConfigServer::set('pc', 'page_url', $params['page_url']);

        // 恢复原入口
        if(file_exists('./pc/index_lock.html')) {
            // 存在则原商城入口被修改过，先清除修改后的入口
            unlink('./pc/index.html');
            // 恢复原入口
            rename('./pc/index_lock.html', './pc/index.html');
        }

        // PC商城关闭 且 显示空白页
        if($params['is_open'] == 0 && $params['page'] == 1) {
            // 变更文件名
            rename('./pc/index.html', './pc/index_lock.html');
            // 创建新空白文件
            $newfile = fopen('./pc/index.html', 'w');
            fclose($newfile);
        }

        // PC商城关闭 且 跳转指定页
        if($params['is_open'] == 0 && $params['page'] == 2 && !empty($params['page_url'])) {
            // 变更文件名
            rename('./pc/index.html', './pc/index_lock.html');
            // 创建重定向文件
            $newfile = fopen('./pc/index.html', 'w');
            $content = '<script>window.location.href = "' . $params['page_url'] . '";</script>';
            fwrite($newfile, $content);
            fclose($newfile);
        }
    }
}