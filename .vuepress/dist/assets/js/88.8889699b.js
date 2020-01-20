(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{355:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}}),t._v(" 类型")]),t._v(" "),a("p",[t._v("我们要做的第一件事是定义一个结构，包含域名所有元数据。 依据 ICANN DNS 术语，我们之后将此结构称为 Whois。")]),t._v(" "),a("h2",{attrs:{id:"types-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-go"}}),t._v(" "),a("code",[t._v("types.go")])]),t._v(" "),a("p",[t._v("首先创建文件 "),a("code",[t._v("./x/nameservice/types.go")]),t._v(" 在其内定义模块自有类型，在 Cosmos SDK 应用中，习惯上将模块相关的代码放在 "),a("code",[t._v("./x/")]),t._v(" 文件夹中。")]),t._v(" "),a("h2",{attrs:{id:"whois"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whois"}}),t._v(" Whois")]),t._v(" "),a("p",[t._v("每个域名有三个预期相关的数据：")]),t._v(" "),a("ul",[a("li",[t._v("Value - 域名解析出为的值。这是任意字符串，但将来您可以修改它以要求它适合特定格式，例如IP地址，DNS区域文件或区块链地址。")]),t._v(" "),a("li",[t._v("Owner - 该域名当前所有者的地址。")]),t._v(" "),a("li",[t._v("Price - 你需要为购买域名支付的费用。")])]),t._v(" "),a("p",[t._v("要开始你的 SDK 模块，在 "),a("code",[t._v("nameservice/x/nameservice/internal/types/types.go")]),t._v("  文件中定义 "),a("code",[t._v("nameservice.Whois")]),t._v(" 结构。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" nameservice\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tsdk "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/cosmos-sdk/types"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Whois is a struct that contains all the metadata of a name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Whois "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tValue "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"value"`')]),t._v("\n\tOwner sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"owner"`')]),t._v("\n\tPrice sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"price"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在"),a("router-link",{attrs:{to:"/nameservice/tutorial/cn/01-app-design.html"}},[t._v("设计")]),t._v("文档中提到过，如果名称尚未有所有者，我们希望使用 MinPrice 对其进行初始化。")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MinNamePrice is Initial Starting Price for a name that was never previously owned")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" MinNamePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt64Coin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nametoken"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NewWhois returns a new Whois with the minprice as the price")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewWhois")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Whois "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Whois"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tPrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MinNamePrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"现在我们继续去编写-keeper-模块的代码。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现在我们继续去编写-keeper-模块的代码。"}}),t._v(" 现在我们继续去编写 "),a("router-link",{attrs:{to:"/nameservice/tutorial/cn/04-keeper.html"}},[t._v("Keeper")]),t._v(" 模块的代码。")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);