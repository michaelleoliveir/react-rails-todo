import style from "./AddCard.module.css"

import { Plus } from 'lucide-react'

export const AddCard = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <Plus stroke="#F4F6FA" className={style.plusIcon} />
                <div className={style.texts}>
                    <textarea rows={0} placeholder="insira aqui o título da sua task" className={style.mainTitle} />
                    <textarea rows={0} placeholder="escreva uma descrição detalhada do que fazer" className={style.subTitle} />
                </div>
            </div>
        </div>
    )
}
