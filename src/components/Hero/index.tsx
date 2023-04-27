import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import S from './styles';
export interface IHeroProps extends ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode | JSX.Element;
}

export const Hero = ({ children }: IHeroProps) => {
  return (
    <S.HeroSection>
      <S.HeroWrapper>
        <S.HeroContent>{children}</S.HeroContent>
      </S.HeroWrapper>

      <S.HeroRounded />
    </S.HeroSection>
  );
};
