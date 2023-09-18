import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();

app.use("*", prettyJSON());

app.notFound((c) => {
  return c.json({ message: "Not Found" }, 404);
});

const api = new Hono();
api.get("/hello", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.route("/api/v1", api);

export default app;
