import { insertContactInquirySchema } from "../shared/schema";

export interface Env {
  ASSETS: Fetcher;
  CONTACT_KV: KVNamespace;
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();
        const parsed = insertContactInquirySchema.parse(body);

        const id = crypto.randomUUID();
        const inquiry = { id, ...parsed, createdAt: new Date().toISOString() };

        // Store the submission in KV, keyed so newest sorts first.
        await env.CONTACT_KV.put(
          `inquiry:${9999999999999 - Date.now()}:${id}`,
          JSON.stringify(inquiry),
        );

        return json({
          success: true,
          message: "Thank you for your inquiry! We will get back to you soon.",
          id,
        }, 201);
      } catch (error: any) {
        if (error?.name === "ZodError") {
          return json({ success: false, message: "Validation failed", errors: error.errors }, 400);
        }
        return json({ success: false, message: "Internal server error. Please try again later." }, 500);
      }
    }

    if (url.pathname === "/api/contact" && request.method === "GET") {
      const list = await env.CONTACT_KV.list({ prefix: "inquiry:" });
      const inquiries = await Promise.all(
        list.keys.map(async (k) => JSON.parse((await env.CONTACT_KV.get(k.name)) || "null")),
      );
      return json(inquiries.filter(Boolean));
    }

    // Everything else: serve the built static site.
    return env.ASSETS.fetch(request);
  },
};
