import classNames from "classnames/bind";
import styles from "./sideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAtom, faCartShopping, faCirclePlus, faListCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../menu";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { pages } from "~/config";

const cx = classNames.bind(styles);

function SideBar({width, onWidth}) {

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
            width && <div className={cx("shop-name")}>SUPERMARKET</div>
        }
        <div className={cx('navigation')}>
            { width && <div onClick={onWidth} className={cx('navigation-item')}><FontAwesomeIcon icon={faAngleLeft} /></div> }
            { !width && <div onClick={onWidth} className={cx('navigation-item')}><FontAwesomeIcon icon={faAngleRight} /></div> }
        </div>
      </div>

      <div className={cx("list-menu")}>
          <Menu to={pages.home} icon={faAtom} width={width} name="Trang Chủ"/>
          <Menu to={pages.shop} icon={faShopify} width={width} name="Mua Sắm"/>
          <Menu to={pages.order} icon={faCartShopping} width={width} name="Đơn Hàng"/>
          <Menu to={pages.product} icon={faListCheck} width={width} name="Sản Phẩm"/>
          <Menu to={pages.addProduct} icon={faCirclePlus} width={width} name="Thêm Sản Phẩm"/>
          <Menu to={pages.profile} icon={faUser} width={width} name="Cá Nhân"/>
      </div>
    </div>
  );
}

export default SideBar;
