import React from 'react'
import S from './styles'
export interface IErrorMessage {
    message: string;
}
const ErrorMessage = ({message}:IErrorMessage) => {
  return <S.Message>{message}</S.Message>;
};
export default ErrorMessage