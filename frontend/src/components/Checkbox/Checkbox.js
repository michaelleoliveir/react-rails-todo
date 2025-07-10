import style from "./Checkbox.module.css"

export const Checkbox = ({ id = 'checkbox-id' }) => {
    return (
        <div className={style.checkboxWrapper}>
            <input className={style.inpCbx} id={id} type="checkbox" />
            <label className={style.cbx} htmlFor={id}>
                <span>
                    <svg width="12px" height="9px" viewbox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
            </label>
        </div>
    )
}
