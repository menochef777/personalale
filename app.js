/* ==============================================================
   CLONE & MOTOR INTERATIVO - PERSONAL TRAINER
   Adaptado para: Ale Braga (@eualebraga)
   Performance para Empresários · Portugal & Online
   ============================================================== */

/* ==============================================================
   DADOS EDITÁVEIS DO PERSONAL TRAINER - ALE BRAGA
   ============================================================== */
var CFG = {
  trainerName: "Ale Braga",
  trainerFirstName: "Ale",
  jobTitle: "Coach, Personal Trainer & Fitness Advisory",
  location: "Portugal & Online",
  phone: "351910000000",
  phoneDisplay: "+351 910 000 000",
  instagram: "https://www.instagram.com/eualebraga/",
  linkbio: "https://instabio.cc/8081719rPVC4X",
  msgs: {
    general: "Olá, Ale! Acedi ao teu website e gostaria de saber mais sobre o método de Performance para Empresários.",
    avaliacao: "Olá, Ale! Gostaria de agendar a minha Sessão Estratégica para analisar a minha rotina e começar a treinar com método.",
    presencial: "Olá, Ale! Tenho interesse no Personal Training Presencial para executivos em Portugal. Como podemos agendar a Sessão Estratégica?",
    online: "Olá, Ale! Tenho interesse no Fitness & Performance Advisory Online para a minha rotina. Podes apresentar-me a metodologia?"
  },
  nav: [
    ["Sobre","#sobre"],["Áreas","#areas"],["Método 45min","#como-funciona"],["Modalidades","#modalidades"],["Programas","#planos"],["FAQ","#faq"]
  ],
  /* título, descrição, ícone, destaque */
  focus: [
    ["Sessão Objetiva de 45 Minutos","Treino de alta densidade e foco cirúrgico. Sem dispersão ou horas perdidas no ginásio: entras, executas e sais pronto para liderar.","perf",true],
    ["Performance para Empresários","Estratégia física pensada para manter os teus níveis de energia, clareza mental e capacidade de decisão sempre no topo.","mass",true],
    ["Composição Corporal & Tônus","Redução de gordura e fortalecimento muscular estruturado, gerando uma presença física imponente e confiante.","cmp",true],
    ["Gestão de Rotina & Viagens","Protocolos de treino flexíveis adaptados a viagens de negócios, compromissos imprevistos e semanas de pico de trabalho.","cap",false],
    ["Fitness & Performance Advisory","Acompanhamento que vai além da ficha de treino: orientação contínua sobre rotina, consistência e recuperação biológica.","hip",true],
    ["Postura & Ergonomia Executiva","Trabalho postural corretivo e mobilidade ativa para neutralizar longas horas de secretária, reuniões e voos frequentes.","str",false],
    ["Acompanhamento com Métricas","Monitorização objetiva de indicadores de esforço, assiduidade e evolução sem sobrecarregar a tua semana de trabalho.","slim",false],
    ["Acesso 24/7 & Suporte Direto","Canal direto com o treinador e plataforma móvel disponível em qualquer fuso horário para manter o foco permanente.","glu",false]
  ],
  chips: ["Performance para Empresários", "Método 45 Min", "Fitness Advisory", "Treino Objetivo", "Alta Densidade", "Portugal", "Online Global"],
  steps: [
    ["1. Sessão Estratégica & Diagnóstico","Análise minuciosa dos teus objetivos, padrão de rotina profissional, histórico desportivo e janelas reais de tempo disponíveis."],
    ["2. Estratégia de Treino 45min","Definição de uma periodização personalizada com foco nos exercícios de maior retorno temporal e fisiológico."],
    ["3. Execução & Alta Densidade","Sessões focadas e intensas de 45 minutos com correção técnica imediata, presencialmente ou com monitorização via app."],
    ["4. Monitorização de Consistência","Acompanhamento contínuo da adesão semanal, ajuste da carga de treino e validação do progresso físico e de disposição."],
    ["5. Ajustes Dinâmicos de Rotina","Adaptações estratégicas permanentes para responder a viagens de negócios, eventos corporativos e picos sazonais de trabalho."]
  ],
  modes: [
    {id:"presencial", cls:"a", flags:["pt"], where:"Portugal · Presencial Exclusivo", title:"Personal Training Presencial", text:"Acompanhamento presencial individual e reservado para executivos em Portugal. Orientação técnica milimétrica, correção postural imediata e máxima densidade de treino.", cta:"Quero treino presencial", market:"pt", link:"Ver programas"},
    {id:"online", cls:"b", flags:["pt"], where:"Portugal & Internacional", title:"Fitness & Performance Advisory Online", text:"Consultoria e acompanhamento executivo à distância via aplicação. Treinos de 45 minutos em vídeo, registo de métricas, protocolos para viagens/hotéis e chat direto com o Ale Braga. Disponível 24/7.", cta:"Quero acompanhamento online", market:"pt", link:"Ver programas"}
  ],
  /* ---- PLANOS E VALORES ----
     Valores em euros (€) para o mercado europeu e internacional */
  markets: {
    pt: {label:"Portugal & Europa", currency:"eur", of:"em Portugal", note:"Portugal & Internacional · presencial exclusivo e online via app · valores em euros (€)",
         prices:{mensal:{price:65}, trimestral:{price:175}, semestral:{price:320}}}
  },
  planTypes: [
    {id:"mensal", name:"Mensal", word:"mensal", tag:"1 mês de acompanhamento", desc:"Ciclo de alinhamento e início imediato do método objetivo de 45 minutos.", note:"Valor para 1 mês"},
    {id:"trimestral", name:"Trimestral", word:"trimestral", tag:"3 meses de performance", desc:"Ciclo recomendado para adaptação física, recomposição corporal e consistência executiva.", note:"Valor total dos 3 meses", feat:true, badge:"Recomendado para Empresários"},
    {id:"semestral", name:"Semestral", word:"semestral", tag:"6 meses de transformação", desc:"Consolidação de hábitos de alta performance, melhoria contínua e maior estabilidade de rotina.", note:"Valor total dos 6 meses"}
  ],
  included: [
    "Sessão Estratégica e diagnóstico inicial de rotina",
    "Planeamento de treinos objetivos em blocos de 45 min",
    "Acesso à aplicação móvel com demonstrações em vídeo",
    "Protocolos adaptáveis para viagens e hotéis",
    "Registo e métricas de consistência e cargas",
    "Acompanhamento próximo e ajustes semanais",
    "Canal direto de suporte com o Ale Braga",
    "Aconselhamento contínuo de energia e rotina"
  ],
  checkins: {
    intro: "O acompanhamento e métricas de desempenho permitem monitorizar:",
    items: [
      "Consistência e assiduidade em semanas de agenda exigente",
      "Qualidade técnica e progressão de estímulo nos treinos de 45 minutos",
      "Níveis de disposição diária, clareza mental e recuperação física",
      "Flexibilidade da rotina perante reuniões, deslocações e viagens",
      "Métricas corporais, tônus muscular e composição física"
    ],
    cycle: "Os ajustes na periodização são contínuos e dinâmicos, garantindo que o treino acompanha o ritmo real do seu negócio."
  },
  faq: [
    ["O atendimento é presencial, online ou os dois?","O acompanhamento contempla ambas as modalidades. Disponibilizamos sessões presenciais individuais para executivos em Portugal e o programa de Fitness & Performance Advisory 100% online através de aplicação móvel para profissionais com rotina de viagens ou residentes no estrangeiro."],
    ["Onde acontecem as sessões presenciais?","As sessões presenciais decorrem em ambiente estruturado, confortável e reservado em Portugal (ginasio de topo / estúdio parceiro), focado em discrição, foco absoluto e sem filas de espera para aparelhos."],
    ["Quanto dura cada sessão de treino?","Cada sessão tem a duração exata de 45 minutos. O método foi concebido especificamente para maximizar a densidade de estímulo muscular e metabólico sem roubar tempo precioso à tua agenda profissional."],
    ["O serviço é indicado para iniciantes ou apenas avançados?","É indicado para qualquer empresário, executivo ou profissional, independentemente do nível de experiência. O programa respeita a tua individualidade biológica, dores prévias ou anos de sedentarismo, evoluindo de forma segura e progressiva."],
    ["Como funciona a Sessão Estratégica inicial?","É uma reunião individual e confidencial onde analisamos a tua rotina, compromissos diários, histórico desportivo e metas físicas. A partir daí, desenhamos a estratégia exata de treino de 45 minutos adequada à tua realidade."],
    ["Existe acompanhamento entre as sessões de treino?","Sim. O pilar de Fitness & Performance Advisory inclui suporte direto e monitorização através da aplicação móvel, avaliando consistência, recuperação e respondendo rapidamente a imprevistos na tua semana."],
    ["Qual é o investimento e as formas de adesão?","O investimento depende da modalidade escolhida (presencial ou online) e da duração do ciclo pretendido (mensal, trimestral ou semestral). Podes consultar as opções na secção de Programas ou definir a melhor alternativa na Sessão Estratégica.","Ver Programas & Valores","#planos"],
    ["Como funcionam cancelamentos e reagendamentos por motivos de trabalho?","Compreendemos perfeitamente a volatilidade de agendas executivas. As remarcações presenciais são flexíveis mediante aviso prévio estipulado e, caso estejas em viagem, o treino é imediatamente adaptado para o ginásio do hotel ou quarto."]
  ]
};


var ICONS = {
  hip:'<path d="M6 40A18 18 0 0 1 42 40"/><path d="M13 40A11 11 0 0 1 35 40"/><path d="M20 40A4 4 0 0 1 28 40"/>',
  glu:'<path d="M5 41C5 22 15 9 24 9s19 13 19 32"/><path d="M14 41c0-11 4-18 10-18s10 7 10 18"/>',
  cmp:'<circle cx="24" cy="24" r="17"/><path d="M24 7a17 17 0 0 1 0 34z" fill="currentColor"/>',
  slim:'<path d="M5 12l13 11 10-5 14 18"/><circle cx="42" cy="36" r="3" fill="currentColor"/>',
  mass:'<path d="M9 41V31M19 41V23M29 41V15M39 41V7" stroke-width="4"/>',
  str:'<path d="M4 41L24 8l20 33z"/><path d="M14 41l10-17 10 17"/>',
  perf:'<path d="M3 26h10l5-14 8 26 6-16h13"/>',
  cap:'<rect x="6" y="6" width="10" height="10"/><rect x="19" y="6" width="10" height="10"/><rect x="32" y="6" width="10" height="10" fill="currentColor"/><rect x="6" y="19" width="10" height="10"/><rect x="19" y="19" width="10" height="10" fill="currentColor"/><rect x="32" y="19" width="10" height="10"/><rect x="6" y="32" width="10" height="10" fill="currentColor"/><rect x="19" y="32" width="10" height="10"/><rect x="32" y="32" width="10" height="10"/>'
};


var QUIZ = [
  {key:"goal", q:"Qual é o teu principal objetivo de performance?", hint:"Escolhe a opção que melhor descreve as tuas prioridades atuais.", type:"single", label:"Objetivo",
   opts:["Aumentar energia e disposição para o trabalho","Reduzir gordura corporal e tonificar","Ganhar força, massa muscular e presença física","Criar consistência de treino numa agenda cheia","Corrigir postura e aliviar dores/stress","Outro objetivo"]},
  {key:"country", q:"Em que país estás sediado?", hint:"Presencial em Portugal ou acompanhamento executivo online à distância.", type:"single", label:"País",
   opts:["Portugal","Outro país / Internacional"]},
  {key:"format", q:"Que formato de acompanhamento procuras?", hint:"Presencial exclusivo em Portugal ou Fitness & Performance Advisory online.", type:"single", label:"Formato",
   opts:["Presencial em Portugal","Online via Aplicação"], when:function(){ return S.a.country==="Portugal"; }},
  {key:"level", q:"Como descreverias a tua rotina e experiência com treino?", hint:"O método é calibrado especificamente para o teu ponto de partida.", type:"single", label:"Rotina & Nível",
   opts:["Parado há vários meses/anos por falta de tempo","Treino irregularmente quando a agenda permite","Treino regular mas sem metodologia e resultados claros","Avançado, à procura de máxima eficiência temporal"]},
  {key:"avail", q:"Qual é a tua disponibilidade preferencial para treinar 45 minutos?", hint:"Indica os dias e períodos compatíveis com a tua agenda.", type:"avail", label:"Disponibilidade"},
  {key:"support", q:"O que mais valorizas no acompanhamento de um profissional?", hint:"", type:"single", label:"Valorização no suporte",
   opts:["Treinos objetivos de 45 minutos sem perda de tempo","Acompanhamento estratégico próximo e foco em consistência","Flexibilidade total para viagens e imprevistos","Orientação técnica e foco em longevidade/performance"]},
  {key:"plan", q:"Que modalidade te interessa avaliar na Sessão Estratégica?", hint:"Podes consultar os programas na secção Programas & valores.", type:"single", label:"Modalidade",
   opts:CFG.planTypes.map(function(p){return p.name;}).concat(["Gostaria de avaliar na Sessão Estratégica com o Ale"])}
];


var DAYS = ["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];
var PERIODS = ["Manhã","Tarde","Noite"];
var FLEX = "Sem preferência definida";

/* ============ LÓGICA ============ */
// Forçar sempre voltar ao topo ao recarregar a página (como nos sites profissionais)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Limpar hash ao recarregar para garantir retorno ao início
if (window.location.hash && window.location.hash !== '#inicio') {
  history.replaceState(null, null, window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
}

window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});

window.addEventListener('pageshow', function(e) {
  if (e.persisted) {
    window.scrollTo(0, 0);
  }
});

function wa(msg){ return "https://wa.me/" + CFG.phone + "?text=" + encodeURIComponent(msg); }
function $(s,r){ return (r||document).querySelector(s); }
function esc(s){ return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
var ARR = '<svg class="arr" aria-hidden="true"><use href="#arrow"/></svg>';
function reduced(){ return matchMedia("(prefers-reduced-motion:reduce)").matches; }

/* Contactos a partir dos dados */
document.querySelectorAll("[data-ig]").forEach(function(a){ a.href = CFG.instagram; });
document.querySelectorAll("[data-phone]").forEach(function(a){ a.textContent = CFG.phoneDisplay; });
document.querySelectorAll("[data-wa]").forEach(function(a){
  var m = CFG.msgs[a.getAttribute("data-wa")];
  if(m) a.href = wa(m);
});

/* ===== Navegação, menu e scroll ===== */
var navOpen = false;
function headerH(){ var h = $(".hdr"); return h ? h.offsetHeight : 0; }
function goToEl(el, focusIt){
  if(!el) return;
  var y = el.getBoundingClientRect().top + window.pageYOffset - headerH() + 1;
  window.scrollTo({top:Math.max(0,y), behavior: reduced() ? "auto" : "smooth"});
  if(focusIt){ if(!el.hasAttribute("tabindex")) el.setAttribute("tabindex","-1"); el.focus({preventScroll:true}); }
}
function goTo(id, focusIt){ goToEl(document.getElementById(id), focusIt); }

(function(){
  var burger = $("#burger"), panel = $("#mnav"), root = document.documentElement;
  var links = CFG.nav.map(function(n){return '<a href="'+n[1]+'">'+esc(n[0])+'</a>';}).join("");
  $("#nav").innerHTML = links;
  $("#mnav-in").innerHTML = CFG.nav.map(function(n,i){return '<a class="ml" style="--i:'+i+'" href="'+n[1]+'">'+esc(n[0])+'</a>';}).join("")
    + '<a class="btn btn-light" href="'+wa(CFG.msgs.avaliacao)+'" target="_blank" rel="noopener">Marcar uma avaliação '+ARR+'</a>'
    + '<p class="mk">Personal Trainer · Brasil &amp; Portugal</p>';
  $("#f-nav").innerHTML = CFG.nav.map(function(n){return '<li><a href="'+n[1]+'">'+esc(n[0])+'</a></li>';}).join("");

  function setOpen(v, restoreFocus){
    navOpen = v;
    burger.setAttribute("aria-expanded", String(v));
    burger.setAttribute("aria-label", v ? "Fechar menu" : "Abrir menu");
    panel.classList.toggle("open", v);
    root.classList.toggle("menu-open", v);
    if(v){ var f = panel.querySelector("a"); if(f) f.focus({preventScroll:true}); }
    else if(restoreFocus !== false){ burger.focus({preventScroll:true}); }
  }
  burger.addEventListener("click", function(){ setOpen(!navOpen); });
  document.addEventListener("keydown", function(e){
    if(!navOpen) return;
    if(e.key === "Escape"){ setOpen(false); return; }
    if(e.key === "Tab"){
      var f = [burger].concat([].slice.call(panel.querySelectorAll("a"))), i = f.indexOf(document.activeElement);
      if(e.shiftKey && i <= 0){ e.preventDefault(); f[f.length-1].focus(); }
      else if(!e.shiftKey && i === f.length-1){ e.preventDefault(); burger.focus(); }
    }
  });
  matchMedia("(min-width:960px)").addEventListener("change", function(m){ if(m.matches && navOpen) setOpen(false, false); });

  /* Todas as ligações internas: scroll com desconto da altura do cabeçalho, sem depender do comportamento do hash */
  document.addEventListener("click", function(e){
    var a = e.target.closest('a[href^="#"]'); if(!a) return;
    var id = a.getAttribute("href").slice(1), t = id && document.getElementById(id); if(!t) return;
    e.preventDefault();
    var wasOpen = navOpen; if(wasOpen) setOpen(false, false);
    requestAnimationFrame(function(){ goToEl(t, true); });
  });

  /* Secção ativa */
  var ids = CFG.nav.map(function(n){return n[1].slice(1);}), all = document.querySelectorAll(".nav a, .mnav a.ml"), tick = false;
  function spy(){
    tick = false;
    var y = headerH() + Math.round(innerHeight * 0.3), cur = null;
    ids.forEach(function(id){ var el = document.getElementById(id); if(el && el.getBoundingClientRect().top <= y) cur = id; });
    all.forEach(function(a){
      if(cur && a.getAttribute("href") === "#"+cur) a.setAttribute("aria-current","true"); else a.removeAttribute("aria-current");
    });
  }
  function onScroll(){ if(!tick){ tick = true; requestAnimationFrame(spy); } }
  addEventListener("scroll", onScroll, {passive:true}); addEventListener("resize", onScroll); spy();
})();

/* Faixa: o conjunto repete-se o suficiente para cobrir o ecrã e o ciclo mede-se em pixéis, sem saltos nem espaços vazios */
(function(){
  var track = $("#strip"), items = CFG.focus.map(function(f){return f[0];}), prev = 0, timer = 0;
  items.splice(3, 0, "Performance para Empresários · Treino Objetivo em 45 Minutos · Portugal & Global");
  var one = items.map(function(t){return "<span>"+esc(t)+"</span>";}).join("");
  function build(){
    track.innerHTML = "<div>"+one+"</div>";
    var w = track.firstChild.getBoundingClientRect().width;
    if(!w) return;
    if(Math.abs(w - prev) < 1 && track.childNodes.length > 1) return;
    prev = w;
    var n = Math.ceil(innerWidth / w) + 1, html = "";
    for(var i=0;i<n;i++) html += "<div>"+one+"</div>";
    track.innerHTML = html;
    track.style.setProperty("--shift", (-w)+"px");
    /* velocidade constante em px/s; em movimento reduzido segue, mas mais devagar */
    track.style.setProperty("--dur", (w / (reduced() ? 26 : 52)).toFixed(2)+"s");
  }
  function later(){ clearTimeout(timer); timer = setTimeout(function(){ requestAnimationFrame(build); }, 150); }
  build(); addEventListener("resize", later);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ prev = 0; build(); });
})();

/* Sobre: focos de atuação */
$("#fchips").innerHTML = CFG.chips.map(function(c){return "<span>"+esc(c)+"</span>";}).join("");

/* Áreas de foco */
$("#focus-grid").innerHTML = CFG.focus.map(function(f,i){
  return '<article class="fc'+(f[3]?' feat':'')+'" data-reveal style="--d:'+((i%3)*0.07)+'s">'
    + '<svg class="fi" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="miter" aria-hidden="true">'+ICONS[f[2]]+'</svg>'
    + '<h3>'+esc(f[0])+'</h3><p>'+esc(f[1])+'</p></article>';
}).join("");
document.querySelectorAll("#focus-grid .fi > *").forEach(function(n){ n.setAttribute("pathLength","1"); });

/* Passos */
$("#steps").innerHTML = CFG.steps.map(function(s,i){
  return '<li class="step" data-reveal style="--d:'+(i*0.09)+'s"><span class="n" aria-hidden="true">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>';
}).join("");

/* Modalidades */
$("#modes").innerHTML = CFG.modes.map(function(m,i){
  var mk = m.id==="presencial"
    ? '<svg class="mk" viewBox="0 0 84 84" aria-hidden="true"><circle cx="42" cy="42" r="38" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="42" cy="42" r="8" fill="currentColor"/></svg>'
    : '<svg class="mk" viewBox="0 0 84 84" aria-hidden="true"><path d="M4 42h18l10-26 16 52 10-26h22" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="miter"/></svg>';
  var flags = m.flags.map(function(f){return '<svg class="flag" aria-hidden="true"><use href="#flag-'+f+'"/></svg>';}).join("");
  return '<article class="mode dark '+m.cls+'" data-reveal style="--d:'+(i*0.1)+'s">'
    + '<span class="badge">'+flags+esc(m.where)+'</span>'
    + mk + '<h3>'+esc(m.title)+'</h3><p>'+esc(m.text)+'</p>'
    + '<div class="macts"><button type="button" class="btn btn-light" data-mode="'+m.id+'">'+esc(m.cta)+' '+ARR+'</button>'
    + '<button type="button" class="alt" data-go-market="'+m.market+'">'+esc(m.link)+'</button></div></article>';
}).join("");

/* ===== Planos e valores ===== */
var MARKET = "pt";
var planTimer = null;
function priceHTML(m, p){
  var per = p.per ? '<span class="per">'+esc(p.per)+'</span>' : '';
  return '<span class="num">'+p.price+'</span> <span class="cur">€</span>'+per;
}
function renderPlans(mk, animate){
  var m = CFG.markets[mk] || CFG.markets.pt, grid = $("#plan-grid");
  if(!grid) return;
  function paint(){
    grid.innerHTML = CFG.planTypes.map(function(pt){
      var p = m.prices[pt.id];
      return '<article class="plan'+(pt.feat?' feat dark':'')+'" aria-labelledby="pl-'+pt.id+'">'
        + (pt.badge ? '<span class="pbadge">'+esc(pt.badge)+'</span>' : '')
        + '<p class="ptag">'+esc(pt.tag)+'</p>'
        + '<div><h3 class="pn" id="pl-'+pt.id+'">'+esc(pt.name)+'</h3><p class="pd">'+esc(pt.desc)+'</p></div>'
        + '<div class="price">'+priceHTML(m,p)+'</div><p class="pnote">'+esc(pt.note)+'</p>'
        + '<div class="acts"><button type="button" class="btn btn-primary" data-plan="'+pt.id+'">Escolher plano '+ARR+'</button></div></article>';
    }).join("");
    var mktNote = $("#mkt-note");
    if(mktNote) mktNote.textContent = m.note;
    grid.classList.remove("out");
  }
  clearTimeout(planTimer);
  if(animate && !reduced()){ grid.classList.add("out"); planTimer = setTimeout(paint, 190); } else paint();
}
var SEL = {plan:null};
function syncSel(noRender){
  /* Mantém o questionário alinhado com a última escolha feita em Planos & valores */
  var pt = CFG.planTypes.filter(function(p){return p.id===SEL.plan;})[0];
  if(!pt) return;
  S.a.country = CFG.markets[MARKET].label; S.a.plan = pt.name; S.preset.plan = true; S.preset.country = true;
  var sp = $("#sel-plan"); if(sp){ sp.hidden = false; sp.textContent = "Selecionado: "+CFG.markets[MARKET].label+" · "+pt.name; }
  if(!noRender) render(false);
}
function setMarket(mk, animate, user){
  if(!CFG.markets[mk]) mk = "pt";
  MARKET = mk;
  renderPlans(mk, animate);
  if(user) syncSel();
}
document.addEventListener("click", function(e){
  var g = e.target.closest("[data-go-market]"); if(!g) return;
  setMarket("pt", false, true);
  goTo("planos", true);
});
setMarket("pt", false);

/* Cartões antes dos preços: check-ins e reavaliações, incluído em todas as modalidades */
$("#stack").innerHTML =
  '<article class="scard light" style="--i:0"><div><p class="sk">Acompanhamento</p><h3>Check-ins e reavaliações</h3><p>'+esc(CFG.checkins.intro)+'</p></div>'
  + '<div><ul class="incl-list">'+CFG.checkins.items.map(function(x){return "<li>"+esc(x)+"</li>";}).join("")+'</ul><p class="cyc">'+esc(CFG.checkins.cycle)+'</p></div></article>'
  + '<article class="scard deep" style="--i:1"><div><p class="sk">Em todos os planos</p><h3>Incluído em todas as modalidades</h3></div>'
  + '<div><ul class="incl-list">'+CFG.included.map(function(x){return "<li>"+esc(x)+"</li>";}).join("")+'</ul></div></article>';
(function(){
  var box = $("#stack"), cards = [].slice.call(box.querySelectorAll(".scard")), tick = false, tops = [];
  function setHH(){ document.documentElement.style.setProperty("--hh", headerH()+"px"); }
  function fits(){
    /* o empilhamento só se ativa se cada cartão cabe no ecrã; caso contrário, leitura normal */
    var room = innerHeight - headerH() - 40;
    box.classList.remove("nostack");
    var ok = !reduced() && cards.every(function(c){ return c.offsetHeight <= room; });
    box.classList.toggle("nostack", !ok);
    return ok;
  }
  function depth(){
    tick = false;
    if(box.classList.contains("nostack")) return;
    cards.forEach(function(c,i){
      var nx = cards[i+1];
      if(!nx){ c.style.transform = ""; c.style.filter = ""; return; }
      var top = tops[i] || 0;
      var p = 1 - Math.max(0, Math.min(1, (nx.getBoundingClientRect().top - top) / Math.max(1, c.offsetHeight)));
      c.style.transform = "scale("+(1 - .05*p).toFixed(4)+")";
      c.style.filter = "brightness("+(1 - .1*p).toFixed(3)+")";
    });
  }
  function req(){ if(!tick){ tick = true; requestAnimationFrame(depth); } }
  function init(){ setHH(); fits(); tops = cards.map(function(c){ return parseFloat(getComputedStyle(c).top) || 0; }); depth(); }
  var rzs = 0; function initSoon(){ cancelAnimationFrame(rzs); rzs = requestAnimationFrame(init); }
  addEventListener("scroll", req, {passive:true}); addEventListener("resize", initSoon); init();
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(init);
})();

/* FAQ */
$("#acc").innerHTML = CFG.faq.map(function(f,i){
  var link = f[2] ? ' <a class="inl" href="'+f[3]+'">'+esc(f[2])+'</a>' : '';
  return '<div class="acc-item"><h3 style="font-size:inherit"><button class="acc-q" type="button" aria-expanded="false" aria-controls="fa-'+i+'" id="fq-'+i+'"><span>'+esc(f[0])+'</span><i aria-hidden="true"></i></button></h3><div class="acc-a" id="fa-'+i+'" role="region" aria-labelledby="fq-'+i+'"><div><p>'+esc(f[1])+link+'</p></div></div></div>';
}).join("");
$("#acc").addEventListener("click", function(e){
  var b = e.target.closest(".acc-q"); if(!b) return;
  var item = b.closest(".acc-item"), wasOpen = item.classList.contains("open");
  document.querySelectorAll(".acc-item.open").forEach(function(o){ o.classList.remove("open"); $(".acc-q",o).setAttribute("aria-expanded","false"); });
  if(!wasOpen){ item.classList.add("open"); b.setAttribute("aria-expanded","true"); }
});

/* ===== Questionário ===== */
var S = { step:0, editing:false, lock:false, preset:{}, a:{goal:null,country:null,format:null,level:null,days:[],periods:[],flex:false,support:null,plan:null} };
var stage = $("#stage"), errEl = $("#q-err"), nav = $("#q-nav"), qcard = $(".qcard");

function applies(q){ return !q.when || q.when(); }
/* perguntas a apresentar: as que se aplicam e que ainda não foram respondidas pelas escolhas feitas em Planos / Modalidades */
function seq(){ return QUIZ.filter(function(q){ return applies(q) && !S.preset[q.key]; }); }
function summaryList(){ return QUIZ; }   /* o resumo mostra todas; o formato é "Online" quando o país é o Brasil */
function availText(){
  if(S.a.flex) return FLEX;
  var parts = [];
  if(S.a.days.length) parts.push("Dias: "+S.a.days.join(", "));
  if(S.a.periods.length) parts.push("Períodos: "+S.a.periods.join(", "));
  return parts.join(" · ");
}
function answerOf(k){
  if(k==="avail") return availText();
  if(k==="format") return S.a.country==="Brasil" ? "Online" : S.a.format;
  return S.a[k];
}
function valid(q){
  if(q.key==="avail") return S.a.flex || S.a.days.length>0 || S.a.periods.length>0;
  return !!answerOf(q.key);
}
function progress(){
  var total = seq().length, done = S.step>=total ? total : S.step;
  var pct = total ? Math.round(done/total*100) : 100;
  $("#q-bar i").style.width = pct+"%";
  $("#q-bar").setAttribute("aria-valuenow", pct);
  $("#q-pct").textContent = pct+"%";
  $("#q-count").textContent = S.step>=total ? "Resumo" : "Pergunta "+(S.step+1)+" de "+total;
}
function buildMessage(){
  var lines = ["Olá, " + (CFG.trainerFirstName || "Ale") + "! Concluí o questionário no teu website sobre Performance para Empresários e gostaria de agendar a minha Sessão Estratégica. Seguem as minhas informações:",""];
  summaryList().forEach(function(q){ lines.push("• "+q.label+": "+answerOf(q.key)); });
  lines.push("","Fico a aguardar a sua resposta para agendarmos a sessão.");
  return lines.join("\n");
}
function render(focus){
  var list = seq(), total = list.length;
  if(S.step > total) S.step = total;
  progress(); errEl.textContent = ""; S.lock = false;
  var h = "";
  qcard.classList.toggle("done", S.step>=total);
  if(S.step < total){
    var q = list[S.step];
    h += '<p class="qk">'+esc(q.label)+'</p><h3 id="q-title" tabindex="-1">'+esc(q.q)+'</h3>';
    if(q.hint) h += '<p class="hint">'+esc(q.hint)+'</p>';
    if(q.type==="single"){
      h += '<div class="opts" role="radiogroup" aria-labelledby="q-title">' + q.opts.map(function(o){
        var cur = S.a[q.key], tab = (cur===o || (!cur && q.opts.indexOf(o)===0)) ? 0 : -1;
        return '<button type="button" class="opt" role="radio" tabindex="'+tab+'" aria-checked="'+(cur===o)+'" data-v="'+esc(o)+'">'+esc(o)+'</button>';
      }).join("") + '</div>';
      /* perguntas de escolha avançam sozinhas: só o botão Voltar */
      nav.innerHTML = '<button type="button" class="back" id="q-back"'+(S.step===0?" hidden":"")+'>Voltar</button>';
    } else {
      h += '<div><p class="grp">Dias da semana</p><div class="chips" role="group" aria-label="Dias da semana">' + DAYS.map(function(d){
        return '<button type="button" class="chip" data-d="'+d+'" aria-pressed="'+(S.a.days.indexOf(d)>-1)+'">'+d+'</button>';}).join("") + '</div></div>'
      + '<div><p class="grp">Períodos do dia</p><div class="chips" role="group" aria-label="Períodos do dia">' + PERIODS.map(function(d){
        return '<button type="button" class="chip" data-p="'+d+'" aria-pressed="'+(S.a.periods.indexOf(d)>-1)+'">'+d+'</button>';}).join("") + '</div></div>'
      + '<div class="chips"><button type="button" class="chip" data-flex="1" aria-pressed="'+S.a.flex+'">'+FLEX+'</button></div>';
      /* seleção múltipla: o avanço é confirmado pela pessoa */
      nav.innerHTML = '<button type="button" class="back" id="q-back"'+(S.step===0?" hidden":"")+'>Voltar</button><button type="button" class="btn btn-primary" id="q-next">Continuar '+ARR+'</button>';
    }
  } else {
    h += '<p class="qk">Resumo</p><h3 id="q-title" tabindex="-1">O próximo passo da tua evolução começa aqui.</h3>'
      + '<p class="hint">Já reunimos o panorama da sua rotina e objetivos. Agora, avance para a Sessão Estratégica diretamente com o '+(CFG.trainerFirstName || 'Ale')+' no WhatsApp.</p><ul class="sum">'
      + summaryList().map(function(q){ return '<li><b>'+esc(q.label)+'</b><span>'+esc(answerOf(q.key))+'</span><button type="button" data-edit="'+q.key+'" aria-label="Alterar '+esc(q.label)+'">Alterar</button></li>'; }).join("")
      + '</ul><p class="priv">As respostas ficam apenas nesta página. Só são incluídas na mensagem de WhatsApp se decidires abri-la e enviá-la. Não partilhes aqui dados de saúde, fotografias, peso ou altura.</p>';
    nav.innerHTML = '<button type="button" class="back" id="q-back">Voltar</button><a class="btn btn-primary btn-send" id="q-send" href="' + wa(buildMessage()) + '" target="_blank" rel="noopener">Agendar Sessão com o ' + (CFG.trainerFirstName || 'Ale') + '</a>';
  }
  stage.innerHTML = h;
  stage.classList.remove("in"); void stage.offsetWidth; stage.classList.add("in");
  if(focus){ var t = $("#q-title"); if(t) t.focus({preventScroll:true}); }
}
function go(n, focus){ S.step = n; render(focus); }
function showCard(){
  var r = qcard.getBoundingClientRect();
  if(r.top < headerH() || r.top > innerHeight*0.5) goToEl(qcard, false);
}
/* depois de responder: segue para a pergunta seguinte, ou (em edição) para a primeira em falta / resumo */
function advance(){
  var list = seq();
  if(S.editing){
    var miss = -1;
    for(var i=0;i<list.length;i++){ if(!valid(list[i])){ miss = i; break; } }
    if(miss > -1){ go(miss, true); return; }
    S.editing = false; go(list.length, true); showCard(); return;
  }
  go(S.step+1, true);
  if(S.step >= seq().length) showCard();
}

stage.addEventListener("click", function(e){
  var o = e.target.closest(".opt");
  if(o){
    if(S.lock) return;
    var q = seq()[S.step]; if(!q) return;
    S.a[q.key] = o.getAttribute("data-v"); errEl.textContent="";
    stage.querySelectorAll(".opt").forEach(function(x){ x.setAttribute("aria-checked", String(x===o)); x.tabIndex = (x===o) ? 0 : -1; });
    S.lock = true;
    setTimeout(advance, reduced() ? 0 : 280);
    return;
  }
  var c = e.target.closest(".chip");
  if(c){
    if(c.hasAttribute("data-flex")){ S.a.flex = !S.a.flex; if(S.a.flex){ S.a.days=[]; S.a.periods=[]; } }
    else {
      S.a.flex = false;
      var list = c.hasAttribute("data-d") ? S.a.days : S.a.periods, v = c.getAttribute("data-d")||c.getAttribute("data-p"), i = list.indexOf(v);
      if(i>-1) list.splice(i,1); else list.push(v);
      if(c.hasAttribute("data-d")) S.a.days = DAYS.filter(function(d){return S.a.days.indexOf(d)>-1;});
    }
    errEl.textContent="";
    stage.querySelectorAll(".chip").forEach(function(x){
      var on = x.hasAttribute("data-flex") ? S.a.flex : x.hasAttribute("data-d") ? S.a.days.indexOf(x.getAttribute("data-d"))>-1 : S.a.periods.indexOf(x.getAttribute("data-p"))>-1;
      x.setAttribute("aria-pressed", String(on));
    });
    return;
  }
  var ed = e.target.closest("[data-edit]");
  if(ed){
    var k = ed.getAttribute("data-edit");
    delete S.preset[k];   /* pergunta antes dada como respondida volta a poder ser alterada */
    var idx = seq().map(function(x){return x.key;}).indexOf(k);
    S.editing = true; go(Math.max(0, idx), true);
  }
});
/* setas movem o foco; Enter/Espaço escolhem (e avançam) */
stage.addEventListener("keydown", function(e){
  var o = e.target.closest(".opt"); if(!o) return;
  var d = (e.key==="ArrowDown"||e.key==="ArrowRight") ? 1 : (e.key==="ArrowUp"||e.key==="ArrowLeft") ? -1 : 0;
  if(!d) return; e.preventDefault();
  var all = [].slice.call(stage.querySelectorAll(".opt")), n = all[(all.indexOf(o)+d+all.length)%all.length];
  all.forEach(function(x){ x.tabIndex = (x===n) ? 0 : -1; });
  n.focus();
});
nav.addEventListener("click", function(e){
  if(e.target.closest("#q-back")){
    var total = seq().length;
    if(S.step>=total){ S.editing = false; go(Math.max(0,total-1), true); }
    else go(Math.max(0,S.step-1), true);
    return;
  }
  if(e.target.closest("#q-next")){
    var q = seq()[S.step];
    if(!q || !valid(q)){
      errEl.textContent = "Seleciona pelo menos um dia ou período, ou a opção sem preferência.";
      return;
    }
    advance();
  }
});
/* Escolher plano: abre o questionário já com país e plano associados */
function openQuiz(){ S.editing = false; S.step = 0; render(false); goToEl(qcard, false); }
function selectPlan(id){
  var pt = CFG.planTypes.filter(function(p){return p.id===id;})[0]; if(!pt) return;
  SEL.plan = id; S.preset.plan = true; S.preset.country = true;
  syncSel(true);
  openQuiz();
}
/* Quero treino presencial / online: abre o questionário com o formato já definido */
function selectMode(id){
  S.preset.format = true;
  if(id==="presencial"){
    S.a.format = "Presencial"; S.a.country = "Portugal"; S.preset.country = true;
    if(MARKET !== "pt") setMarket("pt", false, true);
    if(!SEL.plan){ $("#sel-plan").hidden = false; $("#sel-plan").textContent = "Selecionado: Portugal · Presencial"; }
  } else {
    S.a.format = "Online";
    if(!SEL.plan){ $("#sel-plan").hidden = false; $("#sel-plan").textContent = "Selecionado: Online"; }
  }
  openQuiz();
}
document.addEventListener("click", function(e){
  var b = e.target.closest("[data-plan]"); if(b){ selectPlan(b.getAttribute("data-plan")); return; }
  var m = e.target.closest("[data-mode]"); if(m) selectMode(m.getAttribute("data-mode"));
});
render(false);

/* Reveal ao scroll (conteúdo visível por defeito; só desliza o que está abaixo da dobra) */
(function(){
  var els = document.querySelectorAll("[data-reveal],.hl");
  if(!("IntersectionObserver" in window) || reduced()) return;
  var io = new IntersectionObserver(function(en){
    en.forEach(function(x){ if(x.isIntersecting){ x.target.classList.remove("pre"); io.unobserve(x.target); } });
  },{threshold:.12, rootMargin:"0px 0px -6% 0px"});
  els.forEach(function(el){
    if(el.getBoundingClientRect().top > innerHeight){ el.classList.add("pre"); io.observe(el); }
  });
})();

/* Botão flutuante de WhatsApp: esconde-se apenas quando ficaria por cima de um botão ou controlo */
(function(){
  var f = $("#wa-float"), tick = false;
  var sel = ".btn,.opt,.chip,.acc-q,.alt,.tab,.sum button,.back,.nav a,.mnav a,.gl,.f-top-btn";
  function check(){
    tick = false;
    var cs = getComputedStyle(f), right = parseFloat(cs.right) || 16, bottom = parseFloat(cs.bottom) || 16, size = 58, pad = 10;
    var box = {l: innerWidth-right-size-pad, r: innerWidth-right+pad, t: innerHeight-bottom-size-pad, b: innerHeight-bottom+pad};
    var els = document.querySelectorAll(sel), hit = false;
    for(var i=0;i<els.length;i++){
      var el = els[i]; if(el.id === "wa-float") continue;
      var r = el.getBoundingClientRect(); if(!r.width || !r.height) continue;
      if(r.right > box.l && r.left < box.r && r.bottom > box.t && r.top < box.b){
        if(el.closest(".mnav") && !navOpen) continue;
        hit = true; break;
      }
    }
    f.classList.toggle("off", hit); f.tabIndex = hit ? -1 : 0;
  }
  var last = 0;
  function req(){
    if(tick) return; tick = true;
    var wait = Math.max(0, 120 - (performance.now() - last));
    setTimeout(function(){ requestAnimationFrame(function(){ last = performance.now(); check(); }); }, wait);
  }
  addEventListener("scroll", req, {passive:true}); addEventListener("resize", req);
  document.addEventListener("click", function(){ setTimeout(req, 60); setTimeout(req, 500); });
  window.__waCheck = check; check();
})();


/* Rodapé: wordmark com feixe de luz, luz do cursor e entrada letra a letra */
(function(){
  var ftr = $("#rodape"), wm = $("#wm"), inn = $("#wm-in"), txt = (CFG.trainerName || "ALE BRAGA").toUpperCase();
  inn.innerHTML = txt.split("").map(function(c,i){
    return c===" " ? '<span class="l sp" style="--k:'+i+'"></span>' : '<span class="l" style="--k:'+i+'">'+c+'</span>';
  }).join("");
  var letters = [].slice.call(inn.querySelectorAll(".l"));
  function fit(){
    /* ajusta o tamanho para o wordmark ocupar a largura útil do rodapé */
    var avail = ftr.clientWidth - (parseFloat(getComputedStyle(ftr.querySelector(".wrap")).paddingLeft)||16)*2;
    wm.style.setProperty("--wfs","100px");
    var w100 = inn.scrollWidth || 1;
    var fs = Math.floor(100 * avail / w100);
    wm.style.setProperty("--wfs", fs+"px");
    inn.style.setProperty("--ww", inn.scrollWidth+"px");
    letters.forEach(function(l){ l.style.setProperty("--ox", l.offsetLeft+"px"); });
  }
  var rz = 0; function fitSoon(){ cancelAnimationFrame(rz); rz = requestAnimationFrame(fit); }
  fit(); addEventListener("resize", fitSoon);
  if("IntersectionObserver" in window){
    new IntersectionObserver(function(en){ ftr.classList.toggle("live", en[0].isIntersecting); },{rootMargin:"80px"}).observe(ftr);
  } else ftr.classList.add("live");
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  /* entrada */
  if(!("IntersectionObserver" in window) || reduced()){ wm.classList.remove("pre"); wm.classList.add("done"); }
  else {
    var io = new IntersectionObserver(function(en){
      if(en[0].isIntersecting){ wm.classList.remove("pre"); setTimeout(function(){ wm.classList.add("done"); }, 1900); io.disconnect(); }
    },{threshold:.15});
    io.observe(ftr);
  }
  /* luz do cursor: só com rato; em ecrãs táteis fica desativada */
  if(matchMedia("(hover:hover) and (pointer:fine)").matches && !reduced()){
    var px = 0, py = 0, pq = 0;
    ftr.addEventListener("pointermove", function(e){
      px = e.clientX; py = e.clientY;
      if(pq) return;
      pq = requestAnimationFrame(function(){
        pq = 0;
        var r = ftr.getBoundingClientRect(), w = inn.getBoundingClientRect();
        ftr.style.setProperty("--fx", (px - r.left)+"px"); ftr.style.setProperty("--fy", (py - r.top)+"px"); ftr.style.setProperty("--fo","1");
        inn.style.setProperty("--mx", (px - w.left)+"px"); inn.style.setProperty("--my", (py - w.top)+"px");
      });
    }, {passive:true});
    ftr.addEventListener("pointerleave", function(){
      ftr.style.setProperty("--fo","0"); inn.style.setProperty("--mx","-999px"); inn.style.setProperty("--my","-999px");
    });
  }
})();


