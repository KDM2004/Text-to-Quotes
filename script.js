const quoteForm = document.getElementById('quote-form');
const interestInput = document.getElementById('interest');
const quoteContainer = document.getElementById('quote-container');
const quote = document.getElementById('quote');

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const interest = interestInput.value;
  if (interest.trim()) {
    fetch(`https://api.quotable.io/random?tags=${interest}`)
      .then((response) => response.json())
      .then((data) => {
        quote.textContent = data.content;
        quoteContainer.style.display = 'block';
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
