import { numericFormatter } from "react-number-format"
import { ApiCall } from "./api"

const login = async (username, password) => {
  const formData = new FormData()
  formData.append("username", username)
  formData.append("password", password)
  return await ApiCall.post(`/login`, formData).then((res) => {
    return res
  })
}
const detailInvoice = async (id) => {
  return await ApiCall.get(`/public/invoices/${id}`).then((res) => {
    return res
  })
}

const isLogin = () => {
  const app_data = JSON.parse(localStorage.getItem("app_data"))
  return app_data?.token ? true : false
}
const userLogin = () => {
  const app_data = JSON.parse(localStorage.getItem("app_data"))
  return app_data?.user
}
const numberWithCommas = (x) => {
  return numericFormatter(String(x), {
    decimalSeparator: ",",
    thousandSeparator: ".",
    prefix: "Rp. ",
    suffix: ",-",
    decimalScale: 2,
  })
  //return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
const logout = () => {
  localStorage.clear()
  window.location = "/admin/login"
}
const uploadDokumen = async (formData) => {
  return await ApiCall.post(`/upload-dokumen`, formData).then((res) => {
    return res
  })
}
export const AppApi = {
  login: login,
  isLogin: isLogin,
  logout: logout,
  userLogin: userLogin,
  numberWithCommas: numberWithCommas,
  publicDetailInvoice: detailInvoice,
  uploadDokumen: uploadDokumen,
}
export default AppApi
