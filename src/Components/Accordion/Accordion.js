import React from 'react';
import "./Accordion.css";
import copy from "../../assets/icons/copy.png";
import clock from "../../assets/icons/clock.png";
import topArrow from "../../assets/icons/top-arrow.png";
import AccordionCard from '../AccordionCard/AccordionCard';
import img from "../../assets/images/card-img-1.png";
import img2 from "../../assets/images/card-img-2.png";

function Accordion()
{
    return (
        <div className="accordion">
            <div className="accordion__titleContainer">
                <div className="accordion__count">
                    <div>1</div>
                </div>
                <div className="accordion__modNum">
                    <p>Module 1 : </p>
                </div>
                <div className="accordion__title">
                    <p>Introduction</p>

                    <div className="row">
                        <div className="row">
                            <img src={copy} alt="icon" />
                            <p>2 Videos</p>
                        </div>
                        <div className="row">
                            <img src={clock} alt="icon" />
                            <p>8 minutes</p>
                        </div>
                    </div>
                </div>
                <div className="accordion__icon">
                    <img src={topArrow} alt="icon" />
                </div>
            </div>


            <div className="accordion__subComponents">
                <AccordionCard time="3" img={img} title="Introduction to electrical 
engineering" subTitle="Cash Course" />

                <AccordionCard time="3" img={img} title="What is electrical and 
electronic engenerring" subTitle="Cash Course" />
            </div>
        </div>
    )
}

export default Accordion;
