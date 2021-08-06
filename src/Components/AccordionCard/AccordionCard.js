import React from 'react';
import "./AccordionCard.css";
import clock from "../../assets/icons/clock.png";


function AccordionCard({ time, img, title, subTitle})
{
    return (
        <div className="accordionCard">
            <div className="accordionCard__count">
                <div>1.1</div>
            </div>
            <div className="accordionCard__image">
                <img src={img} alt="card_img" />
                <div className="time">{time} : 00</div>
            </div>
            <div className="accordionCard__details">
                <p className="accordionCard__title">{title}</p>
                <p className="accordionCard__subTitle">{subTitle}</p>
                <div className="row">
                    <img src={clock} alt="clock" />
                    <p>{time} minutes</p>
                </div>
            </div>
        </div>
    )
}

export default AccordionCard;
