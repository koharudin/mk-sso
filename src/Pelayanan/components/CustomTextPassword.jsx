import { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

export default (props) => {
  const [inputTypePassword, setInputTypePassword] = useState('password');
  const switchPasswordText = () => {
    setInputTypePassword(inputTypePassword == 'password' ? 'text' : 'password');
  };
  return (
    <InputGroup>
      <FormControl
        type={inputTypePassword}
        placeholder="Kata Sandi"
        name="password"
        onBlur={props?.onBlur}
        onChange={props?.onChange}
        value={props?.value}
      />
      <Button onClick={switchPasswordText}>{inputTypePassword == 'password' ? <FaEyeSlash /> : <FaEye />}</Button>
    </InputGroup>
  );
};
