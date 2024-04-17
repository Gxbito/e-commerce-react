import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --primary-50: #f7eafc;
    --primary-100: #e7bff5;
    --primary-200: #dba0f0;
    --primary-300: #cb74e9;
    --primary-400: #c159e5;
    --primary-500: #b130de;
    --primary-600: #a12cca;
    --primary-700: #7e229e;
    --primary-800: #611a7a;
    --primary-900: #4a145d;
    --neutral-50: #f3f3f3;
    --neutral-100: #dadada;
    --neutral-200: #c9c9c9;
    --neutral-300: #b0b0b0;
    --neutral-400: #a1a1a1;
    --neutral-500: #898989;
    --neutral-600: #7d7d7d;
    --neutral-700: #616161;
    --neutral-800: #4b4b4b;
    --neutral-900: #3a3a3a;
    --success-50: #ebfdf1;
    --success-100: #c2f8d5;
    --success-200: #a5f5c0;
    --success-300: #7cf1a4;
    --success-400: #62ee92;
    --success-500: #3bea77;
    --success-600: #36d56c;
    --success-700: #2aa654;
    --success-800: #208141;
    --success-900: #196232;
    --warning-50: #fefaeb;
    --warning-100: #fcefc2;
    --warning-200: #fae8a5;
    --warning-300: #f8dd7c;
    --warning-400: #f7d662;
    --warning-500: #f5cc3b;
    --warning-600: #dfba36;
    --warning-700: #ae912a;
    --warning-800: #877020;
    --warning-900: #675619;
    --error-50: #fdebeb;
    --error-100: #f8c2c2;
    --error-200: #f5a5a5;
    --error-300: #f17c7c;
    --error-400: #ee6262;
    --error-500: #ea3b3b;
    --error-600: #d53636;
    --error-700: #a62a2a;
    --error-800: #812020;
    --error-900: #621919;
    --info-50: #e8f0fd;
    --info-100: #b8d1f8;
    --info-200: #96baf5;
    --info-300: #669bf1;
    --info-400: #4888ee;
    --info-500: #1a6aea;
    --info-600: #1860d5;
    --info-700: #124ba6;
    --info-800: #0e3a81;
    --info-900: #0b2d62;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #ffffff;
    font-family: "Poppins";
    color: var(--neutral-900);
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

`;
