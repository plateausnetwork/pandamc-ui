import tw from 'tailwind-styled-components';

const ShadowedComponent: any = tw.div`
               shadow
              w-full
              ${({ backgroundColor, theme }: any) =>
                backgroundColor && backgroundColor != ``
                  ? 'bg-[' + backgroundColor + ']'
                  : theme?.bg}
    `;

export default { ShadowedComponent };
