import moment from "moment/moment"

export const getDateAndTime = date => moment(date).format("DD/MM/YYYY HH:mm:ss")

export const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
