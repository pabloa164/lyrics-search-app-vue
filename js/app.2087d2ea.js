(function(t){function e(e){for(var a,s,i=e[0],o=e[1],u=e[2],p=0,f=[];p<i.length;p++)s=i[p],n[s]&&f.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,i=1;i<r.length;i++){var o=r[i];0!==n[o]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},c=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/lyrics-search-app-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"24ae":function(t,e,r){"use strict";var a=r("b52e"),n=r.n(a);n.a},"4cc0":function(t,e,r){"use strict";var a=r("5550"),n=r.n(a);n.a},5550:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("router-view")],1)},c=[],s=r("cebc"),i=r("2f62"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-info mb-4"},[r("router-link",{staticClass:"navbar-brand mx-auto",attrs:{to:"/"}},[t._v("Lyrics Search")])],1)},u=[],l=r("2877"),p={},f=Object(l["a"])(p,o,u,!1,null,null,null),h=f.exports,d={components:{Navbar:h},methods:Object(s["a"])({},Object(i["b"])(["getInitialTracks"])),mounted:function(){this.getInitialTracks()}},m=d,v=(r("5c0b"),Object(l["a"])(m,n,c,!1,null,null,null)),k=v.exports,b=r("8c4f"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Search"),r("TrackList")],1)},g=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[0!==Object.keys(t.trackList).length?r("div",[r("h2",{staticClass:"text-center font-weight-bold mb-4 text-secondary"},[t._v("\n      "+t._s(t.heading)+"\n    ")]),r("div",{staticClass:"row"},t._l(t.trackList,function(t){return r("Track",{key:t.track.track_id,attrs:{track:t.track}})}),1)]):r("Spinner")],1)},x=[],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-md-6"},[r("div",{staticClass:"track-card"},[r("p",{staticClass:"label"},[t._v("Song Name")]),r("h6",{staticClass:"mb-4"},[t._v(t._s(t.track.track_name))]),r("p",{staticClass:"label"},[t._v("Artist Name")]),r("p",[t._v(t._s(t.track.artist_name))]),r("p",{staticClass:"label"},[t._v("Album")]),r("p",[t._v(t._s(t.track.album_name))]),r("router-link",{staticClass:"button",attrs:{to:"lyrics/track/"+t.track.track_id}},[t._v("\n      View Lyrics\n      "),r("i",{staticClass:"fas fa-arrow-right"})])],1)])},j=[],O={props:["track"]},T=O,C=(r("62fb"),Object(l["a"])(T,w,j,!1,null,"0d2a01a4",null)),S=C.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100 mt-5 d-flex justify-content-center"},[r("div",{staticClass:"spinner"})])}],E=(r("24ae"),{}),R=Object(l["a"])(E,$,L,!1,null,"7eb9bec4",null),P=R.exports,I={components:{Track:S,Spinner:P},computed:Object(s["a"])({},Object(i["c"])(["heading","trackList"]))},H=I,N=Object(l["a"])(H,y,x,!1,null,"a41c6ef6",null),M=N.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.searching?r("div",[r("h2",{staticClass:"text-center"},[t._v("Searching...")]),r("Spinner",{staticClass:"mb-4"})],1):r("div",[r("h2",{staticClass:"text-secondary text-center mb-2"},[t._v("Search for Lyrics")]),r("form",{staticClass:"mb-4",on:{submit:function(e){return e.preventDefault(),t.onFormSubmit(t.trackTitle)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.trackTitle,expression:"trackTitle"}],attrs:{type:"text",name:"trackTitle",placeholder:"Search for a Song...",autocomplete:"off"},domProps:{value:t.trackTitle},on:{input:function(e){e.target.composing||(t.trackTitle=e.target.value)}}}),r("button",{attrs:{type:"submit"}},[t._v("Search")])])])])},A=[],F=(r("96cf"),r("3b8d")),J={components:{Spinner:P},data:function(){return{trackTitle:"",searching:!1}},methods:Object(s["a"])({},Object(i["b"])(["searchTrack","setHeading"]),{onFormSubmit:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.searching=!0,t.next=3,this.searchTrack(e);case 3:this.setHeading(this.trackTitle),this.trackTitle="",this.searching=!1;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},q=J,B=(r("9a85"),Object(l["a"])(q,z,A,!1,null,"c59c5366",null)),D=B.exports,G={name:"home",components:{TrackList:M,Search:D}},V=G,K=Object(l["a"])(V,_,g,!1,null,null,null),Q=K.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("router-link",{staticClass:"button-go-back",attrs:{to:"/"}},[t._v("Go Back")]),t.loading?r("Spinner"):r("div",{staticClass:"mt-4"},[r("h1",{staticClass:"mb-2"},[t._v('\n      Lyrics for "'+t._s(t.track.track_name)+'" by '+t._s(t.track.artist_name)+"\n    ")]),r("p",[t._v(t._s(t.lyrics))])])],1)},W=[],X=(r("a481"),"https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=co&f_has_lyrics=1&apikey=".concat("7c8258522ee09cf7f3f5d3ee5cdd3e2f")),Y="https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=$track_title&page_size=10&page=1&s_track_rating=desc&apikey=".concat("7c8258522ee09cf7f3f5d3ee5cdd3e2f"),Z="https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=$id&apikey=".concat("7c8258522ee09cf7f3f5d3ee5cdd3e2f"),tt="https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=$id&apikey=".concat("7c8258522ee09cf7f3f5d3ee5cdd3e2f"),et={components:{Spinner:P},data:function(){return{trackId:this.$route.params.id,lyrics:"",track:{},loading:!1}},mounted:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(){var e,r,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,fetch(Z.replace("$id",this.trackId));case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,this.lyrics=r.message.body.lyrics.lyrics_body,t.next=10,fetch(tt.replace("$id",this.trackId));case 10:return a=t.sent,t.next=13,a.json();case 13:n=t.sent,this.track=n.message.body.track,this.loading=!1;case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},rt=et,at=(r("4cc0"),Object(l["a"])(rt,U,W,!1,null,"91059a2a",null)),nt=at.exports;a["a"].use(b["a"]);var ct=new b["a"]({routes:[{path:"/",name:"home",component:Q},{path:"/lyrics/track/:id",name:"lyrics",component:nt}]});a["a"].use(i["a"]);var st=new i["a"].Store({state:{heading:"Top 10 Tracks in Colombia",trackList:[]},mutations:{setTrackList:function(t,e){t.trackList=e},setHeading:function(t,e){t.heading=e}},actions:{getInitialTracks:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(e){var r,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,fetch(X);case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,r("setTrackList",n.message.body.track_list);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),searchTrack:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(e,r){var a,n,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,fetch(Y.replace("$track_title",r));case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,a("setTrackList",c.message.body.track_list);case 8:case"end":return t.stop()}},t,this)}));function e(e,r){return t.apply(this,arguments)}return e}(),setHeading:function(t,e){var r=t.commit;r("setHeading",'Search Results for "'.concat(e,'"'))}}});a["a"].config.productionTip=!1,new a["a"]({router:ct,store:st,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("5e27"),n=r.n(a);n.a},"5e27":function(t,e,r){},"62fb":function(t,e,r){"use strict";var a=r("af57"),n=r.n(a);n.a},7229:function(t,e,r){},"9a85":function(t,e,r){"use strict";var a=r("7229"),n=r.n(a);n.a},af57:function(t,e,r){},b52e:function(t,e,r){}});
//# sourceMappingURL=app.2087d2ea.js.map