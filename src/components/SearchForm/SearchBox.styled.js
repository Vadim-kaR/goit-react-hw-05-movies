import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Input = styled(Field)`
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 35px;
  width: 300px;
  outline: none;
  position: absolute;
`;

export const InputForm = styled(Form)`
  padding: ${p => p.theme.space.l};
`;

export const Button = styled.button`
  height: 35px;
  width: 50px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  position: relative;
  top: 0px;
  left: 250px;
`;
