import { defineStore } from "pinia"

export const useProvinceStore = defineStore("province", () => {
  const provinces = ref({
    "Noord-Holland": {
      opened: false,
      cities: [
        "Naarden - Bussum",
        "Amsterdam",
        "Haarlem",
        "Hoofddorp",
        "Zaandam",
        "Purmerend",
        "Alkmaar",
        "Hoorn",
        "Beverwijk",
        "Schagen",
        "Enkhuizen",
      ],
    },
    Flevoland: {
      opened: false,
      cities: ["Almere", "Zeewolde", "Lelystad", "Zwolle"],
    },
    "Zuid-Holland": {
      opened: false,
      cities: [
        "Aalsmeer",
        "Alphen aan den Rijn",
        "Zoetermeer",
        "Leiden",
        "Den Haag",
        "Rotterdam",
        "Spijkenisse",
        "Delft",
        "Gouda",
        "Dordrecht",
        "Gorinchem",
      ],
    },
    Utrecht: {
      opened: false,
      cities: [
        "Breukelen",
        "Utrecht",
        "Hilversum",
        "Amersfoort",
        "Zeist",
        "Houten",
        "Nieuwegein",
        "Ijselstein",
        "Woerden",
      ],
    },
    "Noord-Brabant": {
      opened: false,
      cities: [
        "Oss",
        "'s-Hertogenbosch",
        "Tilburg",
        "Oosterhout",
        "Breda",
        "Zevenbergen",
        "Etten-Leur",
        "Roosendaal",
        "Steenbergen",
      ],
    },
  })

  const getCityArr = (province: keyof typeof provinces.value) => {
    if (provinces.value[province].opened) return provinces.value[province].cities
    else return provinces.value[province].cities.slice(0, 4)
  }

  return {
    provinces,
    getCityArr
  }
})
