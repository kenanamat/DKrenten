// import { ServerClient } from "postmark"

// const client = new ServerClient("fcf03847-0253-4df8-936e-c6f7b315a1ce")

// export default defineEventHandler(async (event) => {
//   const { name, lastname, email, message, phone } = await readBody(event)

//   async function sendEmail() {
//     client.sendEmail({
//       From: "info@nanek.nl",
//       To: "info@dkrententransport.nl",
//       Subject: `Contact formulier | ${name} ${lastname} | ${phone}`,
//       TextBody: message,
//     })
//   }

//   return sendEmail()
// })
