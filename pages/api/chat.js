export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Dummy AI response (replace with OpenAI API if punya API key)
  const reply = `AI menjawab: "${message}"`;

  res.status(200).json({ reply });
}
