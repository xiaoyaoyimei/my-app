(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"searchFocus",function(){return j}),e.d(r,"searchBlur",function(){return w}),e.d(r,"mouseLeave",function(){return L}),e.d(r,"mouseEnter",function(){return y}),e.d(r,"changePage",function(){return k}),e.d(r,"getList",function(){return S});var a={};e.r(a),e.d(a,"SEARCH_FOUCE",function(){return I}),e.d(a,"SEARCH_BLUR",function(){return C}),e.d(a,"GET_LIST",function(){return U}),e.d(a,"MOUSE_LEAVE",function(){return M}),e.d(a,"MOUSE_ENTER",function(){return G}),e.d(a,"CHANGE_PAGE",function(){return H});var o={};e.r(o),e.d(o,"getHomeInfo",function(){return Wt}),e.d(o,"getMoreList",function(){return Jt}),e.d(o,"toggleTopShow",function(){return Qt});var i={};e.r(i),e.d(i,"logout",function(){return hn}),e.d(i,"login",function(){return bn});var c=e(0),u=e.n(c),l=e(18),s=e.n(l),d=e(6),p=e(7),f=e(9),g=e(8),h=e(10),b=e(50),m=e.n(b),E=e(51),x=e(11),A=Object(x.fromJS)({focused:!1,list:[],page:1,mouseIn:!1,totalPage:1}),v=e(17),O=e.n(v),j=function(){return{type:a.SEARCH_FOUCE}},w=function(){return{type:a.SEARCH_BLUR}},L=function(){return{type:a.MOUSE_LEAVE}},y=function(){return{type:a.MOUSE_ENTER}},k=function(t){return{type:a.CHANGE_PAGE,page:t}},S=function(){return function(t){O.a.get("/api/test").then(function(n){var e=n.data;t(function(t){return{type:a.GET_LIST,data:t,page:1,totalPage:Math.ceil(t.length/5)}}(e))}).catch(function(){console.log("error")})}},I="header/SEARCH_FOUCE",C="header/SEARCH_BLUR",U="header/GET_LIST",M="header/MOUSE_LEAVE",G="header/MOUSE_ENTER",H="header/CHANGE_PAGE",N=e(2),F=e(3),P=e(52),q=e.n(P);function T(){var t=Object(N.a)(["{\npadding: 2px 6px;\n\nfont-size: 12px;\n\ncolor: #787878;\n\nborder: 1px solid #ddd;\n\nborder-radius: 3px;\ndisplay:inline-block;\nmargin:15px 10px 0 0;\ncursor:pointer;\n&:hover{\n\tcolor:#454545;\n\tborder-color:#787878\n}\n}"]);return T=function(){return t},t}function B(){var t=Object(N.a)(["{\n\tfloat:right\n\t.spin{\n\t\tdisplay:block;\n\t\tfloat:left;\n\t\tfont-size:12px;\n\t\tmargin-right:2px;\n\t\ttransition:all .2s ease-in;\n\t\ttransform-origin:center center;\n\t}\n}"]);return B=function(){return t},t}function R(){var t=Object(N.a)(["{\n\t\tbackground:#fff;\nposition: absolute;\nleft: 0;\ntop: 56px;\nwidth: 200px;\npadding: 20px 20px 10px;\nborder: 1px solid #f0f0f0;\nborder-radius: 3px;\n}"]);return R=function(){return t},t}function D(){var t=Object(N.a)(["{\n\n\tposition:relative;\n\tfloat:left;\n\tmargin-left:20px;\n\t.zoom{\n\t\tposition:absolute;\n\t\tright:10px;\n\t\ttop:15px;\n\t\twidth: 30px;\n    height: 30px;\n    border-radius: 30px;\n        line-height: 30px;\n\t\t &.focused{\n\t\tbackground: #8d8d8d;\n    \n    text-align: center;\n\n\t};\n\t}\n}"]);return D=function(){return t},t}function V(){var t=Object(N.a)(["{\n\t    padding: 6px 12px;\n    cursor: pointer;\n    background: none;\n        text-align: center;\n    vertical-align: middle;\n    border:0 none;\n        height: 40px;\n    line-height: 24px;\n    &.sign-up{\n    margin: 9px 5px 0 15px;\n    border: 1px solid rgba(236,97,73,.7);\n    border-radius: 20px;\n    font-size: 15px;\n    color: #ea6f5a;\n    width:85px;\n    }\n    &.write-btn{\n    \tfloat: right;\n    width: 100px;\n    margin: 8px 15px 0;\n    border-radius: 20px;\n    font-size: 15px;\n    color: #fff;\n    background-color: #ea6f5a;}\n}"]);return V=function(){return t},t}function z(){var t=Object(N.a)(["{\n\tposition:absolute;\n\tright:0;\n\ttop:0\n}"]);return z=function(){return t},t}function Z(){var t=Object(N.a)(["\n    padding: 0 40px 0 20px;\n    width: 160px;\n    height: 38px;\n    font-size: 14px;\n    border: 1px solid #eee;\n    border-radius: 40px;\n    background: #eee;\n    margin-top:9px;\n    transition: width .5s;\n    &::placeholder{\n    \tcolor:#999;\n    }\n    &.focused{\n\t\twidth:240px\n\t};\n\t\t&.slide-enter{\n\t\twidth:160px\n\t\ttransition:all .2s ease-out\n\t}\n\t&.slide-enter-active{\n\t\t\twidth:240px;\n\t}\n\t\t&.slide-exit{\n\t\ttransition:all .2s ease-out\n\t}\n\t&.slide-exit-active{\n\t\t\twidth:160px;\n\t}\n"]);return Z=function(){return t},t}function W(){var t=Object(N.a)(["\n\t    padding: 0px 15px;\n    color: #333;\n    font-size: 17px;\n    line-height: 56px;\n\t&.left{\n\t\tdisplay:inline-block;\n\t}\n\t&.right{\n\t\tfloat:right\n\t\tcolor:#969696;\n\t}\n\t&.active{\n\t\tcolor:#ea6f5a\n\t}\n\t\n"]);return W=function(){return t},t}function J(){var t=Object(N.a)(["\n\twidth:960px;\n\tmargin:0 auto;\n\theight:100%;\n"]);return J=function(){return t},t}function Q(){var t=Object(N.a)(["\n\theight:56px;\n\twidth:100px;\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\tbackground:url(",");\n\tbackground-size:contain;\n"]);return Q=function(){return t},t}function _(){var t=Object(N.a)(["\n\theight:56px;\n\tborder-bottom:1px solid #f0f0f0;\n"]);return _=function(){return t},t}var X=F.b.div(_()),Y=F.b.div(Q(),q.a),K=F.b.div(J()),$=F.b.div(W()),tt=F.b.input.attrs({placeholder:"\u641c\u7d22"})(Z()),nt=F.b.div(z()),et=F.b.button(V()),rt=F.b.div(D()),at=F.b.div(R()),ot=F.b.span(B()),it=F.b.a(T()),ct=e(14),ut=e(111),lt=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(p.a)(n,[{key:"getListArea",value:function(){var t=this,n=this.props,e=n.focused,r=n.list,a=n.page,o=n.totalPage,i=n.mouseIn,c=n.handleMouseLeave,l=n.handleMouseEnter,s=n.handleChangePage,d=[];if(r.length>0)for(var p=5*(a-1);p<5*a;p++)d.push(u.a.createElement(it,{key:r[p].name},r[p].name));return e||i?u.a.createElement(at,{onMouseLeave:c,onMouseEnter:l},u.a.createElement("h6",null,"\u70ed\u95e8\u641c\u7d22",u.a.createElement(ot,{onClick:function(){return s(a,o,t.spinIcon)}},u.a.createElement("i",{ref:function(n){t.spinIcon=n},className:"iconfont spin"},"\ue851"),"\u6362\u4e00\u6279")),d):null}},{key:"render",value:function(){var t=this.props,n=t.focused,e=t.handleInputFocus,r=t.handleInputBlur,a=t.list,o=t.login;return u.a.createElement(X,null,u.a.createElement(ut.a,{to:"/"},u.a.createElement(Y,null)),u.a.createElement(K,null,u.a.createElement($,{className:"left active"},u.a.createElement(ut.a,{to:"/"},"\u9996\u9875")),u.a.createElement($,{className:"left"},"\u4e0b\u8f7d"),o?u.a.createElement($,{className:"right"},"\u9000\u51fa"):u.a.createElement(ut.a,{to:"/login"},u.a.createElement($,{className:"right"},"\u767b\u5f55")," "),u.a.createElement($,{className:"right"},u.a.createElement("i",{className:"iconfont "},"\ue636")),u.a.createElement(rt,null,u.a.createElement(E.CSSTransition,{in:n,classNames:"slide",timeout:200},u.a.createElement(tt,{onFocus:function(){return e(a)},onBlur:r,className:n?"focused ":""})),u.a.createElement("i",{className:n?"focused iconfont zoom":"iconfont zoom"},"\ue637"),this.getListArea(n)),u.a.createElement(nt,null,u.a.createElement(et,{className:"sign-up"},"\u6ce8\u518c"),u.a.createElement(et,{className:"write-btn"},u.a.createElement("i",{className:"iconfont"},"\ue615"),"\u5199\u6587\u7ae0"))))}},{key:"componentDidMount",value:function(){}}]),n}(c.Component),st=Object(ct.b)(function(t){return{focused:t.get("header").get("focused"),mouseIn:t.get("header").get("mouseIn"),list:t.getIn(["header","list"]),page:t.getIn(["header","page"]),totalPage:t.getIn(["header","totalPage"]),login:t.getIn(["login","login"])}},function(t){return{handleInputFocus:function(n){0===n.size&&t(r.getList()),t(r.searchFocus())},handleInputBlur:function(){t(r.searchBlur())},handleMouseLeave:function(){t(r.mouseLeave())},handleMouseEnter:function(){t(r.mouseEnter())},handleChangePage:function(n,e,a){var o=a.style.transform.replace(/[^0-9]/gi,"");o=o?parseInt(o,10):0,a.style.transform="rotate("+(o+360)+"deg)",t(n<e?r.changePage(n+1):r.changePage(1))}}})(lt);function dt(){var t=Object(N.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"]);return dt=function(){return t},t}var pt=Object(F.a)(dt());function ft(){var t=Object(N.a)(["\n@font-face {font-family: \"iconfont\";\n  src: url('./iconfont.eot?t=1550556747061'); /* IE9 */\n  src: url('./iconfont.eot?t=1550556747061#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQYAAsAAAAACGQAAAPMAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqEBINYATYCJAMUCwwABCAFhG0HTxtjBxGVnGHIPg7jmPCJgcpDVLFqdPfgedSZ70ty6tqHPF0JKS4zjMCQlGEiztW0fXE3GLHCpMof//GU5q7sXU8ymw1V4zQO4xASdDfomLq0CeTZ21yiWjNpTQE4HtDAItIKZKABMlHfQ7zVpR32YQjgkEFepGr1uk2xMdBRAkjvHt06YKcsmJp8wUbwlSw0yHwsbDVDXQHm+d+XjxQWGxSWhk5s2LVaZyq+iX/XSI8Pjae1S0E6ngvgl4EG8gIGpGeppzM6jORF46iphpKAbfZT8Cb+TYl3jUIhZBSX7UVc+5fnABqFQUB8UE0YMCtGDbyJtwk0vClOoOBNCQID7xrJ7iPXAsCBrFXAeygrjYcoDAoVHW3b8W5kUkLYsKZH73LnTlNp2kyCQW9CwO9Ppo2/28g7FpBuQaTjD2vq9HJbtFyaIVYnXXc47M4CR5wTzsxrMsHzJvgXlr3Ys53xO9xZp0U8r1sBb8IEx790MU3jOjdbnules/lSSkKrlaku0Vu1a//ebBcH7+Yd5T8elEDAP1HXu3ebzQpWaLZk1q4JA2cTJUUFWwQCf47ctHhcYFAlNW3Pnmmq4jj6VsWj5u9fc7RVlQ1/JqYaQ61eixNda9zMWfVml4iQqhLoWb5BM1W5Y4/yQfOn/KDBZ0sWEKtS/n65/D3C27h1KpZ+1dYbfDk5/k9Ktk/ZMvgXtra/Oj6r6K0omV6fKAlvH5v89umM3bUerhqwL+05MclN2J3yVatIyw0/eq7J0+pVj69fjVLzE9729c09uLJeceXKCkepOateEU+uPDj3m337dqZfpP/dthu5adNIVCp065EaRZ4QelISgFBIn9A+Z4JuocfE7unNOuO3/4ZP+8qKdpFlDb7ZrgHg3oLjdaAgNN6gx8O/k7aW/mRpyzqjyanVMkq1LVG8FgUTo1CAgwP83ATE8DmOL55N7BJsQQpQZCEdGptMqmHmhYVLUfiwqQCHPAzLXWIh9ojJCuTmhUCI4hWKCI5DE8U71TA/YJHAP3xEiYaDX2I3dMkuPUQVQsloQD1C0NNoLTuLIP8U3ZolJeU++xJpCX7o6jYbH3BEGmPKcud6ZguWpgJHchzmPMFMU0TNtWeeD01jy55U66lsBFUgEAmDGADFI0BAMzFi3daMyH3+FMSxkpFQTU1V8BKEWAidAx01bQvqoBlb1VxL94U7HD0MY5lhFmKiABzBhWQzMgHM5f0iiIap8T1CMwcabGbbaur5deUZtwEOdDdLlGgxYokPM2gO466SPLmByZX2qFMYRVc5OiNjcM2bDQ==') format('woff2'),\n  url('./iconfont.woff?t=1550556747061') format('woff'),\n  url('./iconfont.ttf?t=1550556747061') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('./iconfont.svg?t=1550556747061#iconfont') format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return ft=function(){return t},t}var gt=Object(F.a)(ft()),ht=e(115),bt=e(116),mt=e(112),Et=e(114);function xt(){var t=Object(N.a)(["\n\tposition: fixed;\n\tright: 100px;\n\tbottom: 100px;\n\twidth: 60px;\n\theight: 60px;\n\tline-height: 60px;\n\ttext-align: center;\n\tborder: 1px solid #ccc;\n\tfont-size: 14px;\n"]);return xt=function(){return t},t}function At(){var t=Object(N.a)(["\n\twidth: 100%;\n\theight: 40px;\n\tline-height: 40px;\n\tmargin: 30px 0;\n\tbackground: #a5a5a5;\n\ttext-align:center;\n\tborder-radius: 20px;\n\tcolor: #fff;\n\tcursor: pointer;\n"]);return At=function(){return t},t}function vt(){var t=Object(N.a)(["\n\twidth: 278px;\n\tborder: 1px solid #dcdcdc;\n\tborder-radius: 3px;\n\theight: 300px;\n\tline-height: 300px;\n\ttext-align: center;\n"]);return vt=function(){return t},t}function Ot(){var t=Object(N.a)(["\n\twidth: 280px;\n\theight: 50px;\n\tbackground: url(",");\n\tbackground-size: contain;\n"]);return Ot=function(){return t},t}function jt(){var t=Object(N.a)(["\n\tmargin: 30px 0;\n\twidth: 280px;\n"]);return jt=function(){return t},t}function wt(){var t=Object(N.a)(["\n\twidth: 500px;\n\tfloat: left;\n\t.title {\n\t\tline-height: 27px;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t\tcolor: #333;\n\t}\n\t.desc {\n\t\tline-height: 24px;\n\t\tfont-size: 13px;\n\t\tcolor: #999;\n\t}\n"]);return wt=function(){return t},t}function Lt(){var t=Object(N.a)(["\n\toverflow: hidden;\n\tpadding: 20px 0;\n\tborder-bottom: 1px solid #dcdcdc;\n\t.pic {\n\t\tdisplay: block;\n\t\twidth: 125px;\n\t\theight: 100px;\n\t\tfloat: right;\n\t\tborder-radius: 10px;\n\t}\n"]);return Lt=function(){return t},t}function yt(){var t=Object(N.a)(["\n\tfloat: left;\n\theight: 32px;\n\tline-height: 32px;\n\tmargin-left: 18px;\n\tmargin-bottom: 18px;\n\tpadding-right: 10px\n\tbackground: #f7f7f7;\n\tfont-size: 14px;\n\tcolor: #000;\n\tborder: 1px solid #dcdcdc;\n\tborder-radius: 4px;\n\t.topic-pic {\n\t\tdisplay: block;\n\t\tfloat: left;\n\t\twidth: 32px;\n\t\theight: 32px;\n\t\tmargin-right: 10px;\n\t}\n"]);return yt=function(){return t},t}function kt(){var t=Object(N.a)(["\n\toverflow: hidden;\n\tpadding: 20px 0 10px 0;\n\tmargin-left: -18px;\n\tborder-bottom: 1px solid #dcdcdc;\n"]);return kt=function(){return t},t}function St(){var t=Object(N.a)(["\n\twidth: 280px;\n\tfloat: right;\n"]);return St=function(){return t},t}function It(){var t=Object(N.a)(["\n\tfloat: left;\n\tmargin-left: 15px;\n\tpadding-top: 30px;\n\twidth: 625px;\n\t.banner-img {\n\t\twidth: 625px;\n\t\theight: 270px;\n\t}\n"]);return It=function(){return t},t}function Ct(){var t=Object(N.a)(["\n\toverflow: hidden;\n\twidth: 960px;\n\tmargin: 0 auto;\n"]);return Ct=function(){return t},t}var Ut=F.b.div(Ct()),Mt=F.b.div(It()),Gt=F.b.div(St()),Ht=F.b.div(kt()),Nt=F.b.div(yt()),Ft=F.b.div(Lt()),Pt=F.b.div(wt()),qt=F.b.div(jt()),Tt=F.b.div(Ot(),function(t){return t.imgUrl}),Bt=F.b.div(vt()),Rt=F.b.div(At()),Dt=F.b.div(xt()),Vt=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(p.a)(n,[{key:"render",value:function(){var t=this.props.list;return u.a.createElement(Ht,null,t.map(function(t){return u.a.createElement(Nt,{key:t.get("id")},u.a.createElement("img",{className:"topic-pic",src:t.get("imgUrl"),alt:""}),t.get("title"))}))}}]),n}(c.PureComponent),zt=Object(ct.b)(function(t){return{list:t.getIn(["home","topicList"])}},null)(Vt),Zt=Object(x.fromJS)({topicList:[],articleList:[],recommendList:[],articlePage:1,showScroll:!1}),Wt=function(){return function(t){O.a.get("api/home.json").then(function(n){var e=n.data.data;t(function(t){return{type:"home/CHANGE_HOME_DATA",topicList:t.topicList,articleList:t.articleList,recommendList:t.recommendList}}(e))})}},Jt=function(t){return function(n){O.a.get("api/homeList.json?page="+t).then(function(e){var r,a,o=e.data.data;n((r=o,a=t+1,{type:"home/ADD_ARTICLE_LIST",list:Object(x.fromJS)(r),nextPage:a}))})}},Qt=function(t){return{type:"home/TOGGLE_SCROLL_TOP",show:t}},_t=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(p.a)(n,[{key:"render",value:function(){var t=this.props,n=t.list,e=t.getMoreList,r=t.page;return u.a.createElement("div",null,n.map(function(t,n){return u.a.createElement(ut.a,{key:n,to:"/detail/"+t.get("id")},u.a.createElement(Ft,null,u.a.createElement("img",{alt:"",className:"pic",src:t.get("imgUrl")}),u.a.createElement(Pt,null,u.a.createElement("h3",{className:"title"},t.get("title")),u.a.createElement("p",{className:"desc"},t.get("desc")))))}),u.a.createElement(Rt,{onClick:function(){return e(r)}},"\u66f4\u591a\u6587\u5b57"))}}]),n}(c.PureComponent),Xt=Object(ct.b)(function(t){return{list:t.getIn(["home","articleList"]),page:t.getIn(["home","articlePage"])}},function(t){return{getMoreList:function(n){t(o.getMoreList(n))}}})(_t),Yt=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(p.a)(n,[{key:"render",value:function(){return u.a.createElement(qt,null,this.props.list.map(function(t){return u.a.createElement(Tt,{imgUrl:t.get("imgUrl"),key:t.get("id")})}))}}]),n}(c.PureComponent),Kt=Object(ct.b)(function(t){return{list:t.getIn(["home","recommendList"])}},null)(Yt),$t=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(p.a)(n,[{key:"render",value:function(){return u.a.createElement(Bt,null,"HomeWork")}}]),n}(c.PureComponent),tn=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(p.a)(n,[{key:"handleScrollTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return u.a.createElement(Ut,null,u.a.createElement(Mt,null,u.a.createElement("img",{className:"banner-img",alt:"",src:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"}),u.a.createElement(zt,null),u.a.createElement(Xt,null)),u.a.createElement(Gt,null,u.a.createElement(Kt,null),u.a.createElement($t,null)),this.props.showScroll?u.a.createElement(Dt,{onClick:this.handleScrollTop},"\u9876\u90e8"):null)}},{key:"componentDidMount",value:function(){this.props.changeHomeData(),this.bindEvents()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.changeScrollTopShow)}},{key:"bindEvents",value:function(){window.addEventListener("scroll",this.props.changeScrollTopShow)}}]),n}(c.PureComponent),nn=Object(ct.b)(function(t){return{showScroll:t.getIn(["home","showScroll"])}},function(t){return{changeHomeData:function(){t(o.getHomeInfo())},changeScrollTopShow:function(){document.documentElement.scrollTop>100?t(o.toggleTopShow(!0)):t(o.toggleTopShow(!1))}}})(tn),en=e(56),rn=e.n(en)()({loader:function(){return e.e(1).then(e.bind(null,113))},loading:function(){return u.a.createElement("div",null,"\u6b63\u5728\u52a0\u8f7d")}}),an=function(){return u.a.createElement(rn,null)};function on(){var t=Object(N.a)(["\n\twidth: 220px;\n\theight: 30px;\n\tline-height: 30px;\n\tcolor: #fff;\n\tbackground: #3194d0;\n\tborder-radius: 15px;\n\tmargin: 10px auto;\n\ttext-align: center;\n"]);return on=function(){return t},t}function cn(){var t=Object(N.a)(["\n\tdisplay: block;\n\twidth: 200px;\n\theight: 30px;\n\tline-height: 30px;\n\tpadding: 0 10px;\n\tmargin: 10px auto;\n\tcolor: #777;\n"]);return cn=function(){return t},t}function un(){var t=Object(N.a)(["\n\twidth: 400px;\n\theight: 180px;\n\tmargin: 100px auto;\n\tpadding-top: 20px;\n\tbackground: #fff;\n\tbox-shadow: 0 0 8px rgba(0,0,0,.1);\n"]);return un=function(){return t},t}function ln(){var t=Object(N.a)(["\n\tz-index: 0;\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttop: 56px;\n\tbackground: #eee;\n"]);return ln=function(){return t},t}var sn=F.b.div(ln()),dn=F.b.div(un()),pn=F.b.input(cn()),fn=F.b.div(on()),gn=Object(x.fromJS)({login:!1}),hn=function(){return{type:"login/LOGOUT",value:!1}},bn=function(t,n){return function(e){O.a.get("api/login.json?account="+t+"&password="+n).then(function(t){t.data.data?e({type:"login/CHANGE_LOGIN",value:!0}):alert("\u767b\u9646\u5931\u8d25")})}},mn=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(p.a)(n,[{key:"render",value:function(){var t=this;return this.props.loginStatus?u.a.createElement(Et.a,{to:"/"}):u.a.createElement(sn,null,u.a.createElement(dn,null,u.a.createElement(pn,{placeholder:"\u8d26\u53f7",ref:function(n){t.account=n}}),u.a.createElement(pn,{placeholder:"\u5bc6\u7801",type:"password",ref:function(n){t.password=n}}),u.a.createElement(fn,{onClick:function(){return t.props.login(t.account,t.password)}},"\u767b\u9646")))}}]),n}(c.PureComponent),En=Object(ct.b)(function(t){return{loginStatus:t.getIn(["login","login"])}},function(t){return{login:function(n,e){t(i.login(n.value,e.value))}}})(mn),xn=e(19),An=e(57),vn=e(58),On=e(49),jn=Object(vn.combineReducers)({header:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.SEARCH_FOUCE:return t.set("focused",!0);case a.SEARCH_BLUR:return t.set("focused",!1);case a.MOUSE_LEAVE:return t.set("mouseIn",!1);case a.MOUSE_ENTER:return t.set("mouseIn",!0);case a.GET_LIST:return t.merge({list:n.data,totalPage:n.totalPage});case a.CHANGE_PAGE:return t.set("page",n.page);default:return t}},home:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"home/CHANGE_HOME_DATA":return function(t,n){return t.merge({topicList:Object(x.fromJS)(n.topicList),articleList:Object(x.fromJS)(n.articleList),recommendList:Object(x.fromJS)(n.recommendList)})}(t,n);case"home/ADD_ARTICLE_LIST":return function(t,n){return t.merge({articleList:t.get("articleList").concat(n.list),articlePage:n.nextPage})}(t,n);case"home/TOGGLE_SCROLL_TOP":return t.set("showScroll",n.show);default:return t}},detail:On.b,login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"login/CHANGE_LOGIN":case"login/LOGOUT":return t.set("login",n.value);default:return t}}}),wn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xn.c,Ln=Object(xn.d)(jn,wn(Object(xn.a)(An.a))),yn=e(32);console.log(yn.a);var kn=m()({basename:yn.a}),Sn=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(p.a)(n,[{key:"render",value:function(){return u.a.createElement(ct.a,{store:Ln},u.a.createElement(c.Fragment,null,u.a.createElement(pt,null),u.a.createElement(gt,null),u.a.createElement(ht.a,{history:kn},u.a.createElement("div",null,u.a.createElement(st,null),u.a.createElement(bt.a,null,u.a.createElement(mt.a,{path:"/",exact:!0,component:nn}),u.a.createElement(mt.a,{path:"/detail/:id",exact:!0,component:an}),u.a.createElement(mt.a,{path:"/login",exact:!0,component:En}),u.a.createElement(Et.a,{to:"/"}))))))}}]),n}(c.Component);s.a.render(u.a.createElement(Sn,null),document.getElementById("root"))},32:function(t){t.exports={a:"/my-app"}},49:function(t,n,e){"use strict";var r={};e.r(r),e.d(r,"getDetail",function(){return l});var a=e(11),o=Object(a.fromJS)({title:"",content:""}),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"detail/CHANGE_DETAIL":return t.merge({title:n.title,content:n.content});default:return t}},c=e(17),u=e.n(c),l=function(t){return function(n){u.a.get("api/detail.json?id="+t).then(function(t){var e,r,a=t.data.data;n((e=a.title,r=a.content,{type:"detail/CHANGE_DETAIL",title:e,content:r}))}).catch(function(){})}};e.d(n,"b",function(){return i}),e.d(n,"a",function(){return r})},52:function(t,n){t.exports="data:image/png;base64,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"},60:function(t,n,e){t.exports=e(109)}},[[60,3,2]]]);
//# sourceMappingURL=main.5549352b.chunk.js.map