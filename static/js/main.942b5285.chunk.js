(this["webpackJsonpproomka-docs"]=this["webpackJsonpproomka-docs"]||[]).push([[0],{125:function(n,e,t){"use strict";t.r(e);var a,r,i,o,c,s,d,l,m,b,h,j=t(1),p=t.n(j),x=t(74),u=t.n(x),g=(t(81),t(2)),f=(t(82),t(3)),k=t(12),O=t(0),v=f.a.div(a||(a=Object(g.a)(["\n  z-index: 10000;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  height: 4rem;\n\n  border-bottom: 1px solid #2b313a;\n\n  background-color: var(--background-color);\n\n  .navbar-wrapper {\n    display: flex;\n    justify-content: space-between;\n    height: 4rem;\n    width: 80%;\n    margin: auto;\n\n    @media (max-width: 980px) {\n      width: 90%;\n    }\n\n    @media (max-width: 720px) {\n      width: 100%;\n    }\n\n    p {\n      font-size: 2.75rem;\n      margin: 0.5rem;\n      margin-block-start: 0;\n      margin-block-end: 0;\n      font-weight: 700;\n\n      background: linear-gradient(\n        45deg,\n        var(--primary),\n        var(--secondary),\n        var(--primary)\n      );\n      background-size: 200% auto;\n\n      background-clip: text;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n\n      animation: shine 5s ease-in-out infinite;\n      @keyframes shine {\n        to {\n          background-position: 200% center;\n        }\n      }\n    }\n\n    p.big {\n      @media (max-width: 720px) {\n        display: none;\n      }\n    }\n\n    p.small {\n      display: none;\n\n      margin-right: 0;\n\n      @media screen and (min-width: 0px) and (max-width: 720px) {\n        display: unset;\n        font-size: 2.75rem;\n        margin-top: 0.25rem;\n      }\n    }\n  }\n\n  .navbar-menu {\n    font-size: 1.5rem;\n    padding: 1rem;\n\n    a {\n      color: white;\n      text-decoration: none;\n      margin: 1rem;\n      transition: 250ms;\n\n      &:hover {\n        color: var(--secondary);\n      }\n\n      @media (max-width: 580px) {\n        font-size: 1.25rem;\n        margin: 1rem 0.5rem;\n      }\n    }\n\n    @media (max-width: 720px) {\n      padding: 1rem 0rem;\n    }\n  }\n"]))),w=function(n){return Object(O.jsx)(v,{children:Object(O.jsxs)("div",{className:"navbar-wrapper",children:[Object(O.jsxs)(k.c,{tag:k.b,to:"/",className:"normal",children:[Object(O.jsx)("p",{className:"big",children:"Proomka"}),Object(O.jsx)("p",{className:"small",children:"P"})]}),Object(O.jsx)("div",{className:"navbar-menu",children:Object(O.jsx)(k.c,{tag:k.b,to:"/docs",className:"normal",children:"Dokumentace"})})]})})},y=f.a.div(r||(r=Object(g.a)(['\n  width: 100%;\n  min-height: 100vh;\n\n  display: grid;\n  place-items: center;\n\n  cursor: default;\n\n  h1 {\n    align-self: end;\n    margin-top: 2rem;\n\n    font-size: 15vw;\n\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n  }\n\n  .used {\n    width: 100%;\n    height: auto;\n    align-self: end;\n    margin-bottom: 2rem;\n\n    .used-text-wrapper {\n      margin: 1rem auto;\n      width: 80%;\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n\n      @media (max-width: 1280px) {\n        width: 100%;\n      }\n\n      .double {\n        width: 45%;\n        text-align: center;\n\n        @media (max-width: 960px) {\n          display: flex;\n          flex-direction: column;\n        }\n      }\n\n      .used-text {\n        font-size: 1.5rem;\n        color: var(--background-color-tertiary);\n        margin: auto;\n        text-align: center;\n\n        text-decoration: none;\n\n        transition: 150ms;\n\n        &:hover {\n          color: white;\n        }\n\n        &:nth-child(1) {\n          margin-right: 2rem;\n        }\n\n        @media (max-width: 1690px) {\n          flex: 50%;\n          font-size: 1.25rem;\n        }\n        @media (max-width: 960px) {\n          flex: 100%;\n\n          width: 100%;\n          margin-bottom: 1rem;\n        }\n      }\n    }\n\n    .rentals {\n      font-family: "Playfair Display", serif;\n      font-weight: 800;\n      padding-bottom: 6px;\n    }\n  }\n\n  .border-displacement {\n    height: 1rem;\n    width: 80%;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    @media (max-width: 1280px) {\n      width: 100%;\n    }\n\n    .border-line {\n      float: left;\n      width: 45%;\n      height: 1px;\n      border-top: 1px var(--background-color-tertiary) solid;\n    }\n  }\n']))),z=function(n){return Object(O.jsxs)(y,{children:[Object(O.jsx)("h1",{children:"Proomka"}),Object(O.jsxs)("div",{className:"used",children:[Object(O.jsxs)("div",{className:"border-displacement",children:[Object(O.jsx)("div",{className:"border-line"}),Object(O.jsx)("svg",{height:"16",width:"16",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",color:"var(--background-color-tertiary)",children:Object(O.jsx)("circle",{cx:"50",cy:"50",r:"50",fill:"var(--background-color-tertiary)"})}),Object(O.jsx)("div",{className:"border-line"})]}),Object(O.jsxs)("div",{className:"used-text-wrapper",children:[Object(O.jsxs)("div",{className:"double",children:[Object(O.jsx)("a",{href:"https://rentals.pslib.cloud/",className:"rentals used-text",children:"Rentals"}),Object(O.jsx)("a",{href:"https://prace2.pslib.cloud/",className:"used-text",children:"Dlouhodob\xe9 pr\xe1ce"})]}),Object(O.jsxs)("div",{className:"double",children:[Object(O.jsx)("a",{href:"xxxxxx",className:"used-text",children:"Soboty s technikou"}),Object(O.jsx)("a",{href:"https://praxe2.pslib.cloud/",className:"used-text",children:"Spr\xe1va prax\xed"})]})]})]})]})},N=t(4),C=t.p+"static/media/card.183032ea.svg",P=f.a.div(i||(i=Object(g.a)(['\n  width: 85%;\n  height: auto;\n\n  display: grid;\n  grid-template-columns: 50% auto;\n  grid-template-rows: 25% auto;\n  gap: 4rem;\n  grid-template-areas:\n    "header text"\n    "image text";\n\n  @media (max-width: 720px) {\n    text-align: center;\n\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n    gap: 2rem;\n    grid-template-areas:\n      "header"\n      "image"\n      "text";\n  }\n\n  .header {\n    grid-area: header;\n  }\n  .text {\n    display: grid;\n    place-items: start;\n    grid-area: text;\n\n    div {\n      height: 100%;\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n    }\n  }\n  .image {\n    grid-area: image;\n    height: 100%;\n    min-height: 40vh;\n    max-width: 100%;\n\n    @media (max-width: 1440px) {\n      min-height: 30vh;\n    }\n\n    @media (max-width: 720px) {\n      margin: auto;\n    }\n  }\n\n  background: linear-gradient(45deg, #0b111bc1, #2b313adf);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n\n  border-radius: 2rem;\n\n  margin: 8rem 0;\n  padding: 7.5%;\n\n  color: white;\n  font-size: 3vh;\n  font-weight: 300;\n\n  @media (max-width: 1440px) {\n    font-size: 2.5vh;\n  }\n  @media (max-width: 1280px) {\n    font-size: 1.5rem;\n  }\n\n  @media (max-width: 980px) {\n    font-size: 1.25rem;\n  }\n\n  @media (max-width: 720px) {\n    margin: 4rem 0;\n    font-size: 1rem;\n  }\n\n  span {\n    font-weight: 700;\n\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n  }\n\n  h2 {\n    font-size: 4rem;\n    font-weight: 700;\n    text-align: left;\n\n    @media (max-width: 980px) {\n      font-size: 3rem;\n    }\n\n    @media (max-width: 720px) {\n      text-align: center;\n    }\n\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n  }\n']))),S=function(n){return Object(O.jsxs)(P,{children:[Object(O.jsx)("h2",{className:"header",children:"O co jde?"}),Object(O.jsx)("div",{className:"text",children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["Jedn\xe1 se o open-source stylovou knihovnu obsahuj\xedc\xed"," ",Object(O.jsx)("span",{children:"jednotn\xfd styl"}),".",Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}),Object(O.jsxs)("p",{children:["C\xedlem je snaha o jednotn\xe9 pou\u017eit\xed nap\u0159\xed\u010d aplikacemi pou\u017e\xedvan\xe9 \u0161kolou ve v\xfdvojov\xe9m prost\u0159ed\xed Reactu. Proto se v dokumentaci nach\xe1z\xed nejen"," ",Object(O.jsx)("span",{children:"p\u0159ehled designu"})," ale i ",Object(O.jsx)("span",{children:"komponenty"})," k pou\u017eit\xed ve va\u0161ich projektech."]})]})}),Object(O.jsx)("img",{src:C,alt:"card",className:"image"})]})},H=t(7),T=t.n(H),B=f.a.button(o||(o=Object(g.a)(["\n  height: auto;\n  min-height: 3rem;\n  width: auto;\n  min-width: 6rem;\n\n  padding: 2rem 4rem;\n\n  font-size: 1.5rem;\n  font-weight: 600;\n\n  background-color: var(--background-color);\n  color: white;\n\n  border-radius: 2rem;\n  border: 0.25rem solid white;\n\n  display: block;\n  margin: auto;\n  margin-bottom: ",";\n\n  transition: 250ms ease-in-out;\n\n  &:hover {\n    background-color: var(--primary);\n    color: white;\n    cursor: pointer;\n    border: 0.25rem solid var(--primary);\n  }\n"])),(function(n){return n.bottomMargin?"4rem":"0"})),D=function(n){var e=Object(N.f)();return Object(O.jsx)(B,{bottomMargin:n.bottomMargin,onClick:function(){e.push("/docs"),window.scrollTo(0,0),setTimeout((function(){document.querySelector("body").scrollTo(0,0)}),0)},children:"\u0160up na to"})},M=f.a.div(c||(c=Object(g.a)(["\n  width: 90%;\n  padding: 5%;\n  height: auto;\n\n  border-radius: 2rem;\n\n  background: linear-gradient(45deg, #0b111bc1, #2b313adf);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n\n  box-shadow: 0 8px 20px 0px #0000003b;\n\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  .navigator {\n    width: 20%;\n    aspect-ratio: 4/3;\n\n    padding: 1rem;\n\n    color: white;\n    text-align: center;\n\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n\n    transition: 250ms ease-in-out;\n\n    border-radius: 2rem;\n\n    @media (max-width: 1440px) {\n      width: 35%;\n      margin: 2.5%;\n    }\n    @media (max-width: 720px) {\n      width: 80%;\n      margin: 10%;\n      aspect-ratio: unset;\n      height: auto;\n    }\n\n    p {\n      margin: 1rem 0;\n    }\n\n    &:hover {\n      background-color: var(--background-color-tertiary);\n      cursor: pointer;\n\n      .fas {\n        transition: 250ms ease-in-out;\n        border: solid var(--background-color-secondary) 4px;\n      }\n    }\n  }\n\n  .fas {\n    font-size: 4rem;\n    border: solid var(--background-color-tertiary) 4px;\n    border-radius: 100%;\n\n    transition: 250ms ease-in-out;\n\n    width: min-content;\n    padding: 2rem;\n    margin: 0 auto;\n\n    aspect-ratio: 1/1;\n\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary),\n      var(--secondary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n  }\n"]))),q=function(n){return Object(O.jsxs)(M,{children:[Object(O.jsxs)("div",{className:"navigator",onClick:function(){return document.querySelector("#basics").scrollIntoView({behavior:"smooth"})},children:[Object(O.jsx)("i",{className:"fas fa-shapes"}),Object(O.jsx)("p",{children:"Z\xe1klady, kter\xe9 ud\xe1v\xe1j\xed spole\u010dn\xfd vzhled nap\u0159\xed\u010d aplikacemi"})]}),Object(O.jsxs)("div",{className:"navigator",onClick:function(){return document.querySelector("#components").scrollIntoView({behavior:"smooth"})},children:[Object(O.jsx)("i",{className:"fas fa-layer-group"}),Object(O.jsx)("p",{children:"Komponenty, se kter\xfdmi m\u016f\u017eete stav\u011bt z\xe1klady va\u0161ich aplikac\xed"})]}),Object(O.jsxs)("div",{className:"navigator",onClick:function(){return document.querySelector(".#edit").scrollIntoView({behavior:"smooth"})},children:[Object(O.jsx)("i",{className:"fas fa-pen"}),Object(O.jsx)("p",{children:"Jak postupovat, kdy\u017e chceme upravovat styly"})]}),Object(O.jsxs)("div",{className:"navigator",onClick:function(){return document.querySelector("#download").scrollIntoView({behavior:"smooth"})},children:[Object(O.jsx)("i",{className:"fas fa-download"}),Object(O.jsx)("p",{children:"Jak za\u010d\xedt pou\u017e\xedvat Proomku (sta\u017een\xed) + odkazy"})]})]})},A=f.a.div(s||(s=Object(g.a)(["\n  height: auto;\n  width: 100%;\n\n  background-color: black;\n\n  margin-top: 8rem;\n\n  scroll-margin: 3rem;\n\n  h2 {\n    padding: 2rem;\n    font-size: 4.5rem;\n    font-weight: 700;\n    text-align: center;\n\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n\n    @media (max-width: 720px) {\n      font-size: 2.75rem;\n      padding: 1rem;\n    }\n  }\n\n  h3 {\n    padding: 1.5rem 0;\n    margin-left: 10%;\n    font-size: 4rem;\n    font-weight: 700;\n    margin-top: 6rem;\n\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n\n    @media (max-width: 720px) {\n      font-size: 2.75rem;\n      margin-top: 3rem;\n    }\n  }\n\n  p {\n    font-size: 2rem;\n    color: white;\n    opacity: 0.85 !important;\n    font-weight: 200;\n\n    width: 80%;\n    padding: 4rem 10%;\n    height: auto;\n\n    span {\n      font-weight: 400;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 1.75rem;\n      padding: 2rem 10%;\n    }\n\n    &.desc {\n      font-style: italic;\n      opacity: 0.5 !important;\n      font-size: 1.75rem;\n\n      @media (max-width: 720px) {\n        font-size: 1.25rem;\n      }\n    }\n\n    &.short {\n      max-width: 50%;\n\n      @media (max-width: 720px) {\n        max-width: 100%;\n      }\n    }\n  }\n"]))),I=f.a.div(d||(d=Object(g.a)(["\n  width: 75%;\n  padding: 0 5%;\n\n  height: auto;\n  min-height: 4rem;\n  overflow: auto;\n\n  border-radius: 2rem;\n\n  margin: auto;\n\n  background-color: white;\n\n  &.img {\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n  }\n"]))),V=f.a.div(l||(l=Object(g.a)(["\n  float: left;\n  text-align: center;\n\n  border-radius: 2rem;\n\n  margin: 0.75rem 2rem;\n  padding: 0 1rem;\n\n  .colorExample {\n    float: left;\n    padding: 0.5rem;\n  }\n  .color {\n    color: ",";\n  }\n  .color-button {\n    background-color: ",";\n    color: ",";\n    border-radius: 2rem;\n    padding: 0.5rem 1.5rem;\n    box-shadow: 0 8px 20px 0px #0000003b;\n  }\n"])),(function(n){return n.darkText?"black":n.color}),(function(n){return n.color}),(function(n){return n.darkText?"black":"white"})),J=function(n){return Object(O.jsxs)(V,{color:n.color,darkText:n.darkText,children:[Object(O.jsx)("div",{className:"color colorExample",children:n.color}),Object(O.jsx)("div",{className:"color-button colorExample",children:n.text})]})},E=f.a.div(m||(m=Object(g.a)(["\n  background-color: #f7f7f7;\n  border-radius: 2.5rem;\n  box-shadow: 0 8px 20px 0px #0000003b;\n  transition: 350ms;\n  width: 16rem;\n  position: relative;\n  max-width: calc(100% - 4rem);\n  height: auto;\n  display: grid;\n  margin: 2rem;\n  float: left;\n  text-align: center;\n\n  &.sharp {\n    border-radius: 0;\n  }\n  &.blank {\n    box-shadow: unset;\n  }\n  &.see {\n    background: linear-gradient(45deg, #0b111bc1, #2b313adf);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n\n    width: 16rem;\n    height: 8rem;\n  }\n  &.see2 {\n    background: linear-gradient(45deg, #0b111b, #2b313a);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n\n    width: 16rem;\n    height: 8rem;\n  }\n  &.see3 {\n    background: linear-gradient(45deg, #0b111b76, #2b313a76);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n\n    width: 16rem;\n    height: 8rem;\n  }\n"]))),F=f.a.div(b||(b=Object(g.a)(["\n  max-width: 100%;\n  margin: 1rem;\n  font-size: 1.5rem;\n  height: auto;\n  p {\n    max-width: 250px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]))),L=f.a.div(h||(h=Object(g.a)(["\n  margin: 0.75rem;\n  font-size: 1rem;\n  color: grey;\n  height: auto;\n  p {\n    max-width: 250px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]))),Z=function(n){return Object(O.jsxs)(A,{id:"basics",children:[Object(O.jsx)("h2",{children:"Z\xe1klady"}),Object(O.jsx)("p",{className:"desc",children:"To nejd\u016fle\u017eit\u011bj\u0161\xed, co tato dokumentace nab\xedz\xed. A\u0165 u\u017e se jedn\xe1 o barvi\u010dky, zakulacen\xe9 hrany nebo celkov\xfd mood aplikace..."}),Object(O.jsx)("h3",{children:"Barvy"}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsx)("p",{className:"short",children:"Nap\u0159\xed\u010d aplikacemi budete pou\u017e\xedvat spoustu r\u016fzn\xfdch barvi\u010dek. Proto je dobr\xe9 si ur\u010dit n\u011bjak\xe9 z\xe1kladn\xed a pojmenovat je."}),Object(O.jsxs)(I,{children:[Object(O.jsx)(J,{color:"#007784",text:"Primary (blue)"}),Object(O.jsx)(J,{color:"#d05555",text:"Danger (red)"}),Object(O.jsx)(J,{color:"#00ae7c",text:"Accept (green)"}),Object(O.jsx)(J,{color:"#d0b055",text:"Warning (yellow)"}),Object(O.jsx)(J,{color:"#f7f7f7",text:"Light Background (bgLight)",darkText:!0}),Object(O.jsx)(J,{color:"#2b313a",text:"Dark Background (bgDark)"})]}),Object(O.jsxs)("p",{className:"short",children:["Barvy se daj\xed dob\u0159e vyu\u017e\xedt, nap\u0159\xedklad p\u0159i stylov\xe1n\xed"," ",Object(O.jsx)("span",{children:"tla\u010d\xedtek a pozad\xed"}),"."]})]}),Object(O.jsx)("h3",{children:"Elevace"}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsxs)("p",{className:"short",children:["P\u0159i pou\u017eit\xed elevace se jedn\xe1 o efekt",Object(O.jsx)("span",{children:" vyzdvyhnut\xed nad pozad\xed"}),". Jednodu\u0161e pou\u017eijeme st\xedny, kter\xe9 do aplikace p\u0159idaj\xed reali\u010dnost a vdechnou komponent\u011b \u017eivot."]}),Object(O.jsxs)(I,{children:[Object(O.jsxs)(E,{children:[Object(O.jsx)(F,{children:"Hlavi\u010dka"}),Object(O.jsx)(L,{children:"Popisek"})]}),Object(O.jsxs)(E,{className:"blank",children:[Object(O.jsx)(F,{children:"Hlavi\u010dka"}),Object(O.jsx)(L,{children:"Popisek"})]})]}),Object(O.jsx)("p",{className:"desc",children:"box-shadow: 0 8px 20px 0px #0000003b;"}),Object(O.jsx)("p",{className:"short",children:"V\u011bt\u0161inou tento efekt vyu\u017eijeme na pozad\xed, co se od sebe moc neli\u0161\xed."})]}),Object(O.jsx)("h3",{children:"Zaoblen\xed"}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsxs)("p",{className:"short",children:["Zaoblen\xe9 hrany se u\u017e pou\u017e\xedvaj\xed skoro v\u0161ude. D\u016fvod? Vypadaj\xed"," ",Object(O.jsx)("span",{children:"dob\u0159e"})," a ",Object(O.jsx)("span",{children:"p\u0159\xe1telsky"})," na oko. Proto komponenty zaobl\xedme."]}),Object(O.jsxs)(I,{children:[Object(O.jsx)(E,{children:Object(O.jsx)(F,{children:"Hlavi\u010dka"})}),Object(O.jsx)(E,{className:"sharp",children:Object(O.jsx)(F,{children:"Hlavi\u010dka"})}),Object(O.jsx)(E,{className:"sharp blank",children:Object(O.jsx)(F,{children:"Hlavi\u010dka"})})]}),Object(O.jsx)("p",{className:"desc",children:"border-radius: 2.5rem;"}),Object(O.jsx)("p",{className:"short",children:"Velikost zaoblen\xed by m\u011bla z\xe1viset na m\xedst\u011b pou\u017e\xedt\xed komponenty, v\u011bt\u0161ina p\u0159\xedpad\u016f ale pou\u017eije 2rem a\u017e 2.5rem."})]}),Object(O.jsx)("h3",{children:"Pr\u016fhlednost"}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsxs)("p",{className:"short",children:['A\u010dkoliv pr\u016fhlednost prakticky skoro nikde nevyu\u017eijeme, st\xe1le se d\xe1 vyu\u017e\xedt v designu komponent "p\u0159es sebe" a nebo kdy\u017e chceme vid\u011bt pozad\xed. Dobr\xfd p\u0159\xedklad je t\u0159eba ',Object(O.jsx)("span",{children:"\xfavodn\xed str\xe1nka Proomky"}),"."]}),Object(O.jsxs)(I,{className:"img",children:[Object(O.jsx)(E,{className:"see2"}),Object(O.jsx)(E,{className:"see"}),Object(O.jsx)(E,{className:"see3"})]}),Object(O.jsxs)("p",{className:"desc",children:["background: linear-gradient(45deg, #0b111b76, #2b313a76);",Object(O.jsx)("br",{}),"backdrop-filter: blur(4px);",Object(O.jsx)("br",{}),"-webkit-backdrop-filter: blur(4px);"]})]})]})};var K,R,Y,W,G,Q=Object(N.g)((function(n){var e=n.history,t=n.children;return Object(j.useEffect)((function(){var n=e.listen((function(){setTimeout((function(){document.querySelector("body").scrollTo({top:0,left:0,behavior:"instant"})}),0)}));return function(){n()}}),[]),Object(O.jsx)(j.Fragment,{children:t})})),U=t(76),X=t(6),$=f.a.div(K||(K=Object(g.a)(["\n  height: auto;\n  width: 100%;\n\n  background-color: black;\n\n  padding-top: 16rem;\n\n  scroll-margin: 3rem;\n\n  h2 {\n    padding: 2rem;\n    font-size: 4.5rem;\n    font-weight: 700;\n    text-align: center;\n\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n\n    @media (max-width: 720px) {\n      font-size: 2.75rem;\n      padding: 1rem;\n    }\n  }\n\n  h3 {\n    padding: 1.5rem 0;\n    margin-left: 10%;\n    font-size: 4rem;\n    font-weight: 700;\n    margin-top: 6rem;\n    display: flex;\n    align-items: center;\n\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n\n    @media (max-width: 720px) {\n      font-size: 2.75rem;\n      margin-top: 3rem;\n    }\n\n    .far,\n    .fas {\n      padding-left: 2rem;\n    }\n  }\n\n  p.short {\n    font-size: 2rem;\n    color: white;\n    opacity: 0.85 !important;\n    font-weight: 200;\n\n    width: 80%;\n    padding: 4rem 10%;\n    height: auto;\n\n    span {\n      font-weight: 400;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 1.75rem;\n      padding: 2rem 10%;\n    }\n\n    &.desc {\n      font-style: italic;\n      opacity: 0.5 !important;\n      font-size: 1.75rem;\n\n      @media (max-width: 720px) {\n        font-size: 1.25rem;\n      }\n    }\n\n    &.short {\n      max-width: 50%;\n\n      @media (max-width: 720px) {\n        max-width: 100%;\n      }\n    }\n  }\n\n  .proomka-alert {\n    margin: 2rem;\n    float: left;\n  }\n\n  .proomka-card {\n    margin: 2rem;\n    float: left;\n  }\n\n  a {\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n    background-size: 200% auto;\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    animation: shine 5s ease-in-out infinite;\n    @keyframes shine {\n      to {\n        background-position: 200% center;\n      }\n    }\n  }\n"]))),_=f.a.div(R||(R=Object(g.a)(["\n  width: 75%;\n  padding: 0 5%;\n\n  height: auto;\n  min-height: 4rem;\n  overflow: auto;\n\n  border-radius: 2rem;\n\n  margin: auto;\n\n  background-color: white;\n\n  &.img {\n    background: linear-gradient(\n      45deg,\n      var(--primary),\n      var(--secondary),\n      var(--primary)\n    );\n  }\n\n  &.pos {\n    position: relative;\n    min-height: 12rem;\n  }\n\n  .proomka-card {\n    max-width: calc(100% - 4rem);\n    cursor: default;\n  }\n  .proomka-alert {\n    max-width: calc(100% - 4rem);\n  }\n  .proomka-badge {\n    cursor: pointer;\n  }\n"]))),nn=function(n){var e=Object(j.useState)(!1),t=Object(U.a)(e,2),a=t[0],r=t[1];return Object(O.jsxs)($,{id:"components",children:[Object(O.jsx)("div",{onClick:function(){setTimeout((function(){r(!1)}),500)},children:a?Object(O.jsx)(X.Modal,{}):null}),Object(O.jsx)("h2",{children:"Komponenty"}),Object(O.jsxs)("h3",{children:["Alert ",Object(O.jsx)("i",{className:"far fa-bell"})]}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsxs)("p",{className:"short",children:["Jednoduch\xfd alert box slou\u017e\xedc\xed k zobrazen\xed stavov\xe9 zpr\xe1vy. Pou\u017e\xedv\xe1 t\u0159\xeddu ",Object(O.jsx)("span",{children:"proomka-alert"}),".",Object(O.jsx)("br",{}),"Po kliknut\xed alert zmiz\xed."]}),Object(O.jsxs)(_,{children:[Object(O.jsxs)(X.Alert,{textColor:"white",width:"16rem",height:"4rem",color:"#00ae7c",children:[Object(O.jsx)("i",{className:"far fa-check-circle icon"})," \xdasp\u011b\u0161n\u011b odhl\xe1\u0161en"]}),Object(O.jsxs)(X.Alert,{textColor:"white",width:"16rem",height:"4rem",color:"#d05555",children:[Object(O.jsx)("i",{className:"fas fa-exclamation-circle icon"})," Neplatn\xe1 operace"]}),Object(O.jsxs)(X.Alert,{textColor:"white",width:"16rem",height:"4rem",color:"#007784",children:[Object(O.jsx)("i",{className:"fas fa-info-circle icon"})," Tohle je dlouh\xe1 zpr\xe1va"]})]}),Object(O.jsxs)("p",{className:"short desc",children:["id = id komponenty",Object(O.jsx)("br",{}),'height = v\xfd\u0161ka ("4rem")',Object(O.jsx)("br",{}),'width = \u0161\xed\u0159ka ("12rem")',Object(O.jsx)("br",{}),'color = barva pozad\xed ("#007784")',Object(O.jsx)("br",{}),'textColor = barva textu ("white")',Object(O.jsx)("br",{}),'delay = doba trv\xe1n\xed zobrazen\xed v ms, pokud je nastavena ("3000")']})]}),Object(O.jsxs)("h3",{children:["Badge ",Object(O.jsx)("i",{className:"fas fa-certificate"})]}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsxs)("p",{className:"short",children:["Komponenta pro viditeln\xe9 zobrazen\xed a upozorn\u011bn\xed na n\u011bjakou vlastnost. Pou\u017e\xedv\xe1 t\u0159\xeddu ",Object(O.jsx)("span",{children:"proomka-badge"}),"."]}),Object(O.jsxs)(_,{children:[Object(O.jsx)(X.Card,{color:"#007784",width:"16rem",height:"16rem",children:Object(O.jsx)(X.Badge,{top:"1rem",right:"1rem",color:"#fff",textColorHover:"orange",children:Object(O.jsx)("i",{className:"fas fa-moon"})})}),Object(O.jsx)(X.Card,{color:"#2b313a",width:"16rem",height:"16rem",children:Object(O.jsx)(X.Badge,{top:"1rem",right:"1rem",textColor:"grey",color:"#46464648",colorHover:"#f1f1f148",textColorHover:"white",children:Object(O.jsx)("i",{className:"fas fa-heart"})})}),Object(O.jsx)(X.Card,{color:"#fff",width:"16rem",height:"16rem",children:Object(O.jsx)(X.Badge,{top:"1rem",right:"1rem",colorHover:"#d055553e",textColor:"#d05555",textColorHover:"#d43b3b",children:Object(O.jsx)("i",{className:"fas fa-exclamation"})})}),Object(O.jsx)(X.Card,{color:"#d0b055",width:"16rem",height:"16rem",children:Object(O.jsx)(X.Badge,{top:"1rem",right:"1rem",colorHover:"white",color:"#ffc21c",textColor:"white",textColorHover:"#ffc21c",children:Object(O.jsx)("i",{className:"fas fa-question"})})})]}),Object(O.jsxs)("p",{className:"short desc",children:["id = id komponenty",Object(O.jsx)("br",{}),'height = v\xfd\u0161ka ("4rem")',Object(O.jsx)("br",{}),'width = \u0161\xed\u0159ka ("12rem")',Object(O.jsx)("br",{}),'color = barva pozad\xed ("#007784")',Object(O.jsx)("br",{}),'textColor = barva textu ("white")',Object(O.jsx)("br",{}),'colorHover = barva pozad\xed p\u0159i p\u0159ejet\xed ("#007784")',Object(O.jsx)("br",{}),'textColorHover = barva textu p\u0159i p\u0159ejet\xed ("white")',Object(O.jsx)("br",{}),'top = odsazen\xed naho\u0159e ("1rem")',Object(O.jsx)("br",{}),'right = odsazen\xed vpravo ("1rem")']})]}),Object(O.jsxs)("h3",{children:["Card ",Object(O.jsx)("i",{className:"far fa-square"})]}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsxs)("p",{className:"short",children:["Slou\u017e\xed jako kontejner k zobrazov\xe1n\xed obsahu na r\u016fzn\xe9 zp\u016fsoby. Pou\u017e\xedv\xe1 t\u0159\xeddu ",Object(O.jsx)("span",{children:"proomka-card"}),"."]}),Object(O.jsxs)(_,{children:[Object(O.jsx)(X.Card,{color:"#007784",width:"16rem",height:"9rem",isScalable:!0}),Object(O.jsx)(X.Card,{color:"#2b313a",width:"16rem",height:"9rem",isScalable:!0}),Object(O.jsx)(X.Card,{color:"#fff",width:"16rem",height:"9rem",isScalable:!0})]}),Object(O.jsxs)("p",{className:"short desc",children:["id = id komponenty",Object(O.jsx)("br",{}),'height = v\xfd\u0161ka ("4rem")',Object(O.jsx)("br",{}),'width = \u0161\xed\u0159ka ("12rem")',Object(O.jsx)("br",{}),'color = barva pozad\xed ("#007784")',Object(O.jsx)("br",{}),'textColor = barva textu ("white")',Object(O.jsx)("br",{}),"isScalable = zv\u011bt\u0161en\xed p\u0159i p\u0159ejet\xed"]})]}),Object(O.jsxs)("h3",{children:["Modal ",Object(O.jsx)("i",{className:"fas fa-layer-group"})]}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsxs)("p",{className:"short",children:["Modalov\xe1 komponenta pro zobrazen\xed potvrzen\xed nebo formul\xe1\u0159\u016f. Pou\u017e\xedv\xe1 t\u0159\xeddy ",Object(O.jsx)("span",{children:"proomka-modal a proomka-modal-content"}),"."]}),Object(O.jsx)(_,{className:"pos",children:Object(O.jsx)(X.Badge,{top:"1rem",right:"1rem",textColor:"grey",color:"#46464648",colorHover:"#00000046",textColorHover:"black",onClick:function(){return r(!0)},children:Object(O.jsx)("i",{className:"fas fa-layer-group"})})}),Object(O.jsxs)("p",{className:"short",children:["V\u0161e uvnit\u0159 se zarovn\xe1 na \xfapln\xfd st\u0159ed obrazovky a"," ",Object(O.jsx)("span",{children:"nen\xed scrollovateln\xfd"}),"."]})]}),Object(O.jsxs)("h3",{children:["Switch ",Object(O.jsx)("i",{className:"fas fa-toggle-on"})]}),Object(O.jsxs)(T.a,{bottom:!0,className:"wrap",children:[Object(O.jsxs)("p",{className:"short",children:["Toggle komponenta pro leh\u010d\xed pr\xe1ci z formul\xe1\u0159i. Pou\u017e\xedv\xe1 t\u0159\xeddy"," ",Object(O.jsx)("span",{children:"proomka-switch, proomka-switch-input, proomka-switch-label a proomka-switch-knob"}),".",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Design styled-components:"," ",Object(O.jsx)("a",{href:"https://www.instagram.com/frontendjoe/",children:"https://www.instagram.com/frontendjoe/"})]}),Object(O.jsx)(_,{className:"pos",children:Object(O.jsx)(X.Card,{color:"#2b313a",width:"16rem",height:"8rem",children:Object(O.jsx)(X.Switch,{color:"#4a5058",knobColorOff:"#a1a1a1",knobColor:"#1f2225",style:{placeSelf:"center"}})})}),Object(O.jsxs)("p",{className:"short desc",children:['isChecked = true/false ("true")',Object(O.jsx)("br",{}),'color = barva pozad\xed switche ("#4a5058")',Object(O.jsx)("br",{}),'knobColor = barva posuvn\xe9ho kole\u010dka ("#1f2225")',Object(O.jsx)("br",{}),'knobColorOff = barva posuvn\xe9ho kole\u010dka p\u0159i p\u0159ejet\xed ("white")',Object(O.jsx)("br",{}),"fn = funkce OnChange, kter\xe1 se provede p\u0159i zm\u011bn\u011b (nenastaven\xe1 catchne error do konzole)"]})]})]})},en=f.a.div(Y||(Y=Object(g.a)(["\n  /*animation: fadeInDown 1s;\n\n  @keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      transform: translateY(-5rem);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n*/\n  height: auto;\n\n  width: 80%;\n  margin: auto;\n\n  @media (max-width: 960px) {\n    width: 90%;\n  }\n\n  padding-top: ",";\n"])),(function(n){return n.topPadding?"8rem":"0"})),tn=f.a.div(W||(W=Object(g.a)(["\n  width: 100%;\n  height: auto;\n  min-height: 100vh;\n\n  background-color: var(--background-color);\n"]))),an=f.a.div(G||(G=Object(g.a)(["\n  width: 100%;\n"])));var rn=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(k.a,{basename:"/proomka",children:[Object(O.jsx)(Q,{}),Object(O.jsx)(w,{}),Object(O.jsxs)(N.c,{children:[Object(O.jsx)(N.a,{exact:!0,path:"/",children:Object(O.jsxs)(en,{style:{overflow:"hidden"},children:[Object(O.jsx)(T.a,{bottom:!0,children:Object(O.jsx)(z,{})}),Object(O.jsx)(T.a,{bottom:!0,children:Object(O.jsx)(S,{})}),Object(O.jsx)(T.a,{bottom:!0,children:Object(O.jsx)(an,{children:Object(O.jsx)(D,{bottomMargin:!0})})})]},Math.random())}),Object(O.jsx)(N.a,{exact:!0,path:"/docs",children:Object(O.jsxs)(tn,{className:"overflow",children:[Object(O.jsx)(en,{topPadding:!0,children:Object(O.jsx)(T.a,{bottom:!0,className:"overflow",children:Object(O.jsx)(q,{})})},Math.random()),Object(O.jsx)(Z,{}),Object(O.jsx)(nn,{})]})})]})]})})},on=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,126)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),a(n),r(n),i(n),o(n)}))};u.a.render(Object(O.jsx)(p.a.StrictMode,{children:Object(O.jsx)(rn,{})}),document.getElementById("root")),on()},81:function(n,e,t){},82:function(n,e,t){}},[[125,1,2]]]);
//# sourceMappingURL=main.942b5285.chunk.js.map