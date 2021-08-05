import React from 'react';
import "./Review.css";
import reviewer from "../../assets/images/user-2.png";
import Rating from '@material-ui/lab/Rating';

function Review({ userImg, name, rating, time, desc })
{
    return (
        <div className="review">
            <div className="review__profilePic">
                <img src={reviewer} alt="reviewer" />
            </div>
            <div className="review__content">
                <h2 className="review__name">{name}</h2>

                <div className="review__stars">
                    <Rating name="read-only" value={rating} readOnly />

                    <p> {time} weeks ago</p>
                </div>

                <p className="review__desc">{desc}<strong> show all</strong></p>
            </div>
        </div>
    )
}

export default Review;
