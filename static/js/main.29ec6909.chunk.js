(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(202)},106:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);a(101);var n=a(1),r=a.n(n),o=a(16),c=a.n(o),i=(a(106),a(8)),l=a(9),s=a(11),u=a(10),m=a(12),d=a(62),p=[{id:1,nome:"Notebook",descricao:"Lorem Ipsum \xe9 simplesmente uma simula\xe7\xe3o de texto da ind\xfastria tipogr\xe1fica e de impressos, e vem sendo utilizado desde o s\xe9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xe3o s\xf3 a cinco s\xe9culos.",preco:2500,imagem:"https://images-americanas.b2w.io/produtos/01/00/item/133775/9/133775934_1GG.jpg"},{id:2,nome:"Fritadeira",descricao:"Lorem Ipsum \xe9 simplesmente uma simula\xe7\xe3o de texto da ind\xfastria tipogr\xe1fica e de impressos, e vem sendo utilizado desde o s\xe9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xe3o s\xf3 a cinco s\xe9culos.",preco:240,imagem:"https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/127878/8/127878831_1GG.png"},{id:3,nome:"Fonte",descricao:"Lorem Ipsum \xe9 simplesmente uma simula\xe7\xe3o de texto da ind\xfastria tipogr\xe1fica e de impressos, e vem sendo utilizado desde o s\xe9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xe3o s\xf3 a cinco s\xe9culos.",preco:84,imagem:"https://images-americanas.b2w.io/produtos/01/00/sku/8579/3/8579390_1GG.jpg"},{id:4,nome:"Relogio",descricao:"Lorem Ipsum \xe9 simplesmente uma simula\xe7\xe3o de texto da ind\xfastria tipogr\xe1fica e de impressos, e vem sendo utilizado desde o s\xe9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xe3o s\xf3 a cinco s\xe9culos.",preco:158,imagem:"https://images-americanas.b2w.io/produtos/01/00/sku/41940/8/41940837_1GG.jpg"},{id:5,nome:"Micro-ondas",descricao:"Lorem Ipsum \xe9 simplesmente uma simula\xe7\xe3o de texto da ind\xfastria tipogr\xe1fica e de impressos, e vem sendo utilizado desde o s\xe9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xe3o s\xf3 a cinco s\xe9culos.",preco:349,imagem:"https://images-americanas.b2w.io/produtos/01/00/oferta/47165/1/47165105_1GG.jpg"},{id:6,nome:"Smart TV",descricao:"Lorem Ipsum \xe9 simplesmente uma simula\xe7\xe3o de texto da ind\xfastria tipogr\xe1fica e de impressos, e vem sendo utilizado desde o s\xe9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xe3o s\xf3 a cinco s\xe9culos.",preco:1300,imagem:"https://images-americanas.b2w.io/produtos/01/00/item/133869/3/133869367_1GG.jpg"},{id:7,nome:"Cafeteira",descricao:"Lorem Ipsum \xe9 simplesmente uma simula\xe7\xe3o de texto da ind\xfastria tipogr\xe1fica e de impressos, e vem sendo utilizado desde o s\xe9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xe3o s\xf3 a cinco s\xe9culos.",preco:309,imagem:"https://images-americanas.b2w.io/produtos/01/00/item/130321/1/130321195_1GG.jpg"},{id:8,nome:"Bandeja",descricao:"Lorem Ipsum \xe9 simplesmente uma simula\xe7\xe3o de texto da ind\xfastria tipogr\xe1fica e de impressos, e vem sendo utilizado desde o s\xe9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xe3o s\xf3 a cinco s\xe9culos.",preco:16,imagem:"https://images-americanas.b2w.io/produtos/01/00/oferta/16021/1/16021131_1GG.jpg"}],h=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getProdutos",value:function(){return p}}]),e}(),f=r.a.createContext(),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={appName:"UNIFACISA Store",produtos:h.getProdutos(),carrinho:JSON.parse(localStorage.getItem("carrinho"))||[],carrinhoVisivel:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.Provider,{value:{state:this.state,buscar:function(t){var a=h.getProdutos().filter(function(e){return e.nome.toLowerCase().includes(t.toLowerCase())});e.setState({produtos:a})},comprar:function(t){var a=[].concat(Object(d.a)(e.state.carrinho),[e.state.produtos.find(function(e){return e.id===t})]);e.setState({carrinho:a}),localStorage.setItem("carrinho",JSON.stringify(a))},remover:function(t){var a=Object(d.a)(e.state.carrinho);a.splice(t,1),e.setState({carrinho:a}),localStorage.setItem("carrinho",JSON.stringify(a))},mostrarCarrinho:function(){e.setState({carrinhoVisivel:!0})},esconderCarrinho:function(){e.setState({carrinhoVisivel:!1})}}},this.props.children)}}]),t}(n.Component),b=a(38),v=a.n(b),g=a(91),j=a.n(g),O=a(23),y=a.n(O),x=a(14),w=a.n(x),I=a(60),k=a.n(I),C=a(92),L=a.n(C),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{bg:"light",fixed:"top"},r.a.createElement(v.a.Brand,null,this.context.state.appName),r.a.createElement(j.a,null,r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{inline:!0},r.a.createElement(k.a,{type:"text",placeholder:"Procurar",className:"mr-sm-2",onChange:function(t){return e.context.buscar(t.target.value)}})),this.context.state.carrinho.length<=0?"":r.a.createElement(y.a,{variant:"primary",onClick:this.context.mostrarCarrinho},"\ud83d\uded2 ",r.a.createElement(L.a,{variant:"light"},this.context.state.carrinho.length))))))}}]),t}(n.Component);S.contextType=f;var _=S,N=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"splitArray",value:function(e,t){for(var a=[],n=0;n<e.length;n+=t)a.push(e.slice(n,n+t));return a}},{key:"formataNumero",value:function(e,t,a,n,r){var o="\\d(?=(\\d{"+(a||3)+"})+"+(t>0?"\\D":"$")+")",c=e.toFixed(Math.max(0,~~t));return(r?c.replace(".",r):c).replace(new RegExp(o,"g"),"$&"+(n||","))}}]),e}(),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return"R$ "+N.formataNumero(this.props.valor,2,3,".",",")}}]),t}(n.Component),G=a(93),T=a.n(G),V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{className:T.a.carrinho_img,src:this.props.produto.imagem,alt:""})),r.a.createElement("td",null,this.props.produto.nome),r.a.createElement("td",null,r.a.createElement(z,{valor:this.props.produto.preco})),r.a.createElement("td",null,r.a.createElement(y.a,{variant:"danger",onClick:function(){return e.context.remover(e.props.index)}},"Remover")))}}]),t}(n.Component);V.contextType=f;var B=V,A=a(39),q=a.n(A),P=a(94),F=a.n(P),X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderProduto=function(e,t){return r.a.createElement(B,{produto:e,index:t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(q.a,{show:this.context.state.carrinhoVisivel,centered:!0,onHide:this.context.esconderCarrinho},r.a.createElement(q.a.Header,{closeButton:!0},r.a.createElement(q.a.Title,null,"Carrinho de Compras")),r.a.createElement(q.a.Body,null,r.a.createElement(F.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement(R,null),r.a.createElement("tbody",null,this.context.state.carrinho.map(this.renderProduto)),r.a.createElement(W,{carrinho:this.context.state.carrinho}))))}}]),t}(n.Component);function R(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\xa0"),r.a.createElement("th",null,"Produto"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"A\xe7\xe3o")))}function W(e){var t=e.carrinho.reduce(function(e,t){return e+t.preco},0);return r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\xa0"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,r.a.createElement(z,{valor:t})),r.a.createElement("th",null,"\xa0")))}X.contextType=f;var H=X,J=a(22),U=a.n(J),$=a(13),D=a.n($),M=a(47),K=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,{xs:3},r.a.createElement(D.a,{className:"text-center m-2"},r.a.createElement(D.a.Header,{as:"h5"},this.props.produto.nome),r.a.createElement(D.a.Img,{variant:"top",src:this.props.produto.imagem}),r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,r.a.createElement(z,{valor:this.props.produto.preco})),r.a.createElement(M.b,{className:"outline-primary",to:"/produtos/"+this.props.produto.id},"Ver detalhes"))))}}]),t}(n.Component);K.contextType=f;var Q=K,Y=a(26),Z=a.n(Y),ee=a(25),te=a.n(ee),ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderProduto=function(e){return r.a.createElement(te.a,null,e.map(function(e){return r.a.createElement(Q,{produto:e})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Z.a,null,N.splitArray(this.context.state.produtos,4).map(this.renderProduto))}}]),t}(n.Component);ae.contextType=f;var ne=ae,re=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"Oi amigo, est\xe1 perdido?")}}]),t}(n.Component),oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={produto:h.getProdutos().find(function(e){return e.id===parseInt(a.props.location.pathname.split("/")[2])})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Z.a,null,r.a.createElement(te.a,null,r.a.createElement(U.a,{xs:6},r.a.createElement(D.a.Img,{variant:"top",src:this.state.produto.imagem})),r.a.createElement(U.a,{xs:6},r.a.createElement(D.a,{className:"text-left m-2"},r.a.createElement(D.a.Body,null,r.a.createElement("h4",null,this.state.produto.nome),r.a.createElement(D.a.Text,null,this.state.produto.descricao),r.a.createElement(D.a.Title,null,r.a.createElement(z,{valor:2500})),r.a.createElement(y.a,{variant:"outline-primary",block:!0,onClick:function(){return e.context.comprar(e.state.produto.id)}},"Comprar"))))))}}]),t}(n.Component);oe.contextType=f;var ce=oe,ie=a(29),le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Z.a,null,r.a.createElement(te.a,null,r.a.createElement(U.a,{xs:5},r.a.createElement(D.a,{className:""},r.a.createElement(D.a.Header,{as:"h4"},"Registre-se:"),r.a.createElement(D.a.Body,null,r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Seu Nome:"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Insira seu primeiro nome",required:!0})),r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Seu E-mail:"),r.a.createElement(w.a.Control,{type:"email",placeholder:"Insira seu e-mail",required:!0})),r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Senha:"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Senha",required:!0})),r.a.createElement(y.a,{variant:"outline-primary",block:!0,onClick:function(){return e.context.fazerLogin()}},"Efetuar cadastro"))))))}}]),t}(n.Component);le.contextType=f;var se=le,ue=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Z.a,null,r.a.createElement(te.a,null,r.a.createElement(U.a,{xs:5},r.a.createElement(D.a,null,r.a.createElement(D.a.Header,{as:"h4"},"Entre com sua conta:"),r.a.createElement(D.a.Body,null,r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Seu E-mail:"),r.a.createElement(w.a.Control,{type:"email",placeholder:"Insira seu e-mail",required:!0})),r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Senha:"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Senha",required:!0})),r.a.createElement(y.a,{variant:"outline-primary",block:!0,onClick:function(){return e.context.fazerLogin()}},"Fazer login"))))))}}]),t}(n.Component);ue.contextType=f;var me=ue,de=a(18),pe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(de.d,null,r.a.createElement(de.a,{activeItem:1,length:3,showControls:!0,showIndicators:!0,className:"z-depth-1"},r.a.createElement(de.b,null,r.a.createElement(de.c,{itemId:"1"},r.a.createElement(de.f,null,r.a.createElement("img",{className:"w-200",src:"/loja_react_tap_2019.1/slides/1.jpg",alt:"First slide"}),r.a.createElement(de.e,{overlay:"black-light"}))),r.a.createElement(de.c,{itemId:"2"},r.a.createElement(de.f,null,r.a.createElement("img",{className:"w-200",src:"/loja_react_tap_2019.1/slides/2.jpg",alt:"Second slide"}),r.a.createElement(de.e,{overlay:"black-strong"}))),r.a.createElement(de.c,{itemId:"3"},r.a.createElement(de.f,null,r.a.createElement("img",{className:"w-200",src:"/loja_react_tap_2019.1/slides/3.jpg",alt:"Third slide"}),r.a.createElement(de.e,{overlay:"black-slight"})))))),r.a.createElement("div",{class:"m-3"},r.a.createElement(ne,null)))}}]),t}(n.Component),he=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(_,null),r.a.createElement(M.a,null,r.a.createElement(ie.c,null,r.a.createElement(ie.a,{path:"/",exact:!0,component:pe}),r.a.createElement(ie.a,{path:"/registro",exact:!0,component:se}),r.a.createElement(ie.a,{path:"/login",exact:!0,component:me}),r.a.createElement(ie.a,{path:"/produtos",exact:!0,component:ne}),r.a.createElement(ie.a,{path:"/produtos/:id",component:ce}),r.a.createElement(ie.a,{component:re}))),r.a.createElement(H,null))}}]),t}(n.Component),fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(he,{nome:"Facisa Store"}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/loja_react_tap_2019.1",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/loja_react_tap_2019.1","/service-worker.js");fe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ee(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ee(t,e)})}}()},93:function(e,t,a){e.exports={carrinho_img:"ytFN8HDcctW-0wVLXrkUz"}}},[[100,1,2]]]);
//# sourceMappingURL=main.29ec6909.chunk.js.map