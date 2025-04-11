document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Alternar classe ativa
      document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
      link.classList.add("active");
  
      // Alternar visibilidade das seções
      document.querySelectorAll(".section").forEach(section => section.classList.add("hidden"));
      const id = link.dataset.section;
      document.getElementById(id).classList.remove("hidden");
    });
  });
  