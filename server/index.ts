import { routes } from "./routes";

// Using Bun.serve to be more faster and dynamic in organize the code
const server = Bun.serve({
  port: 3001,
  routes,
  fetch() {
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
