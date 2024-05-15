import { useEffect } from 'react';
import { ApiCall } from '../../Api/api';
import { Table } from 'react-bootstrap';
import { useState } from 'react';

export default (props) => {
  const [data, setData] = useState([]);
  const onReload = () => {
    ApiCall.get(props?.grid_url)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
        }
        if (err.response.status == 500) {
        }
      })
      .finally(() => {});
  };
  useEffect(() => {
    onReload();
  }, []);
  return (
    <Table responsive fluid>
      <thead>
        <tr>
          {props?.cols?.map((v, i) => {
            return <th key={i}>{v?.label}</th>;
          })}
        </tr>
      </thead>
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
  );
};
