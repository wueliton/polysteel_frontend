import React, { useContext } from 'react';
import ProductsContext from '../../contexts/product';
import { Head, Header, Footer, Breadcrumb } from '../../components';

const Products = (): JSX.Element => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <Head
        title="Produtos"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Produtos</span>
        {products.map((item) => (
          <p key={item.id}>{item.id}</p>
        ))}
      </Breadcrumb>
      <Footer />
    </>
  );
};

export default Products;
