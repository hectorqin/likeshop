(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop_cart-shop_cart"],{"057b":function(t,n,e){"use strict";var i=e("3879"),a=e.n(i);a.a},"228b":function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.shop-cart .main[data-v-59dfd2ef]{padding-bottom:%?100?%}.shop-cart .cart-list .cart-item[data-v-59dfd2ef]{margin:%?20?% %?20?% 0;border-radius:%?10?%}.shop-cart .cart-list .select[data-v-59dfd2ef]{height:%?80?%;padding:0 %?20?%;border-bottom:1px solid #e5e5e5}.shop-cart .cart-null .btn[data-v-59dfd2ef]{border:1px solid #ff2c3c;width:%?184?%;margin-left:auto;margin-right:auto;padding:%?8?% %?24?%}.shop-cart .footer[data-v-59dfd2ef]{position:fixed;padding:0 %?24?%;width:100%;height:%?100?%;box-shadow:0 0 12px rgba(0,0,0,.1);bottom:var(--window-bottom);box-sizing:border-box;z-index:20}.shop-cart .footer .all-price[data-v-59dfd2ef]{text-align:right;flex:1}.shop-cart .footer .right-btn[data-v-59dfd2ef]{padding:%?13?% %?45?%;background:linear-gradient(90deg,#f95f2f,#ff2c3c)}.shop-cart .login[data-v-59dfd2ef]{height:calc(100vh - var(--window-bottom));background:#fff;text-align:center}.shop-cart .login .btn[data-v-59dfd2ef]{background-color:#09bb07;width:%?280?%;line-height:%?70?%;margin:%?40?% auto 0}.shop-cart .login .btn uni-image[data-v-59dfd2ef]{width:%?50?%;height:%?50?%}',""]),t.exports=n},3250:function(t,n,e){"use strict";e.r(n);var i=e("f936"),a=e("d9cd");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("9e65");var r=e("828b"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5f921626",null,!1,i["a"],void 0);n["default"]=o.exports},3879:function(t,n,e){var i=e("228b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("773ebfbc",i,!0,{sourceMap:!1,shadowMode:!1})},"39de":function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.u-numberbox[data-v-1d01409a]{display:inline-flex;align-items:center}.u-number-input[data-v-1d01409a]{position:relative;text-align:center;padding:0;margin:0 %?6?%;display:flex;flex-direction:row;align-items:center;justify-content:center}.u-icon-plus[data-v-1d01409a],\n.u-icon-minus[data-v-1d01409a]{width:%?60?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.u-icon-plus[data-v-1d01409a]{border-radius:0 %?8?% %?8?% 0}.u-icon-minus[data-v-1d01409a]{border-radius:%?8?% 0 0 %?8?%}.u-icon-disabled[data-v-1d01409a]{color:#c8c9cc!important;background:#f7f8fa!important}.u-input-disabled[data-v-1d01409a]{color:#c8c9cc!important;background-color:#f2f3f5!important}',""]),t.exports=n},"3b3a":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={customImage:e("2778").default,priceFormat:e("79d2").default,uNumberBox:e("e123").default,recommend:e("3250").default,uModal:e("240f").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"shop-cart"},[e("v-uni-view",{staticClass:"main",style:{"padding-bottom":1==t.cartType?"100rpx":0}},[t._l(t.cartLists,(function(n,i){return e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!(1!=t.cartType),expression:"!(cartType != 1)"}],key:i,staticClass:"cart-list mb20"},[e("v-uni-view",{staticClass:"cart-item bg-white",class:{invalid:0!=n.cart_status}},[0==n.cart_status?e("v-uni-view",{staticClass:"row-between select"},[e("v-uni-checkbox",{attrs:{value:n.cart_id+"",checked:1==n.selected},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changOneSelect(n.cart_id,n.selected)}}},[t._v("选择")]),e("v-uni-view",{attrs:{"data-cartid":n.cart_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDelPopup(n.cart_id)}}},[e("v-uni-image",{staticClass:"icon-xl",attrs:{src:"/static/images/icon_del.png"}})],1)],1):e("v-uni-view",{staticClass:"select row-between sm muted"},[t._v("已失效"),e("v-uni-view",{attrs:{"data-cartid":n.cart_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDelPopup(n.cart_id)}}},[e("v-uni-image",{staticClass:"icon-xl",attrs:{src:"/static/images/icon_del.png"}})],1)],1),e("v-uni-view",{staticClass:"row",staticStyle:{padding:"20rpx"},attrs:{"data-url":"/pages/goods_details/goods_details?id="+n.goods_id},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goPage.apply(void 0,arguments)}}},[e("custom-image",{staticClass:"goods-img mr20",attrs:{width:"180rpx",height:"180rpx",radius:"10rpx","lazy-load":!0,src:n.img}}),e("v-uni-view",{staticClass:"info",staticStyle:{flex:"1"}},[e("v-uni-view",{staticClass:"line2 nr"},[t._v(t._s(n.name))]),e("v-uni-view",{staticClass:"muted xs line1 mt10"},[t._v(t._s(n.spec_value_str))]),e("v-uni-view",{staticClass:"row-between mt20"},[e("v-uni-view",{staticClass:"price row primary"},[e("price-format",{attrs:{price:n.price,firstSize:32,secondSize:32,showSubscript:!0,subscriptSize:32}})],1),e("v-uni-view",{staticClass:"cartNum",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n)}}},[e("u-number-box",{attrs:{disabled:0!=n.cart_status,value:n.goods_num,min:1,max:n.item_stock},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.countChange(e,n.cart_id,n)}}})],1)],1)],1)],1)],1)],1)})),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!(2!=t.cartType),expression:"!(cartType != 2)"}],staticClass:"cart-null column-center bg-white mb20",staticStyle:{padding:"80rpx 0 50rpx"}},[e("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/cart_null.png"}}),e("v-uni-view",{staticClass:"muted mb20"},[t._v("购物车暂无任何商品~")]),e("v-uni-navigator",{staticClass:"primary br60 btn row-center",attrs:{"open-type":"switchTab",url:"/pages/index/index","hover-class":"none"}},[t._v("去逛逛")])],1),t.isLogin?t._e():e("v-uni-view",{staticClass:"login column-center"},[e("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/cart_null.png"}}),e("v-uni-view",{staticClass:"muted mt20"},[t._v("登录后才能查看购物车哦")]),e("v-uni-navigator",{staticClass:"white br60 row-center btn",attrs:{url:"/pages/login/login"}},[e("v-uni-text",[t._v("去登录")])],1)],1),t.isShow?e("recommend"):t._e()],2),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!(1!=t.cartType),expression:"!(cartType != 1)"}],staticClass:"footer row bg-white"},[e("v-uni-checkbox-group",{staticClass:"row",on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.changeAllSelect.apply(void 0,arguments)}}},[e("v-uni-checkbox",{attrs:{id:"checkAll",value:"all",checked:t.isSelectedAll}}),e("v-uni-label",{staticClass:"ml10",attrs:{for:"checkAll"}},[t._v("全选")])],1),e("v-uni-view",{staticClass:"all-price lg mr20 row-end"},[e("v-uni-view",[t._v("合计：")]),e("v-uni-view",{staticClass:"primary"},[t._v("￥"+t._s(t.totalPrice||0))])],1),e("v-uni-view",{staticClass:"right-btn br60 white",style:" "+(t.nullSelect?"background: #d7d7d7":""),on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToConfirm.apply(void 0,arguments)}}},[t._v("去结算")])],1),e("u-modal",{attrs:{showCancelButton:!0,"comfirm-text":"狠心删除","confirm-color":"#FF2C3C","show-title":!1},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.goodsDelete.apply(void 0,arguments)},cancel:function(n){arguments[0]=n=t.$handleEvent(n),t.changeDelPopup.apply(void 0,arguments)}},model:{value:t.delPopup,callback:function(n){t.delPopup=n},expression:"delPopup"}},[e("v-uni-view",{staticClass:"column-center tips-dialog",staticStyle:{"padding-top":"40rpx"}},[e("v-uni-image",{staticClass:"icon-lg",attrs:{src:"/static/images/icon_warning.png"}}),e("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[t._v("确认删除该商品吗？")])],1)],1)],1)},s=[]},"4d33":function(t,n,e){"use strict";(function(t){e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("64aa"),e("5c47"),e("0506"),e("5ef2"),e("c9b5"),e("bf0f"),e("ab80");var i={name:"u-number-box",props:{value:{type:Number,default:1},bgColor:{type:String,default:"#F2F3F5"},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:26},color:{type:String,default:"#323233"},inputWidth:{type:[Number,String],default:80},inputHeight:{type:[Number,String],default:50},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100},longPress:{type:Boolean,default:!0},pressTime:{type:[Number,String],default:250},positiveInteger:{type:Boolean,default:!0}},watch:{value:function(n,e){if(t.log(n,e),!this.changeFromInner){if(this.inputVal==n)return;this.inputVal=n,this.$nextTick((function(){this.changeFromInner=!1}))}},inputVal:function(t,n){var e=this;if(""!=t){var i=0,a=this.$u.test.number(t);i=a&&t>=this.min&&t<=this.max?t:n,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(i=n,this.$nextTick((function(){e.inputVal=n}))),this.isFistVal||this.handleChange(i,"change")}}},data:function(){return{inputVal:1,timer:null,changeFromInner:!1,innerChangeTimer:null,isFistVal:!0}},created:function(){this.inputVal=Number(this.value),this.isFistVal=!1},computed:{getCursorSpacing:function(){return Number(uni.upx2px(this.cursorSpacing))}},methods:{btnTouchStart:function(t){var n=this;this[t](),this.longPress&&(clearInterval(this.timer),this.timer=null,this.timer=setInterval((function(){n[t]()}),this.pressTime))},clearTimer:function(){var t=this;this.$nextTick((function(){clearInterval(t.timer),t.timer=null}))},minus:function(){this.computeVal("minus")},plus:function(){this.computeVal("plus")},calcPlus:function(t,n){var e,i,a;try{i=t.toString().split(".")[1].length}catch(r){i=0}try{a=n.toString().split(".")[1].length}catch(r){a=0}e=Math.pow(10,Math.max(i,a));var s=i>=a?i:a;return((t*e+n*e)/e).toFixed(s)},calcMinus:function(t,n){var e,i,a;try{i=t.toString().split(".")[1].length}catch(r){i=0}try{a=n.toString().split(".")[1].length}catch(r){a=0}e=Math.pow(10,Math.max(i,a));var s=i>=a?i:a;return((t*e-n*e)/e).toFixed(s)},computeVal:function(t){if(uni.hideKeyboard(),!this.disabled){var n=0;"minus"===t?n=this.calcMinus(this.inputVal,this.step):"plus"===t&&(n=this.calcPlus(this.inputVal,this.step)),n<this.min||n>this.max||(this.inputVal=n,this.handleChange(n,t))}},onBlur:function(t){var n=this,e=0,i=t.detail.value;/(^\d+$)/.test(i)&&0!=i[0]||(e=this.min),e=+i,e>this.max?e=this.max:e<this.min&&(e=this.min),this.$nextTick((function(){n.inputVal=e})),this.handleChange(e,"blur")},onFocus:function(){this.$emit("focus")},handleChange:function(t,n){var e=this;this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((function(){e.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit(n,{value:Number(t),index:this.index}))}}};n.default=i}).call(this,e("ba7c")["default"])},"63f5":function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* components/recommend/recommend.wxss */.recommend[data-v-5f921626]{padding-bottom:%?50?%}.recommend .header .title[data-v-5f921626]{width:%?468?%;height:%?45?%;margin:%?10?% 0}.recommend .goods-title[data-v-5f921626]{height:%?100?%}.recommend .goods-title .line[data-v-5f921626]{width:%?58?%;height:1px;background-color:#ccc;margin:0 %?22?%}.recommend .goods-title uni-image[data-v-5f921626]{width:%?38?%;height:%?38?%}",""]),t.exports=n},"75f6":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={uIcon:e("ab92").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"u-numberbox"},[e("v-uni-view",{staticClass:"u-icon-minus",class:{"u-icon-disabled":t.disabled||t.inputVal<=t.min},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.btnTouchStart("minus")},touchend:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.clearTimer.apply(void 0,arguments)}}},[e("u-icon",{attrs:{name:"minus",size:t.size}})],1),e("v-uni-input",{staticClass:"u-number-input",class:{"u-input-disabled":t.disabled},style:{color:t.color,fontSize:t.size+"rpx",background:t.bgColor,height:t.inputHeight+"rpx",width:t.inputWidth+"rpx"},attrs:{disabled:t.disabledInput||t.disabled,"cursor-spacing":t.getCursorSpacing,type:"number"},on:{blur:function(n){arguments[0]=n=t.$handleEvent(n),t.onBlur.apply(void 0,arguments)},focus:function(n){arguments[0]=n=t.$handleEvent(n),t.onFocus.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(n){t.inputVal=n},expression:"inputVal"}}),e("v-uni-view",{staticClass:"u-icon-plus",class:{"u-icon-disabled":t.disabled||t.inputVal>=t.max},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.btnTouchStart("plus")},touchend:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.clearTimer.apply(void 0,arguments)}}},[e("u-icon",{attrs:{name:"plus",size:t.size}})],1)],1)},s=[]},"7acb":function(t,n,e){var i=e("39de");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("4e060a90",i,!0,{sourceMap:!1,shadowMode:!1})},"7f34":function(t,n,e){"use strict";var i=e("7acb"),a=e.n(i);a.a},"9e65":function(t,n,e){"use strict";var i=e("dcfa"),a=e.n(i);a.a},a8c8:function(t,n,e){"use strict";e.r(n);var i=e("b725"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},b725:function(t,n,e){"use strict";(function(t){e("6a54");var i=e("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("bd06"),e("fd3c"),e("bf0f"),e("2797"),e("aa9c"),e("d4b5");var a=i(e("9b1b")),s=e("3431"),r=(e("04d9"),e("8f59")),o=(i(e("adaf")),e("a30b")),c={data:function(){return{cartType:0,isShow:!1,cartLists:[],delPopup:!1,totalPrice:""}},components:{},computed:(0,a.default)((0,a.default)({},(0,r.mapGetters)(["cartNum"])),{},{nullSelect:function(){var t=this.cartLists.findIndex((function(t){return 1==t.selected&&0==t.cart_status}));return-1==t},isSelectedAll:function(){var t=this.cartLists.findIndex((function(t){return 0==t.selected&&0==t.cart_status}));return-1==t}}),onLoad:function(){(0,o.setTabbar)()},onShow:function(){this.isLogin&&this.getCartListFun()},onPullDownRefresh:function(){this.getCartListFun()},methods:(0,a.default)((0,a.default)({},(0,r.mapActions)(["getCartNum"])),{},{goodsDelete:function(){var t=this;this.delPopup=!1,(0,s.deleteGoods)({cart_id:this.cartId}).then((function(n){1==n.code&&t.getCartListFun()}))},changeDelPopup:function(t){t&&(this.cartId=t),this.delPopup=!this.delPopup},getCartListFun:function(){var t=this;(0,s.getCartList)().then((function(n){if(uni.stopPullDownRefresh({success:function(t){}}),1==n.code){var e=n.data,i=e.lists,a=e.total_amount,s=0;s=0==i.length?2:1,t.cartLists=i,t.cartType=s,t.totalPrice=a,t.isShow=!0,t.getCartNum()}}))},changOneSelect:function(t,n){n=!n,this.changeCartSelectFun([t],n)},changeAllSelect:function(){var n=this.isSelectedAll,e=this.cartLists;t.log(e,"###");var i=e.map((function(t){return t.cart_id}));this.changeCartSelectFun(i,!n)},changeCartSelectFun:function(n,e){var i=this;t.log("selected ",e),(0,s.changeCartSelect)({cart_id:n,selected:e?1:0}).then((function(t){1==t.code&&i.getCartListFun()}))},countChange:function(n,e,i){var a=this,r=n.value;t.log("countChange",r,e,i),(0,s.changeGoodsCount)({cart_id:e,goods_num:r}).then((function(t){t.code,a.getCartListFun()}))},goToConfirm:function(){var t=this.cartLists,n=[];if(t.forEach((function(t){t.selected&&0==t.cart_status&&n.push({item_id:t.item_id,num:t.goods_num})})),0==n.length)return this.$toast({title:"您还没有选择商品哦"});uni.navigateTo({url:"/pages/confirm_order/confirm_order?data="+encodeURIComponent(JSON.stringify({goods:n,type:"cart"}))})},goPage:function(t){var n=t.currentTarget.dataset.url;uni.navigateTo({url:n})}})};n.default=c}).call(this,e("ba7c")["default"])},b767:function(t,n,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("3431"),s=i(e("5ecb")),r={data:function(){return{goodsList:[]}},components:{goodsList:s.default},props:{},beforeMount:function(){this.getBestListFun()},destroyed:function(){},methods:{getBestListFun:function(){var t=this;(0,a.getBestList)({page_no:1,page_size:6}).then((function(n){1==n.code&&(t.goodsList=n.data.list)}))}}};n.default=r},d9cd:function(t,n,e){"use strict";e.r(n);var i=e("b767"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},dcfa:function(t,n,e){var i=e("63f5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("fb736428",i,!0,{sourceMap:!1,shadowMode:!1})},e123:function(t,n,e){"use strict";e.r(n);var i=e("75f6"),a=e("e6b4");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("7f34");var r=e("828b"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1d01409a",null,!1,i["a"],void 0);n["default"]=o.exports},e4b7:function(t,n,e){"use strict";e.r(n);var i=e("3b3a"),a=e("a8c8");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("057b");var r=e("828b"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"59dfd2ef",null,!1,i["a"],void 0);n["default"]=o.exports},e6b4:function(t,n,e){"use strict";e.r(n);var i=e("4d33"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},f936:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={goodsList:e("5ecb").default},a=function(){var t=this.$createElement,n=this._self._c||t;return this.goodsList.length?n("v-uni-view",{staticClass:"recommend"},[n("v-uni-view",{staticClass:"goods-title row-center"},[n("v-uni-text",{staticClass:"line"}),n("v-uni-view",{staticClass:"row"},[n("v-uni-image",{staticClass:"mr10",attrs:{src:"/static/images/icon_like.png"}}),n("v-uni-text",{staticClass:"bold xxl"},[this._v("好物优选")])],1),n("v-uni-text",{staticClass:"line"})],1),n("goods-list",{attrs:{list:this.goodsList}})],1):this._e()},s=[]}}]);