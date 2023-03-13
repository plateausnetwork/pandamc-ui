import React from "react";
import S from './styles'
export interface ICardProps {
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
export const Card = () => {
  return (
    <S.CardContainer>
      <S.CardBody>
        <S.CardActions>
          <button className="btn btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </S.CardActions>
        <p>We are using cookies for no reason.</p>
      </S.CardBody>
    </S.CardContainer>
  );
};
