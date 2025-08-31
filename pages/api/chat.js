import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    // Gunakan optional chaining untuk menghindari undefined
    const reply = response?.choices?.[0]?.message?.content || "AI tidak memberikan jawaban.";
    console.log("AI reply:", reply); // debug log
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Terjadi error, coba lagi." });
  }
}
