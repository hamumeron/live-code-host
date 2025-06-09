export async function onRequestPost(context) {
  const id = context.params.id;
  const code = await context.request.text();
  await context.env.CODE_KV.put(id, code);
  return new Response("Saved", { status: 200 });
}
