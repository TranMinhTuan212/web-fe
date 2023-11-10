import classNames from "classnames/bind";
import styles from "./customer.module.scss";
import Input from "~/components/input";
import User from "~/components/user";
import { useEffect, useState } from "react";
import { useGlobalState } from "~/provider/useGlobalState";
import { setLoading, setPopup } from "~/provider/action";
import axios from "axios";
import { apiLink, userKey } from "~/key";

const cx = classNames.bind(styles);

function Customer() {
  const [_, dispatch] = useGlobalState();
  const [data, setData] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(userKey))
    const headers = {
      Authorization: 'Bearer '+ user.accsess_token
    }
    dispatch(setLoading(true));
    if (key) {
      const data = {
        name: key,
      };
      axios
        .post(`${apiLink}user/search-user/`, data)
        .then((res) => {
          if (res.data.data) {
            setData(res.data.data);
          }
        })
        .catch((e) => {
          dispatch(setPopup({ type: false, text: 'Có lỗi thử lại sau' }));
        });
    } else {
      axios
        .get(`${apiLink}user/allmetable-profile`, { headers })
        .then((res) => {
          setData(res.data.data);
        })
        .catch((e) => {
          dispatch(setPopup({ type: false, text: 'Có lỗi thử lại sau' }));
        });
    }
    dispatch(setLoading(false));
  }, [key]);

  function onDelete(e) {console.log(e)
    dispatch(setLoading(true));
    axios
      .delete(`${apiLink}user/deleteUser/`, { _id: e })
      .then((res) => {
        dispatch(setPopup({ type: true, text: res.data?.message }));
      })
      .then(() => {
        axios
          .get(`${apiLink}user/allmetable-profile`)
          .then((res) => {
            setData(res.data.data);
          })
          .catch((e) => {
            dispatch(setPopup({ type: false, text: e.response.data?.message }));
          });
      })
      .catch((e) => {
        dispatch(setPopup({ type: false, text: 'Có lỗi thử lại sau' }));
      });
    dispatch(setLoading(false));
  }
  return (
    <div className={cx("wapper")}>
      <h1 className={cx("topic")}>Quản lí người dùng</h1>
      <div className={cx("navbar")}>
        <Input
          state={key}
          setState={setKey}
          search
          placeHolder="Tìm kiếm người dùng"
          small
          right
        />
      </div>
      <User topic />
      <div className={cx("list")}>
        {data && data.map((item) => <User callBack={onDelete} user={item} />)}
      </div>
    </div>
  );
}

export default Customer;
