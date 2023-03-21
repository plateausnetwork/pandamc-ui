import { ImgHTMLAttributes, AnchorHTMLAttributes } from 'react';
import tw from 'tailwind-styled-components';
export interface IHeader {
  backgroundimage?: string;
  backgroundcolor?: string;
}
export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {}
export interface ILogoImg extends ImgHTMLAttributes<HTMLImageElement> {}
const Header = tw.header`
${(p: IHeader) => {
  console.log(p);
  return `
    bg-center
    bg-cover
    bg-fixed
    `;
}}
`;
const Container = tw.div`
w-full
px-5
lg:p-4
`;
const Nav = tw.nav`
flex
justify-between
items-center
py-2
`;
const NavLi = tw.a<ILink>`
text-neutral-content
uppercase
text-sm
mx-[30px]
after:bg-neutral-content
after:content-[""]
after:m-auto
after:h-0.5
after:w-0
after:block
hover:after:w-full
after:transition
after:delay-300
after:ease-in
`;
const HeroBanner = tw.section`
flex
justify-center
h-full
`;
const ButtonContainer = tw.div`
min-w-fit
mt-5
animate-pulse
`;
const HeroTextContainer = tw.div`
flex
flex-col
justify-center
items-center
py-20
lg:py-72

`;
const HeroTitle = tw.h1`
text-accent
text-6xl
font-bold
max-w-md
`;
const HeroSubTitle = tw.h1`
flex
text-accent
text-2xl
flex-wrap
max-w-md
`;
const LogoImg = tw.img<ILogoImg>`
${(p: ILogoImg) => {
  if (p.width) {
    return `w-[${p.width}px]`;
  }
  return '';
}}
${(p: ILogoImg) => {
  if (p.height) {
    return `hw-[${p.height}px]`;
  }
  return '';
}}
`;
export default {
  Header,
  Container,
  Nav,
  NavLi,
  HeroBanner,
  HeroTextContainer,
  HeroTitle,
  HeroSubTitle,
  LogoImg,
  ButtonContainer,
};
