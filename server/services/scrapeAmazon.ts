import axios from "axios";
import { JSDOM } from "jsdom";
import { sanitizeKeyword } from "../utils/sanitizeKeyword";

export async function scrapeAmazon(keyword: string) {
  const sanitized = sanitizeKeyword(keyword);
  const url = `https://www.amazon.com/s?k=${sanitized}`;

  const { data: html } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const dom = new JSDOM(html);
  const document = dom.window.document;
  const results: any[] = [];

  const items = document.querySelectorAll("[data-component-type='s-search-result']");
  items.forEach((item) => {
    const title = item.querySelector("h2 span")?.textContent?.trim();
    const rating = item.querySelector(".a-icon-alt")?.textContent?.trim();
    const reviews = item.querySelector(".a-size-base.s-underline-text")?.textContent?.trim();
    const image = item.querySelector("img.s-image")?.getAttribute("src");

    if (title && image) {
      results.push({
        title,
        rating,
        reviews,
        image
      });
    }
  });

  return results;
}
