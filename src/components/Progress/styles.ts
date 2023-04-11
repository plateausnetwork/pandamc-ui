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
  CardTitle,
  CardActions,
  CardButton,
};
