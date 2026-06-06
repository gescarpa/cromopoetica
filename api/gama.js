// Función serverless (Vercel) — vive en el servidor, NO en el navegador.
// Recibe el prompt desde la web y llama a la API de Anthropic usando la
// clave secreta guardada en la variable de entorno ANTHROPIC_API_KEY.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método no permitido" });
    return;
  }

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    res.status(500).json({ error: "Falta ANTHROPIC_API_KEY en el servidor" });
    return;
  }

  try {
    const { prompt } = req.body || {};
    if (!prompt) {
      res.status(400).json({ error: "Falta el prompt" });
      return;
    }

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1400,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const j = await r.json();
    if (!r.ok) {
      res.status(502).json({ error: "Error de la IA", detail: j });
      return;
    }

    const text = (j.content || [])
      .filter((c) => c.type === "text")
      .map((c) => c.text)
      .join("\n")
      .trim();

    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: "Fallo inesperado", detail: String(e) });
  }
}
