
// Define a TypeScript type for the article prop
export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    imageUrl: string;
  }
  

const newsArticle = [
    {
    id: 1,
    title: 'The Dawn of AI',
    content: 'Few figures have loomed larger in recent public dialogue over artificial intelligence than Geoffrey Hinton, the groundbreaking AI researcher who famously left Google Brain in May, saying he wanted to be free to speak about the risks of artificial intelligence. But some might be surprised to learn that Hinton does his work far away from the tech sector’s geographic epicenter in Silicon Valley. For 35 years, Hinton has been a formative player in building up AI capacity in Toronto. Now, the largest Canadian city is emerging as a potential AI hub, as commercial opportunities rapidly expand.',
    author: 'Saritha Rai',
    date: '2023-08-08',
    imageUrl: 'images/ai-1.jpeg' 
},
{
  id: 1,
  title: 'The Dawn of AI',
  content: 'Few figures have loomed larger in recent public dialogue over artificial intelligence than Geoffrey Hinton, the groundbreaking AI researcher who famously left Google Brain in May, saying he wanted to be free to speak about the risks of artificial intelligence. But some might be surprised to learn that Hinton does his work far away from the tech sector’s geographic epicenter in Silicon Valley. For 35 years, Hinton has been a formative player in building up AI capacity in Toronto. Now, the largest Canadian city is emerging as a potential AI hub, as commercial opportunities rapidly expand.',
  author: 'Saritha Rai',
  date: '2023-08-08',
  imageUrl: 'images/ai-2.jpeg' 
},
{
  id: 1,
  title: 'The Dawn of AI',
  content: 'Few figures have loomed larger in recent public dialogue over artificial intelligence than Geoffrey Hinton, the groundbreaking AI researcher who famously left Google Brain in May, saying he wanted to be free to speak about the risks of artificial intelligence. But some might be surprised to learn that Hinton does his work far away from the tech sector’s geographic epicenter in Silicon Valley. For 35 years, Hinton has been a formative player in building up AI capacity in Toronto. Now, the largest Canadian city is emerging as a potential AI hub, as commercial opportunities rapidly expand.',
  author: 'Saritha Rai',
  date: '2023-08-08',
  imageUrl: 'images/ai-3.jpeg' 
},
];

export default newsArticle;