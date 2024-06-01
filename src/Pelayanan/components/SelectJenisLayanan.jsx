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
    setIsLoading(true);
    let url = '/master-jenis-layanan';
    var formData = new FormData();
    formData.append("pagination",false);
    ApiCall.post(url,formData)
      .then((res) => {
        setData(res?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onChangeSelection = (vals) => {
    if (onChange) {
      onChange(vals?.value,vals.o);
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
