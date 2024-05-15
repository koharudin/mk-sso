import { Button } from 'react-bootstrap';
import { ApiCall } from '../Api/api';
import { useNavigate } from 'react-router-dom';

const TokenGenerator = () => {
  const navigate = useNavigate();
  const onGenerate = () => {
    ApiCall.get('/token')
      .then((res) => {
        if (res.status == 200) {
          if (res.data.token) {
            localStorage.setItem("app_data",JSON.stringify({token:res.data.token}))
            navigate("/")
          }
        }
      })
      .catch((err) => {
        if (err.response?.status == 500) {
          alert('Tidak dapat terkoneksi ke backend.');
        }
      })
      .finally(() => {
        
      });
  };
  return (
    <>
      Token Generator <Button onClick={onGenerate}>GenerateX</Button>
    </>
  );
};
export default TokenGenerator;
