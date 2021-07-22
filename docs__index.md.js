(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"F+kV":function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t.n(r),o=t("dEAq");t("Rsk4");e["default"]=n=>(i.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),i.a.createElement(i.a.Fragment,null))},Rsk4:function(n,e,t){"use strict";t.r(e);var r=t("9og8"),i=t("WmNS"),o=t.n(i),s=t("rlch"),a="/*\n * @description: \n * @Author: T.W\n * @Github: https://github.com/TernenceWu0702\n * @Date: 2021-07-21 14:54:13\n * @LastEditors: T.W\n * @LastEditTime: 2021-07-22 09:15:33\n */\nimport React from 'react';\nimport Alert from '../';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u676111\u8b66\u544a\u63d0\u793a</Alert>;",p="/*\n * @description: \n * @Author: T.W\n * @Github: https://github.com/TernenceWu0702\n * @Date: 2021-07-21 14:47:58\n * @LastEditors: T.W\n * @LastEditTime: 2021-07-21 15:19:43\n */\nimport React from 'react';\nimport t from 'prop-types';\n\nexport interface AlertProps {\n    /**\n     * @description         Alert\u7684\u7c7b\u578b\n     * @default             'info'\n     */\n    kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'happy-alert';\n\nconst kinds: KindMap = {\n    info: '#5352ED',\n    positive: '#2ED573',\n    negative: '#FF4757',\n    warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n    <div\n        className={prefixCls}\n        style={{\n            background: kinds[kind],\n        }}\n        {...rest}\n    >\n        {children}\n    </div>\n);\n\nAlert.propTypes = {\n    kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",c="/*\n * @description: \n * @Author: T.W\n * @Github: https://github.com/TernenceWu0702\n * @Date: 2021-07-21 14:48:27\n * @LastEditors: T.W\n * @LastEditTime: 2021-07-21 14:48:33\n */\nimport './index.less';",d="@popupPrefix: happy-alert;\n\n.@{popupPrefix} {\n    padding: 20px;\n    background: white;\n    border-radius: 3px;\n    color: white;\n}";e["default"]={"alert-basic":{component:Object(s["c"])({loader:function(){var n=Object(r["a"])(o.a.mark((function n(){return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e(3).then(t.bind(null,"025M"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}()}),previewerProps:{sources:{_:{tsx:a},"index.tsx":{import:"../",content:p},"style/index.ts":{import:"../style",content:c},"index.less":{import:"./index.less",content:d}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",identifier:"alert-basic"}}}},x2v5:function(n){n.exports=JSON.parse('{"alert":{"default":[{"identifier":"kind","description":"Alert\u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]}}')}}]);