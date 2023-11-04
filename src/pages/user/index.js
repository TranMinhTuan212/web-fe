import classNames from "classnames/bind";
import styles from './user.module.scss'

const cx = classNames.bind(styles)

function User() {
    return ( 
        <div className={cx('wapper')}>
            <h1>Quản Lý User</h1>
        </div>
     );
}

export default User;