import React from "react";
import BannerImg from "../../assets/imgs/janesParalax.jpg"

function Banner(){

return  <div class="parallax-container">
            <div class="parallax">
                 <img src={BannerImg} alt="banner"></img>
            </div>
        </div>
}

export default Banner;