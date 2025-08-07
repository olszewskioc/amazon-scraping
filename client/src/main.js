import './style.css'
import { fetchProducts } from './api/scrape';
import { renderResults } from './components/renderresults';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Amazon Product Scraper</h1>
    <input type="text" id="keywordInput" placeholder="Enter a keyword..." />
    <button id="searchBtn">Search</button>

    <div id="results" class="results-container"></div>
  </div>
`

document.getElementById('searchBtn').addEventListener('click', () => {
  const keyword = document.getElementById('keywordInput').value.trim();
  if (!keyword) return alert('Please enter a keyword');
  fetchProducts(keyword)
  .then(products => {
      // Render the scrapped products in the page
      renderResults(products.products); // The Response is a JSON, so needeed to access the products property
    })
    .catch(err => {
      alert('Error fetching products.');
      console.error(err);
    })
});
