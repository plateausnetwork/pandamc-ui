import React from 'react';
import { Button } from '../Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
export interface IFooterProps {
  image: string;
  title: string;
  description: string;
  projectName: string;
  links: { url: string; label: string }[];
}

export const Footer = ({
  image,
  description,
  title,
  links,
  projectName,
}: IFooterProps) => {
  return (
    <footer className={'bg-base-100'}>
      <div className="container px-3 py-12 sm:pt-16 pb-12 mx-auto ">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <img src={image} alt="Turis" width={150} height={70} />

          <p className="text-black text-center text-3xl font-bold mt-10 mb-4">
            {title}
          </p>

          <p
            className={`text-gray-500 text-center text-base sm:text-xl mb-8 sm:mb-10`}
          >
            {description}
          </p>

          <div>
            <Button btntype="primary">
              <AiOutlineUserAdd />
              <span className="ml-2">Connect</span>
            </Button>
          </div>
        </div>

        <div className="w-full flex sm:flex-row flex-col-reverse justify-between text-gray-400 border-t pt-8 mt-11 sm:mt-16">
          <p>
            © {new Date().getFullYear()} {projectName}. Desenvolvido Rhizom
          </p>
          <ul className="flex gap-4 mb-4 sm:mb-0">
            {links?.map((link) => {
              return (
                <li>
                  <a href={link?.url}>{link?.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};
