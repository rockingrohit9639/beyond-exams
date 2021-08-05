import React from 'react';
import "./AboutCourse.css";
import userImg from "../../assets/images/user.png";

function AboutCourse()
{
    return (
        <div className="aboutcourse">

            <div className="breadcrumb">
                <p>Explore by topics</p>
                <div className="right__arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.91797 6H10.0846" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 1.9165L10.0833 5.99984L6 10.0832" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p>Engineering</p>
            </div>

            <div className="about__content">


                <div className="content__mid">
                    <div className="title__container">
                        <div className="container__left">
                            <div className="course__icon">
                                <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0494 19.0614C15.0365 19.0776 19.0924 15.054 19.1086 10.0746C19.1247 5.09511 15.095 1.04539 10.108 1.02924C5.12092 1.01309 1.06501 5.03662 1.04884 10.0161C1.03266 14.9955 5.06234 19.0453 10.0494 19.0614Z" fill="#77AF44" stroke="#101010" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.5188 10.0098L12.5658 6.18108" stroke="#101010" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.02889 10.0026L5.73438 6.55164" stroke="#101010" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.73644 10.6823L4.39453 9.70569" stroke="#101010" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.69429 9.72439L9.64062 8.10657" stroke="#101010" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5506 10.2868L14.9016 9.04062" stroke="#101010" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.4364 20.8148L7.64453 20.796L7.63767 22.9086L13.4295 22.9274L13.4364 20.8148Z" fill="#101010" stroke="#101010" Mroke-miterlimit="10" stroke-linecap="rLnd" stroke-linejoin="Lund" />
                                    <path d="M13.4325 22.8695L7.64062 22.8507L7.63376 24.9633L13.4256 24.9821L13.4325 22.8695Z" fill="#FEBE16" stroke="#101010" Mroke-miterlimit="10" stroke-linecap="rLnd" stroke-linejoin="Lund" />
                                </svg>

                            </div>
                        </div>
                        <h1 className="course__title">
                            Basic electrical and electronics engineering
                        </h1>
                    </div>


                    <p className="course__description">Basic Laws: Ohm's law, Kirchhoff's voltage and current laws, Nodes-Branches and loops, Series elements and Voltage Division, Parallel elements and Current Division, Star-Delta transformation, Independent sources and Dependent sources, source transformation.</p>

                    <div className="mid__more">
                        <div className="rating__views">
                            <div className="course__rating">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.31573 0.669067L10.6777 5.45412L15.9596 6.22615L12.1377 9.94871L13.0396 15.2077L8.31573 12.7234L3.59183 15.2077L4.4938 9.94871L0.671875 6.22615L5.95378 5.45412L8.31573 0.669067Z" fill="#FEBE16" stroke="#FEBE16" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p><strong>4.6</strong>(181)</p>
                            </div>
                            <div className="course__views">
                                <p>1.5K Views </p>
                            </div>
                        </div>

                        <p className="course__lastUpdate"><span className="light-gray">last updated</span> <strong> 5 days ago</strong></p>

                        <p className="username light-gray">Created by<span>Priya Sharma</span></p>


                    </div>

                    <div className="course__buttons">
                        <button className="button active">Enroll</button>
                        <button className="button">Start course</button>
                        <div className="button__group">
                            <button className="button center f-80">
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2326 1.61542L14.2037 7.63465L20.848 8.6058L16.0403 13.2885L17.1749 19.9039L11.2326 16.7789L5.29026 19.9039L6.42488 13.2885L1.61719 8.6058L8.26142 7.63465L11.2326 1.61542Z" stroke="#6646E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Rate</p>
                            </button>
                            <button className="button f-20">
                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.7177 17.8944L21.1837 15.1581C21.1911 15.1042 21.2149 15.0542 21.2149 14.9995C21.2168 14.7046 21.1131 14.403 20.8791 14.1515C20.1257 13.3405 18.7159 12.1206 18.7159 8.12456C18.7159 5.08942 16.5913 2.65975 13.7265 2.06366V1.24999C13.7265 0.559762 13.168 0 12.4793 0C11.7906 0 11.2322 0.559762 11.2322 1.24999V2.06405C9.65939 2.39139 8.32059 3.27771 7.42636 4.50817L1.77321 0.13164C1.501 -0.0800776 1.10868 -0.0312498 0.89731 0.241405L0.131389 1.22851C-0.0799806 1.50077 -0.031233 1.89335 0.240973 2.10545L23.1855 19.8682C23.4577 20.0803 23.8496 20.0311 24.0614 19.7585L24.8273 18.7714C25.0387 18.4991 24.9899 18.1065 24.7177 17.8944ZM6.13163 9.82572C5.79585 12.4804 4.71171 13.4714 4.07955 14.1519C3.84556 14.4038 3.74183 14.705 3.74378 14.9999C3.74807 15.6405 4.24997 16.2499 4.99561 16.2499H14.43L6.13163 9.82572ZM12.4793 19.9999C13.8567 19.9999 14.974 18.8807 14.974 17.4999H9.98463C9.98463 18.8807 11.1019 19.9999 12.4793 19.9999Z" fill="#686868" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="course__benefit">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.0026 14.4762C11.6845 14.4762 14.6693 11.4914 14.6693 7.80955C14.6693 4.12765 11.6845 1.14288 8.0026 1.14288C4.32071 1.14288 1.33594 4.12765 1.33594 7.80955C1.33594 11.4914 4.32071 14.4762 8.0026 14.4762Z" stroke="#101010" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 10.6667V8" stroke="#101010" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 5.33331H8.00583" stroke="#101010" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p>Benefits of enrollment</p>
                    </div>
                </div>
                <div className="content__right">
                    <div className="course__createdBy">
                        <img src={userImg} className="user__img" alt="user" />
                    </div>
                    <button className="button">Share</button>
                </div>
            </div>

        </div>
    )
}

export default AboutCourse
