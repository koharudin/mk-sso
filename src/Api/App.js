import Swal from "sweetalert2"

export const AppKonfirmasi = (props) => {
  const { title, html, onConfirmed } = props
  const cancelButtonText = "Batal"
  const confirmButtonText = "Setuju"
  Swal.fire({
    title,
    html,
    icon: "question",
    showCancelButton: true,
    cancelButtonText,
    confirmButtonText,
    reverseButtons: true,
  }).then((r) => {
    if (r.isConfirmed) onConfirmed(r)
  })
}
export const AppInformasi = async (props) => {
  const { onConfirmed } = props
  const options = {
    ...{
      title: "Informasi",
      icon: "success",
      text: "Transaksi Berhasil",
    },
    ...props.options,
  }
  return Swal.fire(options).then((r) => {
    if (onConfirmed) onConfirmed(r)
  })
}

export const AppInformasiError = (props) => {
  const { onConfirmed } = props
  const options = {
    ...{
      title: "Informasi",
      icon: "error",
      text: "Transaksi Gagal",
    },
    ...props.options,
  }
  return Swal.fire(options).then((r) => {
    if (onConfirmed) {
      onConfirmed(r)
    }
  })
}
