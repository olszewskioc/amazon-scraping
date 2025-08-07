import { scrapeAmazon } from "../services/scrapeAmazon";

export async function scrapeRoute(req: Request): Promise<Response> {
  // Catch URL and Keyword in the Request
  const url = new URL(req.url);
  const keyword = url.searchParams.get("keyword");

  if (!keyword) {
    return Response.json({ error: "Missing 'keyword' parameter" }, { status: 400 });
  }

  // Try send to the service and return Response JSON to client
  try {
    const products = await scrapeAmazon(keyword);
    return Response.json({ products });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to scrape products." }, { status: 500 });
  }
}
