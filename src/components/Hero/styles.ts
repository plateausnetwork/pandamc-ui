import tw from 'tailwind-styled-components';

const Main = tw.main`
  relative
  bg-gray-100
  w-full
  text-white
`;

const HeroSection = tw.section`
  bg-hero-banner
  bg-cover
  bg-center
  object-cover
  lg:bg-top
  h-screen w-full
  relative`;

const HeroWrapper = tw.div`
  pt-32
  lg:pt-20
  container
  px-3
  mx-auto
  flex
  flex-wrap
  flex-col
  md:flex-row
  items-center`;

const HeroContent = tw.div`
  container
  flex
  flex-col
  w-full
  md:mt-20
  md:w-4/6
  justify-center
  items-center
  lg:items-start
  text-center
  md:text-left
  lg:mt-20`;

const HeroRounded = tw.div`
  lg:hidden
  absolute
  w-full
  bottom-0
  h-10
  bg-gray-100
  rounded-t-3xl`;

const styles = {
  Main,
  HeroSection,
  HeroWrapper,
  HeroContent,
  HeroRounded,
};

export default styles;
