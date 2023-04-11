import tw from 'tailwind-styled-components';

const CardContainer = tw.div`
  card
  bg-base-100
  shadow-xl
  ${(props: { orientation?: string }) =>
    props.orientation === 'horizontal' ? 'card-side' : ''}
`;

const CardBody = tw.div`
 card-body
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
  CardBody,
  CardTitle,
  CardActions,
  CardButton,
};
