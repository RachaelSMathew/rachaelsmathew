(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{915:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/HeaderComponent",function(){return t(5948)}])},5948:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return f}});var i=t(5893),s=t(7294),a=(t(8510),t(8081)),o=t(8391),l=t(2255),r=t(8763),c=(t(1163),t(1664)),u=t(8719),d=t(4298);function h(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],i=!0,s=!1,a=void 0;try{for(var o,l=n[Symbol.iterator]();!(i=(o=l.next()).done)&&(t.push(o.value),!e||t.length!==e);i=!0);}catch(r){s=!0,a=r}finally{try{i||null==l.return||l.return()}finally{if(s)throw a}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=(0,a.Z)();function f(n){n.allPostsData;var e=h(s.useState(null),2),t=(e[0],e[1],(0,s.useState)(!1)),a=t[0],o=t[1],f=document.querySelector(".nav-links"),g=document.querySelectorAll(".nav-links li");document.addEventListener("DOMContentLoaded",(function(){f=document.querySelector(".nav-links"),g=document.querySelectorAll(".nav-links li")}));var k=function(n,e,t){this.toRotate=e,this.el=n,this.loopNum=0,this.period=parseInt(t,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return k.prototype.tick=function(){var n=this.loopNum%this.toRotate.length,e=this.toRotate[n];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span className="wrap">'+this.txt+"</span>";var t=this,i=300-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout((function(){t.tick()}),i)},window.onload=function(){for(var n=document.getElementsByClassName("txt-rotate"),e=0;e<n.length;e++){var t=n[e].getAttribute("data-rotate"),i=n[e].getAttribute("data-period");t&&new k(n[e],JSON.parse(t),i)}},(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(d.default,{dangerouslySetInnerHTML:{__html:'\n        function myFunction(x) {\n          if (x.matches) { // If media query matches\n        document.getElementsByClassName("txt-rotate")[0].style.display = "none"\n\n          } else {\n        document.getElementsByClassName("txt-rotate")[0].style.display = "inline"\n\n          }\n        }\n\n        var x = window.matchMedia("(max-width: 700px)")\n        myFunction(x) // Call listener function at run time\n        x.addListener(myFunction) // Attach listener function on state changes\n        '}}),(0,i.jsx)("nav",{children:(0,i.jsx)("ul",{className:"nav-links",children:(0,i.jsx)("li",{children:(0,i.jsx)(u.default,{})})})}),(0,i.jsxs)("div",{className:"topCornerIcons",children:[(0,i.jsx)("i",{className:a?"happy folderSize":"sad folderSize",onClick:function(){o((function(n){return!n})),f.classList.toggle("open"),g.forEach((function(n){n.classList.toggle("fade")})),console.log(document.body.style.overflow),"hidden"!==document.body.style.overflow?document.body.style.overflow="hidden":document.body.style.overflow="scroll"}}),(0,i.jsx)(c.default,{href:"https://docs.google.com/document/d/1fFVGajYntOaqsGKChvqbJ0vcTptNGk5hlVAgxbm6_SE/edit?usp=sharing",download:"Rachael's Resume",children:(0,i.jsx)("img",{className:"downloadIcon"})})]}),(0,i.jsx)(l.Z,{theme:m,children:(0,i.jsxs)(r.Z,{variant:"h5",align:"center",children:[(0,i.jsx)("div",{className:"mainFont",children:(0,i.jsxs)("h1",{children:["Rachael Mathew is a ",(0,i.jsx)("span",{id:"text-rotate-id",className:"txt-rotate","data-period":"2000","data-rotate":'[ "coder.", "writer.", "singer.", "chai enthusiast.", "person." ]'})]})})," "]})}),(0,i.jsx)(l.Z,{theme:m,children:(0,i.jsx)(r.Z,{variant:"h2",className:"myDIV",children:(0,i.jsx)("div",{id:"some-id"})})}),(0,i.jsx)("div",{className:"hide"})]})}m=(0,o.Z)(m)},8719:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return r}});var i=t(5893),s=t(4298),a=t(2660),o=t(5675),l={src:"/_next/static/media/recordingButton.dffb60a5.gif",height:820,width:1053};var r=function(){return(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(s.default,{dangerouslySetInnerHTML:{__html:'\n                    var textVoice = ["Press to ask Rachael a Question", "How tall is Rachael", "How is Rachael", "Who is Rachael"];\n                        var counterVoice = 0;\n                        var voiceText = document.getElementsByClassName("changeVoiceText")[0];\n                        setInterval(() => {\n                                voiceText.innerHTML = textVoice[counterVoice];\n                                counterVoice++;\n                                if (counterVoice >= textVoice.length) {\n                                  counterVoice = 0;\n                                }\n\n                    }, 3000);\n        \n                    var blinkingRecord = document.getElementsByClassName(\'blinkingRecord\')[0];\n                    blinkingRecord.style.display = "none";\n                    var buttonTalk = document.getElementsByClassName(\'talk\')[0];\n                    var contentTalk = document.getElementsByClassName(\'contentTalk\')[0];\n                    var answerTalk = document.getElementsByClassName(\'answerTalk\')[0];\n                    var SpeechRecognitionTalk = window.SpeechRecognitionTalk || window.webkitSpeechRecognition;\n                    var recognitionTalk = new SpeechRecognitionTalk();\n        recognitionTalk.onstart = function () {\n        blinkingRecord.style.display = "inline-block";\n        buttonTalk.style.display = "none";\n                    console.log("voice is activiated");\n                    contentTalk.innerHTML = "";\n                    answerTalk.innerHTML = "";\n                    buttonTalk.style.background = "grey";\n                    document.body.style.pointerEvents = "none";\n                    \n                };\n                recognitionTalk.onresult = function(event) {\n                    blinkingRecord.style.display = "none";\n                    document.body.style.pointerEvents = "auto";\n                    buttonTalk.style.display = "inline-block";\n                    buttonTalk.style.background = "white";\n                    const current = event.resultIndex;\n                    const transcript = event.results[current][0].transcript;\n                    contentTalk.innerHTML = transcript;\n                    console.log(transcript);\n                    if(transcript.includes("how old is Rachel")) {\n                        setTimeout(function(){\n                            answerTalk.style.color = "black";\n                            answerTalk.innerHTML = "She is 21 years old, but doesn\'t drink :)";\n                        },1000);\n                    }\n        if(transcript.includes("who is Rachel")) {\n            setTimeout(function(){\n                answerTalk.style.color = "black";\n                answerTalk.innerHTML = "An ambitious girl who\'s trying her best at life and happiness";\n            },1000);\n        }\n        \n        if(transcript.includes("how tall is Rachel")) {\n        setTimeout(function(){\n            answerTalk.style.color = "black";\n            answerTalk.innerHTML = "She\'s 7\'12";\n\n        },1000);\n        }\n        if(transcript.includes("how is Rachel")) {\n            setTimeout(function(){\n                answerTalk.style.color = "black";\n                answerTalk.innerHTML = "Amazing now that you\'re here!";\n            },1000);\n        }\n        else {\n            setTimeout(function(){\n                answerTalk.style.color = "black";\n                answerTalk.innerHTML = "Oops we don\'t have an answer for that yet!";\n            },1000);\n        }\n                };\n\n                '}}),(0,i.jsx)(a.E.button,{className:"talk",onClick:function(){return recognitionTalk.start()},whileHover:{scale:1.1,boxShadow:"0px 0px 8px rgb(75,0,130)"},children:(0,i.jsx)("h1",{className:"changeVoiceText",children:"Press to ask Rachael a Question"})}),(0,i.jsx)("div",{className:"blinkingRecord",children:(0,i.jsx)(o.default,{src:l,width:100,height:75})}),(0,i.jsx)("h1",{className:"contentTalk"}),(0,i.jsx)("h1",{className:"answerTalk"})]})}}},function(n){n.O(0,[675,660,255,43,774,888,179],(function(){return e=915,n(n.s=e);var e}));var e=n.O();_N_E=e}]);