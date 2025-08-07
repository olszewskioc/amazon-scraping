import { scrapeRoute } from "./scrape.route";
import { withCors } from "../middlewares/cors.middleware";

export const routes = {
  "/api/scrape": withCors(scrapeRoute),
};
