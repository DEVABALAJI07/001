function scrollToContact() {
  document.getElementById("contact")
    .scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm")
.addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("/contact", {
    method: "POST",
    body: new FormData(this)
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("response").innerText = data.message;
    this.reset();
  });
});
