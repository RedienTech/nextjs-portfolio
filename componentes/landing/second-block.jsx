import React from 'react';
import { ImageNet } from './images';

export default function SecondBlock() {
    return (
        <React.Fragment>
            <div className="row networks shadow-sm">
                <div className="col-md-12" >
                    <div className="row mx-auto" style={{width: "90%"}}>
                        <ImageNet src="github.svg" link="@redientech"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ducimus sequi molestiae provident nesciunt mollitia voluptas.    </ImageNet>
                        <ImageNet src="facebook.svg" link="neider.arroyo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ducimus sequi molestiae provident nesciunt mollitia voluptas.    </ImageNet>
                        <ImageNet src="linkedin.svg" link="@neiderarroyo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ducimus sequi molestiae provident nesciunt mollitia voluptas.    </ImageNet>
                    </div>
                </div>

                <style jsx>{`

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