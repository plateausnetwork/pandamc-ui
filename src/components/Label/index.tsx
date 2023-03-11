import React from 'react'
import S from './styles';
export interface IErrorMessage {
  text: string;
}
const Label = ({ text='' }: IErrorMessage) => {
  return (
    <S.Label>
      <S.LabelText>{text}</S.LabelText>
    </S.Label>
  );
};
export default Label;
