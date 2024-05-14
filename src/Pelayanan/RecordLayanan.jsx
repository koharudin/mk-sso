const RecordLayanan = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div>
      Layanan #1 <hr></hr>
      <children></children>
    </div>
  );
};
export default RecordLayanan;
