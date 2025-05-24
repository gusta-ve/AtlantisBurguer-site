document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".menu li a");

  menuLinks.forEach(link => {
    // Remove qualquer 'active' anterior
    link.classList.remove("active");

    // Marca apenas o link que corresponde à página atual
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});