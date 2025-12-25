import { createClientOnlyFn } from "@tanstack/react-start"

export const formatDate = createClientOnlyFn((date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
  }

  const locale = navigator.language

  if (locale?.startsWith("en-")) {
    return new Intl.DateTimeFormat(locale, options).format(date)
  } else {
    return new Intl.DateTimeFormat().format(date)
  }
})

