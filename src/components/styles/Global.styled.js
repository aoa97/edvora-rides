import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        font-family: 'Inter', sans-serif;
        color: #FFF;
    }

    a {
        text-decoration: none;
    }
`;

export default Global;
