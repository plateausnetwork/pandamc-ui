import Link from 'next/link';
import { Button } from '../../components/Button';
import { DropdownThemes } from '../../components/DropDownThemes';
import S from './styles';
export interface ILanding {
  logo?: string;
  title?: string;
  logoWidth?: number;
  logoHeight?: number;
  headerBgColor?: string;
  headerBgImage?: string;
}
export const Landing = ({
  logo,
  title = 'PixelWords',
  logoWidth = 50,
  logoHeight,
  headerBgImage
}: //headerBackgroundImage="https://source.unsplash.com/random/?Cryptocurrency"
ILanding) => {
  return (
    <>
      <S.Header className={`bg-[url('${headerBgImage}')]`}>
        <S.Container>
          <S.Nav>
            {logo ? (
              <Link href="/" className=" flex items-center space-x-2">
                <S.LogoImg
                  src={logo}
                  alt="Logo"
                  width={logoWidth}
                  height={logoHeight}
                />
              </Link>
            ) : (
              <Link href="/" className=" flex items-center space-x-2">
                <span className="text-2xl text-neutral-content font-extrabold ">
                  {title}
                </span>
              </Link>
            )}
            <ul className="flex items-center justify-center">
              <S.NavLi href="/">Home</S.NavLi>
              <S.NavLi href="/">Sobre</S.NavLi>
              <S.NavLi href="/">Contato</S.NavLi>
            </ul>
            <DropdownThemes />
          </S.Nav>
          <S.HeroBanner>
            <S.HeroTextContainer>
              <S.HeroTitle>Rare Words</S.HeroTitle>
              <S.HeroSubTitle>Turn Letters into Rare Words</S.HeroSubTitle>
              <S.ButtonContainer>
                <Button btntype="primary">Combine Letters</Button>
              </S.ButtonContainer>
            </S.HeroTextContainer>
          </S.HeroBanner>
        </S.Container>
      </S.Header>
      <section id="faça-mais" className="min-h-96">
        <div
          id="container"
          className="flex flex-col lg:flex-row h-full bg-neutral  items-start justify-start"
        >
          <div
            id="faca-mais-text-container"
            className="flex flex-col px-4    justify-center items-center h-full py-[20px] w-full lg:w-1/2"
          >
            <div className="flex flex-col">
              <S.HeroTitle>Rare Words</S.HeroTitle>
              <S.HeroSubTitle>
                Bitcoin ipsum dolor sit amet. Cryptocurrency, segwit public key
                address miner Satoshi Nakamoto halvening proof-of-work.
                Cryptocurrency double-spend problem mempool bitcoin soft fork
                mempool halvening key pair full node. Whitepaper miner outputs
                full node Bitcoin Improvement Proposal, full node nonce wallet
                sats? SHA-256 block height segwit mempool decentralized nonce
                consensus.
              </S.HeroSubTitle>
              <S.ButtonContainer>
                <Button btntype="primary">Combine Letters</Button>
              </S.ButtonContainer>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-1/2  py-[20px]">
            <div className="flex w-full p-10">
                <img
                src={'https://source.unsplash.com/random/?crypto'}
                alt="img-sec2"
                className="rounded-md border border-accent shadow-accent shadow-sm "
                />
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};
