import tw from 'tailwind-styled-components';

const CardContainer = tw.div`
  card
  bg-base-100
  shadow-xl
  ${(props: { orientation?: string }) =>
    props.orientation === 'horizontal' ? 'card-side' : ''}
`;

const CardImage = tw.img`
  ${(props: { orientation?: string }) =>
    props.orientation === 'full' ? 'w-full max-h-[700px]' : ''}
`;

const CardBody = tw.div`
 card-body bg-white
 `;
const CardTitle = tw.h2`
 card-title
 mt-20
 `;

const TargetLabel = tw.div`
  ${({ type }: { type?: string }) => {
    if (type === 'rare') {
      return 'bg-primary';
    }

    if (type === 'founder') {
      return 'bg-primary';
    }

    if (type === 'limited') {
      return 'bg-accent';
    }

    return 'bg-orange-600';
  }}
    rounded
    mr-2
    px-3
    text-white
 `;

const ContainerBody = tw.div`
    flex 
    justify-between 
    mt-8
`;
const ContainerItemTitle = tw.div`
    font-bold
`;

const ContainerItemDescription = tw.div`
    font-light
`;

const CardActions = tw.div`
 card-actions 
 justify-end
 `;
const CardButton = tw.button`
 btn 
 btn-primary
 `;

export default {
  CardContainer,
  CardImage,
  CardBody,
  ContainerBody,
  CardTitle,
  CardActions,
  ContainerItemDescription,
  ContainerItemTitle,
  CardButton,
  TargetLabel,
};
