import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "./db.js";
import { list } from "./db.js";
const app = new Hono().basePath("/api"); // Make all endpoints start with "/api"
app.get("/", (c) => {
    return c.text("This is the backend");
});
app.get("/contacts", (c) => {
    return c.json(list());
});
serve({
    fetch: app.fetch,
    port: 3000,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
