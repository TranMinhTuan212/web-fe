import classNames from "classnames/bind";
import style from './register.module.scss'
import FormRegister from "~/components/form-register";

const cx = classNames.bind(style)

function Register() {
    return ( 
        <div className={cx("wapper")}>
      <div className={cx("theme")}>
        <div className={cx("form-register")}>
          <FormRegister/>
        </div>
      </div>
    </div>
     );
}

export default Register;