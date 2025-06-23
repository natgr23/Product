import './App.css'
import { ProductCard, type ProductCardProps } from '../ProductCard/ProductCard'

export function App() {


  const items: ProductCardProps[] = [
    { title: "Кроссовки", origin: "Китай", price: 200000, currency: "RUB", imageUrl: "" },
    { title: "Ботинки", origin: "Италия", price: 35000, currency: "USD", imageUrl: "" },
    { title: "Кроссовки для бега", origin: "Вьетнам", price: 15000, currency: "EUR", imageUrl: "" },
    { title: "Туфли классические", origin: "Германия", price: 50000, currency: "RUB", imageUrl: "" },
    { title: "Сандалии", origin: "Турция", price: 8000, currency: "USD", imageUrl: "" },
    { title: "Мокасины", origin: "Испания", price: 12000, currency: "EUR", imageUrl: "" },
    { title: "Высокие кроссовки", origin: "Китай", price: 22000, currency: "RUB", imageUrl: "" },
    { title: "Лоферы", origin: "Италия", price: 25000, currency: "USD", imageUrl: "" },
    { title: "Детские кроссовки", origin: "Корея", price: 7000, currency: "EUR", imageUrl: "" },
    { title: "Женские туфли на каблуке", origin: "Франция", price: 60000, currency: "RUB", imageUrl: "" },
    { title: "Спортивные тапочки", origin: "Тайланд", price: 5000, currency: "USD", imageUrl: "" },
    { title: "Обувь для танцев", origin: "Испания", price: 18000, currency: "EUR", imageUrl: "" },
    { title: "Обувь для походов", origin: "Норвегия", price: 30000, currency: "RUB", imageUrl: "" },
    { title: "Летние сандалии", origin: "Греция", price: 9000, currency: "USD", imageUrl: "" },
    { title: "Зимние сапоги", origin: "Россия", price: 25000, currency: "EUR", imageUrl: "" },
    { title: "Мужские мокасины", origin: "Италия", price: 28000, currency: "RUB", imageUrl: "" },
    { title: "Детские ботинки", origin: "Канада", price: 15000, currency: "USD", imageUrl: "" },
    { title: "Обувь для фитнеса", origin: "Турция", price: 10000, currency: "EUR", imageUrl: "" },
    { title: "Обувь для йоги", origin: "Индия", price: 6000, currency: "RUB", imageUrl: "" },
    { title: "Обувь для плавания ", origin: "Испания", price: 12000, currency: 'USD', imageUrl: '' }
  ];

  return (<div style={{display: "flex", flexWrap: "wrap", gap: "10px", rowGap: "20px", justifyContent: "center"}}>

    {items.map((item, i) => (<div key={i}>
      <ProductCard
        title={item.title}
        origin={item.origin}
        price={item.price}
        currency={item.currency}
        imageUrl={"https://www.basketshop.ru/files/catalog/45010/100074343(13).JPG"} />
    </div>))}

  </div>)
}


