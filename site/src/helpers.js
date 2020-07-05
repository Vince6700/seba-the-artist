import moment from "moment/moment"

export const getDateAndTime = date => moment(date).format("DD/MM/YYYY HH:mm:ss")
