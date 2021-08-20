import { css } from "styled-components";

export default {

    divHeader: css`
        display: flex;
        padding: 0 8rem;
        justify-content: space-between;
        align-items: center;
        background-color: #E8BE6B;
    `,
    navTitle: css`
        color: #000;
        font-size: x-large;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    `,
    button: css`
        cursor: pointer;
        background-color: transparent;
        padding: .375rem .75rem;
        vertical-align: middle;
        border: 1px solid #000;
        border-radius: 0.25rem;
        :hover {
        background-color: #F6F6F6;
        }
    `,
}