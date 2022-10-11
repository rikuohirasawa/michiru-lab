import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --bg-color: #0a192f;
    --accent-color: #ADF5FF;
    --light-color: #8892b0;
    --header-text-color: #ccd6f6;
    font-family: 'Open Sans', sans-serif;
}



html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--header-text-color);
    }

    p, ul, li {
        color: var(--light-color);
    }

    body {
    padding: 18px 24px;
    max-width: 100vw;
    color: #fff;
    background: var(--bg-color);
}
    
.accent-text { 
    color: var(--accent-color)
}`