import {memo} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import sp1Img from "asset/user/images/categories/sp1.jpg";
import sp2Img from "asset/user/images/categories/sp2.jpg";
import sp3Img from "asset/user/images/categories/sp3.jpg";
import sp4Img from "asset/user/images/categories/sp4.jpg";
import sp5Img from "asset/user/images/categories/sp5.jpg";
const Homepage = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const sliderItems = [
        {
            bgImg: sp1Img,
            name: "Jacket Degrey",
        },
        {
            bgImg: sp2Img,
            name: "T-shirt Levents",
        },
        {
            bgImg: sp3Img,
            name: "Jewelry Pandora",
        },
        {
            bgImg: sp4Img,
            name: "Shoes Nike",
        },
        {
            bgImg: sp5Img,
            name: "Hoodie Levents",
        },
    ]
    return(
       <>
        {/*Categories Begin */}
        <div className="container container__categories_slider">
            <Carousel responsive={responsive} className="categories_slider">
                {
                    sliderItems.map((item, key) => (
                        <div className="categories_slider_item" 
                        style={{backgroundImage: `url(${item.bgImg})`}}
                        key={key}
                        >
                            <p>{item.name}</p>
                        </div>
                    ))}
            </Carousel>
        </div>
        {/*Categories End */}
       </>
    )
};
export default memo(Homepage);