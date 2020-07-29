import React from 'react';
import Menu from './components/Menu/index';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain/index';
import Carousel from './components/Carousel/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div style={{ background:"#141414" }}>
      <Menu/>
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é FRONTEND? Trabalhando na área."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Footer
        
      />


    </div>
  );
}

export default App;
