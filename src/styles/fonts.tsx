import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Circular';
        font-style: normal;
        font-weight: 500;
        src: url('./fonts/lineto-circular-book.woff2') format('woff2'), url('./fonts/lineto-circular-book.woff') format('woff');
      }
      @font-face {
        font-family: 'Circular';
        font-style: normal;
        font-weight: 600;
        src: url('./fonts/lineto-circular-medium.woff2') format('woff2'), url('./fonts/lineto-circular-medium.woff') format('woff');
      }
      @font-face {
        font-family: 'Circular';
        font-style: normal;
        font-weight: 700;
        src: url('./fonts/lineto-circular-bold.woff2') format('woff2'), url('./fonts/lineto-circular-bold.woff') format('woff');
      }
    `}
  />
)

export default Fonts
