import tw from 'tailwind-styled-components';

const HeroTitle = tw.h1`
  my-2
  text-3xl
  lg:text-8xl
  font-light
  text-base-100
  lg:font-semibold
  leading-tight`;

const HeroSubtitle = tw.p`
  leading-normal
  text-20
  text-base-100
  mb-8
  font-medium
  max-w-[580px]
  text-2xl
  lg:pr-8`;

const styles = {
  HeroTitle,
  HeroSubtitle,
};
export default styles;
