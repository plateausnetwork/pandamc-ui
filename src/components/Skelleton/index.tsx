import React from 'react';
import { Grid } from '../Grid';
// import S from './styles';

const CardSkeleton = () => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl animate-pulse h-full">
      <div className="bg-base-200 w-full h-48"></div>
      <div className="card-body p-4">
        <div className="bg-base-200 h-8 rounded mb-2"></div>
        <div className="bg-base-200 h-6 rounded w-1/2 mb-2"></div>
        <div className="bg-base-200 h-6 rounded w-3/4 mb-4"></div>
        <div className="card-actions mt-4 flex justify-end">
          <div className="bg-primary rounded-full h-12 w-28"></div>
        </div>
      </div>
    </div>
  );
};

const InputSkeleton = () => {
  return (
    <div className="w-full rounded-md shadow-md bg-base-100 p-4 animate-pulse">
      <div className="relative">
        <div className="h-4 bg-base-200 rounded mb-2"></div>
        <div className="h-8 bg-base-200 rounded"></div>
      </div>
    </div>
  );
};

const TextAreaSkeleton = () => {
  return (
    <div className="w-full rounded-md shadow-md bg-base-100 p-4 animate-pulse">
      <div className="relative">
        <div className="h-4 bg-base-200 rounded mb-2"></div>
        <div className="h-24 bg-base-200 rounded"></div>
      </div>
    </div>
  );
};

const GridSkeleton = () => {
  return (
    <Grid cols={4}>
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    </Grid>
  );
};

export interface TypesSkelleton {
  type?: 'grid' | 'card' | 'text-area' | 'input';
}

export const Skelleton = ({ type }: TypesSkelleton) => {
  if (type === 'grid') {
    return <GridSkeleton />;
  }
  if (type === 'card') {
    return <CardSkeleton />;
  }
  if (type === 'text-area') {
    return <TextAreaSkeleton />;
  }

  if (type === 'input') {
    return <InputSkeleton />;
  }
  return <GridSkeleton />;
};
