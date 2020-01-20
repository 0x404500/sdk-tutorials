(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{204:function(e,t,n){e.exports=n.p+"assets/img/front-run.fe321a27.jpg"},336:function(e,t,n){"use strict";n.r(t);var a=n(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"the-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-game"}}),e._v(" The Game")]),e._v(" "),a("p",[e._v("The application we're building today can be used in many different ways but I'll be talking about it as "),a("strong",[e._v("scavenger hunt")]),e._v(" game. Scavenger hunts are all about someone setting up tasks or questions that challenge a participant to find solutions which come with some sort of a prize. The basic mechanics of the game are as follows:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Anyone can post a question with an encrypted answer.")])]),e._v(" "),a("li",[a("strong",[e._v("This question comes paired with a bounty of coins.")])]),e._v(" "),a("li",[a("strong",[e._v("Anyone can post an answer to this question, if they get it right, they receive the bounty of coins.")])])]),e._v(" "),a("p",[e._v("Something to note here is that when dealing with a public network with latency, it is possible that something like a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",target:"_blank",rel:"noopener noreferrer"}},[e._v("man-in-the-middle attack"),a("OutboundLink")],1),e._v(" could take place. Instead of pretending to be one of the parties, an attacker would take the sensitive information from one party and use it for their own benefit. This is actually called "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Front_running",target:"_blank",rel:"noopener noreferrer"}},[e._v("Front Running"),a("OutboundLink")],1),e._v(" and happens as follows:")]),e._v(" "),a("ol",[a("li",[e._v("You post the answer to some question with a bounty attacked to it.")]),e._v(" "),a("li",[e._v("Someone else sees you posting the answer and posts it themselves right before you.")]),e._v(" "),a("li",[e._v("Since they posted the answer first, they receive the reward instead of you.")])]),e._v(" "),a("p",[e._v("To prevent Front-Running, we will implement a "),a("strong",[e._v("commit-reveal")]),e._v(" scheme. A commit-reveal scheme converts a single exploitable interaction and turns it into two safe interactions.")]),e._v(" "),a("p",[a("strong",[e._v("The first interaction is the commit")]),e._v('. This is where you "commit" to posting an answer in a follow-up interaction. This commit consists of a cryptographic hash of your name combined with the answer that you think is correct. The app saves that value which is a claim that you know the answer but that it hasn\'t been confirmed whether the answer is correct.')]),e._v(" "),a("p",[a("strong",[e._v("The next interaction is the reveal")]),e._v(". This is where you post the answer in plaintext along with your name. The application will take your answer and your name and cryptographically hash them. If the result matches what you previously submitted during the commit stage, then it will be proof that it is in fact you who knows the answer, and not someone who is just front-running you.")]),e._v(" "),a("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:n(204)}}),e._v(" "),a("p",[e._v("A system like this could be used in tandem with any kind of gaming platform in a "),a("strong",[e._v("trustless")]),e._v(" way. Imagine you were playing the legend of Zelda and the game was compiled with all the answers to different scavenger hunts already included. When you beat a level the game could reveal the secret answer. Then either explicitly or behind the scenes, this answer could be combined with your name, hashed, submitted and subsequently revealed. Your name would be rewarded and you would have more points in the game.")]),e._v(" "),a("p",[e._v("Another way of achieving this would be to have an Access Control List where there was an admin account that the video game company controlled. This admin account could confirm that you beat the level and then give you points. The problem with this is that it creates a *"),a("strong",[e._v("single point of failure")]),e._v(" and a single target for trying to attack the system. If there is one key that rules the castle then the whole system is broken if that key is compromised. It also creates a problem with coordination if that Admin account has to be online all the time in order for players to get their points. If you use a commit reveal system then you have a more trustless architecture where you don't need permission to play. This design decision has benefits and drawbacks, but paired with a careful implementation it can allow your game to scale without a single bottle neck or point of failure.")]),e._v(" "),a("p",[e._v("Now that we know what we're building we can "),a("router-link",{attrs:{to:"/scavenge/tutorial/03-scaffold.html"}},[e._v("get started")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);