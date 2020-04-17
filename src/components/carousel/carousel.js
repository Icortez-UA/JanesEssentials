import React from "react";

const Carousel = ()=>{



    return (<div>
            <div className="carousel">
    <a className="carousel-item" href="#one!">
        <div className="card small">
                    <div className="card-image">
                        <img src="https://greencamp.com/wp-content/uploads/2018/08/marijuana-and-austism.jpg"></img>
                        <span className="card-title"></span>
                    </div>
                    <div className="card-content grey-text">
                        Research shows that Marijuana is good for the gut. It interacts with cells in the body to block
                        compunds that increase intestinal permeability.
                    </div>
        </div>
    </a>
    <a className="carousel-item" href="#two!">
        <div className="card small">
                    <div className="card-image">
                        <img src="https://headyvermont.com/wp-content/uploads/2019/06/Testing.jpg"></img>
                        <span className="card-title"></span>
                    </div>
                    <div className="card-content grey-text">
                        Findings suggest that CBD can help slow the growth of brain tumors and stop cancer from
                        spreading. In addition, it reduces nausea associated with chemotherapy.
                    </div>
                </div>
    </a>
    <a className="carousel-item" href="#three!">
        <div className="card small">
                    <div className="card-image">
                        <img
                            src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/cc_RTR4GS48_hires_16x9.jpg?itok=pf6cm5o5"></img>
                        <span className="card-title"></span>
                    </div>
                    <div className="card-content grey-text">
                        Studies reveal that Marijuana alleviates pain, reduces inflammation, improves sleep quality, and
                        enhances fine motor skills. It is considered the key to stress relief.
                    </div>
                </div>
    </a>
  </div>
    </div>)
}


export default Carousel;