import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import GlobalStyle from "./components/styles/Global";
import content from "./content";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ffF",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
