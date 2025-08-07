export async function fetchProducts(keyword) {
  const response = await fetch(`http://localhost:3001/api/scrape?keyword=${encodeURIComponent(keyword)}`);

  if (!response.ok) {
    throw new Error('Failed to fetch from API');
  }

  return await response.json();
}