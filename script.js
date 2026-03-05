const sections = document.querySelectorAll(".nf-section");

const observer = new IntersectionObserver((entries, obs) => {
     entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target); // anima solo la prima volta
      }
    });
  }, {
    threshold: 0.2 // parte quando il 20% della sezione è visibile
  });

  sections.forEach(section => observer.observe(section));


document.querySelectorAll("section").forEach(section => {

    const strip = section.querySelector(".nf-strip");
    const prev = section.querySelector(".nf-prev");
    const next = section.querySelector(".nf-next");

    if(!strip || !prev || !next) return;

    next.addEventListener("click", () => {
      strip.scrollBy({ left: strip.clientWidth, behavior: "smooth" });
    });

    prev.addEventListener("click", () => {
      strip.scrollBy({ left: -strip.clientWidth, behavior: "smooth" });
    });

  });

// navbar toglle //
const toggle = document.getElementById("nfToggle")
const navbar = document.querySelector(".navbar")

toggle.addEventListener("click", () => {
  navbar.classList.toggle("open")
})
