import React, { useState, ReactNode, useEffect } from 'react';
// import S from './styles'

interface GridProps {
  children: ReactNode;
  cols?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export const Grid = ({ children, cols = 6, sm, md, lg }: GridProps) => {
  const [classes, setClasses] = useState<string>('grid gap-4');
  const [loading, setLoading] = useState(true);

  const init = () => {
    let newClasses = 'grid gap-4';

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
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    init();
  }, [cols, sm, md, lg]);

  useEffect(() => {
    setLoading(true);
    init();
  }, []);

  return loading ? null : <div className={classes}>{children}</div>;
};
