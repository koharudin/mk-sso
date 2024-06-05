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
        <b>{props.data?.o}</b>
      </components.Option>
    </>
  );
};

const SelectTahun = (props) => {
  const { onChange, ...otherProps } = props;
  const [options, setOptions] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [from, setFrom] = useState(props?.from || 1945);
  const [to, setTo] = useState(props?.to || new Date().getFullYear());
  useEffect(() => {
    if (data) {
      let o = data?.map((v, i) => {
        return {
          value: v,
          label: v, // `${v.name} - [${v.keterangan}]`,
          o: v
        };
      });

      setOptions(o);
    }
  }, [data]);
  useEffect(() => {
    setIsLoading(true);
    let i = to;
    let ll = [];
    for (i <= to; i >= from; i--) {
      ll.push(i);
    }
    setData([...ll]);

    setIsLoading(false);
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
export default SelectTahun;
