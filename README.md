# Ale Braga — Performance para Empresários (Portugal & Online)

Landing page de alta conversão, autoridade e posicionamento premium para o Coach, Personal Trainer e Empresário **Ale Braga** ([@eualebraga](https://www.instagram.com/eualebraga/) · [Linkbio](https://instabio.cc/8081719rPVC4X)), especializado em **Performance para Empresários** e **Fitness & Performance Advisory**.

---

## ⚡ Destaques da Plataforma

- **Posicionamento Executivo de Alto Valor:** Construído em torno da promessa central: *"Treino objetivo para quem tem agenda cheia"*, substituindo o Linkbio por uma experiência completa de autoridade, explicação do método e qualificação de clientes.
- **Estética Executive Athletic & Minimalista:** Paleta refinada em Obsidian Black (`#08080B`), Slate Graphite (`#121319`) e detalhes em **Executive Amber Gold (`#D4AF37`)**, transmitindo disciplina, foco, sofisticação e máxima eficiência temporal sem clichês de academias generalistas.
- **Logótipo Vetorial Exclusivo:** Brasão geométrico com monograma `AB` lapidado em gradiente dourado e tipografia corporativa `ALE BRAGA / PERFORMANCE PARA EMPRESÁRIOS`.
- **Método 45 Minutos:** Estrutura focada em blocos intensivos de 45 minutos com alta densidade de estímulo muscular e metabólico, permitindo resultados consistentes sem comprometer agendas executivas.
- **Funil de Conversão & Agendamento Estratégico:** Questionário interativo (Quiz) que recolhe perfil, rotina, objetivo e disponibilidade, gerando mensagem pré-formatada para agendamento direto da **Sessão Estratégica** no WhatsApp do treinador.
- **Multi-Mercado & Moedas:** Suporte a Portugal e União Europeia (€ EUR) e Brasil / Internacional (R$ BRL) para consultoria e advisory à distância.
- **Zero Bloat & Performance Extrema:** 100% Vanilla HTML5 semântico, CSS3 moderno e Vanilla JavaScript puro (LCP < 0.5s, 0 dependências externas de compilação).

---

## 📁 Estrutura de Arquivos

```
personalale/
├── index.html                    # Landing page semântica e acessível (WCAG AAA)
├── style.css                     # Design tokens Executive Gold & Obsidian Black
├── app.js                        # Motor interativo do quiz, CFG e despacho WhatsApp
├── assets/                       # Fotografias atléticas masculinas WebP de alta definição
│   ├── ale_hero.webp             # Foto principal do hero
│   ├── ale_about.webp            # Foto da seção sobre o profissional
│   └── ...
├── REPORT.html                   # Relatório interativo executivo de engenharia reversa
├── REVERSE_ENGINEERING_REPORT.md # Documentação técnica da arquitetura e adaptação
└── README.md                     # Documentação do projeto
```

---

## ⚙️ Personalização Rápida de Dados

Para atualizar telefone, redes sociais ou valores, abra `app.js` e modifique o objeto `CFG` no topo do ficheiro:

```javascript
var CFG = {
  trainerName: "Ale Braga",
  trainerFirstName: "Ale",
  jobTitle: "Coach, Personal Trainer & Fitness Advisory",
  location: "Portugal & Online",
  phone: "351910000000", // Número do WhatsApp com DDI
  phoneDisplay: "+351 910 000 000",
  instagram: "https://www.instagram.com/eualebraga/",
  ...
};
```

---

## 🌐 Como Executar Localmente

```bash
# Iniciar servidor local com Python:
python -m http.server 3000
```
Acesse `http://localhost:3000` no seu navegador.
