import classNames from "classnames/bind";
import style from './forest-password.module.scss'
import FormForestPassword from "~/components/form-forest-password";

const cx = classNames.bind(style)

function ForestPassword() {
    return ( 
        <div className={cx("wapper")}>
      <div className={cx("theme")}>
        <div className={cx("form-register")}>
          <FormForestPassword/>
        </div>
      </div>
    </div>
     );
}

export default ForestPassword;