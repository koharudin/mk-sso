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
        <b>{props?.data?.label}</b>
      </components.Option>
    </>
  );
};

export default (props) => {
  const { onChange, jenis_diklat, ...otherProps } = props;
  const [options, setOptions] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [selectedOption, setSelectedOption] = useState();
  useEffect(() => {
    if (data) {
      let o = data?.map((v, i) => {
        return {
          value: v.id,
          label: v.name + ' - ' + v.id, // `${v.name} - [${v.keterangan}]`,
          o: v
        };
      });
      setOptions(o);
    }
  }, [data]);
  useEffect(() => {
    if (props?.value && props?.value?.value && props?.value?.value != '') {
      ApiCall.get('/master-jenis-layanan/' + props?.value?.value + '/detail')
        .then((res) => {
          if (res?.data) {
            setSelectedOption({
              value: res?.data?.id,
              label: res?.data?.name + ' - ' + '[' + res?.data?.id + ']'
            });
          }
        })
        .catch((err) => {})
        .finally(() => {});
    }
  }, [props]);
  useEffect(() => {
    setIsLoading(true);
    let url = '/master-jenis-layanan';
    var formData = new FormData();
    formData.append('pagination', false);
    ApiCall.post(url, formData)
      .then((res) => {
        setData(res?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onChangeSelection = (vals) => {
    if (onChange) {
      if (vals) {
        onChange(vals?.value, vals.o);
      } else onChange(null, null);
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
