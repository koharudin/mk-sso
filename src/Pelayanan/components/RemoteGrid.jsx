import { useEffect } from 'react';
import { ApiCall } from '../../Api/api';
import { Pagination, Table } from 'react-bootstrap';
import { useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { AppInformasiError } from './App';

const BuildPagination = (props) => {
  const { current_page, last_page, ...otherProps } = props;
  const [listI, setListI] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = current_page - 2; i <= current_page + 2; i++) {
      if (i >= 1 && i <= last_page) {
        arr.push(i);
      }
    }
    setListI([...arr]);
  }, current_page);
  const onClickPage = (page) => {
    props?.onPaging(page);
  };
  return (
    <>
      <Pagination>
        {props?.current_page != props?.last_page && props?.current_page == 1 && <Pagination.First active />}
        {props?.current_page > 1 && <Pagination.First />}
        {props?.current_page > 1 && (
          <Pagination.Prev
            onClick={() => {
              onClickPage(v--);
            }}
          />
        )}

        {listI.map((v, i) => {
          return (
            <Pagination.Item
              key={i}
              active={v == current_page}
              onClick={() => {
                if (v != current_page) {
                  onClickPage(v);
                }
              }}
            >
              {v}
            </Pagination.Item>
          );
        })}

        {props?.current_page < last_page && (
          <Pagination.Next
            onClick={() => {
              onClickPage(current_page + 1);
            }}
          />
        )}

        {props?.last_page != 1 && props?.current_page == props?.last_page && (
          <Pagination.Last
            active
            onClick={() => {
              onClickPage(current_page);
            }}
          />
        )}
        {props?.current_page != props?.last_page && (
          <Pagination.Last
            onClick={() => {
              onClickPage(last_page);
            }}
          />
        )}
      </Pagination>
    </>
  );
};

export default (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [current_page, setCurrentPage] = useState();
  const [last_page, setLastPage] = useState();
  const onPaging = (page) => {
    setData([]);
    setLoading(true);
    const formData = new FormData();
    formData.append('page', page);
    //ApiCall.post(props?.grid_url, formData})
    ApiCall.get(props?.grid_url, { params: { page: page } })
      .then((res) => {
        setData(res?.data?.data);
        setCurrentPage(res?.data?.current_page);
        setLastPage(res?.data?.last_page);
      })
      .catch((err) => {
        if (!err?.response) {
          AppInformasiError({ options: { text: 'Tidak dapat menghubungi backend' } });
        }
        if (err?.response?.status == 401) {
        }
        if (err?.response?.status == 500) {
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    onPaging(1);
  }, []);

  useEffect(() => {
    if (props?.triggerReload) {
      onPaging(1);
    }
  }, [props?.triggerReload]);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            {props?.cols?.map((v, i) => {
              return <th key={i}>{v?.label}</th>;
            })}
          </tr>
        </thead>
        {loading && (
          <>
            <tbody>
              <tr>
                <td colSpan={props?.cols?.length} style={{ textAlign: 'center' }}>
                  <b>
                    <BeatLoader color="#36d7b7" />
                  </b>
                </td>
              </tr>
            </tbody>
          </>
        )}
        {data?.length > 0 && (
          <>
            <tbody>
              {data?.map((r, i1) => {
                return (
                  <tr key={i1}>
                    {props?.cols?.map((c, i2) => {
                      if (c.field == '__rowIndex__') {
                        return (
                          <td style={{ ...c?.style }} key={i2}>
                            {i1 + 1}
                          </td>
                        );
                      } else
                        return (
                          <td style={{ ...c?.style }} key={i2}>
                            {c?.formatter && <>{c?.formatter(r[c?.field], r, i1)}</>}
                            {!c?.formatter && <>{r[c.field]}</>}
                          </td>
                        );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </Table>
      {data?.length > 0 && <BuildPagination onPaging={onPaging} current_page={current_page} last_page={last_page}></BuildPagination>}
    </>
  );
};
