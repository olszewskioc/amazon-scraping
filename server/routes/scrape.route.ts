import { scrapeAmazon } from "../services/scrapeAmazon";

export async function scrapeRoute(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const keyword = url.searchParams.get("keyword");

  if (!keyword) {
    return Response.json({ error: "Missing 'keyword' parameter" }, { status: 400 });
  }

  try {
    const products = await scrapeAmazon(keyword);
    return Response.json({ products });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to scrape products." }, { status: 500 });
  }
}
