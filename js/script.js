/* ==========================================================================
   Boa Hortifruti — Configuração editável
   Edite os valores abaixo para atualizar o site sem mexer no resto do código.
   ========================================================================== */

// Número de WhatsApp comercial da Boa Hortifruti, já no formato
// internacional completo (DDI 55 + DDD + número).
const WHATSAPP_NUMBER = "5571989470111";

const INSTAGRAM_URL = "https://www.instagram.com/boahortfruti/";

// Mensagem padrão enviada ao clicar em qualquer botão de WhatsApp.
// Pode ser sobrescrita por botão através do atributo data-wa-message.
const WHATSAPP_DEFAULT_MESSAGE = "Olá! Vim pelo site da Boa Hortifruti e gostaria de saber mais sobre os produtos.";

/* ==========================================================================
   Nossos produtos — 4 categorias (Frutas, Legumes e Hortaliças,
   Verduras e Folhas, Ervas/Temperos e Outros).
   Edite os arrays abaixo para adicionar, remover ou ajustar produtos.
   "imagem" é opcional — se vazio (null), o card procura automaticamente
   public/images/produtos/<grupo>/<nome-em-slug>.webp. Defina "imagem"
   manualmente só se o arquivo tiver um nome ou extensão diferente.
   ========================================================================== */

const PRODUCT_GROUPS = {
  frutas: {
    label: "Frutas",
    icon: "🍊",
    imagePath: "public/images/produtos/frutas/",
    items: [
      { nome: "Atemoia", imagem: "Atemoia.webp" },
      { nome: "Coco seco", imagem: "coco_seco.webp" },
      { nome: "Goiaba", imagem: "Goiaba.webp" },
      // "Laranja para suco" não é um produto separado — é a mesma Laranja Pera.
      { nome: "Laranja Pera", imagem: "Laranja_Pera.webp" },
      { nome: "Laranja Lima", imagem: "Laranja_Lima.webp" },
      { nome: "Lima-da-pérsia", imagem: "lima_da_persia.jpg" },
      { nome: "Melancia", imagem: "Melancia.jpg" },
      { nome: "Manga Espada", imagem: "Manga_Espada.jpg" },
      { nome: "Romã", imagem: "roma.jpg" },
      { nome: "Physalis", imagem: "Physalis.jpg" },
      { nome: "Pinha", imagem: "Pinha.jpg" },
      { nome: "Tangerina Murcot", imagem: "Tangerina_Murcot.jpg" },
    ],
  },
  legumes: {
    label: "Legumes e Hortaliças",
    icon: "🥦",
    imagePath: "public/images/produtos/legumes/",
    items: [
      { nome: "Aspargo", imagem: "Aspargo.jpg" },
      { nome: "Batata Yakon", imagem: "batata_yakon.jpg" },
      { nome: "Batata", imagem: "batata.jpg" },
      { nome: "Brócolis comum", imagem: "brocolis.jpg" },
      { nome: "Brócolis japonês", imagem: "brocolis_japones.jpg" },
      { nome: "Beterraba", imagem: "beterraba.jpg" },
      { nome: "Broto de alfafa", imagem: "broto_de_alfafa.jpg" },
      { nome: "Cenoura baby", imagem: "cenoura_baby.jpg" },
      { nome: "Chuchu", imagem: "chuchu.jpg" },
      { nome: "Couve-bruxelas", imagem: "couve-bruxelas.jpg" },
      { nome: "Couve-flor", imagem: "couve-flor.jpg" },
      { nome: "Feijão verde", imagem: "feijao_verde.jpg" },
      { nome: "Gengibre", imagem: "gengibre.jpg" },
      { nome: "Inhame", imagem: "inhame.jpg" },
      { nome: "Jiló", imagem: "jilo.jpg" },
      { nome: "Maxixe", imagem: "maxixe.jpg" },
      { nome: "Mandioquinha", imagem: "mandioquinha.jpg" },
      { nome: "Nabo", imagem: "nabo.jpg" },
      { nome: "Pepino japonês", imagem: "Pepino_japones.jpg" },
      // Ainda sem foto enviada — aparece com o selo discreto até a imagem chegar.
      { nome: "Pimenta cheiro", imagem: "pimenta-cheiro.jpg" },
      { nome: "Pimenta cheiro doce", imagem: "pimenta-cheiro_doce.jpg" },
      { nome: "Pimenta dedo-de-moça", imagem: "pimenta_dedo-de-moca.jpg" },
      { nome: "Pimenta malagueta", imagem: "pimenta_malagueta.jpg" },
      { nome: "Pimentão verde", imagem: "pimentao_verde.jpg" },
      { nome: "Quiabo", imagem: "quiabo.jpg" },
      { nome: "Mix de brócolis/couve", imagem: "mix_de_brocolis_e_couve.jpg" },
      { nome: "Mix de pimentas", imagem: "mix_de_pimentas.jpg" },
    ],
  },
  verduras: {
    label: "Verduras e Folhas",
    icon: "🥬",
    imagePath: "public/images/produtos/verduras/",
    items: [
      { nome: "Acelga", imagem: "acelga.jpg" },
      { nome: "Endívia", imagem: "endivia.jpg" },
      { nome: "Endívia torta", imagem: "endivia_torta.jpg" },
      { nome: "Escarola", imagem: "escarola.jpg" },
      { nome: "Folha de louro", imagem: "folha_de_louro.jpg" },
      { nome: "Nirá francês", imagem: "nira_frances.jpg" },
      { nome: "Radicchio", imagem: "radicchio.jpg" },
    ],
  },
  ervas: {
    label: "Ervas, Temperos e Outros",
    icon: "🌿",
    imagePath: "public/images/produtos/ervas/",
    items: [
      { nome: "Alecrim", imagem: "alecrim.jpg" },
      { nome: "Alho americano", imagem: "alho_americano.jpg" },
      { nome: "Alho-poró", imagem: "alho-poro.jpg" },
      { nome: "Cogumelo shitake", imagem: "cogumelo_shiitake.jpg" },
      { nome: "Salsa", imagem: "salsa.jpg" },
      { nome: "Tomilho", imagem: "tomilho.jpg" },
    ],
  },
};

/* ==========================================================================
   Helpers
   ========================================================================== */

function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function applyWhatsAppLinks() {
  document.querySelectorAll("[data-wa-link]").forEach((el) => {
    const customMessage = el.getAttribute("data-wa-message");
    el.setAttribute("href", buildWhatsAppLink(customMessage));
  });
}

function applyInstagramLinks() {
  document.querySelectorAll("[data-instagram-link]").forEach((el) => {
    el.setAttribute("href", INSTAGRAM_URL);
  });
}

// Gera o nome de arquivo esperado a partir do nome do produto, seguindo o
// mesmo padrão dos exemplos (ex.: "Lima-da-pérsia" -> "lima-da-persia").
function slugify(nome) {
  return nome
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/* ==========================================================================
   Renderiza os quatro carrosséis de produtos a partir de PRODUCT_GROUPS.

   Cada card tenta carregar a imagem automaticamente pelo caminho
   public/images/produtos/<grupo>/<nome-do-produto-em-slug>.webp (ou o
   caminho definido manualmente em "imagem"). Enquanto o arquivo real não
   existir, o carregamento falha silenciosamente e um selo decorativo
   discreto (sem texto, sem imagem de banco) aparece no lugar — quando a
   foto for adicionada com o nome certo, ela passa a aparecer sozinha,
   sem precisar mexer no código.
   ========================================================================== */

function renderProductCarousels() {
  Object.entries(PRODUCT_GROUPS).forEach(([key, group]) => {
    const viewport = document.getElementById(`carousel-${key}`);
    if (!viewport) return;

    viewport.innerHTML = group.items.map((item) => {
      const message = `Olá! Vim pelo site da Boa Hortifruti e tenho interesse em comprar ${item.nome}.`;
      const fileName = item.imagem || `${slugify(item.nome)}.webp`;
      const src = `${group.imagePath}${fileName}`;

      return `
        <article class="carousel-card">
          <div class="carousel-card-media">
            <img
              src="${src}"
              alt="${item.nome} — Boa Hortifruti"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.classList.add('is-visible');"
            >
            <div class="media-fallback" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4">
                <path d="M24 6c6 6 12 12.5 12 20a12 12 0 0 1-24 0c0-7.5 6-14 12-20z"/>
                <path d="M24 14v22M18 20c3 1 9 1 12 0" stroke-width="1.1"/>
              </svg>
            </div>
          </div>
          <div class="carousel-card-body">
            <h4>${item.nome}</h4>
            <span class="carousel-card-cat">${group.label}</span>
            <a class="btn btn-whatsapp btn-block" href="${buildWhatsAppLink(message)}" target="_blank" rel="noopener">
              Tenho interesse
            </a>
          </div>
        </article>
      `;
    }).join("");
  });
}

/* ==========================================================================
   Carrosséis — scroll nativo com snap (suporta touch swipe de graça),
   setas para avançar/voltar e indicadores. Sem bibliotecas externas.
   ========================================================================== */

function initCarousel(root) {
  const viewport = root.querySelector("[data-carousel-viewport]");
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");
  const dotsWrap = root.closest(".product-group")?.querySelector("[data-carousel-dots]");
  if (!viewport) return;

  const getCards = () => Array.from(viewport.children);

  function cardStep() {
    const cards = getCards();
    if (cards.length === 0) return 0;
    const style = window.getComputedStyle(viewport);
    const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
    return cards[0].getBoundingClientRect().width + gap;
  }

  function scrollByCards(direction) {
    viewport.scrollBy({ left: direction * cardStep(), behavior: "smooth" });
  }

  prevBtn?.addEventListener("click", () => scrollByCards(-1));
  nextBtn?.addEventListener("click", () => scrollByCards(1));

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") { event.preventDefault(); scrollByCards(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); scrollByCards(-1); }
  });

  function buildDots() {
    if (!dotsWrap) return;
    const cards = getCards();
    dotsWrap.innerHTML = cards.map((_, i) => `<span class="carousel-dot" data-dot-index="${i}"></span>`).join("");
  }
  buildDots();

  function updateActiveDot() {
    if (!dotsWrap) return;
    const step = cardStep();
    if (!step) return;
    const index = Math.round(viewport.scrollLeft / step);
    dotsWrap.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
    });
  }

  dotsWrap?.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-dot-index]");
    if (!dot) return;
    const index = Number(dot.dataset.dotIndex);
    viewport.scrollTo({ left: index * cardStep(), behavior: "smooth" });
  });

  let ticking = false;
  viewport.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveDot();
      ticking = false;
    });
  }, { passive: true });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateActiveDot, 150);
  });

  updateActiveDot();
}

function initAllCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(initCarousel);
}

/* ==========================================================================
   Menu mobile
   ========================================================================== */

function initMobileMenu() {
  const toggle = document.getElementById("hamburger");
  const nav = document.getElementById("mobile-nav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

/* ==========================================================================
   Header com sombra ao rolar
   ========================================================================== */

function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ==========================================================================
   Animações de entrada (fade + slide) via IntersectionObserver
   ========================================================================== */

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!("IntersectionObserver" in window) || elements.length === 0) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   Ano dinâmico no footer
   ========================================================================== */

function initFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ==========================================================================
   Init
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderProductCarousels();
  applyWhatsAppLinks();
  applyInstagramLinks();
  initMobileMenu();
  initHeaderScroll();
  initRevealAnimations();
  initAllCarousels();
  initFooterYear();
});
