import React from 'react';
function RadialProgress({
  percentage,
  size,
  thickness,
  barColor,
  trackColor,
}: {
  percentage: number;
  size: string;
  thickness: string;
  barColor: string;
  trackColor: string;
}) {
  const style = {
    '--value': `${percentage || 40}`,
    '--size': size || '12rem',
    '--thickness': thickness || '2px',
  } as any;
  barColor = `bg-${barColor || 'secondary'}`;
  trackColor = `text-${trackColor || 'primary'}`;
  return (
    <div className={trackColor + ' radial-progress ' + barColor} style={style}>
      {percentage}%
    </div>
  );
}

interface ProgressBarProps {
  percentage: number;
  barColor?: string;
  trackColor?: string;
  barHeight?: string;
}

function ProgressBar({
  percentage,
  barColor = 'blue-500',
  trackColor = 'gray-200',
  barHeight = 'h-2',
}: ProgressBarProps) {
  const barWidth = `${percentage}%`;
  const barStyle = { width: barWidth };
  return (
    <div className={`w-full ${barHeight} bg-${trackColor} rounded-full`}>
      <div
        className={`h-full text-center text-xs text-white bg-${barColor} rounded-full transition-all duration-500 ease-in-out`}
        style={barStyle}
      />
    </div>
  );
}

export const Progress = ({
  type,
  thickness,
  percentage,
  barColor,
  trackColor,
}: {
  type?: 'progress' | 'radial';
  thickness: '2px' | '4px' | '6px' | '8px' | '12px' | '18px';
  percentage: 10 | 20 | 30 | 50 | 60 | 80 | 90 | 100;
  barColor: 'primary' | 'secondary' | 'accent' | 'neutral' | 'base-100';
  trackColor: 'primary' | 'secondary' | 'accent' | 'neutral' | 'base-100';
}) => {
  if (type === 'radial') {
    return (
      <RadialProgress
        percentage={percentage}
        size="12rem"
        trackColor={trackColor}
        thickness={thickness}
        barColor={barColor}
      />
    );
  }
  return (
    <ProgressBar
      percentage={percentage}
      trackColor={trackColor}
      barColor={barColor}
    />
  );
};
