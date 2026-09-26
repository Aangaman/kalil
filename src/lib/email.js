import { Resend } from "resend";

const CONTACT_EMAIL = "contact@afriquebusinessglobal.com";

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendContactNotification({ name, email, phone, country, message, propertyTitle }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY non défini : email de notification non envoyé.");
    return;
  }

  const resend = new Resend(apiKey);
  const subject = propertyTitle
    ? `Nouveau message — ${propertyTitle}`
    : "Nouveau message de contact";

  const html = `
    <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #0a4a2c;">Nouveau message reçu</h2>
      ${propertyTitle ? `<p><strong>Bien concerné :</strong> ${escapeHtml(propertyTitle)}</p>` : ""}
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ""}
      ${country ? `<p><strong>Pays :</strong> ${escapeHtml(country)}</p>` : ""}
      <p><strong>Message :</strong></p>
      <p style="white-space: pre-line; background: #f5f4f0; padding: 12px; border-radius: 8px;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Afrique Business Global <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject,
      html,
    });
  } catch (err) {
    console.error("Échec de l'envoi de l'email de notification :", err);
  }
}
