import React, { useEffect } from 'react';

export default function AboutMe() {

    return (
        <React.Fragment>
        <div className="row networks shadow-sm" id="about-me">
            <div className="col-md-12 pt-4" >
                <div data-aos="fade-up" className="row mx-auto cont" style={{ width: "90%" }}>
                    <h3 className="text-center title text-white mx-auto font-weight-bold col-md-12">
                        First, I would like to tell you who i am!!
                    </h3>
                    <p className="text-center mx-auto pt-1 typo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla reprehenderit facilis? Aut quo corrupti accusantium, porro nostrum a molestiae blanditiis laudantium ullam, aliquid itaque. Possimus maxime aliquid repellendus ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium sequi minima porro in nostrum, placeat assumenda pariatur alias enim illum dignissimos consectetur voluptates, quo voluptatum delectus voluptatem excepturi? Omnis.</p>
                </div>
            </div>

            <style jsx>{`

                .cont {
                    padding: 10%;
                }

                .title {
                    font-size: 2.5rem;
                }

                .typo {
                    font-size: 1.25rem;
                    color: #fff;
                }

                .container {
                    width:90%
                }

                .networks {
                    background-color: #09f;
                    padding-bottom: 6em;
                }
            `}</style>
        </div>
    </React.Fragment>
    )
}