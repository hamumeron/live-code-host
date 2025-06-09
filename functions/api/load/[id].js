export async function onRequestGet(context) {
  const id = context.params.id;
  const code = await context.env.CODE_KV.get(id);
  return new Response(code || "Not found", {
    headers: { "Content-Type": "text/html" }
  });
}

