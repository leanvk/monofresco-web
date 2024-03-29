

import Footer from './footer/footer.js';
import Header from './header/header.js';
import Hero from './hero/hero.js';
import FormSection from './form/form.js';
import Examples from './examples/examples.js';
import AboutUsSection  from './aboutUs/aboutUs';
import { Container } from './Container.js';



function App() {

  return (
    <>
      <Container>
      <Header></Header>
      <Hero></Hero>
      <AboutUsSection></AboutUsSection>
      <Examples></Examples>
      <FormSection></FormSection>
      
      <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
