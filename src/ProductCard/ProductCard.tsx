import s from "./ProductCard.module.css"

export interface ProductCardProps {
    title: string,
    origin: string,
    price: number,
    currency: "RUB" | "EUR" | "USD",
    imageUrl: string,
}


export function ProductCard({ title, origin, price, currency, imageUrl }: ProductCardProps) {

    const displayedPrice = new Intl.NumberFormat("ru", {style: "currency", currency}).format(price/100);

    return (<div className={s.card}>

        <div className={s.productImg} style={{ backgroundImage: `url('${imageUrl}')` }}></div>

        <div className={s.infoBox}>
            <div className={s.infoLeft}>
                <div className={s.title}>
                    {title}
                </div>
                <div className={s.origin}>
                    {origin}
                </div>
                <div className={s.price}>
                   {displayedPrice}
                </div>


            </div>
            <div className={s.infoRight}>
                <button className={s.addButton} ></button>
            </div>
        </div>

    </div>)

}