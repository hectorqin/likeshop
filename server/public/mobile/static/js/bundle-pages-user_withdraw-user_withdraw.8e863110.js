(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle-pages-user_withdraw-user_withdraw"],{"0060":function(t,e,a){"use strict";var i=a("acc4"),n=a.n(i);n.a},"047c":function(t,e,a){var i=a("dcc6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("0edb5615",i,!0,{sourceMap:!1,shadowMode:!1})},"18cb":function(t,e,a){"use strict";a.r(e);var i=a("e8e1"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},2778:function(t,e,a){"use strict";a.r(e);var i=a("c317"),n=a("18cb");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("2c8c");var o=a("828b"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"07bfc4b2",null,!1,i["a"],void 0);e["default"]=s.exports},"2c8c":function(t,e,a){"use strict";var i=a("047c"),n=a.n(i);n.a},3196:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={customImage:a("2778").default,uIcon:a("ab92").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uploader-container row wrap"},[t._l(t.fileList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"upload-image-box",style:{width:t.previewSize,height:t.previewSize}},[a("custom-image",{staticClass:"img-preview",attrs:{mode:"aspectFit",radius:"10rpx",src:e.url,width:t.previewSize,height:t.previewSize}}),a("v-uni-view",{staticClass:"close-icon row-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteImage(e,i)}}},[a("u-icon",{attrs:{name:"close",size:"30",color:"white"}})],1)],1)})),t.useSlot?a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:(0==t.fileList.length||t.mutiple)&&t.fileList.length<t.maxUpload,expression:"(fileList.length == 0 || mutiple) && fileList.length < maxUpload"}],staticClass:"uplader-upload-slot row-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleImage.apply(void 0,arguments)}}},[t._t("default")],2):a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:(0==t.fileList.length||t.mutiple)&&t.fileList.length<t.maxUpload,expression:"(fileList.length == 0 || mutiple) && fileList.length < maxUpload"}],staticClass:"uplader-upload row-center",style:{width:t.previewSize,height:t.previewSize},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleImage.apply(void 0,arguments)}}},[a("u-icon",{attrs:{size:"48",color:"#dcdee0",name:"camera"}}),a("v-uni-view",{staticClass:"uploader-input",attrs:{type:"image",accept:"image/*"}})],1)],2)},r=[]},"403d":function(t,e,a){var i=a("f0ff");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("7f661562",i,!0,{sourceMap:!1,shadowMode:!1})},"70b8":function(t,e,a){"use strict";(function(t){a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c9b5"),a("bf0f"),a("ab80"),a("2797"),a("aa9c"),a("dd2b"),a("e966");var i=a("04d9"),n=a("a30b"),r=(a("22c5"),a("ec91")),o={data:function(){return{active:0,money:"",account:"",realName:"",bank:"",subbank:"",qrCode:"",remark:"",fileList:[],widthDrawConfig:{},widthDrawWay:[]}},components:{},props:{},onLoad:function(t){this.getWithdrawConfigFun(),this.applyWithdrawFun=(0,n.trottle)(this.applyWithdrawFun,1e3,this)},methods:{allWithdraw:function(e){var a=this.widthDrawConfig;t.log(a,"widthDrawConfig"),this.money=a.able_withdraw.toString()},onChange:function(t){this.active=t,this.account="",this.realName="",this.qrCode="",this.remark="",this.fileList=[]},getWithdrawConfigFun:function(){var t=this;(0,i.getWithdrawConfig)().then((function(e){1==e.code&&(t.widthDrawConfig=e.data,t.widthDrawWay=e.data.type)}))},afterRead:function(t){var e=this,a=t;uni.showLoading({title:"正在上传中...",mask:!0}),a.forEach((function(t){(0,n.uploadFile)(t.path).then((function(t){uni.hideLoading(),e.fileList.push(t),e.qrCode=t.url}))}))},handleDelete:function(t){this.fileList.splice(t,1)},applyWithdrawFun:function(e){var a=this,n=this.active,o=this.account,s=this.realName,l=this.qrCode,u=this.remark,c=this.money,d=this.bank,v=this.subbank,p=this.widthDrawWay;switch(t.log(s,"###",n,"###",c),parseInt(e)){case r.withdrawType.ACCOUNT:break;case r.withdrawType.WECHAT:break;case r.withdrawType.PAY_WECHAT:case r.withdrawType.PAY_ALIPAY:if(!o)return this.$toast({title:"请输入账户信息"});if(!s)return this.$toast({title:"请输入真实姓名"});if(!l)return this.$toast({title:"请上传收款码"});break;case r.withdrawType.BANK:if(!o)return this.$toast({title:"请输入账户信息"});if(!s)return this.$toast({title:"请输入真实姓名"});if(!d)return this.$toast({title:"请输入提现银行"});if(!v)return this.$toast({title:"请输入银行支行"})}if(c){var w={type:p[n].value,money:c,account:o,real_name:s,money_qr_code:l,remark:u,bank:d,subbank:v};(0,i.applyWithdraw)(w).then((function(t){1==t.code&&a.$toast({title:"提交成功"},{tab:2,url:"/bundle/pages/widthdraw_result/widthdraw_result?id="+t.data.id})}))}else this.$toast({title:"请输入提现金额"})}}};e.default=o}).call(this,a("ba7c")["default"])},a325:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={tabs:a("a83f").default,tab:a("b72a").default,uploader:a("b503").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"user-withdraw"},[a("v-uni-view",{staticClass:"user-tab-container"},[a("tabs",{attrs:{active:t.active,"line-width":40,config:{itemWidth:200}},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}},t._l(t.widthDrawWay,(function(e,i){return a("tab",{key:i,attrs:{title:e.name,name:e.value}},[1==e.value||2==e.value?[a("v-uni-view",{staticClass:"bg-white withdraw-container mt20"},[a("v-uni-view",{staticClass:"input row-center"},[a("v-uni-view",{staticStyle:{"font-size":"23px","align-self":"flex-end","margin-bottom":"5px"}},[t._v("¥")]),a("v-uni-input",{attrs:{placeholder:"0.00"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}),a("v-uni-view",{staticClass:"column",staticStyle:{flex:"none"}},[a("v-uni-view",{staticClass:"xs primary",staticStyle:{"text-align":"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allWithdraw.apply(void 0,arguments)}}},[t._v("全部提现")]),a("v-uni-view",{staticClass:"xs",staticStyle:{color:"#BBBBBB"}},[t._v("可提现余额￥"+t._s(t.widthDrawConfig.able_withdraw))])],1)],1),2==e.value?a("v-uni-view",{staticClass:"tips mt20 muted row xs"},[t._v("提示：提现需扣除服务费"+t._s(t.widthDrawConfig.poundage_percent)+"%，请自行缴纳税款")]):t._e()],1),a("v-uni-view",{staticClass:"withdraw-btn bg-primary lg white row-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.applyWithdrawFun(e.value)}}},[t._v("确认提现")]),a("v-uni-navigator",{staticClass:"mt20 nr lighter row-center",attrs:{url:"/bundle/pages/user_withdraw_code/user_withdraw_code","hover-class":"none"}},[t._v("提现记录")])]:t._e(),3==e.value?[a("v-uni-view",{staticClass:"bg-white form-container"},[a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("微信账号")]),a("v-uni-input",{attrs:{placeholder:"请输入微信账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("真实姓名")]),a("v-uni-input",{attrs:{placeholder:"请输入真实姓名"},model:{value:t.realName,callback:function(e){t.realName=e},expression:"realName"}})],1),a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("备注")]),a("v-uni-input",{attrs:{placeholder:"（选填）"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1),a("v-uni-view",{staticClass:"uploader-container row mt20"},[a("uploader",{attrs:{"file-list":t.fileList,"max-upload":1,deletable:!0,useSlot:!0},on:{"after-read":function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDelete.apply(void 0,arguments)}}},[a("v-uni-view",[a("v-uni-view",{staticClass:"upload-area row-center"},[a("v-uni-image",{attrs:{src:"/static/images/uploader_icon.png"}})],1),a("v-uni-view",{staticClass:"mt10 normal nr",staticStyle:{"line-height":"36rpx","text-align":"center"}},[t._v("微信收款码")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"bg-white withdraw-container mt10"},[a("v-uni-view",{staticClass:"input row-center"},[a("v-uni-view",{staticStyle:{"font-size":"23px","align-self":"flex-end","margin-bottom":"5px"}},[t._v("¥")]),a("v-uni-input",{attrs:{placeholder:"0.00"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}),a("v-uni-view",{staticClass:"column",staticStyle:{flex:"none"}},[a("v-uni-view",{staticClass:"xs primary",staticStyle:{"text-align":"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allWithdraw.apply(void 0,arguments)}}},[t._v("全部提现")]),a("v-uni-view",{staticClass:"xs",staticStyle:{color:"#BBBBBB"}},[t._v("可提现余额￥"+t._s(t.widthDrawConfig.able_withdraw))])],1)],1),a("v-uni-view",{staticClass:"tips mt10 muted row xs"},[t._v("提示：提现需扣除服务费"+t._s(t.widthDrawConfig.poundage_percent)+"%，请自行缴纳税款")])],1),a("v-uni-view",{staticClass:"withdraw-btn bg-primary lg white row-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.applyWithdrawFun(e.value)}}},[t._v("确认提现")]),a("v-uni-navigator",{staticClass:"mt20 nr lighter row-center",attrs:{url:"/bundle/pages/user_withdraw_code/user_withdraw_code","hover-class":"none"}},[t._v("提现记录")])]:t._e(),4==e.value?[a("v-uni-view",{staticClass:"bg-white form-container"},[a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("支付宝账号")]),a("v-uni-input",{attrs:{placeholder:"请输入支付宝账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("真实姓名")]),a("v-uni-input",{attrs:{placeholder:"请输入真实姓名"},model:{value:t.realName,callback:function(e){t.realName=e},expression:"realName"}})],1),a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("备注")]),a("v-uni-input",{attrs:{placeholder:"（选填）"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1),a("v-uni-view",{staticClass:"uploader-container row mt20"},[a("uploader",{attrs:{"file-list":t.fileList,"max-upload":1,deletable:!0,useSlot:!0},on:{"after-read":function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDelete.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"column-center"},[a("v-uni-view",{staticClass:"upload-area row-center"},[a("v-uni-image",{attrs:{src:"/static/images/uploader_icon.png"}})],1),a("v-uni-view",{staticClass:"mt10 normal nr",staticStyle:{"line-height":"36rpx","text-align":"center"}},[t._v("支付宝收款码")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"bg-white withdraw-container mt10"},[a("v-uni-view",{staticClass:"input row-center"},[a("v-uni-view",{staticStyle:{"font-size":"23px","align-self":"flex-end","margin-bottom":"5px"}},[t._v("¥")]),a("v-uni-input",{attrs:{placeholder:"0.00"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}),a("v-uni-view",{staticClass:"column",staticStyle:{flex:"none"}},[a("v-uni-view",{staticClass:"xs primary",staticStyle:{"text-align":"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allWithdraw.apply(void 0,arguments)}}},[t._v("全部提现")]),a("v-uni-view",{staticClass:"xs",staticStyle:{color:"#BBBBBB"}},[t._v("可提现余额￥"+t._s(t.widthDrawConfig.able_withdraw))])],1)],1),a("v-uni-view",{staticClass:"tips mt10 muted row xs"},[t._v("提示：提现需扣除服务费"+t._s(t.widthDrawConfig.poundage_percent)+"%，请自行缴纳税款")])],1),a("v-uni-view",{staticClass:"withdraw-btn bg-primary lg white row-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.applyWithdrawFun(e.value)}}},[t._v("确认提现")]),a("v-uni-navigator",{staticClass:"mt20 nr lighter row-center",attrs:{url:"/bundle/pages/user_withdraw_code/user_withdraw_code","hover-class":"none"}},[t._v("提现记录")])]:t._e(),5==e.value?[a("v-uni-view",{staticClass:"bg-white form-container"},[a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("银行卡账号")]),a("v-uni-input",{attrs:{placeholder:"请输入银行卡账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("真实姓名")]),a("v-uni-input",{attrs:{placeholder:"请输入真实姓名"},model:{value:t.realName,callback:function(e){t.realName=e},expression:"realName"}})],1),a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("提现银行")]),a("v-uni-input",{attrs:{placeholder:"请输入提现银行"},model:{value:t.bank,callback:function(e){t.bank=e},expression:"bank"}})],1),a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("银行支行")]),a("v-uni-input",{attrs:{placeholder:"请输入银行支行"},model:{value:t.subbank,callback:function(e){t.subbank=e},expression:"subbank"}})],1),a("v-uni-view",{staticClass:"input-item row md"},[a("v-uni-view",{staticClass:"input-label "},[t._v("备注")]),a("v-uni-input",{attrs:{placeholder:"（选填）"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),a("v-uni-view",{staticClass:"bg-white withdraw-container mt10"},[a("v-uni-view",{staticClass:"input row-center"},[a("v-uni-view",{staticStyle:{"font-size":"23px","align-self":"flex-end","margin-bottom":"5px"}},[t._v("¥")]),a("v-uni-input",{attrs:{placeholder:"0.00"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}),a("v-uni-view",{staticClass:"column",staticStyle:{flex:"none"}},[a("v-uni-view",{staticClass:"xs primary",staticStyle:{"text-align":"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allWithdraw.apply(void 0,arguments)}}},[t._v("全部提现")]),a("v-uni-view",{staticClass:"xs",staticStyle:{color:"#BBBBBB"}},[t._v("可提现余额￥"+t._s(t.widthDrawConfig.able_withdraw))])],1)],1),a("v-uni-view",{staticClass:"tips mt10 muted row xs"},[t._v("提示：提现需扣除服务费"+t._s(t.widthDrawConfig.poundage_percent)+"%，请自行缴纳税款")])],1),a("v-uni-view",{staticClass:"withdraw-btn bg-primary lg white row-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.applyWithdrawFun(e.value)}}},[t._v("确认提现")]),a("v-uni-navigator",{staticClass:"mt20 nr lighter row-center",attrs:{url:"/bundle/pages/user_withdraw_code/user_withdraw_code","hover-class":"none"}},[t._v("提现记录")])]:t._e()],2)})),1)],1)],1)},r=[]},a8c7:function(t,e,a){"use strict";a.r(e);var i=a("a325"),n=a("b3cb");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c63c");var o=a("828b"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"733ed08a",null,!1,i["a"],void 0);e["default"]=s.exports},acc4:function(t,e,a){var i=a("bc6e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("d8c0381e",i,!0,{sourceMap:!1,shadowMode:!1})},b3cb:function(t,e,a){"use strict";a.r(e);var i=a("70b8"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},b503:function(t,e,a){"use strict";a.r(e);var i=a("3196"),n=a("d245");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("0060");var o=a("828b"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"6d37aae2",null,!1,i["a"],void 0);e["default"]=s.exports},bc6e:function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.uploader-container .upload-image-box[data-v-6d37aae2]{position:relative;margin-right:%?8?%;margin-bottom:%?8?%}.uploader-container .upload-image-box .close-icon[data-v-6d37aae2]{position:absolute;right:%?-20?%;top:%?-15?%;width:%?40?%;height:%?40?%;background-color:red;border-radius:50%;z-index:20}.uploader-container .uplader-upload[data-v-6d37aae2]{position:relative;width:%?160?%;height:%?160?%;background-color:#f7f8fa}.uploader-container .uplader-upload .uploader-input[data-v-6d37aae2]{position:absolute;width:100%;height:100%;overflow:hidden;opacity:0;top:0;left:0;z-index:10;cursor:pointer}.uploader-container .uplader-upload-slot[data-v-6d37aae2]{position:relative;min-width:%?160?%;min-height:%?160?%}.uploader-container .uplader-upload-slot .uploader-input[data-v-6d37aae2]{position:absolute;width:100%;height:100%;overflow:hidden;opacity:0;top:0;left:0;z-index:10;cursor:pointer}',""]),t.exports=e},c317:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uIcon:a("ab92").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:{"custom-image":!0,"image-round":t.round},style:[t.viewStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():a("v-uni-image",{staticClass:"image",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoaded.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrored.apply(void 0,arguments)}}}),t.loading&&t.showLoading?a("v-uni-view",{staticClass:"loading-wrap image"},[t.useLoadingSlot?t._t("loading"):a("u-icon",{attrs:{color:"#aaa",name:"photo-fill",size:"45"}})],2):t._e(),t.error&&t.showError?a("v-uni-view",{staticClass:"error-wrap image"},[t.useErrorSlot?t._t("error"):a("u-icon",{attrs:{color:"#aaa",name:"error-circle-fill",size:"45"}}),a("v-uni-text",{staticClass:"sm"},[t._v("加载失败")])],2):t._e()],1)},r=[]},c63c:function(t,e,a){"use strict";var i=a("403d"),n=a.n(i);n.a},d245:function(t,e,a){"use strict";a.r(e);var i=a("f6ed"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},dcc6:function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.custom-image[data-v-07bfc4b2]{position:relative;display:block;width:100%;height:100%}.custom-image.image-round[data-v-07bfc4b2]{overflow:hidden;border-radius:50%}.custom-image .image[data-v-07bfc4b2]{display:block;width:100%;height:100%}.custom-image .loading-wrap[data-v-07bfc4b2],\n.custom-image .error-wrap[data-v-07bfc4b2]{position:absolute;top:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#969799;font-size:%?28?%;background-color:#f7f8fa}',""]),t.exports=e},e8e1:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{src:{type:String},round:Boolean,width:{type:null},height:{type:null},radius:null,lazyLoad:{type:Boolean,default:!0},useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,mode:{type:String,default:"scaleToFill"},showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},customStyle:{type:Object,default:function(){}}},data:function(){return{error:!1,loading:!0,viewStyle:{}}},created:function(){this.setStyle()},methods:{setStyle:function(){var t=this.width,e=this.height,a=this.radius,i={};t&&(i.width=t),e&&(i.height=e),a&&(i["overflow"]="hidden",i["border-radius"]=a),this.viewStyle=i,this.customStyle&&(this.viewStyle=Object.assign(this.viewStyle,this.customStyle))},onLoaded:function(t){this.loading=!1,this.$emit("load",t.detail)},onErrored:function(t){this.error=!1,this.loading=!0,this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}},watch:{src:function(){this.error=!1,this.loading=!0},width:function(){this.setStyle()},height:function(){this.setStyle()}}};e.default=i},f0ff:function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.van-tabs .van-tabs__wrap[data-v-733ed08a]{border-radius:%?10?%}.van-tabs__line[data-v-733ed08a]{background:linear-gradient(90deg,#f79c0c,#ff2c3c);bottom:%?8?%!important;\n  /* width: 50rpx !important; */height:%?6?%!important;border-radius:%?100?%}.user-withdraw .user-tab-container[data-v-733ed08a]{padding:%?20?% %?30?%}.user-withdraw .user-tab-container[data-v-733ed08a]  .scroll-view-h{background-color:#fff}.user-withdraw .user-tab-container .withdraw-container[data-v-733ed08a]{padding:%?52?% %?72?%;border-radius:%?20?%}.user-withdraw .user-tab-container .withdraw-container .input[data-v-733ed08a]{border-bottom:1px solid #e5e5e5}.user-withdraw .user-tab-container .withdraw-container .input uni-input[data-v-733ed08a]{width:100%;height:%?94?%;text-align:left;font-size:%?66?%;margin-left:%?30?%}.user-withdraw .user-tab-container .withdraw-btn[data-v-733ed08a]{background:linear-gradient(80deg,#f95f2f,#ff2c3c);line-height:%?44?%;height:%?84?%;margin-top:%?30?%;border-radius:%?100?%}.user-withdraw .user-tab-container .form-container[data-v-733ed08a]{border-radius:%?20?%;padding:0 %?36?% %?26?%;line-height:%?36?%;margin-top:%?10?%}.user-withdraw .user-tab-container .form-container .input-item[data-v-733ed08a]{padding:%?28?% 0 %?30?%;border-bottom:1px solid #e5e5e5}.user-withdraw .user-tab-container .form-container .input-label[data-v-733ed08a]{width:%?200?%;text-align:left;line-height:%?36?%}.user-withdraw .user-tab-container .form-container uni-input[data-v-733ed08a]{flex:1}.user-withdraw .user-tab-container .form-container .uploader-container .upload-area[data-v-733ed08a]{width:%?160?%;height:%?160?%;border:%?4?% dashed #e5e5e5;border-radius:%?10?%}.user-withdraw .user-tab-container .form-container .uploader-container .upload-area uni-image[data-v-733ed08a]{width:%?54?%;height:%?44?%}',""]),t.exports=e},f6ed:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa");var i={name:"uploader",props:{fileList:{type:Array,default:function(){return[]}},mutiple:{type:Boolean,default:!1},maxUpload:{type:Number,default:1},previewSize:{type:String,default:"160rpx"},deletable:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1}},data:function(){return{}},create:function(){},methods:{handleImage:function(){var t=this;uni.chooseImage({count:this.mutiple?this.maxUpload:1,success:function(e){t.$emit("after-read",e.tempFiles)}})},deleteImage:function(t,e){this.$emit("delete",e)}}};e.default=i}}]);