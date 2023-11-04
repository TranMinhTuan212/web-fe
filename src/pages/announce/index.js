import classNames from "classnames/bind";
import styles from './announce.module.scss'

const cx = classNames.bind(styles)

function Announce() {
    return ( 
        <div className={cx('wapper')}>
            <h1>Đây là trang thông báo</h1>
        </div>
     );
}

export default Announce;