import { format } from 'date-fns'

export const formatStartEvent = (start) => {
   return format(Date.parse(start), 'dd MMMM yyyy, HH:mm')
}