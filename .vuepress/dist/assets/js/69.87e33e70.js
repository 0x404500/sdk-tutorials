(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{374:function(t,s,n){"use strict";n.r(s);var e=n(1),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"the-keeper"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-keeper"}}),t._v(" The Keeper")]),t._v(" "),n("p",[t._v("The main core of a Cosmos SDK module is a piece called the "),n("code",[t._v("Keeper")]),t._v(". It is what handles interaction with the store, has references to other keepers for cross-module interactions, and contains most of the core functionality of a module.")]),t._v(" "),n("h2",{attrs:{id:"keeper-struct"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keeper-struct"}}),t._v(" Keeper Struct")]),t._v(" "),n("p",[t._v("To start your SDK module, define your "),n("code",[t._v("nameservice.Keeper")]),t._v(" in the "),n("code",[t._v("./x/nameservice/internal/keeper/keeper.go")]),t._v(" file. Defined in this generated file are a few extra items that we will not cover at this time, for this reason we will start by clearing the "),n("code",[t._v("keeper.go")]),t._v(" file in favor of following this tutorial.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" keeper\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/cosmos-sdk/codec"')]),t._v("\n\tsdk "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/cosmos-sdk/types"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/cosmos-sdk/x/bank"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/sdk-tutorials/nameservice/x/nameservice/types"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Keeper maintains the link to data storage and exposes getter/setter methods for the various parts of the state machine")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Keeper "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tCoinKeeper bank"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Keeper\n\n\tstoreKey  sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StoreKey "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unexposed key to access store from sdk.Context")]),t._v("\n\n\tcdc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("codec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The wire codec for binary encoding/decoding.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("A couple of notes about the above code:")]),t._v(" "),n("ul",[n("li",[t._v("3 different "),n("code",[t._v("cosmos-sdk")]),t._v(" packages are imported: - "),n("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/codec",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("codec")]),n("OutboundLink")],1),t._v(" - the "),n("code",[t._v("codec")]),t._v(" provides tools to work with the Cosmos encoding format, "),n("a",{attrs:{href:"https://github.com/tendermint/go-amino",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amino"),n("OutboundLink")],1),t._v(". - "),n("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/x/bank",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("bank")]),n("OutboundLink")],1),t._v(" - the "),n("code",[t._v("bank")]),t._v(" module controls accounts and coin transfers. - "),n("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("types")]),n("OutboundLink")],1),t._v(" - "),n("code",[t._v("types")]),t._v(" contains commonly used types throughout the SDK.")]),t._v(" "),n("li",[t._v("The "),n("code",[t._v("Keeper")]),t._v(" struct. In this keeper there are a couple of key pieces: - "),n("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/x/bank#Keeper",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("bank.Keeper")]),n("OutboundLink")],1),t._v(" - This is a reference to the "),n("code",[t._v("Keeper")]),t._v(" from the "),n("code",[t._v("bank")]),t._v(" module. Including it allows code in this module to call functions from the "),n("code",[t._v("bank")]),t._v(" module. The SDK uses an "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Object-capability_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("object capabilities"),n("OutboundLink")],1),t._v(" approach to accessing sections of the application state. This is to allow developers to employ a least authority approach, limiting the capabilities of a faulty or malicious module from affecting parts of state it doesn't need access to. - "),n("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/codec#Codec",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("*codec.Codec")]),n("OutboundLink")],1),t._v(" - This is a pointer to the codec that is used by Amino to encode and decode binary structs. - "),n("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types#StoreKey",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("sdk.StoreKey")]),n("OutboundLink")],1),t._v(" - This is a store key which gates access to a "),n("code",[t._v("sdk.KVStore")]),t._v(" which persists the state of your application: the Whois struct that the name points to (i.e. "),n("code",[t._v("map[name]Whois")]),t._v(").")])]),t._v(" "),n("h2",{attrs:{id:"getters-and-setters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getters-and-setters"}}),t._v(" Getters and Setters")]),t._v(" "),n("p",[t._v("Now it is time to add methods to interact with the stores through the "),n("code",[t._v("Keeper")]),t._v(". First, add a function to set the Whois a given name resolves to:")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sets the entire Whois metadata struct for a name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" whois types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Owner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tstore "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("KVStore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storeKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tstore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cdc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MustMarshalBinaryBare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("In this method, first get the store object for the "),n("code",[t._v("map[name]Whois")]),t._v(" using the the "),n("code",[t._v("storeKey")]),t._v(" from the "),n("code",[t._v("Keeper")]),t._v(".")]),t._v(" "),n("blockquote",[n("p",[n("em",[n("em",[t._v("NOTE")])]),t._v(": This function uses the "),n("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types#Context",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("sdk.Context")]),n("OutboundLink")],1),t._v(". This object holds functions to access a number of important pieces of the state like "),n("code",[t._v("blockHeight")]),t._v(" and "),n("code",[t._v("chainID")]),t._v(".")])]),t._v(" "),n("p",[t._v("Next, you insert the "),n("code",[t._v("<name, whois>")]),t._v(" pair into the store using its "),n("code",[t._v(".Set([]byte, []byte)")]),t._v(" method. As the store only takes "),n("code",[t._v("[]byte")]),t._v(", we use the Cosmos SDK encoding library called Amino to marshal the "),n("code",[t._v("Whois")]),t._v(" struct to "),n("code",[t._v("[]byte")]),t._v(" to be inserted into the store.")]),t._v(" "),n("p",[t._v("If the owner field of a Whois is empty, we do not write anything to the store, as all names that exist must have an owner.")]),t._v(" "),n("p",[t._v("Next, add a method to resolve the names (i.e. look up the "),n("code",[t._v("Whois")]),t._v(" for the "),n("code",[t._v("name")]),t._v("):")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Gets the entire Whois metadata struct for a name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Whois "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstore "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("KVStore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storeKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsNamePresent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tbz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" whois types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Whois\n\tk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cdc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MustUnmarshalBinaryBare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" whois\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Here, like in the "),n("code",[t._v("SetName")]),t._v(" method, first access the store using the "),n("code",[t._v("StoreKey")]),t._v(". Next, instead of using the "),n("code",[t._v("Set")]),t._v(" method on the store key, use the "),n("code",[t._v(".Get([]byte) []byte")]),t._v(" method. As the parameter into the function, pass the key, which is the "),n("code",[t._v("name")]),t._v(" string casted to "),n("code",[t._v("[]byte")]),t._v(", and get back the result in the form of "),n("code",[t._v("[]byte")]),t._v(". We once again use Amino, but this time to unmarshal the byteslice back into a "),n("code",[t._v("Whois")]),t._v(" struct which we then return.")]),t._v(" "),n("p",[t._v("If a name currently does not exist in the store, it returns a new Whois, which has the minimumPrice initialized in it.")]),t._v(" "),n("p",[t._v("Next, add a method to delete the names:")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Deletes the entire Whois metadata struct for a name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeleteWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstore "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("KVStore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storeKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tstore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Delete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Here, like in the "),n("code",[t._v("SetName")]),t._v(" method, first access the store using the "),n("code",[t._v("StoreKey")]),t._v(". Next, we delete the name from the store using its "),n("code",[t._v(".Delete([]byte)")]),t._v(" method. As the store only takes "),n("code",[t._v("[]byte")]),t._v(", the "),n("code",[t._v("name")]),t._v(" string is casted to "),n("code",[t._v("[]byte")]),t._v(" while passing it as a function parameter.")]),t._v(" "),n("p",[t._v("Now, we add functions for getting specific parameters from the store based on the name. However, instead of rewriting the store getters and setters, we reuse the "),n("code",[t._v("GetWhois")]),t._v(" and "),n("code",[t._v("SetWhois")]),t._v(" functions. For example, to set a field, first we grab the whole Whois data, update our specific field, and put the new version back into the store.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ResolveName - returns the string that the name resolves to")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ResolveName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SetName - sets the value string that a name resolves to")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twhois "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\twhois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n\tk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HasOwner - returns whether or not the name already has an owner")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("HasOwner")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Owner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetOwner - get the current owner of a name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetOwner")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Owner\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SetOwner - sets the current owner of a name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetOwner")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" owner sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twhois "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\twhois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Owner "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" owner\n\tk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetPrice - gets the current price of a name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPrice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Price\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SetPrice - sets the current price of a name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetPrice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" price sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twhois "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\twhois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Price "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" price\n\tk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check if the name is present in the store or not")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsNamePresent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstore "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("KVStore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storeKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Has")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("The SDK also includes a feature called an "),n("code",[t._v("sdk.Iterator")]),t._v(", which returns an iterator over all the "),n("code",[t._v("<Key, Value>")]),t._v(" pairs in a specific spot in a store.\nWe will add a function to get an iterator over all the names that exist in the store.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get an iterator over all names in which the keys are the names and the values are the whois")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNamesIterator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Iterator "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstore "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("KVStore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storeKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("KVStorePrefixIterator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("The last piece of code needed in the "),n("code",[t._v("./x/nameservice/internal/keeper/keeper.go")]),t._v(" file is a constructor function for "),n("code",[t._v("Keeper")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NewKeeper creates new instances of the nameservice Keeper")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewKeeper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coinKeeper bank"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" storeKey sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StoreKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cdc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("codec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Keeper "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Keeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tCoinKeeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" coinKeeper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstoreKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   storeKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcdc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        cdc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Next its time to move onto describing how users interact with your new store using "),n("code",[t._v("Msgs")]),t._v(" and "),n("code",[t._v("Handlers")])])])}),[],!1,null,null,null);s.default=a.exports}}]);