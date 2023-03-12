import React,{ ButtonHTMLAttributes } from 'react';
import S from './styles'
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: any;
    className?: string;
    btnType?:
      | "primary"
      | "secondary"
      | "accent"
      | "ghost"
      | "base"
      | "success"
      | "error"
      | "link";
    size?: 
     |"lg"
     |"md"
     |"sm"
     |"xs"
  }
  

  export const Button = ({
    children,
    className = "",
    btnType = "primary",
    size="md",
    ...rest
  }: IButtonProps) => {
   
    return (
      <S.Button btntype={btnType} size={size} {...rest}>
        {children}
      </S.Button>
    );
  };