export async function fetchProducts(keyword) {
  // Send a GET request to the API endpoint, and encode the keyword to avoid errors
  const response = await fetch(`http://localhost:3001/api/scrape?keyword=${encodeURIComponent(keyword)}`);

  if (!response.ok) {
    throw new Error('Failed to fetch from API');
  }

  return await response.json();
}