import React from 'react';
import S from './styles';

export interface ICardProps {
  children: any;
  className?: string;
  orientation?: 'vertical' | 'horizontal' | 'full';
}

const CardVertical = ({
  orientation,
  title,
  description,
  buttonLabel,
  imageSrc,
  reverseOrder,
  children,
  onClick,
}: any) => {
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
  orientation: 'vertical' | 'horizontal' | 'full';
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
      <CardVertical
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
