(this.webpackJsonpcoinfox=this.webpackJsonpcoinfox||[]).push([[0],{324:function(e,t,a){e.exports=a(693)},330:function(e,t,a){},346:function(e,t){},347:function(e,t){},369:function(e,t){},371:function(e,t){},402:function(e,t){},404:function(e,t){},418:function(e,t){},420:function(e,t){},430:function(e,t){},441:function(e,t){},565:function(e,t){},692:function(e,t,a){},693:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(59),i=a.n(o),c=(a(330),a(131)),s=a(196),l=a.n(s),u=a(314),p=a(7),f=a(8),h=a(10),m=a(9),d=a(19),g=a(46),b=a(11),v=a(44),k=a.n(v),y=a(77),E=a.n(y),C=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"_chartOptions",value:function(){var e=[];for(var t in this.props.coinz){var a=this.props.coinz[t].hodl,n=Number(this.props.marketData[t].ticker.price)*this.props.exchangeRate;e.push({name:t.toUpperCase(),y:a*n/this.props.totalPortfolio.totalValue})}return{credits:!1,chart:{renderTo:"piechart",plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",backgroundColor:"transparent"},title:{text:""},tooltip:{pointFormat:"<b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",colors:function(){var e,t=[];for(e=0;e<10;e+=1)t.push(E.a.Color("#21ce99").brighten((e-3)/7).get());return t}(),dataLabels:{enabled:!0,format:"<b>{point.name}</b><br/>{point.percentage:.1f} %",style:{color:"white"}}}},series:[{colorByPoint:!0,data:e}]}}},{key:"componentDidMount",value:function(){this.chart=new E.a[this.props.type||"Chart"]("piechart",this._chartOptions())}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.destroy()}},{key:"render",value:function(){this.props.blockstack;return r.a.createElement("div",{className:"Pie"},r.a.createElement("div",{id:"piechart"}))}}]),a}(n.Component),O=a(16);function x(e){return{aud:"$",bgn:"\u043b\u0432",brl:"R$",btc:"\u0e3f",cad:"$",chf:"Fr.",cny:"\xa5",czk:"K\u010d",dkk:"kr",eur:"\u20ac",gbp:"\xa3",hkd:"$",hrk:"kn",huf:"Ft",idr:"Rp",ils:"\u20aa",inr:"\u20b9",jpy:"\xa5",krw:"\u20a9",mxn:"$",myr:"RM",nok:"kr",nzd:"$",php:"\u20b1",pln:"z\u0142",ron:"lei",rur:"\u20bd",sek:"kr",sgd:"$",thb:"\u0e3f",try:"\u20ba",uah:"\u20b4",usd:"$",zar:"R"}[e.toLowerCase()]+" "}function S(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var N=function(e,t){return e/t},j=a(17);function w(){var e=Object(O.a)(["\n  text-align: center;\n  margin-top: 30px;\n  h1 {\n    font-weight: 300;\n    font-size: 2.5rem;\n    color: white;\n    margin: 5px;\n  }\n  p {\n    margin-top: 5px;\n  }\n"]);return w=function(){return e},e}var z=j.a.div(w()),D=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.totalPortfolio.totalValue,t=this.props.totalPortfolio.totalBasis,a=e-t,n=N(e,t),o=x(this.props.currency);return e>0?r.a.createElement(z,null,r.a.createElement("h1",null,o,S(e.toFixed(2))),r.a.createElement("p",null,o,S(a.toFixed(2)),"\xa0 (",S(n.toFixed(2)),"x)")):null}}]),a}(n.Component),P=["en","de","fr"],_={en:"English",de:"Deutsch",fr:"Fran\xe7ais"},R="en";navigator.languages&&navigator.languages.some((function(e){return P.includes(e)&&(R=e),P.includes(e)}));var U={en:{avgcost:"Average Cost Basis ($/per coin)",addcoin:"Add a Coin",ticker:"Ticker: (BTC, LTC, etc)",numberheld:"Number of Coins Held",go:"Go",fillticker:"Please fill in the ticker, cost basis & holding",added:" added to your portfolio",remove:"Remove ",fromportfolio:" from your portfolio?",total:"Total ",holding:" Holding",volume:"24hr Volume",costbasis:"Cost Basis (avg)",coins:" Coins",currencypref:"Currency preference",languagepref:"Language preference",welcome:"Welcome to Coinfox",tag:"Your secure, personal blockchain portfolio manager app. Track your crypto currency portfolio performance",addfirstcoin:"Please add a coin to your portfolio first",importexport:"Import / Export Portfolio",copylink:"Copy the URL below to import your current portfolio to another device",getlink:"Get Link",learnmore:"Learn More",givefeedback:"Give Feedback",supportedcoins:"Supported Coins"},de:{avgcost:"Durchschnittliche Kostenbasis ($ / pro M\xfcnze)",addcoin:"Eine M\xfcnze hinzuf\xfcgen",ticker:"Ticker: (BTC, LTC, usw.)",numberheld:"Anzahl der gehaltenen M\xfcnzen",go:"Gehen",fillticker:"Bitte den Ticker ausf\xfcllen, Kostenbasis & halten",added:" ihrem Portfolio hinzugef\xfcgt",remove:"Entfernen ",fromportfolio:" aus Ihrem Portfolio?",total:"Insgesamt ",holding:" Halten",volume:"24hr Volumen",costbasis:"Kostenbasis (avg)",coins:" M\xfcnzen",currencypref:"M\xfcnzen",languagepref:"Spracheinstellung",welcome:"Willkommen bei Coinfox",tag:"Ihre sichere, pers\xf6nliche Blockchain Portfolio Manager App. Verfolgen Sie Ihre Crypto-W\xe4hrung Portfolio-Performance",addfirstcoin:"Bitte f\xfcge zuerst eine M\xfcnze zu deinem Portfolio hinzu",importexport:"Import / Export Portfolio",copylink:"Kopieren Sie die URL unten, um Ihr aktuelles Portfolio auf ein anderes Ger\xe4t zu importieren",getlink:"Link holen",learnmore:"Erfahren Sie mehr",givefeedback:"Vorschl\xe4ge machen",supportedcoins:"Unterst\xfctzte M\xfcnzen"},fr:{avgcost:"Co\xfbt moyen ($ / par pi\xe8ce)",addcoin:"Ajouter une pi\xe8ce",ticker:"Ticker: (BTC, LTC, etc)",numberheld:"Nombre de pi\xe8ces d\xe9tenues",go:"Aller",fillticker:"S'il vous pla\xeet remplir le ticker, la base des co\xfbts et la tenue",added:" ajout\xe9 \xe0 votre portefeuille",remove:"Supprimer ",fromportfolio:" de votre portefeuille?",total:"Total ",holding:" Holding",volume:"Volume 24hr",costbasis:"Base de Co\xfbt (moy)",coins:" Pi\xe8ces",currencypref:"Pr\xe9f\xe9rence de devise",languagepref:"Pr\xe9f\xe9rence de langue",welcome:"Bienvenue \xe0 Coinfox",tag:"Votre application de gestion de portefeuilles blockchain personnelle et s\xe9curis\xe9e. Suivez votre performance de portefeuille de devises crypto",addfirstcoin:"Veuillez d'abord ajouter une pi\xe8ce \xe0 votre portefeuille",importexport:"Import / Export Portfolio",copylink:"Copiez l'URL ci-dessous pour importer votre portefeuille actuel vers un autre appareil",getlink:"Obtenir un lien",learnmore:"En savoir plus",givefeedback:"Donner des suggestions",supportedcoins:"Pi\xe8ces prises en charge"}};function I(e){return e?U[e.toLowerCase()]:U[R]}var T=I(),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t=!!this.props.coinz&&this.props.coinz,a=!!this.props.marketData&&this.props.marketData,n=x(this.props.currency),o=t&&a&&Object.keys(t).map((function(a,n){var r=e.props.marketData[a]&&e.props.marketData[a].ticker&&e.props.marketData[a].ticker.price||0,o=e.props.marketData[a]&&e.props.marketData[a].ticker?Number(r*e.props.exchangeRate):0;return{coin:a,price:o,coinRound:Math.round(100*t[a].hodl)/100,hodlValue:o*t[a].hodl}})).sort((function(e,t){return t.hodlValue-e.hodlValue}));return r.a.createElement("div",{className:"CoinList"},o&&o.map((function(e,a){var o=!e.price||e.price>=t[e.coin].cost_basis?"right green":"right red";return r.a.createElement(d.b,{className:"coinLink",key:a,to:"/coin/"+e.coin},r.a.createElement("div",{className:"listCoin"},r.a.createElement("span",{className:"left"},e.coin.toUpperCase(),r.a.createElement("br",null),r.a.createElement("span",{className:"lightGray"},e.coinRound,T.coins)),r.a.createElement("span",{className:"middle"},r.a.createElement("i",{className:"lightGray fa fa-lg fa-info-circle","aria-hidden":"true"})),r.a.createElement("span",{className:o},n,S(e.hodlValue.toFixed(2)),r.a.createElement("br",null),r.a.createElement("span",{className:"lightGray"},n,S(e.price.toFixed(2))))))})))}}]),a}(n.Component);function B(){var e=Object(O.a)(["\n  display: flex;\n  margin: auto 0px;\n  margin-left: auto;\n"]);return B=function(){return e},e}function G(){var e=Object(O.a)(["\ncolor: white;\n"]);return G=function(){return e},e}function M(){var e=Object(O.a)(["\n  display: flex;\n  margin: 10px auto;\n  padding: 0px 10px;\n  max-width: 1100px;\n"]);return M=function(){return e},e}var F=j.a.div(M()),V=j.a.h3(G()),A=j.a.div(B()),$=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSelectChange=function(t){t.target.id;var a=t.target.value;e.props.currency;e.props.saveNewPref("currency",a)},e}return Object(f.a)(a,[{key:"render",value:function(){x(this.props.currency);var e=this.props.supportedCurrencies.map((function(e){return r.a.createElement("option",{key:e[0],value:e[0].toUpperCase()},e[0].toUpperCase()," ",e[1])})),t=I(this.props.language);return r.a.createElement(F,null,r.a.createElement(V,null,t.currencypref),r.a.createElement(A,null,r.a.createElement("select",{id:"currency",onChange:this.handleSelectChange,value:this.props.currency,name:"select"},e)))}}]),a}(n.Component),H=a(322),J=a.n(H);a(689),a(690),a(691);function W(){var e=Object(O.a)(["\n  width: 100%;\n  font-family: Roboto, sans-serif;\n  font-weight: 100;\n  background-color: rgb(33, 206, 153);\n  color: white;\n  border: none;\n  font-size: 20px;\n  line-height: 20px;\n  margin: 5px 0px;\n  height: 36px;\n  box-sizing: border-box;\n  cursor: pointer;\n  ::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    box-shadow: 0px 0px 6px 2px #21ce99;\n    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  }\n  :hover::after {\n    opacity: 1;\n  }\n"]);return W=function(){return e},e}function K(){var e=Object(O.a)(["\n  width: 100%;\n  font-family: Roboto, sans-serif;\n  font-size: 16px;\n  margin: 5px 0px;\n  padding: 0px 10px;\n  height: 36px;\n  box-sizing: border-box;\n  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #aaa;\n    opacity: 1; /* Firefox */\n}\n"]);return K=function(){return e},e}function X(){var e=Object(O.a)(["\n  color: black;\n  text-align: left;\n  & .Select-control {\n    border-radius: 0px;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(O.a)(["\n  margin: auto;\n"]);return Y=function(){return e},e}function Z(){var e=Object(O.a)(["\n  margin: 10px auto;\n  padding: 10px 10px;\n  max-width: 1100px;\n"]);return Z=function(){return e},e}function Q(){var e=Object(O.a)(["\n  color: white;\n"]);return Q=function(){return e},e}var q=j.a.h3(Q()),ee=j.a.div(Z()),te=j.a.form(Y()),ae=Object(j.a)(J.a)(X()),ne=j.a.input(K()),re=j.a.button(W()),oe=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).addCoin=function(e){e.preventDefault();var t={ticker:n.state.selected_ticker.code.toLocaleLowerCase(),avg_cost:Number(n.state.avg_cost_basis),hodl:Number(n.state.hodl)};n.props.addCoinz(t),n.setState({ticker:"",avg_cost_basis:"",hodl:""})},n.onChange=function(e,t){var a=t.target.value;n.setState(Object(c.a)({},e,a))},n.handleTickerChange=function(e){n.setState({selected_ticker:e})},n.state={selected_ticker:"",avg_cost_basis:"",hodl:"",supported:[]},n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){var e=this;k()("https://api.coingecko.com/api/v3/coins/list").then((function(e){return e.json()})).then((function(t){e.refs.addRef&&e.setState({options:t.map((function(e){return{code:e.symbol,name:e.name,statuses:["primary"]}}))})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.selected_ticker,n=t.options,o=I(this.props.language),i=o.avgcost;return r.a.createElement(ee,{ref:"addRef"},r.a.createElement(q,null,o.addcoin),r.a.createElement(te,{className:"",onSubmit:this.addCoin},r.a.createElement(ae,{name:"form-select-ticker",placeholder:o.ticker,value:a,labelKey:"code",onChange:this.handleTickerChange,options:n}),r.a.createElement("br",null),r.a.createElement(ne,{type:"number",autoComplete:"off",spellCheck:"false",autoCorrect:"off",onChange:function(t){return e.onChange("avg_cost_basis",t)},value:this.state.avg_cost_basis,placeholder:i}),r.a.createElement("br",null),r.a.createElement(ne,{type:"number",autoComplete:"off",spellCheck:"false",autoCorrect:"off",onChange:function(t){return e.onChange("hodl",t)},value:this.state.hodl,placeholder:o.numberheld}),r.a.createElement("br",null),r.a.createElement(re,{type:"submit"},o.go)))}}]),a}(n.Component),ie=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).toggleView=function(){e.setState({listView:!e.state.listView})},e.state={listView:!0},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=Object.keys(this.props.coinz).length>0&&this.props.coinz,t=I(this.props.language);return e?r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"header"},r.a.createElement(d.b,{className:"menu",key:"Menu",to:"/menu"},r.a.createElement("i",{className:"btn-menu fa fa-lg fa-bars","aria-hidden":"true"})),r.a.createElement(D,{totalPortfolio:this.props.totalPortfolio,currency:this.props.currency,exchangeRate:this.props.exchangeRate,marketData:this.props.marketData,coinz:this.props.coinz,key:"TotalPortfolio"})),r.a.createElement("div",{className:"toggleView"},r.a.createElement("i",{onClick:this.toggleView,className:this.state.listView?"fa fa-lg fa-pie-chart":"fa fa-lg fa-th-list","aria-hidden":"true"})),!this.state.listView&&r.a.createElement(C,{coinz:this.props.coinz,marketData:this.props.marketData,exchangeRate:this.props.exchangeRate,totalPortfolio:this.props.totalPortfolio}),this.state.listView&&r.a.createElement(L,{currency:this.props.currency,exchangeRate:this.props.exchangeRate,marketData:this.props.marketData,coinz:this.props.coinz,key:"CoinList"})):(console.log("!isUserSignedIn()"),r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"header"},r.a.createElement(d.b,{className:"menu",key:"Menu",to:"/menu"},r.a.createElement("i",{className:"btn-menu fa fa-lg fa-bars","aria-hidden":"true"})),r.a.createElement("h1",{className:"center"},t.welcome),r.a.createElement("p",{className:"center"},t.tag)),r.a.createElement("div",{className:"addFirstCoin"},r.a.createElement($,{supportedCurrencies:this.props.supportedCurrencies,saveNewPref:this.props.saveNewPref,language:this.props.language,currency:this.props.currency}),r.a.createElement(oe,{addCoinz:this.props.addCoinz,language:this.props.language,key:"AddCoin"}))))}}]),a}(n.Component),ce=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={ticker:null,chart:{Response:"no",Data:[]},time_series:[]},n}return Object(f.a)(a,[{key:"_chartOptions",value:function(e){var t=this.props.chartColor;return{credits:!1,chart:{height:"200px",zoomType:"x",backgroundColor:"#303032"},title:{text:""},subtitle:{text:""},xAxis:{lineColor:"#777",tickColor:"#777",gridLineColor:"#777",type:"datetime",labels:{style:{color:"#777"}}},yAxis:{min:0,gridLineColor:"#777",title:{text:""},labels:{style:{color:"#777"}}},legend:{enabled:!1},plotOptions:{area:{color:t,fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,t],[1,E.a.Color(t).setOpacity(0).get("rgba")]]},marker:{radius:2},lineWidth:2,states:{hover:{lineWidth:3}},threshold:null}},series:[{type:"area",name:this.props.ticker+"/$",data:e}]}}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.destroy()}},{key:"_fetchChartData",value:function(e,t){var a=this,n=e.toUpperCase();fetch("https://min-api.cryptocompare.com/data/histoday?aggregate=1&e=CCCAGG&extraParams=CryptoCompare&fsym="+n+"&limit=365&tryConversion=false&tsym=USD").then((function(e){return e.json()})).then((function(e){if("Success"===e.Response){var r=e.Data.map((function(e){return[1e3*e.time,e.close*t]})),o={ticker:n,chart:e,time_series:r};a.chart=new E.a.Chart("chart_container",a._chartOptions(r)),a.setState(o)}else a.setState({time_series:[]}),a.chart&&a.chart.destroy()}))}},{key:"componentDidMount",value:function(){this._fetchChartData(this.props.ticker,this.props.exchangeRate)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"chart_container"}))}}]),a}(n.Component),se=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t=I(this.props.language);if(window.scrollTo(0,0),!this.props.marketData)return null;var a=x(this.props.currency),n=this.props.blockstack?"/blockstack":"/",o=this.props.match.params[0]||"X",i=Object.keys(this.props.coinz).length>0&&this.props.coinz,c=!(!i||!o)&&i[o],s=this.props.exchangeRate,l=!!this.props.marketData&&this.props.marketData,u=l[o]&&l[o].ticker?Number(l[o].ticker.price)*s:0,p=c&&Number(c.hodl),f=c&&Number(c.cost_basis),h=f*p,m=p*u,g=Boolean(l[o]&&l[o].ticker)&&l[o].ticker.volume*u,b=!u||u>=f?"#21ce99":"#d82d2d",v={backgroundColor:b},k=["BTC","ETH","XMR","ZEC","DASH","XRP","LTC","DOGE","BCH","BTG","DGB","EXP","GAME","LSK","NLG","NXT","POT","QTUM","SYS","XDN","XVG"],y="https://changelly.com/widget/v1?auth=email&",E="&merchant_id=db206cefa712&address=&amount=1&ref_id=db206cefa712&color="+b.replace("#",""),C=y+"from=BTC&to="+o.toUpperCase()+E,O=y+"from="+o.toUpperCase()+"&to=BTC"+E;return r.a.createElement("div",{className:"Coin"},r.a.createElement(d.b,{className:"menu",key:"Menu",to:"/menu"},r.a.createElement("i",{className:"btn-menu fa fa-lg fa-bars","aria-hidden":"true"})),r.a.createElement(d.b,{className:"coinClose",to:n},r.a.createElement("i",{className:"btn-menu fa fa-lg fa-times","aria-hidden":"true"})),r.a.createElement("div",{className:"coinCard"},r.a.createElement("h2",null,o.toUpperCase()),r.a.createElement("h1",null,a,S(u.toFixed(2))),r.a.createElement("p",null,N(m,h).toFixed(2),"x"),r.a.createElement("div",{className:"theChart"},r.a.createElement(ce,{chartColor:b,exchangeRate:this.props.exchangeRate,ticker:o})),k.includes(o.toUpperCase())&&r.a.createElement("div",{className:"listCoin"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:C},r.a.createElement("button",{className:"btn-buy",style:v},r.a.createElement("i",{className:"fa fa-money","aria-hidden":"true"})," Buy")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:O},r.a.createElement("button",{className:"btn-buy",style:v},r.a.createElement("i",{className:"fa fa-line-chart","aria-hidden":"true"})," Sell"))),!k.includes(o.toUpperCase())&&r.a.createElement("div",{className:"listCoin"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://changelly.com/widget/v1?auth=email&from=ETH&to=BTC&merchant_id=db206cefa712&address=&amount=1&ref_id=db206cefa712&color="+b.replace("#","")},r.a.createElement("button",{className:"btn-buy",style:v},r.a.createElement("i",{className:"fa fa-line-chart","aria-hidden":"true"})," Trade Coins"))),r.a.createElement("div",{className:"listCoin"},r.a.createElement("span",{className:"left"},p,r.a.createElement("br",null),r.a.createElement("span",{className:"lightGray"},o.toUpperCase()+" Holding")),r.a.createElement("span",{className:"right"},a,S(m.toFixed(2)),r.a.createElement("br",null),r.a.createElement("span",{className:"lightGray"},t.total+a+t.holding))),r.a.createElement("div",{className:"listCoin"},r.a.createElement("span",{className:"left"},a,g&&S(g.toFixed()),r.a.createElement("br",null),r.a.createElement("span",{className:"lightGray"},t.volume)),r.a.createElement("span",{className:"right"},a,S(h.toFixed(2)),"\xa0",r.a.createElement("span",{className:"lightGray"},"(",S(f.toFixed(2)),")"),r.a.createElement("br",null),r.a.createElement("span",{className:"lightGray"},t.costbasis))),r.a.createElement("div",{className:"trash listCoin"},r.a.createElement("span",{className:"left"}),r.a.createElement("span",{className:"right"},r.a.createElement("span",{onClick:function(){return e.props.deleteCoin(o,e.props.history)},className:"lightGray"},r.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"}))))))}}]),a}(n.Component);function le(){var e=Object(O.a)(["\n  display: flex;\n  margin: auto 0px;\n  margin-left: auto;\n"]);return le=function(){return e},e}function ue(){var e=Object(O.a)(["\ncolor: white;\n"]);return ue=function(){return e},e}function pe(){var e=Object(O.a)(["\n  display: flex;\n  margin: 10px auto;\n  padding: 0px 10px;\n  max-width: 1100px;\n"]);return pe=function(){return e},e}var fe=j.a.div(pe()),he=j.a.h3(ue()),me=j.a.div(le()),de=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSelectChange=function(t){t.target.id;var a=t.target.value;e.props.language;e.props.saveNewPref("language",a)},e}return Object(f.a)(a,[{key:"render",value:function(){var e=P.map((function(e){return r.a.createElement("option",{key:e,value:e.toUpperCase()},_[e])})),t=I(this.props.language);return r.a.createElement(fe,null,r.a.createElement(he,null,t.languagepref),r.a.createElement(me,null,r.a.createElement("select",{id:"language",onChange:this.handleSelectChange,value:this.props.language||"",name:"select"},e)))}}]),a}(n.Component),ge=a(58),be=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).state={importUrl:!1},e._getLink=e._getLink.bind(Object(ge.a)(e)),e}return Object(f.a)(a,[{key:"_getLink",value:function(){if(localStorage.coinz){var e=btoa(JSON.stringify(localStorage));this.setState({importUrl:window.location.origin+"?import="+e})}else alert(I.addfirstcoin)}},{key:"render",value:function(){var e=I(this.props.language);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",{className:"white center"},e.importexport),r.a.createElement("p",{className:"white center"},e.copylink),this.state.importUrl?r.a.createElement("p",{className:"center"},r.a.createElement("input",{type:"text",defaultValue:this.state.importUrl})):r.a.createElement("p",{className:"center"},r.a.createElement("button",{className:"btn",onClick:this._getLink},e.getlink)))}}]),a}(n.Component),ve=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.blockstack?"/blockstack":"/",t=this.props.pref.currency?this.props.pref.currency:"...",a=this.props.pref.language?this.props.pref.language:null,n=I(this.props.language);return r.a.createElement("div",{className:"theMenu"},r.a.createElement(d.b,{className:"menu",key:"nav",to:e},r.a.createElement("i",{className:"btn-menu fa fa-lg fa-times","aria-hidden":"true"})),r.a.createElement($,{supportedCurrencies:this.props.supportedCurrencies,saveNewPref:this.props.saveNewPref,language:a,currency:t,key:"CurrencyPref"}),r.a.createElement(de,{saveNewPref:this.props.saveNewPref,language:a,key:"LanguagePref"}),r.a.createElement(oe,{language:a,addCoinz:this.props.addCoinz,key:"AddCoin"}),r.a.createElement(be,{language:a}),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("p",{className:"center"},r.a.createElement("a",{href:"https://github.com/vinniejames/coinfox"},n.learnmore)," or\xa0",r.a.createElement("a",{href:"https://github.com/vinniejames/coinfox/issues"},n.givefeedback))))}}]),a}(n.Component);function ke(){var e=Object(O.a)(["\n  border-bottom: 1px solid hsla(0,0%,100%,.1);\n  color: white;\n  padding: 10px 0;\n"]);return ke=function(){return e},e}function ye(){var e=Object(O.a)(["\n  background: #303032;\n  margin-top: 0px;\n  list-style: none;\n  padding: 65px 20px 0px 20px;\n"]);return ye=function(){return e},e}var Ee=j.a.ul(ye()),Ce=j.a.li(ke()),Oe=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={supported:[]},n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){var e=this;k()("https://api.coingecko.com/api/v3/coins/list").then((function(e){return e.json()})).then((function(t){return e.setState({supported:t.map((function(e){return{code:e.symbol,name:e.name,statuses:["primary"]}}))})}))}},{key:"render",value:function(){return console.log(this.state.supported,"where coisn"),r.a.createElement("div",{className:"SupportedCoins"},r.a.createElement("div",{id:"topMenu"},r.a.createElement(d.b,{className:"menu",key:"nav",to:"/menu"},r.a.createElement("i",{className:"btn-menu fa fa-lg fa-times","aria-hidden":"true"}))),r.a.createElement("div",null,r.a.createElement(Ee,null,this.state.supported.map((function(e){return r.a.createElement(Ce,null,e.name," (",e.code,")")})))))}}]),a}(n.Component),xe=(a(692),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(p.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.handleSignIn;return r.a.createElement("div",{className:"block-login"},r.a.createElement("h1",null,"Coinfox"),r.a.createElement("p",null,"A decentralized portfolio tracker built on ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://blockstack.org/"},"Blockstack")),r.a.createElement("p",null,r.a.createElement("button",{className:"btn",id:"login",onClick:e.bind(this)},r.a.createElement("i",{className:"fa fa-lg fa-user-circle","aria-hidden":"true"})," Sign In With Blockstack")))}}]),a}(n.Component)),Se=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={person:{name:function(){return"Anon"}}},n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){this.setState({person:new b.Person(Object(b.loadUserData)().profile)})}},{key:"render",value:function(){var e=this.props.handleSignOut,t=this.state.person;return Object(b.isSignInPending)()?null:r.a.createElement("div",{className:"Profile"},r.a.createElement("span",{id:"logout"},t.name()?t.name():"Natoshi Sockamoto"," \xa0",r.a.createElement("i",{onClick:e.bind(this),className:"fa fa-sign-out","aria-hidden":"true"})))}}]),a}(n.Component),Ne=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e))._handleSignIn=n._handleSignIn.bind(Object(ge.a)(n)),n._handleSignOut=n._handleSignOut.bind(Object(ge.a)(n)),n.state={blockurl:window.location.origin+"/blockstack",manifest:window.location.origin+"/manifest.json"},n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){var e=this;Object(b.isSignInPending)()&&Object(b.handlePendingSignIn)().then((function(t){window.location=e.state.blockurl}))}},{key:"_handleSignIn",value:function(e){e.preventDefault(),Object(b.redirectToSignIn)(this.state.blockurl,this.state.manifest)}},{key:"_handleSignOut",value:function(e){e.preventDefault(),Object(b.signUserOut)(this.state.blockurl),localStorage.setItem("blockstack-transit-private-key",!1)}},{key:"render",value:function(){return n.createElement("div",{className:"Blockstack"},Object(b.isUserSignedIn)()?[n.createElement(Se,{key:"Profile",handleSignOut:this._handleSignOut}),n.createElement(ie,Object.assign({supportedCurrencies:this.props.supportedCurrencies,exchangeRate:this.props.exchangeRate,key:"Home"},this.props))]:n.createElement(xe,{handleSignIn:this._handleSignIn}))}}]),a}(n.Component),je=I(),we=[["AUD","$"],["BGN","\u043b\u0432"],["BRL","R$"],["CAD","$"],["CHF","Fr."],["CNY","\xa5"],["CZK","K\u010d"],["DKK","kr"],["EUR","\u20ac"],["GBP","\xa3"],["HKD","$"],["HRK","kn"],["HUF","Ft"],["IDR","Rp"],["ILS","\u20aa"],["INR","\u20b9"],["JPY","\xa5"],["KRW","\u20a9"],["MXN","$"],["MYR","RM"],["NOK","kr"],["NZD","$"],["PHP","\u20b1"],["PLN","z\u0142"],["RON","lei"],["SEK","kr"],["SGD","$"],["THB","\u0e3f"],["TRY","\u20ba"],["USD","$"],["ZAR","R"]],ze=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).saveCoinToStorage=function(t,a){var n=e.readLocalStorage();if(n.coinz[t]){var r=e.addExistingCoin(n,t,a);localStorage.setItem("coinz",JSON.stringify(r)),e.setState({coinz:r})}else{n.coinz[t]=a;var o=n.coinz;localStorage.setItem("coinz",JSON.stringify(o)),e.marketData(o),e.setState({coinz:o})}},e.saveCoinToGaia=function(t,a){Object(b.getFile)(e.state.gaiaStorage,!0).then((function(e){var t=JSON.parse(e);return{coinz:t.coinz&&t.coinz||{},pref:t.pref&&t.pref||{currency:"USD"}}})).then((function(n){console.log(n.coinz,n.pref,"for gaia to save");if(n.coinz[t]){var r=e.addExistingCoin(n,t,a),o={coinz:r,pref:n.pref};Object(b.putFile)(e.state.gaiaStorage,JSON.stringify(o),!0).then((function(){e.marketData(r)})).then((function(){e.setState({coinz:r,pref:n.pref})})).catch((function(e){console.log(e,"Gaia put exception")}))}else{n.coinz[t]=a;var i=n.coinz,c={coinz:i,pref:n.pref};Object(b.putFile)(e.state.gaiaStorage,JSON.stringify(c),!0).then((function(){e.marketData(i)})).then((function(){e.setState({coinz:i,pref:n.pref})})).catch((function(e){console.log(e,"Gaia put exception")}))}}))},e.addCoinz=function(t){var a=t.ticker,n=t.avg_cost,r=t.hodl;if(a&&n&&r){var o={cost_basis:n,hodl:r};Object(b.isUserSignedIn)()?e.saveCoinToGaia(a,o):e.saveCoinToStorage(a,o),alert(a.toUpperCase()+je.added)}else alert(je.fillticker)},e.fetchThen=function(e){return new Promise((function(t,a){k()(e,{retries:3,retryDelay:1e3}).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){console.log(e),a()}))}))},e.marketData=function(){var t=Object(u.a)(l.a.mark((function t(a){var n,r,o,i,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},r=Object.keys(a),t.next=4,k()("https://api.coingecko.com/api/v3/coins/list").then((function(e){return e.json()}));case 4:return o=t.sent.filter((function(e){return r.includes(e.symbol)})),i=o.map((function(e){return e.id})),c="usd",t.next=9,k()("https://api.coingecko.com/api/v3/simple/price?ids=".concat(i.join("%2C"),"&vs_currencies=").concat(c,"&include_24hr_vol=true&include_24hr_change=true")).then((function(e){return e.json()}));case 9:s=t.sent,r.forEach((function(e){try{var t=o.find((function(t){return t.symbol===e})),a=s[t.id];n[e]={ticker:{base:e.toUpperCase(),target:c.toUpperCase(),price:a[c],volume:a.usd_24h_vol,change:a.usd_24h_change},timestamp:Math.floor((new Date).getTime()/100),success:!0,error:""}}catch(r){console.log(r,"ticker not found in market data: ".concat(e))}})),e.setState({marketData:n});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchExchangeRates=function(){},e.totalPortfolio=function(t){var a=!!e.state.coinz&&e.state.coinz,n=!!e.state.marketData&&e.state.marketData,r=0,o=0;for(var i in a){var c=a[i].cost_basis,s=a[i].hodl,l=c*s;if(n[i])r+=(n[i]&&n[i].ticker&&n[i].ticker.price?Number(n[i].ticker.price):0)*t*s;o+=l}return{totalValue:r,totalBasis:o}},e.redirectToHttps=function(){var e=Boolean(localStorage.coinz),t="https:"==window.location.protocol;if("true"===localStorage.https||!e&&!t)window.location.protocol="https:";else if(e&&!t){console.log("redirect to https with coin string");var a=btoa(JSON.stringify(localStorage));localStorage.setItem("https","true"),window.location.href="https://coinfox.co?import="+a}},e.saveNewPref=function(t,a){if(Object(b.isUserSignedIn)()){var n={coinz:e.state.coinz,pref:Object(c.a)({},t,a)};e.setState({pref:n.pref}),Object(b.putFile)(e.state.gaiaStorage,JSON.stringify(n),!0).catch((function(e){console.log(e,"Gaia put exception")}))}else{var r=JSON.parse(localStorage.getItem("pref"))||{};r[t]=a,localStorage.setItem("pref",JSON.stringify(r)),e.setState({pref:r})}},e.deleteCoin=function(t,a){if(!0===window.confirm(je.remove+t.toUpperCase()+je.fromportfolio)){var n=e.state.coinz;if(Object.assign({},n),delete n[t],Object(b.isUserSignedIn)()){var r={coinz:n,pref:e.state.pref};Object(b.putFile)(e.state.gaiaStorage,JSON.stringify(r),!0).then((function(){e.setState({coinz:n})})).catch((function(e){console.log(e,"Gaia put exception")}))}else localStorage.setItem("coinz",JSON.stringify(n));a.goBack()}},e.state={coinz:{},pref:{},marketData:!1,exchangeRates:{USD:1},blockstack:Object(b.isUserSignedIn)(),gaiaStorage:"coinfox.json",supportedCurrencies:we},e}return Object(f.a)(a,[{key:"addExistingCoin",value:function(e,t,a){var n=e.coinz[t].cost_basis,r=e.coinz[t].hodl,o=a.cost_basis,i=a.hodl,c=i+r,s=(o*i+n*r)/c;return e.coinz[t]={cost_basis:s,hodl:c},e.coinz}},{key:"readLocalStorage",value:function(){return{coinz:localStorage.coinz?JSON.parse(localStorage.coinz):{},pref:localStorage.pref?JSON.parse(localStorage.pref):{currency:"USD"}}}},{key:"componentDidMount",value:function(){var e=this;window.location.origin.includes("localhost")||this.redirectToHttps();var t=new URLSearchParams(window.location.search);if(t.has("import")){var a=JSON.parse(atob(t.get("import")));t.get("import")==localStorage.getItem("lastImport")?(console.log("already imported this portfolio"),window.location.search="x"):(a.pref&&localStorage.setItem("pref",a.pref),a.coinz&&localStorage.setItem("coinz",a.coinz),localStorage.setItem("lastImport",t.get("import")),window.location.search="")}if(Object(b.isUserSignedIn)()&&"/blockstack"==window.location.pathname){Object(b.getFile)(this.state.gaiaStorage,!0).then((function(e){console.log("gimme gaia",e);var t=JSON.parse(e);return{coinz:t.coinz&&t.coinz||{},pref:t.pref&&t.pref||{currency:"USD"}}})).then((function(t){e.setState(t)})).then((function(){e.marketData(e.state.coinz)})).then((function(){e.fetchExchangeRates()})).catch((function(t){console.log(t,"Gaia get exception");var a={coinz:e.state.coinz,pref:{currency:"USD"}};Object(b.putFile)(e.state.gaiaStorage,JSON.stringify(a),!0).then((function(){window.location.reload()})).catch((function(e){console.log(e,"Gaia put exception")}))}))}else{var n=this.readLocalStorage();this.marketData(n.coinz),this.setState({coinz:n.coinz,pref:n.pref}),this.fetchExchangeRates()}}},{key:"render",value:function(){var e=this,t=this.state.exchangeRates[this.state.pref.currency]?this.state.exchangeRates[this.state.pref.currency]:1,a=this.totalPortfolio(t);return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(g.b,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(n){return r.a.createElement(ie,Object.assign({},n,{coinz:e.state.coinz,marketData:e.state.marketData,exchangeRate:t,supportedCurrencies:e.state.supportedCurrencies,totalPortfolio:a,currency:e.state.pref&&e.state.pref.currency||"USD",language:e.state.pref&&e.state.pref.language||"EN",addCoinz:e.addCoinz,saveNewPref:e.saveNewPref}))}}),r.a.createElement(g.a,{exact:!0,path:"/blockstack",render:function(a){return r.a.createElement(Ne,Object.assign({},a,{coinz:e.state.coinz,marketData:e.state.marketData,exchangeRate:t,supportedCurrencies:e.state.supportedCurrencies,currency:e.state.pref&&e.state.pref.currency||"USD",language:e.state.pref&&e.state.pref.language||"EN",addCoinz:e.addCoinz,saveNewPref:e.saveNewPref}))}}),r.a.createElement(g.a,{path:"/coin/*",render:function(a){return r.a.createElement(se,Object.assign({},a,{coinz:e.state.coinz,marketData:e.state.marketData,blockstack:e.state.blockstack,exchangeRate:t,deleteCoin:e.deleteCoin,currency:e.state.pref&&e.state.pref.currency||"USD",language:e.state.pref&&e.state.pref.language||"EN"}))}}),r.a.createElement(g.a,{path:"/pie",render:function(n){return r.a.createElement(C,Object.assign({},n,{coinz:e.state.coinz,marketData:e.state.marketData,exchangeRate:t,totalPortfolio:a,language:e.state.pref&&e.state.pref.language||"EN"}))}}),r.a.createElement(g.a,{path:"/menu",render:function(t){return r.a.createElement(ve,Object.assign({},t,{addCoinz:e.addCoinz,blockstack:e.state.blockstack,pref:e.state.pref,saveNewPref:e.saveNewPref,supportedCurrencies:e.state.supportedCurrencies,currency:e.state.pref&&e.state.pref.currency||"USD",language:e.state.pref&&e.state.pref.language||"EN"}))}}),r.a.createElement(g.a,{path:"/supportedcoins",component:Oe}))))}}]),a}(n.Component),De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pe(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(ze,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");De?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Pe(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Pe(e)}))}}()}},[[324,1,2]]]);
//# sourceMappingURL=main.449f2727.chunk.js.map