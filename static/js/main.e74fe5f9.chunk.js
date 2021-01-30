(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{16:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),n=a.n(r),s=a(12),i=a.n(s),o=(a(38),a.p,a(39),a(6)),l=a(8),d=a.n(l),j=a(13),u="CHANGE_CITY",p="UPDATE_FAVORITES",h="TOGGLE_PAGES",O="HIDE_ERROR",b="FETCH_AUTOCOMPLETE",y="FETCH_AUTOCOMPLETE_SUCCESS",m="FETCH_AUTOCOMPLETE_ERROR",f="FETCH_DAILY_WEATHER",v="FETCH_DAILY_WEATHER_SUCCESS",x="FETCH_DAILY_ERROR",g="FETCH_WEEKLY_WEATHER",E="FETCH_WEEKLY_WEATHER_SUCCESS",T="FETCH_WEEKLY_WEATHER_ERROR",w=a(9),C=a.n(w),N=a(5),S=a(31),k=a(32),F=a(3),_={loading:!0,togglePages:!1,query:"London",cities:[],city_key:"328328",city_name:"London",selectedKey:"215854",selectedCity:"Tel Aviv",iconNumber:"01",currentDailyTemp:"--",currentWeeklyTemp:["--"],currentWeeklyForecast:[],displayFavorites:!1,isSelectedInFavorites:!1,showError:!1,errorMessage:""},L=Object(N.combineReducers)({weatherList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(F.a)(Object(F.a)({},e),{},{loading:!1,searchOptions:t.payload});case y:return Object(F.a)(Object(F.a)({},e),{},{loading:!1,selectedCity:t.payload.Name,selectedKey:t.payload.Key,searchOptions:[]});case m:return{loading:!1,showError:!0,errorMessage:t.payload};case u:return Object(F.a)(Object(F.a)({},e),{},{query:t.payload,loading:!1});case p:return Object(F.a)(Object(F.a)({},e),{},{isSelectedInFavorites:t.payload});case f:return Object(F.a)(Object(F.a)({},e),{},{loading:!0,currentDailyTemp:t.payload});case v:return Object(F.a)(Object(F.a)({},e),{},{currentDailyTemp:t.payload.temp,iconNumber:t.payload.icon,loading:!1});case x:return Object(F.a)(Object(F.a)({},e),{},{loading:!1,showError:!0,errorMessage:t.payload});case g:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case E:return Object(F.a)(Object(F.a)({},e),{},{currentWeeklyForecast:t.payload,loading:!1});case T:return Object(F.a)(Object(F.a)({},e),{},{loading:!1,showError:!0,errorMessage:t.payload});case h:return Object(F.a)(Object(F.a)({},e),{},{togglePages:t.payload});case O:return Object(F.a)(Object(F.a)({},e),{},{showError:!1});default:return e}}}),W=[S.a],H=Object(N.createStore)(L,{},Object(k.composeWithDevTools)(N.applyMiddleware.apply(void 0,W))),I="kbTWCzOaL5SJd74XNGG4SkWDHr86Xz5q",R=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=H.getState(),c=a.weatherList,r=c.selectedKey,t(A(r)),t(D(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://dataservice.accuweather.com/currentconditions/v1/"+e+"?apikey="+I);case 2:c=t.sent,a({type:f});try{a({type:v,payload:{temp:c.data[0].Temperature.Metric.Value,icon:c.data[0].WeatherIcon}})}catch(r){a({type:x,payload:r}),setTimeout((function(){a({type:O})}),5e3)}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+e+"?apikey="+I+"&metric=true");case 2:c=t.sent,a({type:g});try{a({type:E,payload:c.data.DailyForecasts})}catch(r){a({type:T,payload:r}),setTimeout((function(){a({type:O})}),5e3)}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=a(7),K=a(14),P=(a(16),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),G=function(e){var t=e.data;return Object(c.jsx)("ul",{children:t.map((function(e,t){return Object(c.jsx)("div",{className:"weatherItems",children:Object(c.jsxs)("li",{children:[Object(c.jsxs)("span",{className:"forecastHeadline",children:[" ",P[new Date(e.Date).getDay()]]}),Object(c.jsxs)("div",{className:"iconAndTemp",children:[e.Temperature.Maximum.Value,"\xb0",Object(c.jsx)("span",{className:"weeklyIcon",children:Object(c.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(("00"+e.Day.Icon).slice(-"00".length),"-s.png"),alt:""})})]})]})},t)}))})},J=(a(64),a(20)),U=function(){return Object(c.jsxs)("div",{className:"externalLinks",children:[Object(c.jsx)("a",{href:"https://www.linkedin.com/in/shanip27",id:"linkedin",children:Object(c.jsx)(M.a,{icon:J.b})}),Object(c.jsx)("a",{href:"https://github.com/shanipj",id:"github",children:Object(c.jsx)(M.a,{icon:J.a})})]})},Y=(a(65),function(){var e=localStorage.getItem("state");return e?(e=JSON.parse(e),Object(c.jsx)("div",{id:"favoritesContainer",children:Object(c.jsx)("ul",{children:e.map((function(e,t){return Object(c.jsxs)("li",{className:"weatherItems",children:[Object(c.jsxs)("span",{className:"forecastHeadline",children:[" ",e.name]}),Object(c.jsx)("div",{className:"iconAndTemp",children:Object(c.jsx)("span",{className:"weeklyIcon"})})]},t)}))})})):Object(c.jsx)("div",{id:"favoritesContainer",children:"There are no favorites at the moment"})});a(66);var z=function(){var e=Object(o.b)(),t=H.getState().weatherList.searchOptions,a=function(t,a){e({type:y,payload:{Key:t,Name:a}}),e(R())},r=function(t){var a=t.target.value;a.length<3?e({type:b,payload:[]}):C.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=kbTWCzOaL5SJd74XNGG4SkWDHr86Xz5q&q="+a).then((function(e){return n(e.data)}))},n=function(t){if(!(t.length<=0)){var r=t.map((function(e){return Object(c.jsx)("div",{onClick:function(){return a(e.Key,e.LocalizedName)},children:e.LocalizedName},e.Key)}));e({type:b,payload:r})}};return Object(c.jsxs)("div",{id:"searchBar",children:[Object(c.jsx)("form",{onSubmit:a,children:Object(c.jsx)("input",{type:"text",placeholder:"Search City",onChange:r,id:"searchinput"})}),Object(c.jsx)("div",{id:"searchWrapper",children:Object(c.jsx)("div",{id:"searchResult",children:t})})]})},q=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.weatherList})),a=(t.loading,t.selectedKey),n=t.selectedCity,s=t.currentDailyTemp,i=t.showError,l=t.errorMessage,d=t.iconNumber,j=t.togglePages,u=t.isSelectedInFavorites,O=t.currentWeeklyForecast;Object(r.useEffect)((function(){e(R())}),[e]);var b="https://developer.accuweather.com/sites/default/files/".concat(d,"-s.png");return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"mainPage"}),Object(c.jsxs)("header",{children:[Object(c.jsxs)("span",{onClick:function(){e({type:h,payload:!1})},children:[Object(c.jsxs)("span",{children:[" ",Object(c.jsx)(M.a,{icon:K.b})]}),Object(c.jsx)("span",{className:"navbar",children:"Home"})]}),Object(c.jsxs)("span",{onClick:function(){e({type:h,payload:!0})},children:[Object(c.jsxs)("span",{children:[" ",Object(c.jsx)(M.a,{icon:K.a})]}),Object(c.jsx)("span",{className:"navbar",children:"My Favorites "})]})]}),Object(c.jsxs)("div",{className:j?"hide":"show",children:[Object(c.jsx)(z,{}),Object(c.jsxs)("div",{className:"dailyWeather",children:[Object(c.jsx)("span",{id:"cityName",children:n}),Object(c.jsx)("div",{className:"addFavorite",children:Object(c.jsx)(M.a,{icon:K.a,className:u?"inFavorites":"",onClick:function(){return function(){try{var t=localStorage.getItem("state"),c=!1;if(!t){var r=[{key:a,name:n}],s=JSON.stringify(r);localStorage.setItem("state",s),c=!0}if(c)return;var i=[],o=!0;JSON.parse(t).forEach((function(e){e.key!=a?i.push(e):o=!1})),o&&i.push({key:a,name:n}),localStorage.setItem("state",JSON.stringify(i)),e({type:p,payload:o})}catch(l){return}}()}})}),Object(c.jsx)("div",{id:"currentDailyTemp",children:Object(c.jsxs)("span",{children:[s,"\xb0"]})}),Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("img",{src:b,alt:""})}),Object(c.jsx)("div",{class:"clear"})]}),Object(c.jsx)("div",{className:"weeklyWeather",children:Object(c.jsx)(G,{data:O})})]}),Object(c.jsx)("div",{className:j?"show":"hide",children:Object(c.jsx)(Y,{})}),Object(c.jsx)(U,{}),Object(c.jsx)("div",{id:"errorWrapper",children:Object(c.jsx)("div",{id:"errorToast",className:i?"show":"",children:l})})]})};var X=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(q,{})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(o.a,{store:H,children:Object(c.jsx)(X,{})})}),document.getElementById("root")),B()}},[[67,1,2]]]);
//# sourceMappingURL=main.e74fe5f9.chunk.js.map