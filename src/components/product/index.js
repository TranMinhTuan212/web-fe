import classNames from "classnames/bind";
import styles from './product.module.scss'
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Product({ onClick = ()=>{} }) {
    return ( 
        <div className={cx('wapper')}>
            <div className={cx('image')}>
                <img className={cx('image-item')} src={process.env.PUBLIC_URL + '/images/tho.jpg'} alt=""/>
            </div>
            <div className={cx('content')}>
                <div className={cx('name')}>Thỏ con cute</div>
                <div className={cx('price')}>100.000đ</div>
                <div className={cx('star')}>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </div>
            </div>
            <div className={cx('button')}><Button onSubmit={onClick} text="Thêm vào giỏ hàng"/></div>
        </div>
     );
}

export default Product;