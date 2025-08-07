export function renderResults(products) {
  const container = document.getElementById('results');
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    return;
  }

  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product-card');

    div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p><strong>Rating:</strong> ${product.rating || 'N/A'}</p>
      <p><strong>Reviews:</strong> ${product.reviews || 'N/A'}</p>
    `;

    container.appendChild(div);
  });
}