import tw from 'tailwind-styled-components';

const Table = tw.table`
    table
    ${(props: { typeTable: string }) => props.typeTable}
    my-4
    w-full
 `;

export default {
  Table,
};
