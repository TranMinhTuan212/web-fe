import classNames from "classnames/bind";
import styles from './button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)

function Button({
    text = false,
    icon = false,
    onSubmit = ()=>{},
    large = false,
    danger = false,
    textButton = false,
    disable = false,
    left = false,
    right = false
}) {
        
    const classnames = cx('wapper',{ large, danger, textButton, disable, left, right })

    return (
        <div onClick={ !disable ? onSubmit : ()=>{}} className={classnames}>
            { icon && <span className={cx('icon')}><FontAwesomeIcon icon={icon}/></span> }
            <button disabled={disable} className={cx('my-button')}>{text}</button>
        </div>
     );
}

export default Button