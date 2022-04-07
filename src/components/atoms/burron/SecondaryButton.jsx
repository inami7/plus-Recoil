//画面の主要なボタン
import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";
export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

//共通のcssを読み込んでつなげる
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
