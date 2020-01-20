(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{358:function(e,t,r){"use strict";r.r(t);var o=r(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"应用目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用目标"}}),e._v(" 应用目标")]),e._v(" "),r("p",[e._v("你正在构建的应用程序的目标是让用户购买域名并为其设置解析的值。给定域名的所有者将是当前最高出价者。在本节中，你将了解如何将这些简单需求转化为程序的设计。")]),e._v(" "),r("p",[e._v("区块链应用程序只是一个"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/State_machine_replication",target:"_blank",rel:"noopener noreferrer"}},[e._v("确定性的复制状态机"),r("OutboundLink")],1),e._v("。作为开发人员，你只需定义状态机（即状态，启动状态和触发状态转变的消息），"),r("a",{attrs:{href:"https://tendermint.com/docs/introduction/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("Tendermint")]),r("OutboundLink")],1),e._v(" 将通过网络为你处理进行复制。")]),e._v(" "),r("blockquote",[r("p",[e._v("Tendermint是一个与应用程序无关的引擎，负责处理区块链的网络层和共识层。实际上，这意味着Tendermint负责传播和排序交易字节。Tendermint Core依赖于拜占庭容错（BFT）算法来达成交易顺序的共识。点击"),r("a",{attrs:{href:"https://tendermint.com/docs/introduction/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1),e._v("了解更多Tendermint相关信息。")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),r("OutboundLink")],1),e._v(" 旨在帮助你构建状态机。SDK是一个模块化框架，意味着应用程序是通过将一组可互操作的模块集成在一起构建而成的。每个模块都包含自己的消息/交易处理器，而SDK负责将每条消息路由到其对应模块。")]),e._v(" "),r("p",[e._v("以下是nameservice应用程序所需的模块：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("auth")]),e._v(" : 此模块定义了账户和手续费，并为你应用程序的其余部分提供了访问这些功能的权限。")]),e._v(" "),r("li",[r("code",[e._v("bank")]),e._v(" : 此模块使得应用程序能够创建和管理token及余额。")]),e._v(" "),r("li",[r("code",[e._v("staking")]),e._v(" : This module enables the application to have validators that people can delegate to.")]),e._v(" "),r("li",[r("code",[e._v("distribution")]),e._v(" : This module give a functional way to passively distribute rewards between validators and delegators.")]),e._v(" "),r("li",[r("code",[e._v("slashing")]),e._v(" : This module disincentivizes people with value staked in the network, ie. Validators.")]),e._v(" "),r("li",[r("code",[e._v("supply")]),e._v(" : This module holds the total supply of the chain.")]),e._v(" "),r("li",[r("code",[e._v("nameservice")]),e._v(" : 此模块目前还不存在！其将处理你所构建的"),r("code",[e._v("nameservice")]),e._v("应用的核心逻辑。它是你构建应用程序时必须使用的主要部分。")])]),e._v(" "),r("blockquote",[r("p",[e._v("你可能会好奇为什么没有模块来处理验证人集合的变更。实际上，Tendermint依靠一组验证人来对下一个要添加至区块链的有效交易区块"),r("a",{attrs:{href:"https://tendermint.com/docs/introduction/introduction.html#consensus-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("达成共识"),r("OutboundLink")],1),e._v("。默认情况下，如果没有模块处理验证集合的变更，验证人集合将与创世文件"),r("code",[e._v("genesis.json")]),e._v("中定义的验证人集合保持一致。该应用程序就是这种情况。如果要允许更改应用程序的验证人集合，可以使用SDK的 "),r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/develop/x/staking",target:"_blank",rel:"noopener noreferrer"}},[e._v("staking 模块"),r("OutboundLink")],1),e._v("，或编写自己的模块！")])]),e._v(" "),r("p",[e._v("现在，看一下应用程序的两个主要部分：state（状态） 和 message（消息）类型。")]),e._v(" "),r("h2",{attrs:{id:"state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#state"}}),e._v(" State")]),e._v(" "),r("p",[e._v("state反映了特定时刻你的应用程序。它告诉了每个帐户拥有多少token，每个域名的所有者和价格，以及每个域名的解析值。")]),e._v(" "),r("p",[e._v("token 和帐户的 state 由"),r("code",[e._v("auth")]),e._v("和"),r("code",[e._v("bank")]),e._v("模块定义，这意味着你现在不必关心它。你需要做的是定义与你的"),r("code",[e._v("nameservice")]),e._v("模块特定相关部分state。")]),e._v(" "),r("p",[e._v("在 SDK 中，所有内容都存储在一个名为"),r("code",[e._v("multistore")]),e._v("的存储中。可以在此 multistore 中创建任意数量的键值对存储（在Cosmos SDK中称作"),r("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types#KVStore",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("KVStore")]),r("OutboundLink")],1),e._v("）。在本应用中，我们将使用一个 store 记录 "),r("code",[e._v("name")]),e._v(" 与 "),r("code",[e._v("whois")]),e._v(" 信息，"),r("code",[e._v("name")]),e._v(" 的 value、owner 和 price 将存储在一个结构中。")]),e._v(" "),r("h3",{attrs:{id:"message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#message"}}),e._v(" Message")]),e._v(" "),r("p",[e._v("message 包含在 transaction 中。它们负责触发 state 的转变。每个模块定义了一个 message 列表及如何去处理它们。下面这些 message 是你需要为你的 nameservice 应用去实现的：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("MsgSetName")]),e._v(": 此 message 允许域名的所有者为指定域名的"),r("code",[e._v("nameStore")]),e._v("设置一个值。")]),e._v(" "),r("li",[r("code",[e._v("MsgBuyName")]),e._v(": 此 message 允许账户去购买一个域名并在"),r("code",[e._v("ownerStore")]),e._v("中成为所有者。\n"),r("ul",[r("li",[e._v("当有人购买一个域名时，他们需要支付币之前所有者购买价格更高的费用。如果域名还没有人购买，那么他们需要燃烧最小价格（"),r("code",[e._v("MinPrice")]),e._v("）的代币。")])])])]),e._v(" "),r("p",[e._v("当一条交易（包含在区块中）到达一个Tendermint节点时，它将通过 "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI"),r("OutboundLink")],1),e._v(" 传递给应用程序并被解码以得到 message。然后将message路由至对应的模块，并根据定义在"),r("code",[e._v("Handler")]),e._v("中的逻辑来进行处理。如果 state 需要更新，"),r("code",[e._v("Handler")]),e._v("会调用"),r("code",[e._v("Keeper")]),e._v("来执行更新。你将在后面的教程了解有关这些概念的更多信息。")]),e._v(" "),r("h3",{attrs:{id:"现在你已经从高层视角完成了对应用程序的设计，是时候开始实现它了。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#现在你已经从高层视角完成了对应用程序的设计，是时候开始实现它了。"}}),e._v(" 现在你已经从高层视角完成了对应用程序的设计，是时候开始"),r("router-link",{attrs:{to:"/nameservice/tutorial/cn/02-app-init.html"}},[e._v("实现")]),e._v("它了。")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);