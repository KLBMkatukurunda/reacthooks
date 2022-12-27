export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.dark.backgroundColor};
  }
  @media (prefers-color-scheme: dark) {
	background: ${themes.dark.backgroundColor};
}
`