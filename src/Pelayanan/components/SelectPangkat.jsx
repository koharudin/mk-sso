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
        <b>{props.data?.o.name}</b>
        <br></br>
        {props.data?.o.keterangan}
      </components.Option>
    </>
  );
};

const SelectPangkat = (props) => {
  const { onChange, ...otherProps } = props;
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
      const valuex = data?.filter((option) => {
        return option.id == props.value;
      });
      if (valuex.length == 1) {
        const dx = {
          value: valuex[0]?.id,
          label: valuex[0]?.name
        };
        setSelectedOption(dx);
      }
    }
  }, [data]);
  useEffect(() => {
    setIsLoading(true);
    ApiCall.post('/master-pangkat')
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
      <Select
        {...otherProps}
        value={selectedOption}
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
export default SelectPangkat;
