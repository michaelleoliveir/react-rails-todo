import { Trash2 } from 'lucide-react'

import { Checkbox } from "../Checkbox/Checkbox"
import style from "./Card.module.css"

export const Card = ({ id, title, description }) => {
    return (
        <div className={style.card} key={id}>
            <div className={style.leftSide}>
                <Checkbox id={id} />
                <div>
                    <h1 className={style.mainTitle}>{title}</h1>
                    <p className={style.subTitle}>{description}</p>
                </div>
            </div>

            <div className={style.rightSide}>
                <Trash2 stroke='#F4F6FA' />
            </div>
        </div>
    )
}
