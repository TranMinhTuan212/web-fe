import classNames from "classnames/bind";
import styles from './product-row.module.scss'
import { Link } from "react-router-dom";
import { pages } from "~/config";

const cx = classNames.bind(styles)

function ProductRow({ topic = false, product = {} }) {
    if(topic){
        return ( 
            <div className={cx('topic')}>
                <div className={cx('photo')}>
                <div className={cx('image', 'text')}></div>
                </div>
                <div className={cx('text','name')}>Tên sản phẩm</div>
                <div className={cx('text','price')}>Đơn giá</div>
                <div className={cx('text','origin')}>Xuất xứ</div>
                <div className={cx('text','unit')}>Đơn vị</div>
                <div className={cx('text','quantity')}>Số lượng</div>
                <div className={cx('text','discount')}>Đã bán</div>
            </div>
         );
    }else{
        return ( 
            <Link to={`${pages.productDetail}?id=${product._id}`} className={cx('wapper')}>
                <div className={cx('photo')}>
                    <img className={cx('image')} src={process.env.PUBLIC_URL + '/images/tho.jpg'} alt="thỏ"/>
                </div>
                <div className={cx('text','name')}>{product.name}</div>
                <div className={cx('text','price')}>{product.price}</div>
                <div className={cx('text','origin')}>{'Trung Quốc'}</div>
                <div className={cx('text','unit')}>{'Thùng'}</div>
                <div className={cx('text','quantity')}>{product.quantity}</div>
                <div className={cx('text','discount')}>{product.sold_count}</div>
            </Link>
         );
    }
}

export default ProductRow;