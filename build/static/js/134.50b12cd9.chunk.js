(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[134],{3076:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(359),i=a(408),c=a(407),s=a(406),l=a(167),u=a(1),d=a(6),m=(a(11),a(4)),p=a(10),g=a(63),b=a(55),h=a(87);var f=a(19),v=a(40),y=a(104),P=a(46),O=Object(P.a)(n.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),x=Object(P.a)(n.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),E=Object(P.a)(n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),C=Object(P.a)(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),j=a(14),S=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.color,i=void 0===o?"standard":o,c=e.component,s=e.disabled,l=void 0!==s&&s,p=e.page,g=e.selected,b=void 0!==g&&g,h=e.shape,f=void 0===h?"round":h,P=e.size,S=void 0===P?"medium":P,k=e.type,w=void 0===k?"page":k,N=e.variant,R=void 0===N?"text":N,T=Object(d.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),B=("rtl"===Object(v.a)().direction?{previous:C,next:E,last:O,first:x}:{previous:E,next:C,first:O,last:x})[w];return"start-ellipsis"===w||"end-ellipsis"===w?n.createElement("div",{ref:t,className:Object(m.default)(a.root,a.ellipsis,l&&a.disabled,"medium"!==S&&a["size".concat(Object(j.a)(S))])},"\u2026"):n.createElement(y.a,Object(u.a)({ref:t,component:c,disabled:l,focusVisibleClassName:a.focusVisible,className:Object(m.default)(a.root,a.page,a[R],a[f],r,"standard"!==i&&a["".concat(R).concat(Object(j.a)(i))],l&&a.disabled,b&&a.selected,"medium"!==S&&a["size".concat(Object(j.a)(S))])},T),"page"===w&&p,B?n.createElement(B,{className:a.icon}):null)})),k=Object(p.a)((function(e){return{root:Object(u.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(f.d)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(f.d)(e.palette.primary.main,.5)),backgroundColor:Object(f.d)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(f.d)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(f.d)(e.palette.secondary.main,.5)),backgroundColor:Object(f.d)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(f.d)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(S);function w(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var N=n.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,r=e.className,o=e.color,i=void 0===o?"standard":o,c=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),s=void 0===c?w:c,l=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),p=void 0===l?function(e){return n.createElement(k,e)}:l,f=e.shape,v=void 0===f?"round":f,y=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),P=void 0===y?"medium":y,O=e.variant,x=void 0===O?"text":O,E=Object(d.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,n=e.componentName,r=void 0===n?"usePagination":n,o=e.count,i=void 0===o?1:o,c=e.defaultPage,s=void 0===c?1:c,l=e.disabled,m=void 0!==l&&l,p=e.hideNextButton,f=void 0!==p&&p,v=e.hidePrevButton,y=void 0!==v&&v,P=e.onChange,O=e.page,x=e.showFirstButton,E=void 0!==x&&x,C=e.showLastButton,j=void 0!==C&&C,S=e.siblingCount,k=void 0===S?1:S,w=Object(d.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),N=Object(h.a)({controlled:O,default:s,name:r,state:"page"}),R=Object(b.a)(N,2),T=R[0],B=R[1],z=function(e,t){O||B(t),P&&P(e,t)},$=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},L=$(1,Math.min(a,i)),M=$(Math.max(i-a+1,a+1),i),I=Math.max(Math.min(T-k,i-a-2*k-1),a+2),V=Math.min(Math.max(T+k,a+2*k+2),M[0]-2),F=[].concat(Object(g.a)(E?["first"]:[]),Object(g.a)(y?[]:["previous"]),Object(g.a)(L),Object(g.a)(I>a+2?["start-ellipsis"]:a+1<i-a?[a+1]:[]),Object(g.a)($(I,V)),Object(g.a)(V<i-a-1?["end-ellipsis"]:i-a>a?[i-a]:[]),Object(g.a)(M),Object(g.a)(f?[]:["next"]),Object(g.a)(j?["last"]:[])),A=function(e){switch(e){case"first":return 1;case"previous":return T-1;case"next":return T+1;case"last":return i;default:return null}},W=F.map((function(e){return"number"===typeof e?{onClick:function(t){z(t,e)},type:"page",page:e,selected:e===T,disabled:m,"aria-current":e===T?"true":void 0}:{onClick:function(t){z(t,A(e))},type:e,page:A(e),selected:!1,disabled:m||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?T>=i:T<=1)}}));return Object(u.a)({items:W},w)}(Object(u.a)({},e,{componentName:"Pagination"})).items;return n.createElement("nav",Object(u.a)({"aria-label":"pagination navigation",className:Object(m.default)(a.root,r),ref:t},E),n.createElement("ul",{className:a.ul},C.map((function(e,t){return n.createElement("li",{key:t},p(Object(u.a)({},e,{color:i,"aria-label":s(e.type,e.page,e.selected),shape:v,size:P,variant:x})))}))))})),R=Object(p.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(N),T=Object(l.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function B(){var e=T();return r.a.createElement("div",{className:e.root},r.a.createElement(R,{count:10}),r.a.createElement(R,{count:10,color:"primary"}),r.a.createElement(R,{count:10,color:"secondary"}),r.a.createElement(R,{count:10,disabled:!0}))}var z=Object(l.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function $(){var e=z();return r.a.createElement("div",{className:e.root},r.a.createElement(R,{count:10,variant:"outlined"}),r.a.createElement(R,{count:10,variant:"outlined",color:"primary"}),r.a.createElement(R,{count:10,variant:"outlined",color:"secondary"}),r.a.createElement(R,{count:10,variant:"outlined",disabled:!0}))}var L=Object(l.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function M(){var e=L();return r.a.createElement("div",{className:e.root},r.a.createElement(R,{count:10,shape:"rounded"}),r.a.createElement(R,{count:10,variant:"outlined",shape:"rounded"}))}var I=Object(l.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function V(){var e=I();return r.a.createElement("div",{className:e.root},r.a.createElement(R,{count:10,size:"small"}),r.a.createElement(R,{count:10}),r.a.createElement(R,{count:10,size:"large"}))}var F=Object(l.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function A(){var e=F();return r.a.createElement("div",{className:e.root},r.a.createElement(R,{count:10,showFirstButton:!0,showLastButton:!0}),r.a.createElement(R,{count:10,hidePrevButton:!0,hideNextButton:!0}))}var W=Object(l.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function D(){var e=W();return r.a.createElement("div",{className:e.root},r.a.createElement(R,{count:11,defaultPage:6,siblingCount:0}),r.a.createElement(R,{count:11,defaultPage:6})," ",r.a.createElement(R,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),r.a.createElement(R,{count:11,defaultPage:6,boundaryCount:2}))}var G=a(23),J=a(82),Y=Object(l.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}}));function H(){var e=Y(),t=r.a.useState(1),a=Object(G.a)(t,2),n=a[0],o=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(J.a,null,"Page: ",n),r.a.createElement(R,{count:10,page:n,onChange:function(e,t){o(t)}}))}var U=a(539);function q(){var e=r.a.useState(2),t=Object(G.a)(e,2),a=t[0],n=t[1],o=r.a.useState(10),i=Object(G.a)(o,2),c=i[0],s=i[1];return r.a.createElement(U.a,{component:"div",count:100,page:a,onChangePage:function(e,t){n(t)},rowsPerPage:c,onChangeRowsPerPage:function(e){s(parseInt(e.target.value,10)),n(0)}})}t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Pagination",description:"The Pagination component enables the user to select a specific page from a range of pages.",refUrl:"https://material-ui.com/components/pagination/"}),r.a.createElement(s.a,null,r.a.createElement(o.a,{item:!0,xs:12,lg:6},r.a.createElement(i.a,{title:"Basic ",component:B,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Pagination from '@material-ui/lab/Pagination';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > *': {\r\n      marginTop: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function BasicPagination() {\r\n  const classes = useStyles();\r\n  return (\r\n    <div className={classes.root}>\r\n      <Pagination count={10} />\r\n      <Pagination count={10} color='primary' />\r\n      <Pagination count={10} color='secondary' />\r\n      <Pagination count={10} disabled />\r\n    </div>\r\n  );\r\n}\r\n"})),r.a.createElement(o.a,{item:!0,xs:12,lg:6},r.a.createElement(i.a,{title:"Outlined",component:$,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Pagination from '@material-ui/lab/Pagination';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > *': {\r\n      marginTop: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function PaginationOutlined() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Pagination count={10} variant='outlined' />\r\n      <Pagination count={10} variant='outlined' color='primary' />\r\n      <Pagination count={10} variant='outlined' color='secondary' />\r\n      <Pagination count={10} variant='outlined' disabled />\r\n    </div>\r\n  );\r\n}\r\n"})),r.a.createElement(o.a,{item:!0,xs:12,lg:6},r.a.createElement(i.a,{title:"Pagination size",component:V,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Pagination from '@material-ui/lab/Pagination';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > *': {\r\n      marginTop: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function PaginationSize() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Pagination count={10} size='small' />\r\n      <Pagination count={10} />\r\n      <Pagination count={10} size='large' />\r\n    </div>\r\n  );\r\n}\r\n"})),r.a.createElement(o.a,{item:!0,xs:12,lg:6},r.a.createElement(i.a,{title:"Rounded",component:M,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Pagination from '@material-ui/lab/Pagination';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > *': {\r\n      marginTop: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function PaginationRounded() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Pagination count={10} shape='rounded' />\r\n      <Pagination count={10} variant='outlined' shape='rounded' />\r\n    </div>\r\n  );\r\n}\r\n"})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(i.a,{title:"Buttons",component:A,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Pagination from '@material-ui/lab/Pagination';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > *': {\r\n      marginTop: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function PaginationButtons() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Pagination count={10} showFirstButton showLastButton />\r\n      <Pagination count={10} hidePrevButton hideNextButton />\r\n    </div>\r\n  );\r\n}\r\n",description:"You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons."})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(i.a,{title:"Pagination ranges",component:D,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Pagination from '@material-ui/lab/Pagination';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > *': {\r\n      marginTop: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function PaginationRanges() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Pagination count={11} defaultPage={6} siblingCount={0} />\r\n      <Pagination count={11} defaultPage={6} /> {/* Default ranges */}\r\n      <Pagination\r\n        count={11}\r\n        defaultPage={6}\r\n        siblingCount={0}\r\n        boundaryCount={2}\r\n      />\r\n      <Pagination count={11} defaultPage={6} boundaryCount={2} />\r\n    </div>\r\n  );\r\n}\r\n",description:"You can specify how many digits to display either side of current page with the siblingRange prop, and adjacent to the start and end page number with the boundaryRange prop."})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(i.a,{title:"Controlled pagination",component:H,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Pagination from '@material-ui/lab/Pagination';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function PaginationControlled() {\r\n  const classes = useStyles();\r\n  const [page, setPage] = React.useState(1);\r\n  const handleChange = (event, value) => {\r\n    setPage(value);\r\n  };\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Typography>Page: {page}</Typography>\r\n      <Pagination count={10} page={page} onChange={handleChange} />\r\n    </div>\r\n  );\r\n}\r\n"})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(i.a,{title:"Table pagination",component:q,source:"import React from 'react';\r\nimport TablePagination from '@material-ui/core/TablePagination';\r\n\r\nexport default function TablePaginationDemo() {\r\n  const [page, setPage] = React.useState(2);\r\n  const [rowsPerPage, setRowsPerPage] = React.useState(10);\r\n\r\n  const handleChangePage = (event, newPage) => {\r\n    setPage(newPage);\r\n  };\r\n\r\n  const handleChangeRowsPerPage = (event) => {\r\n    setRowsPerPage(parseInt(event.target.value, 10));\r\n    setPage(0);\r\n  };\r\n\r\n  return (\r\n    <TablePagination\r\n      component='div'\r\n      count={100}\r\n      page={page}\r\n      onChangePage={handleChangePage}\r\n      rowsPerPage={rowsPerPage}\r\n      onChangeRowsPerPage={handleChangeRowsPerPage}\r\n    />\r\n  );\r\n}\r\n",description:"The Pagination component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog."}))))}}}]);
//# sourceMappingURL=134.50b12cd9.chunk.js.map