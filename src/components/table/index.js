import classNames from "classnames/bind";
import styles from "./table.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Table({ titleTable, to, data = [] }) {
  data = [
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
    {
      code: "0001",
      category: "Áo quần",
      store: "STORE 1",
      price: 100000,
    },
  ];

  return (
    <div className={cx("wapper")}>
      <table>
        <thead>
          <tr>
            {titleTable.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td>
                <Link className={cx("remove-style")} to={to + `/${product.id}`}>
                  {product.code}
                </Link>
              </td>
              <td>
                <Link className={cx("remove-style")} to={to + `/${product.id}`}>
                  {product.category}
                </Link>
              </td>
              <td>
                <Link className={cx("remove-style")} to={to + `/${product.id}`}>
                  {product.store}
                </Link>
              </td>
              <td>
                <Link className={cx("remove-style")} to={to + `/${product.id}`}>
                  {product.price}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
