import tw from 'tailwind-styled-components';

const ShadowedComponent: any = tw.div`
               shadow
              w-full
              ${({ backgroundColor, theme }: any) =>
                backgroundColor && backgroundColor != ``
                  ? 'bg-[' + backgroundColor + ']'
                  : theme?.bg}
    `;

const Nav = tw.nav`
    w-full 
    shadow 
    bg-neutral
    text-accent
`;

const Container = tw.div`justify-start  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8`;

const LogoContainer = tw.div`flex items-center justify-between py-3 md:py-5 md:block`;

const TextLogo = tw.h2`text-2xl font-bold bg-transparent`;

const NavBody = tw.div`
flex justify-between items-center w-full
`;

const ToggleMenu = tw.button`
p-2 rounded-md outline-none focus:border-gray-400 focus:border
`;

const NavHeader = tw.div`
    flex
    items-center
    justify-between
    py-3
    md:py-5
    md:block
`;

const MenuList = tw.ul`
    items-center
    justify-center
    space-y-8
    md:flex
    md:space-x-6
    md:space-y-0
    ml-[150px]
`;

const WrapperNav: any = tw.div`
flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0
 ${({ navbar }: any) => (navbar ? 'block' : `hidden`)}
`;

const LinkMenuList = tw.a`
    block
    py-2 
    pl-3 
    cursor-pointer 
    pr-4
`;

export default {
  ShadowedComponent,
  Nav,
  Container,
  LogoContainer,
  TextLogo,
  NavHeader,
  LinkMenuList,
  NavBody,
  MenuList,
  ToggleMenu,
  WrapperNav,
};
