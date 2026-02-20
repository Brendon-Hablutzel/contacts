import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "./db.js";
import { create, list, type Contact } from "./db.js";

const app = new Hono().basePath("/api"); // Make all endpoints start with "/api"

app.get("/", (c) => {
  return c.text("This is the backend");
});

app.get("/contacts", (c) => {
  return c.json(list());
});

app.post("/contacts", async (c) => {
  const body = (await c.req.json()) as Contact;
  const createdId = create(body.name, body.phoneNumber, body.address);
  return c.json(
    {
      id: createdId,
    },
    201,
  );
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
