import { formatDistanceStrict } from 'date-fns'

export const formatEndEvent = (start, end) => {
    return formatDistanceStrict(Date.parse(start), Date.parse(end))
}