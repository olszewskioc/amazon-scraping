import axios from "axios";
import { JSDOM } from "jsdom";
import { sanitizeKeyword } from "../utils/sanitizeKeyword";

export async function scrapeAmazon(keyword: string) {
  const sanitized = sanitizeKeyword(keyword); // sanitize the keyword to remove any special characters
  const url = `https://www.amazon.com/s?k=${sanitized}`;

  const { data: html } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",  // This user-agent is to simulate a browser for the request
    },
  });

  // Create a JSDOM to use DOM methods on the HTML Response and extract the data
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const results: any[] = [];

  const items = document.querySelectorAll("[data-component-type='s-search-result']"); // This contains the products, result of the search by keyword in the amazon page
  items.forEach((item) => {
    const title = item.querySelector("h2 span")?.textContent?.trim();
    const rating = item.querySelector(".a-icon-alt")?.textContent?.trim();
    const reviews = item.querySelector(".a-size-base.s-underline-text")?.textContent?.trim();
    const image = item.querySelector("img.s-image")?.getAttribute("src");

    // After extracting the data, add it to the results array only if has image and title, to avoid empty results
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
