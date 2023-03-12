import React from 'react';
import { useEffect, useState } from 'react';

import { IoMdNotifications } from 'react-icons/io';

import { DropdownThemes } from '../DropDownThemes';

export interface HeaderProps {
  pageTitle: string;
}
export const Header = ({ pageTitle }:HeaderProps) => {
  const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="px-5 flex justify-between items-center font-bold text-xl bg-neutral">
      <h3>{pageTitle || ''}</h3>
      <div className="flex flex-row items-center space-x-4">
        <DropdownThemes />
        <IoMdNotifications />
      </div>
    </div>
  );
};
