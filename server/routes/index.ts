import { scrapeRoute } from "./scrape.route";
import { withCors } from "../middlewares/cors.middleware";

// All routes can be descripted here, and they will be automatically registered in the app
export const routes = {
  "/api/scrape": withCors(scrapeRoute), // Always use withCors middleware for CORS
};
