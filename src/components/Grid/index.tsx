import React, { useState, useEffect } from 'react';
// import S from './styles'

export interface IGridProps {
  children: any;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}
export const Grid = ({
  children,
  cols = 2,
  sm,
  md,
  lg,
}: {
  children: React.ReactNode;
  cols: number;
  sm: number;
  md?: number;
  lg?: number;
}) => {
  const [classes, setClasses] = useState(`grid gap-4 `);

  useEffect(() => {
    let newClasses = `grid gap-4 `;

    if (sm) {
      newClasses += ` sm:grid-cols-${sm}`;
    }

    if (md) {
      newClasses += ` md:grid-cols-${md}`;
    }

    if (lg) {
      newClasses += ` lg:grid-cols-${lg}`;
    }

    newClasses += ` grid-cols-${cols}`;

    setClasses(newClasses);
  }, [cols, sm, md, lg]);

  return <div className={classes}>{children}</div>;
};
