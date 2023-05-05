import React from 'react';
import S from './styles';
import { FiArrowRight } from 'react-icons/fi';

export interface ICardProps {
  children: any;
  className?: string;
  orientation?: 'vertical' | 'horizontal' | 'full' | 'info';
}

const CardCustom = ({
  orientation,
  title,
  description,
  buttonLabel,
  imageSrc,
  reverseOrder,
  children,
  onClick,
  width,
  height,
  marginLeft,
  borderRadius,
}: any) => {
  if (orientation === 'info') {
    return (
      <div
        className="card card-side bg-base-100 shadow-xl items-center"
        onClick={onClick}
      >
        <figure>
          <S.CardImage
            src={imageSrc}
            alt={title}
            orientation={orientation}
            style={{
              width: 140 || width,
              height: 60 || height,
              marginLeft: 10 || marginLeft,
              borderRadius: 10 || borderRadius,
            }}
          />
        </figure>
        <S.CardBody>
          <div className="flex items-center justify-between w-full cursor-pointer">
            <h2 className="card-title">{buttonLabel}</h2>
            <div className="card-actions">{<FiArrowRight />}</div>
          </div>
        </S.CardBody>
      </div>
    );
  }
  return (
    <S.CardContainer
      orientation={orientation}
      reverseOrder={reverseOrder}
      onClick={onClick}
    >
      <figure>
        <S.CardImage src={imageSrc} alt={title} orientation={orientation} />
      </figure>
      <S.CardBody>
        {children ? (
          children
        ) : (
          <>
            {title ? <S.CardTitle>{title}</S.CardTitle> : null}
            {description ? <p>{description}</p> : null}
            {buttonLabel ? (
              <S.CardActions>
                <S.CardButton>{buttonLabel}</S.CardButton>
              </S.CardActions>
            ) : null}
          </>
        )}
      </S.CardBody>
    </S.CardContainer>
  );
};

export const Card = ({
  orientation,
  onClick,
  title,
  description,
  buttonLabel,
  imageSrc,
  reverseOrder,
  children,
}: {
  orientation: 'vertical' | 'horizontal' | 'full' | 'info';
  title?: string;
  imageSrc?: string;
  buttonLabel?: string;
  description?: string;
  reverseOrder?: boolean;
  children?: any;
  onClick?: (data?: any) => void;
}) => {
  return (
    <>
      <CardCustom
        orientation={orientation || 'vertical'}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        imageSrc={imageSrc}
        reverseOrder={reverseOrder}
        children={children}
        onClick={onClick}
      />
    </>
  );
};
