(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{144:function(t,e,s){},188:function(t,e,s){"use strict";var i=s(144);s.n(i).a},197:function(t,e,s){"use strict";s.r(e);var i=s(112),o=s(113),l={data:function(){return{someList:[],someList1:[],options:{effect:"nest",pagination:!0,thresholdDistance:100,thresholdTime:300,grabCursor:!0,speed:300,loop:!0},options1:{effect:"nest",direction:"vertical",pagination:!0,thresholdDistance:100,thresholdTime:300,grabCursor:!0,speed:300,loop:!0}}},mounted:function(){var t=this;setTimeout(function(){t.someList=[{html:"slider1",style:{background:"#4abf8a"}}],t.someList1=[{html:"slider2-1",style:{background:"#4abf8a"}},{html:"slider2-2",style:{background:"#4bbfc3"}},{html:"slider3-3",style:{background:"#7baabe"}}]},1e3)},components:{slider:i.a,slideritem:o.a}},n=(s(188),s(20)),r=Object(n.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{width:"100%",height:"250px"}},[s("slider",{ref:"slider",attrs:{options:t.options}},[t._l(t.someList,function(e,i){return s("slideritem",{key:e.html,style:e.style},[t._v(t._s(e.html))])}),t._v(" "),s("slideritem",[s("slider",{ref:"slider",attrs:{options:t.options1}},t._l(t.someList1,function(e,i){return s("slideritem",{key:e.html,style:e.style},[t._v(t._s(e.html))])}),1)],1),t._v(" "),t._l(t.someList,function(e,i){return s("slideritem",{key:e.html+3,style:e.style},[t._v(t._s(e.html))])}),t._v(" "),s("div",{attrs:{slot:"loading"},slot:"loading"},[s("div",{staticClass:"loadingDot"},[s("i"),t._v(" "),s("i"),t._v(" "),s("i"),t._v(" "),s("i")])])],2)],1)},[],!1,null,"e0b7f03c",null);r.options.__file="sliderNest.vue";e.default=r.exports}}]);