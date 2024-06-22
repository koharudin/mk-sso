import { ApiCall } from "./api"

const listTrxKeuangan = async (params) => {
  var out = []

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      out.push(key + "=" + encodeURIComponent(params[key]))
    }
  }

  out = out.join("&")
  return await ApiCall.get(`/trx_keuangan?` + out).then((res) => {
    return res
  })
}
const editTrxKeuangan = async (id) => {
  return await ApiCall.get(`/trx_keuangan/${id}/edit`).then((res) => {
    return res
  })
}
const updateTrxKeuangan = async (id, formData) => {
  formData.append("_method", "PATCH")
  return await ApiCall.post(`/trx_keuangan/${id}`, formData, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then((res) => {
    return res
  })
}
const deleteTrxKeuangan = async (id, formData) => {
  return await ApiCall.delete(`/trx_keuangan/${id}`, formData).then((res) => {
    return res
  })
}
const addTrxKeuangan = async (formData) => {
  return await ApiCall.post(`/trx_keuangan`, formData).then((res) => {
    return res
  })
}
const listKategori = async (formData) => {
  return await ApiCall.get(`/list_kategori`, formData).then((res) => {
    return res
  })
}
const rekap = async (periode) => {
  return await ApiCall.get(`/rekap?periode=` + periode).then((res) => {
    return res
  })
}
const detailRekap = async (periode, vid) => {
  return await ApiCall.get(
    `/detail-rekap?periode=` + periode + "&vid=" + vid
  ).then((res) => {
    return res
  })
}
export const TrxKeuanganApi = {
  listKategori: listKategori,
  list: listTrxKeuangan,
  edit: editTrxKeuangan,
  add: addTrxKeuangan,
  update: updateTrxKeuangan,
  delete: deleteTrxKeuangan,
  rekap: rekap,
  detailRekap: detailRekap,
}
