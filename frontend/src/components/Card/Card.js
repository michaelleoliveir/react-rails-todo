import { Checkbox } from "../Checkbox/Checkbox"
import style from "./Card.module.css"

export const Card = ({ id, title, description }) => {
    return (
        <div className={style.card} key={id}>
            <Checkbox id={id} />
            <div>
                <h1 className={style.mainTitle}>{title}</h1>
                <p className={style.subTitle}>{description}</p>
            </div>
        </div>
    )
}
