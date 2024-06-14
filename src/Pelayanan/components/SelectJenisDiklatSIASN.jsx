import React, { useEffect, useState } from 'react';
import Select, { components, ControlProps, Props, StylesConfig } from 'react-select';
import { ApiCall } from '../../Api/api';

const Control = (children, ...props) => {
  return <components.Control {...props}>{children}</components.Control>;
};
const Option = (props) => {
  const { children, ...otherProps } = props;
  return (
    <>
      <components.Option {...props}>
        <b>{props.data?.o.jenis_diklat}</b>
        <br></br>
        {props.data?.o.keterangan}
      </components.Option>
    </>
  );
};

const SelectJenisDiklatSIASN = (props) => {
  const { onChange, jenis_diklat, ...otherProps } = props;
  const [options, setOptions] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [selectedOption, setSelectedOption] = useState();
  useEffect(() => {
    if (data) {
      let o = data?.map((v, i) => {
        return {
          value: v.id_siasn,
          label: v.jenis_diklat + ' - ' + v.id_siasn, // `${v.name} - [${v.keterangan}]`,
          o: v
        };
      });
      setOptions(o);
    }
  }, [data]);
  useEffect(() => {
    if (props?.value && props?.value?.value && props?.value?.value != '') {
      ApiCall.get('/master-jenis-diklat-siasn/' + props?.value?.value + '/detail')
        .then((res) => {
          if (res?.data) {
            setSelectedOption({
              value: res?.data?.id_siasn,
              label: res?.data?.jenis_diklat + ' - ' + '[' + res?.data?.id_siasn + ']'
            });
          }
        })
        .catch((err) => {})
        .finally(() => {});
    }
  }, [props]);
  useEffect(() => {
    setIsLoading(true);
    let url = '/master-jenis-diklat-siasn';
    ApiCall.post(url)
      .then((res) => {
        setData(res?.data?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onChangeSelection = (vals) => {
    if (onChange) {
      onChange(vals?.value);
    }
  };
  return (
    <>
      {selectedOption}
      <Select
        {...otherProps}
        components={{ Option }}
        isSearchable
        onChange={onChangeSelection}
        isLoading={isLoading}
        isClearable
        options={options}
      />
    </>
  );
};
export default SelectJenisDiklatSIASN;
