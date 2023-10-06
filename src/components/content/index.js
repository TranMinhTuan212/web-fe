import classNames from "classnames/bind";
import styles from "./content.module.scss";
import Header from "../header";

const cx = classNames.bind(styles);

function Content({ children }) {

  return (
    <div className={cx("wapper")}>

    <header className={cx('header')}><Header/></header>
      
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default Content;
