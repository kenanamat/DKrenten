import { defineStore } from "pinia"

export const useContactStore = defineStore("contact", () => {
  const name = ref(""),
    lastname = ref(""),
    email = ref(""),
    phone = ref(""),
    message = ref("")

  async function sendEmail() {
    const mail = useMail()

    mail.send({
      from: `${name} ${lastname} | ${email}`,
      subject: `Contact formulier | ${new Date}`,
      text: message
    })

    console.log("Tried sending")
    console.log(message)
  }

  return {
    name,
    lastname,
    email,
    phone,
    message,
    sendEmail
  }
})
