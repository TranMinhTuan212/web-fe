import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faBell,
  faCartShopping,
  faGear,
  faKey,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../search";
import Button from "../button";
import { useGlobalState } from "~/provider/useGlobalState";
import { setLogin } from "~/provider/action";
import { userKey } from "~/key";
import { useNavigate } from "react-router-dom";
import { pages } from "~/config";
import { ERole } from "~/enum";

const cx = classNames.bind(styles);

function Header() {
  const [, dispatch] = useGlobalState();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.setItem(userKey, null);
    dispatch(setLogin(null));
    navigate(pages.login);
  }

  const user = JSON.parse(localStorage.getItem(userKey))

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-left")}>
        <div className={cx("navigation")}>
          <div onClick={()=>navigate(-1)} className={cx("arow-left", "arow")}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </div>
          <div onClick={()=>navigate(1)} className={cx("arow-right", "arow")}>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
        <div className={cx("search")}>
          <Search />
        </div>
      </div>
      <div className={cx("header-right")}>
        <div 
         onClick={()=>navigate(pages.announce)}
         className={cx("cart")}>
          <FontAwesomeIcon icon={faBell} />
        </div>
        {
          user?.role === ERole.customer &&
          <div 
         onClick={()=>navigate(pages.cart)}
         className={cx("cart")}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        }
        <div className={cx("logout")}>
          <Button onSubmit={() => handleLogout()} text="Đăng Xuất"/>
        </div>
        <div className={cx("user")}>
          <div className={cx("user-avatar")}>
            <img
              className={cx("avatar")}
              src={process.env.PUBLIC_URL + "/images/phong.jpg"}
              alt=""
            />
          </div>
          <div className={cx("user-option")}>
            <div className={cx("user-option-item")}>
              <Button
                icon={faRightFromBracket}
                onSubmit={() => handleLogout()}
                textButton
                text="Đăng Xuất"
              />
            </div>
            <div className={cx("user-option-item")}>
              <Button onSubmit={()=>navigate(pages.profile)} icon={faUser} textButton text="Cá Nhân" />
            </div>
            <div className={cx("user-option-item")}>
              <Button onSubmit={()=>navigate(pages.password)} icon={faKey} textButton text="Đổi Mật Khẩu" />
            </div>
            <div className={cx("user-option-item")}>
              <Button icon={faGear} textButton text="Cài Đặt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
