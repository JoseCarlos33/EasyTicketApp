import Img1 from "src/assets/images/publiImg1.png";
import Img2 from "src/assets/images/publiImg2.png";
import Img3 from "src/assets/images/publiImg3.png";

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
    id: 2,
    img: Img2,
    title: "Como gerar mais resultados em grandes corporações",
    day: "27/01/2023",
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
    day: "27/01/2023",
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
    img: Img1,
    title: "Marketing para empresas",
    day: "27/01/2023",
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
    img: Img3,
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
    id: 6,
    img: Img2,
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
    id: 7,
    img: Img3,
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
    img: Img1,
    title: "Marketing para empresas",
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
    id: 9,
    img: Img3,
    title: "Mulheres na liderança",
    day: "25/04/2023",
    type: "Empresarial",
    description: "Aprenda as melhores estratégias de liderança para o seu negócios",
    isTopSell: false,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  {
    id: 10,
    img: Img2,
    title: "Destaque-se no mercado de trabalho",
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
    img: Img3,
    title: "Multidisciplinaridade na tecnologia",
    description: "Descubra como desenvolver as principais habilidades para se destacar no campo da tecnologia",
    day: "15/02/2023",
    type: "Acadêmico",
    isTopSell: false,
    hour: "18h30 - 21h",
    ticket: [
      {id: Math.floor(Math.random() * 100000000000000), value: 100.00, title: "Ingresso - inteira"},
      {id: Math.floor(Math.random() * 100000000000000), value: 50.00, title: "Ingresso - meia"},
    ]
  },
  
] 