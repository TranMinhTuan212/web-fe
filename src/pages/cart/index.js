import classNames from "classnames/bind";
import styles from "./cart.module.scss";
import ProductRow from "~/components/product-row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/button";
import ReactModal from "react-modal";
import { useState } from "react";

const cx = classNames.bind(styles);

function Cart() {
  const [modal, setModal] = useState(false);

  return (
    <div className={cx("wapper")}>
      <div className={cx("header")}>
        <h1 className={cx("topic")}>Giỏ hàng</h1>
        <div className={cx("confirm")}>
          <Button
            onSubmit={() => setModal(true)}
            icon={faCartShopping}
            text="Đặt hàng"
          ></Button>
        </div>
      </div>
      <div className={cx("products")}>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow topic />
          </div>
          <div className={cx("option")}>Xóa</div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("checkbox")}>
            <input className={cx("check")} type="checkbox" />
          </div>
          <div className={cx("product")}>
            <ProductRow />
          </div>
          <div className={cx("remove")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>
      <ReactModal isOpen={modal} className={cx("modal")}>
        <div className={cx("")}>
          <p className={cx("topic-modal")}>Xác nhận đơn hàng</p>
          <div className={cx("")}>
            <div className={cx('info')}>
              <div className={cx("text")}>Tên khách hàng: </div>
              <div className={cx("text-l")}>Đong Ngọc Phinh</div>
            </div>
            <div className={cx('info')}>
              <div className={cx("text")}>Địa chỉ giao hàng: </div>
              <div className={cx("text-l")}>Phước Long B</div>
            </div>
            <div className={cx('info')}>
              <div className={cx("text")}>Tổng thanh toán: </div>
              <div className={cx("text-l")}>100.000$</div>
            </div>
            <div className={cx('info')}>
              <div className={cx("text")}>Hình thức thanh toán: </div>
              <div className={cx("text-l")}>Thanh toán khi nhận hàng</div>
            </div>
          </div>
          <div className={cx("button")}>
            <Button
              danger
              onSubmit={() => setModal(false)}
              right
              text="Hủy Bỏ"
            />
            <Button left text="Xác Nhận" />
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Cart;
