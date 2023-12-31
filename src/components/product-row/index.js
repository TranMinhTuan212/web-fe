import classNames from "classnames/bind";
import styles from './product-row.module.scss'
import { Link } from "react-router-dom";
import { pages } from "~/config";
import { apiLink } from "~/key";

const cx = classNames.bind(styles)

function ProductRow({ topic = false, product = {} }) {

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      });

    if(topic){
        return ( 
            <div className={cx('topic')}>
                <div className={cx('photo')}>
                <div className={cx('image', 'text')}></div>
                </div>
                <div className={cx('text','name')}>Tên sản phẩm</div>
                <div className={cx('text','price')}>Đơn giá (VNĐ)</div>
                <div className={cx('text','origin')}>Xuất xứ</div>
                <div className={cx('text','unit')}>Đơn vị</div>
                <div className={cx('text','quantity')}>Chiết khấu (%)</div>
                <div className={cx('text','discount')}>Danh mục</div>
            </div>
         );
    }else{
        return ( 
            <Link to={`${pages.productDetail}?id=${product._id}&pageType=view`} className={cx('wapper')}>
                <div className={cx('photo')}>
                    <img className={cx('image')} src={apiLink + product.image} alt=""/>
                </div>
                <div className={cx('text','name')}>{product.name}</div>
                <div className={cx('text','price')}>{formatter.format(product.price)}</div>
                <div className={cx('text','origin')}>{product.origin}</div>
                <div className={cx('text','unit')}>{product.unit}</div>
                <div className={cx('text','quantity')}>{product.discount}%</div>
                <div className={cx('text','discount')}>{product.categoryName}</div>
            </Link>
         );
    }
}

export default ProductRow;