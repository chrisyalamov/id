import { createIsomorphicFn } from "@tanstack/react-start";

export const formatDate = createIsomorphicFn()
  .client((date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
    const locale = navigator.language

    return new Intl.DateTimeFormat(locale, options).format(date)
  })
  .server((date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric"
    }

    const locale = "en-gb"

    return new Intl.DateTimeFormat(locale, options).format(date)
  })


