import tw from 'tailwind-styled-components';

const ShadowedComponent: any = tw.div`
               shadow
              w-full
              ${({ backgroundColor, theme }: any) =>
                backgroundColor && backgroundColor != ``
                  ? 'bg-[' + backgroundColor + ']'
                  : theme?.bg}
    `;

const NavContainer = tw.nav`
    w-full 
    shadow 
    bg-neutral
    text-accent
`;

export default { ShadowedComponent, NavContainer };
