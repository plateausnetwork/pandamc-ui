import React from "react";
import S from './styles'
import {Card} from "../Card";

export const CardItem = ({itemDownLeft,title, itemUpLeft, type, typeLabel, left, itemTitle, itemDescription, orientation, imageSrc}: {
    orientation: 'vertical' | 'horizontal' | 'full'
    imageSrc?: string
    title?: string
    children?: any
    itemDownLeft?: string
    itemUpLeft?: string
    type?: string
    typeLabel?: string
    left?: string
    itemTitle?: string
    itemDescription?: string
    timeLeft?: string
}) => {
    return <>
        <Card
            orientation={orientation || 'vertical'}
            imageSrc={imageSrc}
        >
            <div>
                <h2 className="card-title mt-4">{title}</h2>
                <div className="flex">
                    <S.TargetLabel type={type}>{typeLabel}</S.TargetLabel>
                    <div>{left}</div>
                </div>
                <S.ContainerBody>
                    <div>
                        <S.ContainerItemTitle>{itemTitle}</S.ContainerItemTitle>
                        <S.ContainerItemDescription>{itemDescription}</S.ContainerItemDescription>
                    </div>
                    <div>
                        <div>{itemUpLeft}</div>
                        <S.ContainerItemTitle>{itemDownLeft}</S.ContainerItemTitle>
                    </div>
                </S.ContainerBody>
            </div>
        </Card>
    </>
}
