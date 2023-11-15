function initTabs() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
  }

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  if (botaoAbrir && botaoFechar && containerModal) {
    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.add("ativo");
    }
    function fecharModal(event) {
      event.preventDefault();
      containerModal.classList.remove("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }

    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

initModal();
initTabs();
