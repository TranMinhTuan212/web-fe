import classNames from "classnames/bind";
import styles from "./po-pup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import { setPopup } from "~/provider/action";
import { useGlobalState } from "~/provider/useGlobalState";

const cx = classNames.bind(styles);

function PoPup({ type = false, text = "" }) {

  const [, dispatch] = useGlobalState()

  return (
    <div className={cx("wapper")}>
      {!type ? (
        <div className={cx("icon", "text-danger")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      ) : (
        <div className={cx("icon", "text-success")}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      )}
      <div className={cx("type")}>{!type ? "Thất bại" : "Thành công"}</div>
      <div className={cx("text")}>{text}</div>
      <div className={cx("button")}>
      <Button onSubmit={()=>dispatch(setPopup( null ))} large text="Xác nhận"/>
      </div>
    </div>
  );
}

export default PoPup;
