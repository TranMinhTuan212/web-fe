import classNames from "classnames/bind";
import styles from './input.module.scss'
import { message } from "~/enum";

const cx = classNames.bind(styles)

function Input({
    topic,
    type='text',
    state = '',
    setState = ()=>{},
    setRef,
    required = false,
    disabled = false,
    small = false,
    large = false,
    medium = false,
    area

}) {

    function handleValidate(e) {
        const inputValue = e.target.value;
        setState(inputValue);

        const messageElement = e.target.parentElement.querySelectorAll('span')[2]
        if (messageElement) {
            if (inputValue && inputValue.trim() !== '') {
                messageElement.textContent = '';
            } else {
                messageElement.textContent = message.NOT_EMPTY
            }
        }
    
    }

    let Tag = 'input'
    if(area){
        Tag = 'textArea'
    }

    return ( 
        <div className={cx('wapper', {medium}, {small}, {large}, {area})}>
            <span className={cx('')}>{topic}</span> {required && <span className={cx('text-danger', 'fs-4')}>*</span>} <br/>
            <Tag disabled={disabled} onBlur={e=>{handleValidate(e)}} value={state} className={cx('my-input', {area})} onChange={e=>handleValidate(e)} type={type} name='text'/> <br/>
            <span ref={setRef} className={cx('message')}></span>
        </div>
     );
}

export default Input