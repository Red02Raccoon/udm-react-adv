import React from "react";
import styled from "styled-components";

export const Inputs = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px;
`;

export const InputsList = styled.div`
  margin-bottom: -10px;
`;

export const InputRow = styled.div`
  margin-bottom: 10px;
  label {
    min-width: 80px;
    margin-right: 10px;
    display: inline-block;
    &:first-letter {
      text-transform: capitalize;
    }
  }
  input {
    padding: 7px 10px;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const ErrorBlock = styled.div`
  padding: 5px 0;
  color: red;
`;
