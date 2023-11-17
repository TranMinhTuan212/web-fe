import classNames from "classnames/bind";
import styles from "./defaultLayout.module.scss";
import SideBar from "~/components/sideBar";
import Content from "~/components/content";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { apiLink, userKey } from "~/key";
import { pages } from "~/config";
import { useGlobalState } from "~/provider/useGlobalState";
import { setLoading, setPopup } from "~/provider/action";
import axios from "axios";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const [state, dispatch] = useGlobalState()

  const [max, setWidth] = useState(true);

  function handleSetWidthSidebar() {
    setWidth((width) => !width);
  }

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem(userKey))
    const headers = {
      Authorization: 'Bearer '+ user?.accsess_token
    }
    dispatch(setLoading(true))
    axios.post(`${apiLink}user/check-token`,{}, { headers })
    .then(()=>{})
    .catch((e)=>{
      dispatch(setPopup({ type: false, text: 'Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại !' }));
      navigate(pages.login)
    })
    dispatch(setLoading(false))
  }, [])

  return (
    <div className={cx("wapper")}>
      <div
        style={max === true ? { width: "20%" } : { width: "5%" }}
        className={cx("side-bar")}
      >
        <SideBar onWidth={handleSetWidthSidebar} width={max} />
      </div>

      <div className={cx("content")}>
        <Content>{children}</Content>
      </div>
    </div>
  );
}

export default DefaultLayout;
