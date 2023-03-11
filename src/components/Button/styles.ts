import tw from 'tailwind-styled-components';
export interface IButton  {
    className?:string;
    btnType?:string;
}

  
const Button =  tw.button<IButton|any>`
btn
${(p:any) =>{
    let buttonApperanceType:any = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
        ghost: "btn-ghost",
        success: "btn-success",
        error: "btn-error",
        link: "btn-link",
      };
    let buttonClasses: string[] | string = [];
    if (p.btnType) buttonClasses.push(buttonApperanceType[p.btnType]);
    buttonClasses = buttonClasses.join(" ");
    return buttonClasses
}}
${(p:any) =>{
    let buttonApperanceSize:any = {
        lg: "btn-lg",
        md: "btn-md",
        sm: "btn-sm",
        xs: "btn-xs"
      };
    let buttonClasses: string[] | string = [];
    if (p.size) buttonClasses.push(buttonApperanceSize[p.size]);
    buttonClasses = buttonClasses.join(" ");
    return buttonClasses
}}
${(p:any) =>p.className}
`
export default {
    Button
}