let review = document.querySelectorAll('.review');

for (let rev of review) {
if ( rev.textContent.length > 78) {
    rev.textContent = rev.textContent.slice(0,78) + '...'
};
};