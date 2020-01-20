(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{352:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"msg-和-handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msg-和-handler"}}),t._v(" Msg 和 Handler")]),t._v(" "),e("p",[t._v("现在你已经设置了"),e("code",[t._v("Keeper")]),t._v("，是时候构建允许用户购买域名和设置解析值的"),e("code",[t._v("Msg")]),t._v("和"),e("code",[t._v("Handler")]),t._v("了。")]),t._v(" "),e("h2",{attrs:{id:"msg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msg"}}),t._v(" Msg")]),t._v(" "),e("p",[e("code",[t._v("Msg")]),t._v("触发状态转变。"),e("code",[t._v("Msgs")]),t._v("被包裹在客户端提交至网络的"),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/develop/types/tx_msg.go#L34-L38",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Txs")]),e("OutboundLink")],1),t._v("中。Cosmos SDK从"),e("code",[t._v("Txs")]),t._v("中打包和解包来自"),e("code",[t._v("Msgs")]),t._v("，这就意味着，作为一个应用开发者，你只需要去定义"),e("code",[t._v("Msgs")]),t._v("。"),e("code",[t._v("Msgs")]),t._v("必须要满足下面的接口（我们会在下一小节实现）:")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Transactions messages must fulfill the Msg")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Msg "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the message type.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Must be alphanumeric or empty.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns a human-readable string for the message, intended for utilization")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// within tags")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ValidateBasic does a simple validation check that")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// doesn't require access to any other information.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateBasic")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Error\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the canonical byte representation of the Msg.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSignBytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signers returns the addrs of signers that must sign.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CONTRACT: All signatures must be present to be valid.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CONTRACT: Returns addrs in some deterministic order.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSigners")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("AccAddress\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handler"}}),t._v(" Handler")]),t._v(" "),e("p",[e("code",[t._v("Handler")]),t._v("定义了在接收到一个特定"),e("code",[t._v("Msg")]),t._v("时，需要采取的操作（哪些存储需要更新，怎样更新及要满足什么条件）。")]),t._v(" "),e("p",[t._v("在此模块中，你有两种类型的"),e("code",[t._v("Msg")]),t._v("，用户可以发送这些"),e("code",[t._v("Msg")]),t._v("来和应用程序状态进行交互："),e("code",[t._v("SetName")]),t._v("和"),e("code",[t._v("BuyName")]),t._v("。它们各自同其"),e("code",[t._v("Handler")]),t._v("关联。")]),t._v(" "),e("h3",{attrs:{id:"现在你已经更好地理解了-msgs-和-handler，可以开始构建你的第一条消息：setname。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现在你已经更好地理解了-msgs-和-handler，可以开始构建你的第一条消息：setname。"}}),t._v(" 现在你已经更好地理解了 Msgs 和 Handler，可以开始构建你的第一条消息："),e("router-link",{attrs:{to:"/nameservice/tutorial/cn/06-set-name.html"}},[e("code",[t._v("SetName")])]),t._v("。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);