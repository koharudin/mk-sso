import React, { useEffect, useState } from 'react';
import Select, { components, ControlProps, Props, StylesConfig } from 'react-select';
import { ApiCall } from '../../Api/api';
import AsyncSelect from 'react-select/async';
import { AsyncPaginate } from 'react-select-async-paginate';

const Control = (children, ...props) => {
  return <components.Control {...props}>{children}</components.Control>;
};
const Option = (props) => {
  const { children, ...otherProps } = props;
  return (
    <>
      <components.Option {...props}>
        <b>{props.data?.o?.name} - [{props.data?.o?.id}]</b>
        <br></br>
        {props.data?.o?.keterangan}
      </components.Option>
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

  useEffect(() => {
    if (props?.value && props?.value != null && props?.value != '') {
      ApiCall.get('/master-unitkerja/' + props?.value?.value + '/detail')
        .then((res) => {
          if (res?.data) {
            setSelectedOption({
              value: res?.data?.id,
              label: res?.data?.name +" - "+"["+res?.data?.id+"]"
            });
          }
        })
        .catch((err) => {})
        .finally(() => {});
    }
  }, props.value);
  const onLoad = async (pSearch, pPage) => {
    const formData = new FormData();
    formData.append('page', page);
    formData.append('q', pSearch);

    const res = await ApiCall.post('/master-unitkerja', formData);
    return {
      options: res?.data?.data?.map((v, i) => {
        return {
          value: v.id,
          label: v.name+" - "+"["+v.id+"]",
          o: v
        };
      }),
      hasMore: res?.data?.current_page < res?.data?.last_page && res?.data?.last_page > 1
    };
  };
  const loadOptions = (search, loadedOptions) => {
    if (search && search.length <= 2) {
      return {
        options: []
      };
    } else {
      let _page = page;
      if (q != search) {
        setQ(search);
        _page = 0;
      }
      _page = _page == 0 ? 1 : _page + 1;
      setPage(_page);

      return onLoad(search, _page);
    }
  };

  const onChangeSelection = (vals) => {
    setSelectedOption(vals);
    if (onChange) {
      onChange(vals?.value);
    }
  };
  return (
    <>
      <AsyncPaginate
        debounceTimeout={3}
        components={{ Option }}
        onChange={onChangeSelection}
        {...otherProps}
        value={selectedOption}
        loadOptions={loadOptions}
      />
    </>
  );
};
