(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[145],{3168:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),o=n(359),i=n(408),l=n(407),s=n(406),m=n(413),c=n(414),p=n(416),d=n(415),w=n(1484),u={lat:49.2853171,lng:-123.1119202},g={overlayView:{background:"red",color:"white",padding:5,borderRadius:"50%"}};function v(e,r){return{x:-e/2,y:-r/2}}var f=Object(w.withGoogleMap)((function(e){return a.a.createElement(w.GoogleMap,{defaultZoom:8,defaultCenter:u},a.a.createElement(w.StreetViewPanorama,{defaultPosition:u,visible:!0},a.a.createElement(w.OverlayView,{position:{lat:49.28590291211115,lng:-123.11248166065218},mapPaneName:w.OverlayView.OVERLAY_LAYER,getPixelPositionOffset:v},a.a.createElement("div",{style:g.overlayView},"OverlayView"))))})),V=function(e){Object(p.a)(n,e);var r=Object(d.a)(n);function n(){return Object(m.a)(this,n),r.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(f,{containerElement:a.a.createElement("div",{className:"cr-embed-responsive cr-embed-responsive-21by9"}),mapElement:a.a.createElement("div",{className:"cr-embed-responsive-item"})})}}]),n}(t.Component);r.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{title:"StreetView Map",description:"A wrapper around google.maps.StreetViewPanorama",refUrl:"https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama/"}),a.a.createElement(s.a,null,a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(i.a,{title:"StreetView Map",component:V,source:"import React, {Component} from 'react';\r\nimport {\r\n  GoogleMap,\r\n  OverlayView,\r\n  StreetViewPanorama,\r\n  withGoogleMap,\r\n} from 'react-google-maps';\r\n\r\nconst coordinates = {lat: 49.2853171, lng: -123.1119202};\r\n\r\nconst STYLES = {\r\n  overlayView: {\r\n    background: `red`,\r\n    color: `white`,\r\n    padding: 5,\r\n    borderRadius: `50%`,\r\n  },\r\n};\r\n\r\nfunction getPixelPositionOffset(width, height) {\r\n  return {x: -(width / 2), y: -(height / 2)};\r\n}\r\n\r\nconst StreetViewPanoramaExampleGoogleMap = withGoogleMap((props) => (\r\n  <GoogleMap defaultZoom={8} defaultCenter={coordinates}>\r\n    <StreetViewPanorama defaultPosition={coordinates} visible>\r\n      <OverlayView\r\n        position={{lat: 49.28590291211115, lng: -123.11248166065218}}\r\n        mapPaneName={OverlayView.OVERLAY_LAYER}\r\n        getPixelPositionOffset={getPixelPositionOffset}>\r\n        <div style={STYLES.overlayView}>OverlayView</div>\r\n      </OverlayView>\r\n    </StreetViewPanorama>\r\n  </GoogleMap>\r\n));\r\n\r\n/**\r\n * You can pass in an `containerElement` to render `StreetViewPanorama` in its own containers\r\n * At this point the `GoogleMap` wrapper and `withGoogleMap` HOC become optional,\r\n * so you can either render a map and StreetView at the same time,\r\n * or just the StreetView on its own\r\n *    <StreetViewPanorama\r\n *      containerElement={<div style={{ width: `100%`, height: `100%` }} />}\r\n *      defaultPosition={coordinates}\r\n *      visible\r\n *    />\r\n */\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nexport default class StreetViewPanoramaExample extends Component {\r\n  render() {\r\n    return (\r\n      <StreetViewPanoramaExampleGoogleMap\r\n        containerElement={\r\n          <div className='cr-embed-responsive cr-embed-responsive-21by9' />\r\n        }\r\n        mapElement={<div className='cr-embed-responsive-item' />}\r\n      />\r\n    );\r\n  }\r\n}\r\n"}))))}}}]);
//# sourceMappingURL=145.275fec89.chunk.js.map