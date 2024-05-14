import { ApiCall } from "./api"

const listInvoices = async (params) => {
  var out = []

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      out.push(key + "=" + encodeURIComponent(params[key]))
    }
  }

  out = out.join("&")
  return await ApiCall.get(`/invoices?` + out).then((res) => {
    return res
  })
}
const editInvoices = async (id) => {
  return await ApiCall.get(`/invoices/${id}/edit`).then((res) => {
    return res
  })
}
const updateInvoices = async (id, formData) => {
  formData.append("_method", "PATCH")
  return await ApiCall.post(`/invoices/${id}`, formData, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then((res) => {
    return res
  })
}
const deleteInvoices = async (id, formData) => {
  return await ApiCall.delete(`/invoices/${id}`, formData).then((res) => {
    return res
  })
}
const addInvoices = async (formData) => {
  return await ApiCall.post(`/invoices`, formData).then((res) => {
    return res
  })
}
const listKategori = async (formData) => {
  return await ApiCall.get(`/list_kategori`, formData).then((res) => {
    return res
  })
}
export const InvoicesApi = {
  listKategori: listKategori,
  list: listInvoices,
  edit: editInvoices,
  add: addInvoices,
  update: updateInvoices,
  delete: deleteInvoices,
}
