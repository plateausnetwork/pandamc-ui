import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import Label from "../Label";
import S from './styles'
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?:string;
    errors?:any;
    name:string;
    register: UseFormRegister<FieldValues>
  }
  
const Input = ({ label, name,placeholder,errors,register, ...rest }: IInputProps) =>{
    return (
        <S.InputContainer>
        <Label text={label||''}/>
        <S.Input
          placeholder={placeholder || label}
          {...register(name)}
          {...rest}
        />
        <ErrorMessage message={errors?.message}/>  
      </S.InputContainer>
    )
}
export default Input