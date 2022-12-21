import Img1 from "src/assets/images/publiImg1.png";
import Img2 from "src/assets/images/publiImg2.png";
import Img3 from "src/assets/images/publiImg3.png";
import Img4 from "src/assets/images/publiImg4.png";
import Img5 from "src/assets/images/publiImg5.png";
import Img6 from "src/assets/images/publiImg6.png";
import Img7 from "src/assets/images/publiImg7.png";
import Img8 from "src/assets/images/publiImg8.png";
import Img9 from "src/assets/images/publiImg9.png";
import Img10 from "src/assets/images/publiImg10.png";

export const allEvents = [
  {
    id: 1,
    img: Img1,
    title: "Business Inteligence 2.0",
    day: "27/01/2023",
    type: "Empresarial",
    description: "Aprenda as melhores estratégias de usar essa poderosa ferramenta nos seus negócios",
    isTopSell: false,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 6,
    img: Img7,
    title: "Destaque-se no mercado de trabalho",
    description: "Aprenda as melhores estratégias para se destacar no mercado",
    day: "10/01/2023",
    type: "Acadêmico",
    isTopSell: true,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 2,
    img: Img2,
    title: "Como conduzir equipes para o resultado",
    day: "22/02/2023",
    type: "Empresarial",
    description: "Aprenda as melhores estratégias de usar essa poderosa ferramenta nos seus negócios",
    isTopSell: false,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 200.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 3,
    img: Img3,
    title: "Legislação para Startups",
    day: "15/03/2023",
    type: "Empresarial",
    description: "Aprenda as melhores estratégias de usar essa poderosa ferramenta nos seus negócios",
    isTopSell: false,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 70.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 35.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 4,
    img: Img4,
    title: "Marketing para empresas",
    day: "30/05/2023",
    type: "Empresarial",
    description: "Aprenda as melhores estratégias de usar essa poderosa ferramenta nos seus negócios",
    isTopSell: true,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 5,
    img: Img5,
    title: "Mulheres na liderança",
    day: "25/04/2023",
    type: "Empresarial",
    description: "Aprenda as melhores estratégias de liderança para o seu negócios",
    isTopSell: true,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 7,
    img: Img6,
    title: "Multidisciplinaridade na tecnologia",
    description: "Descubra como desenvolver as principais habilidades para se destacar no campo da tecnologia",
    day: "15/02/2023",
    type: "Acadêmico",
    isTopSell: true,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 8,
    img: Img10,
    title: "Redes sociais para empresa",
    day: "27/01/2023",
    type: "Empresarial",
    description: "Aprenda as melhores estratégias de usar essa poderosa ferramenta nos seus negócios",
    isTopSell: false,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 10,
    img: Img8,
    title: "Como se destacar nos processos seletivos",
    description: "Aprenda as melhores estratégias para se destacar no mercado",
    day: "10/01/2023",
    type: "Acadêmico",
    isTopSell: false,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 11,
    img: Img9,
    title: "Clean code na prática",
    description: "Descubra como desenvolver aplicações com um código de qualidade",
    day: "17/04/2023",
    type: "Acadêmico",
    isTopSell: false,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  
] 