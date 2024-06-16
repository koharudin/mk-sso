import React, { useEffect, useState } from 'react';
import Select, { components, ControlProps, Props, StylesConfig } from 'react-select';
import { ApiCall } from '../../Api/api';
import AsyncSelect from 'react-select/async';
import { AsyncPaginate } from 'react-select-async-paginate';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

const Control = (children, ...props) => {
  return <components.Control {...props}>{children}</components.Control>;
};
const Option = (props) => {
  const { children, ...otherProps } = props;
  return (
    <>
      <components.Option {...props}>
        <b>
          {props.data?.o?.name} - [{props.data?.o?.id}]
        </b>
        <br></br>
        {props.data?.o?.keterangan}
      </components.Option>
    </>
  );
};
export default (props) => {
  const { onChange, tipe_jabatan, ...otherProps } = props;
  const [options, setOptions] = useState();
  const [data, setData] = useState();
  const [tipeJabatan, setTipeJabatan] = useState(tipe_jabatan);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [q, setQ] = useState();
  const [url, setUrl] = useState('/master-jabatan');
  const [objValue, setObjValue] = useState();

  useEffect(() => {
    if (props?.value && props?.value != '') {
      const id = typeof props?.value == 'object' ? props?.value?.value : props?.value;
      ApiCall.get(url + '/detail', { params: { id: id, tipe_jabatan_id: tipeJabatan } })
        .then((res) => {
          if (res?.data) {
            setObjValue({
              ...{
                id: res?.data?.id,
                name: res?.data?.name
              }
            });
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
  const onLoad = async (pSearch, pPage) => {
    const formData = new FormData();
    formData.append('page', page);
    formData.append('q', pSearch);
    formData.append('tipe_jabatan', tipeJabatan);
    const res = await ApiCall.post(url, formData);
    return {
      options: res?.data?.data?.map((v, i) => {
        return {
          value: v.id,
          label: v.name + ' - ' + '[' + v.id + ']',
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
      setObjValue({
        ...{
          id: vals.value,
          tipe_jabatan_id: tipeJabatan,
          name: vals.o.name
        }
      });
      onChange({
        id: vals.value,
        tipe_jabatan_id: tipeJabatan,
        name: vals.o.name
      });
    }
  };
  return (
    <>
      {props?.readOnly ? (
        <>
          <Form.Control readOnly={props?.readOnly} value={selectedOption?.label}></Form.Control>
        </>
      ) : (
        <>
          {' '}
          {tipeJabatan}
          <Row>
            <Col lg={3}>
              <Form.Control
                as="select"
                placeholder={'TIPE JABATAN'}
                value={tipeJabatan}
                onChange={(e) => {
                  setTipeJabatan(e.target.value);
                  setObjValue({ ...objValue, ...{ tipe_jabatan_id: e.target.value } });
                  onChange({ ...objValue, ...{ tipe_jabatan_id: e.target.value } });
                }}
              >
                <option selected={tipeJabatan == 1} value={1}>
                  STRUKTURAL
                </option>
                <option selected={tipeJabatan == 2} value={2}>
                  FUNGSIONAL
                </option>
                <option selected={tipeJabatan == 3} value={3}>
                  PELAKSANA
                </option>
              </Form.Control>
            </Col>
            <Col lg={9}>
              <AsyncPaginate
                key={tipeJabatan}
                debounceTimeout={3}
                components={{ Option }}
                onChange={onChangeSelection}
                {...otherProps}
                value={selectedOption}
                loadOptions={loadOptions}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
