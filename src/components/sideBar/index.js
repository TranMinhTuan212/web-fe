import classNames from "classnames/bind";
import styles from "./sideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAtom, faBell, faCartShopping, faCirclePlus, faKey, faListCheck, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import Menu from "../menu";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { pages } from "~/config";
import { userKey } from "~/key";
import { ERole } from "~/enum";

const cx = classNames.bind(styles);

function SideBar({width, onWidth}) {

  const user = JSON.parse(localStorage.getItem(userKey))

  return (
    <div className={cx("wapper")}>
      <div className={cx("header")}>
        {
            width && <div className={cx("logo")}>
          <img
            className={cx("logo-image")}
            src={process.env.PUBLIC_URL + "/images/logo_home.png"}
            alt=""
          />
        </div>
        }
        {
            width && <div className={cx("shop-name")}>Shopee Fake</div>
        }
        <div className={cx('navigation')}>
            { width && <div onClick={onWidth} className={cx('navigation-item')}><FontAwesomeIcon icon={faAngleLeft} /></div> }
            { !width && <div onClick={onWidth} className={cx('navigation-item')}><FontAwesomeIcon icon={faAngleRight} /></div> }
        </div>
      </div>

      <div className={cx("list-menu")}>
          <Menu to={pages.home} icon={faAtom} width={width} name="Trang Chủ"/>
          { 
            user?.role === ERole.customer
          &&
          <Menu to={pages.shop} icon={faShopify} width={width} name="Mua Sắm"/> 
          }
          <Menu to={pages.order} icon={faCartShopping} width={width} name="Đơn Hàng"/>
          {
            user?.role === ERole.admin &&
            <Menu to={pages.product} icon={faListCheck} width={width} name="Sản Phẩm"/>
          }
          {
            user?.role === ERole.admin &&
            <Menu to={pages.addProduct} icon={faCirclePlus} width={width} name="Thêm Sản Phẩm"/>
          }
          { 
            user?.role === ERole.customer
          &&
            <Menu to={pages.cart} icon={faCartShopping} width={width} name="Giỏ Hàng"/>
          }
          {
            user?.role === ERole.admin &&
            <Menu to={pages.user} icon={faUser} width={width} name="Người Dùng"/>
          }
          
          <Menu to={pages.profile} icon={faUser} width={width} name="Cá Nhân"/>
          
          <Menu to={pages.password} icon={faKey} width={width} name="Đổi Mật khẩu"/>
          
          <Menu to={pages.announce} icon={faBell} width={width} name="Thông Báo"/>
      </div>
    </div>
  );
}

export default SideBar;
