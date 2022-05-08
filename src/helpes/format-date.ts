import dayjs from "dayjs"

export function formatDate (date: string | Date): string {
  return dayjs(date).format('DD/MM/YYYY - HH:mm')
}