(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[102],{1506:function(n,e,t){(function(e){for(var r=t(1548),o="undefined"===typeof window?e:window,a=["moz","webkit"],i="AnimationFrame",c=o["request"+i],s=o["cancel"+i]||o["cancelRequest"+i],l=0;!c&&l<a.length;l++)c=o[a[l]+"Request"+i],s=o[a[l]+"Cancel"+i]||o[a[l]+"CancelRequest"+i];if(!c||!s){var u=0,p=0,m=[];c=function(n){if(0===m.length){var e=r(),t=Math.max(0,1e3/60-(e-u));u=t+e,setTimeout((function(){var n=m.slice(0);m.length=0;for(var e=0;e<n.length;e++)if(!n[e].cancelled)try{n[e].callback(u)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(t))}return m.push({handle:++p,callback:n,cancelled:!1}),p},s=function(n){for(var e=0;e<m.length;e++)m[e].handle===n&&(m[e].cancelled=!0)}}n.exports=function(n){return c.call(o,n)},n.exports.cancel=function(){s.apply(o,arguments)},n.exports.polyfill=function(n){n||(n=o),n.requestAnimationFrame=c,n.cancelAnimationFrame=s}}).call(this,t(98))},1548:function(n,e,t){(function(e){(function(){var t,r,o,a,i,c;"undefined"!==typeof performance&&null!==performance&&performance.now?n.exports=function(){return performance.now()}:"undefined"!==typeof e&&null!==e&&e.hrtime?(n.exports=function(){return(t()-i)/1e6},r=e.hrtime,a=(t=function(){var n;return 1e9*(n=r())[0]+n[1]})(),c=1e9*e.uptime(),i=a-c):Date.now?(n.exports=function(){return Date.now()-o},o=Date.now()):(n.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t(125))},3161:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(359),i=t(408),c=t(407),s=t(406),l=t(413),u=t(414),p=t(416),m=t(415),d=t(1484),f=t(1653),g=t.n(f),h=t(1506),v=t.n(h),w=g.a&&navigator.geolocation?navigator.geolocation:{getCurrentPosition:function(n,e){e("Your browser doesn't support geolocation.")}},b=Object(d.withGoogleMap)((function(n){return o.a.createElement(d.GoogleMap,{defaultZoom:10,center:n.center},n.center&&o.a.createElement(d.InfoWindow,{position:n.center},o.a.createElement("div",null,n.content)),n.center&&o.a.createElement(d.Circle,{center:n.center,radius:n.radius,options:{fillColor:"red",fillOpacity:.2,strokeColor:"red",strokeOpacity:1,strokeWeight:1}}))})),M=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(){var n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))).state={center:null,content:null,radius:6e3},n.isUnmounted=!1,n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var n=this,e=function e(){n.isUnmounted||(n.setState({radius:Math.max(n.state.radius-20,0)}),n.state.radius>200&&v()(e))};w.getCurrentPosition((function(t){n.isUnmounted||(n.setState({center:{lat:t.coords.latitude,lng:t.coords.longitude},content:"Location found using HTML5."}),v()(e))}),(function(e){n.isUnmounted||n.setState({center:{lat:60,lng:105},content:"Error: The Geolocation service failed (".concat(e,").")})}))}},{key:"componentWillUnmount",value:function(){this.isUnmounted=!0}},{key:"render",value:function(){return o.a.createElement(b,{containerElement:o.a.createElement("div",{className:"cr-embed-responsive cr-embed-responsive-21by9"}),mapElement:o.a.createElement("div",{className:"cr-embed-responsive-item"}),center:this.state.center,content:this.state.content,radius:this.state.radius})}}]),t}(r.Component);e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:"Google Map",refUrl:"http://google-map-react.github.io/google-map-react/map/balderdash/"}),o.a.createElement(s.a,null,o.a.createElement(a.a,{item:!0,xs:12},o.a.createElement(i.a,{title:"Simple Map",component:M,source:"import React, {Component} from 'react';\r\nimport {Circle, GoogleMap, InfoWindow, withGoogleMap} from 'react-google-maps';\r\nimport canUseDOM from 'can-use-dom';\r\nimport raf from 'raf';\r\n\r\nconst geolocation =\r\n  canUseDOM && navigator.geolocation\r\n    ? navigator.geolocation\r\n    : {\r\n        getCurrentPosition(success, failure) {\r\n          failure(`Your browser doesn't support geolocation.`);\r\n        },\r\n      };\r\n\r\nconst GeolocationExampleGoogleMap = withGoogleMap((props) => (\r\n  <GoogleMap defaultZoom={10} center={props.center}>\r\n    {props.center && (\r\n      <InfoWindow position={props.center}>\r\n        <div>{props.content}</div>\r\n      </InfoWindow>\r\n    )}\r\n    {props.center && (\r\n      <Circle\r\n        center={props.center}\r\n        radius={props.radius}\r\n        options={{\r\n          fillColor: 'red',\r\n          fillOpacity: 0.2,\r\n          strokeColor: 'red',\r\n          strokeOpacity: 1,\r\n          strokeWeight: 1,\r\n        }}\r\n      />\r\n    )}\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * https://developers.google.com/maps/documentation/javascript/examples/map-geolocation\r\n *\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nexport default class GeolocationExample extends Component {\r\n  state = {\r\n    center: null,\r\n    content: null,\r\n    radius: 6000,\r\n  };\r\n\r\n  isUnmounted = false;\r\n\r\n  componentDidMount() {\r\n    const tick = () => {\r\n      if (this.isUnmounted) {\r\n        return;\r\n      }\r\n      this.setState({radius: Math.max(this.state.radius - 20, 0)});\r\n\r\n      if (this.state.radius > 200) {\r\n        raf(tick);\r\n      }\r\n    };\r\n    geolocation.getCurrentPosition(\r\n      (position) => {\r\n        if (this.isUnmounted) {\r\n          return;\r\n        }\r\n        this.setState({\r\n          center: {\r\n            lat: position.coords.latitude,\r\n            lng: position.coords.longitude,\r\n          },\r\n          content: `Location found using HTML5.`,\r\n        });\r\n\r\n        raf(tick);\r\n      },\r\n      (reason) => {\r\n        if (this.isUnmounted) {\r\n          return;\r\n        }\r\n        this.setState({\r\n          center: {\r\n            lat: 60,\r\n            lng: 105,\r\n          },\r\n          content: `Error: The Geolocation service failed (${reason}).`,\r\n        });\r\n      },\r\n    );\r\n  }\r\n\r\n  componentWillUnmount() {\r\n    this.isUnmounted = true;\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <GeolocationExampleGoogleMap\r\n        containerElement={\r\n          <div className='cr-embed-responsive cr-embed-responsive-21by9' />\r\n        }\r\n        mapElement={<div className='cr-embed-responsive-item' />}\r\n        center={this.state.center}\r\n        content={this.state.content}\r\n        radius={this.state.radius}\r\n      />\r\n    );\r\n  }\r\n}\r\n"}))))}}}]);
//# sourceMappingURL=102.52bb28de.chunk.js.map