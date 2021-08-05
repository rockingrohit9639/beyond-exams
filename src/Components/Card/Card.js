import React from 'react';
import "./Card.css";
import cardImg from "../../assets/images/course-1.png";

function Card({ title, numVideos, img })
{
    return (
        <div className="card">
            <div className="card__top">
                <img src={cardImg} alt="card_img" />
            </div>
            <div className="card__bottom">
                <h1 className="card__title"> {title} </h1>
                <p className="card__videos">{numVideos}Videos</p>
            </div>
        </div>
    )
}

export default Card;
