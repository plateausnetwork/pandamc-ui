import tw from 'tailwind-styled-components';
export interface IButton {
  className?: string;
  btntype?: string;
  size?: string;
}

const Button = tw.button<IButton>`
btn w-full
${(p: IButton) => {
  let buttonApperanceType: any = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    success: 'btn-success',
    error: 'btn-error',
    link: 'btn-link',
    glass: 'btn-glass',
  };
  let buttonClasses: string[] | string = [];
  if (p.btntype) buttonClasses.push(buttonApperanceType[p.btntype]);
  buttonClasses = buttonClasses.join(' ');
  return buttonClasses;
}}
${(p: IButton) => {
  let buttonApperanceSize: any = {
    lg: 'btn-lg',
    md: 'btn-md',
    sm: 'btn-sm',
    xs: 'btn-xs',
  };
  let buttonClasses: string[] | string = [];
  if (p.size) buttonClasses.push(buttonApperanceSize[p.size]);
  buttonClasses = buttonClasses.join(' ');
  return buttonClasses;
}}
${(p: IButton) => p.className}
`;
export default {
  Button,
};
