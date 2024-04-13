import {memo, useState} from "react" ;
import "./style.scss";
import { AiOutlineFacebook, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { formater } from "util/formater";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ROUTERS } from "util/router";
const Header = () =>{
    const [isShowCategories, setShowCategories] = useState(true)
    const [menus, setMenu] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Jacket",
                    path: "",
                },
                {
                    name: "T-Shirt",
                    path: "",
                },
                {
                    name: "Shorts",
                    path: "",
                },
                {
                    name: "Shoes",
                    path: "",
                },
                {
                    name: "Jewelry",
                    path: "",
                },
            ],
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ])


    return(
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li>
                                    <BiLogoGmail />
                                    minhphuhct12@gmail.com
                                </li>
                                <li>
                                    Miễn Phí giao hàng đơn từ {formater(500000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to={"https://www.facebook.com/minhphu2003"}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://www.instagram.com/minhphu0710/"}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://twitter.com/minh_phu72471"}>
                                        <AiOutlineTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://www.tiktok.com/@minhphu102003"}>
                                        <BiLogoTiktok />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Đăng Nhập</span>
                                </li>
                            </ul>
                        </div>   
                    </div>
                </div>;
            </div>
            <div className="container">
                 <div className="row">
                    <div className="col-xl-3">
                        <div className="header__logo">
                            <h1>ReactJs Shop</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="header__menu">
                            <nav className="header__menu">
                                <ul>
                                    {
                                        menus?.map((menu,menuKey) =>(
                                            <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                                <Link to={menu?.path}>{menu?.name}</Link>
                                                {
                                                    menu.child && (
                                                        <ul className="header__menu_dropdown">
                                                            {
                                                                menu.child.map((childItem, childKey) =>(
                                                                    <li key={`${menuKey}-${childKey}`}>
                                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                                    </li>
                                                                ))}
                                                            
                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        ))
                                    }
                                    {/* <li>
                                        <ul>
                                            <li>Jacket</li>
                                            <li>T-Shirt</li>
                                            <li>Shorts</li>
                                            <li>Shoes</li>
                                            <li>Jewelry</li>
                                        </ul>
                                    </li> */}
                                </ul>

                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formater(1100000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                        <AiOutlineShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero__categories_container">
                    <div className="col-lg-3 hero__categories">
                        <div className="hero__categories_all" onClick={()=>setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu/>
                            Danh sách sản phẩm
                        </div> 
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to={"#"}>T-Shirt</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Jacket</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Shoes</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Jewelry</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 hero__search_container">
                        <div className="hero__search">
                            <div className="hero__search_form">
                                <form>
                                    <input type="" name="" value="" placeholder="Hãy Tìm Kiếm Ở Đây!"/>
                                    <button type="submit">Tìm Kiếm</button>
                                </form>
                            </div>
                            <div className="hero__search_phone">
                                <div className="hero__search_phone_icon">
                                    <AiOutlinePhone/>
                                </div>
                                <div className="hero__search_phone_text">
                                    <p>0965.499.498</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item">
                            {/* <div className="hero__text">
                                <span>Fashion Style</span>
                                <h2>
                                    Thời Trang <br/>
                                    Phong cách của bạn
                                </h2>
                            </div> */
                                <div className="hero__text">
                                    <Link to="" className="primary-btn">
                                        Mua Ngay
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};
export default memo(Header);