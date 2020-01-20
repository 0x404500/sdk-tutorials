(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{334:function(a,t,s){"use strict";s.r(t);var e=s(1),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"scaffold"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scaffold"}}),a._v(" Scaffold")]),a._v(" "),s("p",[a._v("We'll be using a tool called "),s("a",{attrs:{href:"https://github.com/cosmos/scaffold",target:"_blank",rel:"noopener noreferrer"}},[a._v("scaffold"),s("OutboundLink")],1),a._v(" to help us spin up a boilerplate app quickly. To use "),s("code",[a._v("scaffold")]),a._v(" first clone and install it on your local machine:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone git@github.com:cosmos/scaffold.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" scaffold\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\nscaffold --help\n")])])]),s("p",[a._v("Afterwards, you should see the following help screen displayed:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("This CLI helps "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" scaffolding out CosmosSDK based applications\n\nUsage:\n  scaffold "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nAvailable Commands:\n  app         Generates an empty application boilerplate\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("        Help about any "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n  module      Generate an empty module "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" the Cosmos-SDK\n  tutorial    Generates one of the tutorial apps, currently either the "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'nameservice'")]),a._v(" or "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hellochain'")]),a._v("\n\nFlags:\n  -c, --config string        config "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default is "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/.scaffold.yaml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -h, --help                 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" scaffold\n  -o, --output-path string   Path to output\n  -t, --toggle               Help message "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" toggle\n\nUse "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"scaffold [command] --help"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" information about a command.\n")])])]),s("p",[a._v("Now that you have the "),s("code",[a._v("scaffold")]),a._v(" command available try looking at the help screen of the "),s("code",[a._v("app")]),a._v(" command by typing "),s("code",[a._v("scaffold app --help")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Generates an empty application boilerplate\n\nUsage:\n  scaffold app "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("lvl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("repo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nFlags:\n  -h, --help   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" app\n\nGlobal Flags:\n  -c, --config string        config "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default is "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/.scaffold.yaml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -o, --output-path string   Path to output\n")])])]),s("p",[a._v("We will use this command to generate a basic boilerplate application. The parameter "),s("code",[a._v("lvl")]),a._v(" should be filled with "),s("code",[a._v("lvl-1")]),a._v(" (which is currently the only lvl available). You should use your own github username for "),s("code",[a._v("user")]),a._v(" and come up with a name for "),s("code",[a._v("repo")]),a._v(". I will be using "),s("code",[a._v("scavenge")]),a._v(" as the repo name for this tutorial. Using my own github handle ("),s("code",[a._v("okwme")]),a._v(") the final command should look like:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("scaffold app lvl-1 okwme scavenge\n")])])]),s("p",[a._v("This should generate a folder structure inside of a directory called "),s("code",[a._v("scavenge")]),a._v(" of your current working directory. Now that we have an app boilerplate we want to add some custom functionality to it and build our scavenge module. First change into the app directory with "),s("code",[a._v("cd scavenge")]),a._v(" then change into the modules directory with "),s("code",[a._v("cd x")]),a._v(". Now you can run the "),s("code",[a._v("module")]),a._v(" command of the "),s("code",[a._v("scaffold")]),a._v(" tool, but first check out the help screen of it with "),s("code",[a._v("scaffold module --help")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Generate an empty module "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" the Cosmos-SDK\n\nUsage:\n  scaffold module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("repo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("moduleName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nFlags:\n  -h, --help   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" module\n\nGlobal Flags:\n  -c, --config string        config "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default is "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/.scaffold.yaml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -o, --output-path string   Path to output\n")])])]),s("p",[a._v("Similarly, it asks for your github username as "),s("code",[a._v("user")]),a._v(" and the name repository name as "),s("code",[a._v("repo")]),a._v(". It also asks for the name you'd like to give to this new module. I will use the name "),s("code",[a._v("scavenge")]),a._v(" for the module as well.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("scaffold module okwme scavenge scavenge\n")])])]),s("p",[a._v("Now that we have generated a boilerplate application with a boilerplate module, our next step will be to define our "),s("router-link",{attrs:{to:"/scavenge/tutorial/04-messages.html"}},[a._v("Messages")]),a._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);