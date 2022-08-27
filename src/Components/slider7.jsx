import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useRef } from "react";
import { getblogProductsData } from "../Redux/action";

export const Slider7=()=>{

    const sliderref=useRef(null)
    // const products=useSelector((state)=>(state.productsofblog.productsofblog))
    const products=useSelector((state)=>state.productsofblog)
const dispatch=useDispatch()
console.log(products)


useEffect(()=>{
    dispatch(getblogProductsData())
},[dispatch])

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 3000,
    cssEase: "ease-in-out"
      
    };
    return (
        <>
        <h1 style={{fontSize:"22px",marginTop:"2%",fontWeight:"500",textAlign:"center"}}>From The Blog</h1>
        <div className="slider2flex_div">
       <ArrowBackIosNewSharpIcon onClick={()=>sliderref.current.slickPrev()} className="arrowbutt1"/>
      <div className="slider3_mainDiv">
        <Slider  ref={sliderref} {...settings}>
            {
        products.map((item)=>(
            <div className="div" key={item.id}>
                <div >
                   <img src={item.image} alt="" style={{width:"80%",height:"170px"}} />
                </div>
                <div >
                   <h6 style={{fontSize:"14px",fontWeight:"600",color:"black",textDecoration:"underline"}}>{item.title}</h6>
                   </div>
               
            </div>
        ))
        }
        </Slider>
            
      </div>
      <ArrowForwardIosSharpIcon onClick={()=>sliderref.current.slickNext()} className="arrowbutt1"/>
      </div>
      </>
    );
  
}