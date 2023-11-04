import { pages } from "~/config";
import DefaultLayout from "~/layouts/defaultLayout/defauluLayout";
import LoginLayout from "~/layouts/loginLayout";
import AddProduct from "~/pages/product/add-product";
import ForestPassword from "~/pages/forest-password";
import Home from "~/pages/home";
import Login from "~/pages/login";
import Order from "~/pages/order";
import Product from "~/pages/product";
import ProductDetail from "~/pages/product/product-detail";
import Profile from "~/pages/profile";
import Register from "~/pages/register";
import Shop from "~/pages/shop";
import OrderDetail from "~/pages/order/order-detail";
import Cart from "~/pages/cart";
import Password from "~/pages/password";
import User from "~/pages/customer";
import Announce from "~/pages/announce";


export const publicRoutes = [
    {
        path: pages.home, layout: DefaultLayout, page: Home
    },
    {
        path: pages.login, layout: LoginLayout, page: Login
    },
    {
        path: pages.register, layout: LoginLayout, page: Register
    },
    {
        path: pages.forestPassword, layout: LoginLayout, page: ForestPassword
    },
    {
        path: pages.shop, layout: DefaultLayout, page: Shop
    },
    {
        path: pages.addProduct, layout: DefaultLayout, page: AddProduct
    },
    {
        path: pages.profile, layout: DefaultLayout, page: Profile
    },
    {
        path: pages.order, layout: DefaultLayout, page: Order
    },
    {
        path: pages.product, layout: DefaultLayout, page: Product
    },
    {
        path: pages.productDetail, layout: DefaultLayout, page: ProductDetail
    },
    {
        path: pages.orderDetail, layout: DefaultLayout, page: OrderDetail
    },
    {
        path: pages.cart, layout: DefaultLayout, page: Cart
    },
    {
        path: pages.password, layout: DefaultLayout, page: Password
    },
    {
        path: pages.user, layout: DefaultLayout, page: User
    },
    {
        path: pages.announce, layout: DefaultLayout, page: Announce
    }
]