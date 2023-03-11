import tw from 'tailwind-styled-components'

const InputContainer =  tw.div`
form-control
w-full
max-w-xs
`  
const Input =  tw.input`
input
input-bordered
w-full
max-w-xs
`
export default {
    InputContainer,
    Input
}