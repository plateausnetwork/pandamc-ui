import tw from 'tailwind-styled-components';

const CardContainer = tw.div`
  card
  bg-base-100
  shadow-xl
  ${(props: { reverseOrder?: boolean }) =>
    !props.reverseOrder ? ' ' : ' flex-row-reverse  flex '}
  ${(props: { orientation?: string; reverseOrder?: boolean }) =>
    props.orientation === 'horizontal' ? 'card-side' : ''}
`;

const CardBody = tw.div`
 card-body
 `;
const CardTitle = tw.h2`
 card-title
 `;
const CardActions = tw.div`
  ${(props: { reverseOrder?: boolean }) =>
    !props.reverseOrder ? ' justify-end ' : 'justify-start'}
 card-actions 
 `;
const CardButton = tw.button`
 btn 
 btn-primary
 `;

export default {
  CardContainer,
  CardBody,
  CardTitle,
  CardActions,
  CardButton,
};
