import React,{ ButtonHTMLAttributes } from 'react';
import S from './styles'
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: any;
    className?: string;
    btntype?:
      | "primary"
      | "secondary"
      | "accent"
      | "ghost"
      | "base"
      | "success"
      | "error"
      | "glass"
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
    btntype = "primary",
    size="md",
    ...rest
  }: IButtonProps) => {
   
    return (
      <S.Button btntype={btntype} size={size} {...rest}>
        {children}
      </S.Button>
    );
  };