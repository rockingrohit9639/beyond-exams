import React from 'react';
import "./Feedback.css";
import Rating from "@material-ui/lab/Rating";
import LinearProgress from '@material-ui/core/LinearProgress';

function Feedback()
{
    return (
        <div className="feedbacks">
            <div className="feedbacks__top">
                <div className="top__overallRating">
                    <h1>4.6</h1>
                </div>
                <div className="top__overallStars">
                    <Rating className="rating" value={4} readOnly />
                    <p>course ratings</p>
                </div>
            </div>

            <div className="feedbacks__bottom">

                <div className="bottom__bars">
                    <LinearProgress className="progress__bar" variant="determinate" value={80} />
                    <LinearProgress className="progress__bar" variant="determinate" value={70} />
                    <LinearProgress className="progress__bar" variant="determinate" value={60} />
                    <LinearProgress className="progress__bar" variant="determinate" value={50} />
                </div>

                <div className="bottom__stars">
                    <div className="row">
                        <Rating className="rating" value={4} readOnly />
                        <p>52%</p>
                    </div>

                    <div className="row">
                        <Rating className="rating" value={4} readOnly />
                        <p>52%</p>
                    </div>

                    <div className="row">
                        <Rating className="rating" value={4} readOnly />
                        <p>52%</p>
                    </div>

                    <div className="row">
                        <Rating className="rating" value={4} readOnly />
                        <p>52%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;
