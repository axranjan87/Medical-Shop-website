function addToCart(productName) {
  alert(`Added ${productName} to cart!`);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = event.target.name.value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  event.target.reset();
});
