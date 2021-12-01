import moment from "moment";

export function convertTime(data, format = "DD/MM/YYYY") {
  return moment(data).format(format);
}
