(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{1669:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{historyArr:[]}},methods:{getHistory:function(){this.historyArr=t.getStorageSync("historyArr")},toDetail:function(n){t.navigateTo({url:"/pages/detail/detail?cid=".concat(this.historyArr[n].classid,"&id=").concat(this.historyArr[n].id)})}},onShow:function(){this.getHistory()}};n.default=e}).call(this,e("543d")["default"])},2680:function(t,n,e){"use strict";e.r(n);var r=e("1669"),i=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},5106:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var r={newsbox:function(){return e.e("components/newsbox/newsbox").then(e.bind(null,"9ab6"))}},i=function(){var t=this.$createElement,n=(this._self._c,this.historyArr.length);this.$mp.data=Object.assign({},{$root:{g0:n}})},o=[]},"523e":function(t,n,e){},"73da":function(t,n,e){"use strict";(function(t,n){var r=e("4ea4");e("a0b0");r(e("66fd"));var i=r(e("f458"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"9c89":function(t,n,e){"use strict";var r=e("523e"),i=e.n(r);i.a},f458:function(t,n,e){"use strict";e.r(n);var r=e("5106"),i=e("2680");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("9c89");var a=e("f0c5"),u=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=u.exports}},[["73da","common/runtime","common/vendor"]]]);