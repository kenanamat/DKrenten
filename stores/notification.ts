import { defineStore } from "pinia"

export const useNotificationStore = defineStore("notification", () => {
  const nTitle = ref(""),
    nMessage = ref(""),
    nType = ref(""),
    show = ref(false)

  const showNotification = ({
    title,
    message,
    type = "default",
    timeout = 10000,
  }: {
    title: string
    message: string
    type?: string
    timeout?: number
  }) => {
    nTitle.value = title
    nMessage.value = message
    nType.value = type

    show.value = true
    setTimeout(() => (show.value = false), timeout)
  }

  return {
    showNotification,
    nTitle,
    nMessage,
    nType,
    show,
  }
})
