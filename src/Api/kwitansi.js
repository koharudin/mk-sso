import { ApiCall } from "./api"

const listKwitansi = async (params) => {
  var out = []

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      out.push(key + "=" + encodeURIComponent(params[key]))
    }
  }

  out = out.join("&")
  return await ApiCall.get(`/kwitansi?` + out).then((res) => {
    return res
  })
}
const editKwitansi = async (id) => {
  return await ApiCall.get(`/kwitansi/${id}/edit`).then((res) => {
    return res
  })
}
const updateKwitansi = async (id, formData) => {
  formData.append("_method", "PATCH")
  return await ApiCall.post(`/kwitansi/${id}`, formData, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then((res) => {
    return res
  })
}
const deleteKwitansi = async (id, formData) => {
  return await ApiCall.delete(`/kwitansi/${id}`, formData).then((res) => {
    return res
  })
}
const addKwitansi = async (formData) => {
  return await ApiCall.post(`/kwitansi`, formData).then((res) => {
    return res
  })
}
const listKategori = async (formData) => {
  return await ApiCall.get(`/list_kategori`, formData).then((res) => {
    return res
  })
}
export const KwitansiApi = {
  listKategori: listKategori,
  list: listKwitansi,
  edit: editKwitansi,
  add: addKwitansi,
  update: updateKwitansi,
  delete: deleteKwitansi,
}
