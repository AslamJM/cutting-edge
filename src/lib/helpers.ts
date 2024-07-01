import { format } from "date-fns"

export function fullName(first: string, last: string) {
    return `${first} ${last}`
}

export function formatDate(date: string) {
    return format(date, "PPP")
}