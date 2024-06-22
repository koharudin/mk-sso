import { ApiCall } from "./api"

const listCustomers = async (params) => {
  var out = []

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      out.push(key + "=" + encodeURIComponent(params[key]))
    }
  }

  out = out.join("&")
  return await ApiCall.get(`/customers?` + out).then((res) => {
    return res
  })
}
const listAllCustomers = async (params) => {
  return await ApiCall.get(`/customers?`).then((res) => {
    return res
  })
}
const editCustomers = async (id) => {
  return await ApiCall.get(`/customers/${id}/edit`).then((res) => {
    return res
  })
}
const updateCustomers = async (id, formData) => {
  formData.append("_method", "PATCH")
  return await ApiCall.post(`/customers/${id}`, formData, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then((res) => {
    return res
  })
}
const deleteCustomers = async (id, formData) => {
  return await ApiCall.delete(`/customers/${id}`, formData).then((res) => {
    return res
  })
}
const addCustomers = async (formData) => {
  return await ApiCall.post(`/customers`, formData).then((res) => {
    return res
  })
}
export const CustomersApi = {
  list: listCustomers,
  listAll: listAllCustomers,
  edit: editCustomers,
  add: addCustomers,
  update: updateCustomers,
  delete: deleteCustomers,
}
