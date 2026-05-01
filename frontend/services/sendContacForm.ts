import { ContactFormData } from "@/lib/validations";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export const sendContactForm = async (formData: ContactFormData) => {
  // 1. Creamos y formateamos la fecha actual
  const hoy = new Date();
  const dia = String(hoy.getDate()).padStart(2, "0");
  const mes = String(hoy.getMonth() + 1).padStart(2, "0"); // Los meses van de 0 a 11
  const año = hoy.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${año}`; // Resultado: 01/05/2026

  const response = await fetch(`${STRAPI_URL}/api/contact-forms`, {
    //[cite: 3, 4]
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`, //[cite: 3, 4]
    },
    body: JSON.stringify({
      data: {
        name: formData.name, //
        tel: formData.phone, //[cite: 3]
        date_contact: fechaFormateada, // Enviamos la fecha en formato DD/MM/YYYY
        email: formData.email, //[cite: 3]
        message: formData.message, //[cite: 3]
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Error al enviar a Strapi");
  }

  return await response.json();
};
