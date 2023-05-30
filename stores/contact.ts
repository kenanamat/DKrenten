import { defineStore } from "pinia"

export const useContactStore = defineStore("contact", () => {
  const name = ref(""),
    lastname = ref(""),
    email = ref(""),
    phone = ref(""),
    message = ref(""),
    street = ref(""),
    city = ref(""),
    postcode = ref("")

  const reset = () => {
    name.value = ""
    lastname.value = ""
    email.value = ""
    phone.value = ""
    message.value = ""
  }

  return {
    name,
    lastname,
    email,
    phone,
    message,
    street,
    city,
    postcode,
    reset,
  }
})
