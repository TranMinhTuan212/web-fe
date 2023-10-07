import classNames from "classnames/bind";
import styles from './header.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong, faGear, faKey, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import Search from "../search";
import Button from "../button";

const cx = classNames.bind(styles)


function Header() {

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <div className={cx('navigation')}>
                    <div className={cx('arow-left', 'arow')}><FontAwesomeIcon icon={faArrowLeftLong}/></div>
                    <div className={cx('arow-right', 'arow')}><FontAwesomeIcon icon={faArrowRightLong}/></div>
                </div>
                <div className={cx('search')}>
                    <Search/>
                </div>
            </div>
            <div className={cx('header-right')}>
                <div className={cx('user')}>
                    <div className={cx('user-avatar')}>
                    <img className={cx('avatar')} src={process.env.PUBLIC_URL + "/images/phong.jpg"} alt=""/>
                    </div>
                    <div className={cx('user-option')}>
                        <div className={cx('user-option-item')}><Button icon={faRightFromBracket} textButton text="Đăng Xuất"/></div>
                        <div className={cx('user-option-item')}><Button icon={faUser} textButton text="Cá Nhân"/></div>
                        <div className={cx('user-option-item')}><Button icon={faKey} textButton text="Đổi Mật Khẩu"/></div>
                        <div className={cx('user-option-item')}><Button icon={faGear} textButton text="Cài Đặt"/></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Header;