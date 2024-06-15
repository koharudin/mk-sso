import React, { useEffect, useState } from 'react';
import Select, { components, ControlProps, Props, StylesConfig } from 'react-select';
import { ApiCall } from '../../Api/api';
import AsyncSelect from 'react-select/async';
import { AsyncPaginate } from 'react-select-async-paginate';
import { Form } from 'react-bootstrap';

const Control = (children, ...props) => {
  return <components.Control {...props}>{children}</components.Control>;
};
const Option = (props) => {
  const { children, ...otherProps } = props;
  return (
    <>
      <components.Option {...props}>{props.label}</components.Option>
    </>
  );
};

export default (props) => {
  const { onChange, ...otherProps } = props;
  const [options, setOptions] = useState();
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [q, setQ] = useState();
  const [url, setUrl] = useState('/master-unitkerja/');
  const [from, setFrom] = useState(props?.from || 1945);

  const [to, setTo] = useState(props?.to || new Date().getFullYear());

  useEffect(() => {
    if (props?.value) {
      setSelectedOption({
        value: props?.value,
        label: props?.value
      });
    }
  }, [props]);
  const onLoad = async (pSearch, pPage) => {
    let i = to;
    let ll = [];
    for (i <= to; i >= from; i--) {
      ll.push(i);
    }
    return {
      options: ll.map((v, i) => {
        return {
          value: v,
          label: v
        };
      }),
      hasMore: false
    };
  };
  const loadOptions = (search, loadedOptions) => {
    return onLoad(search, 1);
  };

  const onChangeSelection = (vals) => {
    setSelectedOption(vals);
    if (onChange) {
      onChange(vals?.value);
    }
  };
  return (
    <>
      {props?.readOnly ? (
        <>
          <Form.Control readOnly={props?.readOnly} value={selectedOption?.label}></Form.Control>
        </>
      ) : (
        <AsyncPaginate
          debounceTimeout={3}
          components={{ Option }}
          onChange={onChangeSelection}
          {...otherProps}
          value={selectedOption}
          loadOptions={loadOptions}
        />
      )}
    </>
  );
};
