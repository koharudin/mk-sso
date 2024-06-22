import Swal from 'sweetalert2';

export const AppKonfirmasi = (props) => {
  const { title, html, onConfirmed } = props;
  const cancelButtonText = 'Batal';
  const confirmButtonText = 'Setuju';
  Swal.fire({
    title,
    html,
    icon: 'question',
    showCancelButton: true,
    cancelButtonText: props?.cancelButtonText ?? cancelButtonText,
    confirmButtonText: props?.confirmButtonText ?? confirmButtonText,
    confirmButtonText,
    reverseButtons: true
  }).then((r) => {
    if (r.isConfirmed) onConfirmed(r);
  });
};
export const AppInformasi = (props) => {
  const { onConfirmed } = props;
  const options = {
    ...{
      title: 'Informasi',
      icon: 'success',
      text: 'Transaksi Berhasil'
    },
    ...props.options
  };
  return Swal.fire(options).then((r) => {
    if (props.onConfirmed) onConfirmed(r);
  });
};

export const AppInformasiError = (props) => {
  const { onConfirmed } = props;
  const options = {
    ...{
      title: 'Informasi',
      icon: 'error',
      text: 'Transaksi Gagal'
    },
    ...props.options
  };
  return Swal.fire(options).then((r) => {
    if (props.onConfirmed) onConfirmed(r);
  });
};
