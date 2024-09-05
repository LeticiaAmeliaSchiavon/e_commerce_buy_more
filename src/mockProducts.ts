import geladeira1 from '../src/assets/images/geladeira1.png';
import guardaroupas1 from '../src/assets/images/guardaroupas1.png';
import celular1 from '../src/assets/images/celular1.png';

const products = [
  { id: 1, title: 'Refrigerador/Geladeira 437L Side By Side Philco 127V PRF535I', description: 'Refrigerador/Geladeira 437L Side By Side Philco 127V PRF535I A Geladeira 437L Side By Side Philco PRF535Ivai agregar muito mais requinte e eficiência para a sua cozinha.', price: 4049.91, pictureUrl: geladeira1 },
  { id: 2, title: 'Guarda Roupa 3 Portas 4 Gavetas Com Espelho Serenity Yescasa', description: 'O guarda roupa Serenity conta com 4 gavetas internas e divisórias que facilitam a organização das suas roupas. Seu visual moderno e compacto trás uma elegância a mais ao produto.', price: 861.46, pictureUrl: guardaroupas1 },
  { id: 3, title: 'Smartphone Samsung Galaxy A05 128GB 4G Wi-Fi Tela 6.7" Dual Chip 4GB RAM Câmera Dupla + Selfie 8MP - Prata', description: 'Veja tudo com nitidez com o Smartphone Samsung Galaxy A05! Com tela continua e design elegante, você pode aproveite seus jogos, filmes e conteúdo favoritos com o vasto display HD+ de 6,7.', price: 674.10, pictureUrl: celular1 },
];

export const getProducts = (): Promise<typeof products> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getItem = (id: number): Promise<typeof products[0]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = products.find((product) => product.id === id);
      if (item) {
        resolve(item);
      }
    }, 2000);
  });
};
