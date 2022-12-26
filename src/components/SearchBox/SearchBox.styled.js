import { Field } from "formik";
import styled from "styled-components";

export const Input = styled(Field)`
padding: 5px;
margin-right: 10px;
border: 1px solid grey;
border-radius: 5px;
`

export const Button = styled.button`
border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 8px;
  letter-spacing: 2px;
  background-color: grey;
  border-radius: 10px;
  &:hover,
  &:focus {
    background-color: blue;
  }
`

export const Search = styled.div`
margin-bottom: 50px;
`