import React from 'react';

export interface HeaderProps {
  children?:any;
  pageTitle: string;
}

export const Header = ({ pageTitle,children }:HeaderProps) => {
  return (
    <div className="px-5 flex min-w-full min-h-12 justify-start items-center font-bold text-xl bg-neutral">
      <h3>{pageTitle || ''}</h3>
      {children} 
    </div> 
  );
};
