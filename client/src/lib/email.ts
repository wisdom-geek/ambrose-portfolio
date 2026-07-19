// import emailjs from "@emailjs/browser";

// export async function sendEmail(data: {
//   name: string;
//   email: string;
//   message: string;
// }) {
//   return emailjs.send(
//     import.meta.env.VITE_EMAILJS_SERVICE_ID,
//     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//     {
//       from_name: data.name,
//       from_email: data.email,
//       message: data.message,
//     },
//     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//   );
// }
import emailjs from "@emailjs/browser";

// console.log("=== EMAILJS ENV ===");
// console.log(import.meta.env);
// console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
// console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
// console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export async function sendEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}
