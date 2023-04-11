import React, { useState, ReactElement, HTMLAttributes } from 'react';
import S from './styles';

export interface INav extends HTMLAttributes<HTMLDivElement> {
  menu?: { onClick?: any; title: string; icon?: any }[];
  children?: ReactElement;
  logo?: () => void;
}

export const Nav = ({ menu, children, logo }: INav) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <S.Nav>
        <S.Container>
          <div>
            <S.LogoContainer>
              {(logo && logo()) || (
                <a href="javascript:void(0)">
                  <S.TextLogo>LOGO</S.TextLogo>
                </a>
              )}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </S.LogoContainer>
          </div>
          <S.NavBody>
            <S.WrapperNav navbar={navbar}>
              <S.MenuList>
                {(
                  menu || [{ onClick: () => alert(`Clicked`), title: `Option` }]
                ).map((item: { onClick?: any; title: string }, key: number) => {
                  return (
                    <li key={key}>
                      <S.LinkMenuList
                        onClick={item?.onClick}
                        href="javascript:void(0)"
                      >
                        {item?.title}
                      </S.LinkMenuList>
                    </li>
                  );
                })}
              </S.MenuList>
            </S.WrapperNav>
            {children}
          </S.NavBody>
        </S.Container>
      </S.Nav>
    </>
  );
};
