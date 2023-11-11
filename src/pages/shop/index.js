import classNames from "classnames/bind";
import styles from "./shop.module.scss";
import Product from "~/components/product";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import Button from "~/components/button";
import Input from "~/components/input";
import axios from "axios";
import { apiLink, userKey } from "~/key";
import { useGlobalState } from "~/provider/useGlobalState";
import { setLoading, setPopup } from "~/provider/action";

const cx = classNames.bind(styles);

function Shop() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([])
  const [keyWord, setKey] = useState('')
  const [state, dispatch] = useGlobalState()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem(userKey))
    const headers = {
      Authorization: 'Bearer '+ user.accsess_token
    }
      dispatch(setLoading(true));
      axios
        .post(`${apiLink}product/search`, { keyWord }, { headers })
        .then((res) => {
          if (res.data.data) {
            setData(res.data.data);
          }
          dispatch(setLoading(false));
        })
        .catch((e) => {
          dispatch(setPopup({ type: false, text: e.response.data?.message }));
          dispatch(setLoading(false));
        });
  }, [keyWord])

  return (
    <div className={cx("wapper")}>
      <div className={cx("product")}>
        {
          data && data.map((item) => (
            <Product product={item} onClick={() => setModal(true)} />
          ))
        }
      </div>
      <ReactModal isOpen={modal} className={cx("modal")}>
        <div className="">
          <p className={cx("topic")}>Đặt Hàng</p>
          <div className={cx("order")}>
            <div className={cx("image")}>
              <img
                className={cx("photo")}
                src={process.env.PUBLIC_URL + "/images/tho.jpg"}
                alt=""
              />
            </div>
            <div className={cx("content")}>
              <div className={cx("row")}>
                <div className={cx("left")}>Name</div>
                <div className={cx("right")}>Thỏ Con Cute</div>
              </div>
              <div className={cx("row")}>
                <div className={cx("left")}>Price</div>
                <div className={cx("right")}>100.000$</div>
              </div>
              <div className={cx("row")}>
                <div className={cx("left")}>Origin</div>
                <div className={cx("right")}>Trung Quốc</div>
              </div>
              <div className={cx("row")}>
                <div className={cx("left")}>Category</div>
                <div className={cx("right")}>Đồ Nhậu</div>
              </div>
              <div className={cx("row")}>
                <div className={cx("left")}>Unit</div>
                <div className={cx("right")}>Con</div>
              </div>
              <div className={cx("row")}>
                <div className={cx("left")}>Quantity</div>
                <div className={cx("right")}>
                <Input type="number"/>
                </div>
                
              </div>
            </div>
          </div>
          <div className={cx("button")}>
            <Button danger onSubmit={()=>setModal(false)} right text="Hủy Bỏ" />
            <Button left text="Xác Nhận" />
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Shop;
