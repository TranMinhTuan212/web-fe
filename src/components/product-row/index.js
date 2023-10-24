import classNames from "classnames/bind";
import styles from './product-row.module.scss'
import { Link } from "react-router-dom";
import { pages } from "~/config";

const cx = classNames.bind(styles)

function ProductRow() {
    return ( 
        <Link to={pages.productDetail} className={cx('wapper')}>
            <div className={cx('photo')}>
                <img className={cx('image')} src={process.env.PUBLIC_URL + '/images/tho.jpg'} alt="thỏ"/>
            </div>
            <div className={cx('text','name')}>Thỏ Cute</div>
            <div className={cx('text','price')}>100.000$</div>
            <div className={cx('text','origin')}>Trung Quốc</div>
            <div className={cx('text','unit')}>Đơn vị</div>
            <div className={cx('text','quantity')}>Số lượng</div>
            <div className={cx('text','discount')}>Chiết khẩu</div>
        </Link>
     );
}

export default ProductRow;