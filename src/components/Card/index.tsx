import React from "react";
import S from './styles'

export interface ICardProps {
    children: any;
    className?: string;
    orientation?:
        | "vertical"
        | "horizontal";
}


const CardVertical = ({orientation, title, description, buttonLabel, imageSrc}: any) => {
    return <S.CardContainer orientation={orientation}>
        <figure>
            <img src={imageSrc} alt={title}/>
        </figure>
        <S.CardBody>
            {title ? <S.CardTitle className="card-title">{title}</S.CardTitle> : null}
            {description ? <p>{description}</p> : null}
            {buttonLabel ? <S.CardActions>
                <S.CardButton>{buttonLabel}</S.CardButton>
            </S.CardActions> : null}
        </S.CardBody>
    </S.CardContainer>
};


export const Card = ({orientation, title, description, buttonLabel, imageSrc}: {
    orientation: string
    title?: string
    imageSrc?: string
    buttonLabel?: string
    description?: string
}) => {
    return <>
        <CardVertical
            orientation={orientation || 'vertical'}
            title={title}
            description={description}
            buttonLabel={buttonLabel}
            imageSrc={imageSrc}
        />
    </>
}
