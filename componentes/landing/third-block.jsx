import React from 'react';
import styled from 'styled-components'
import { ImageTec } from './images';


export default function ThirdBlock() {
  return (
    <div className="row pt-3 mx-auto">
      <div className="super">
        <h3 data-aos="fade-up" className="text-center skill-title font-weight-bold pt-3">Lets talk about my skills!</h3>
        <p className="text-center description" data-aos="fade-up">Those are some of the tecnologies that i have learned in Frontend and Backend in my path to become a FullStack developer</p>
        <div className="row cont mx-auto" data-aos="fade-up">
          

          <ImageTec src="/react.svg" name="React" />
          <ImageTec src="/angular.svg" name="Angular" className="central"/>
          <ImageTec src="/javascript.svg" name="JavaScript" />
          <ImageTec src="/sass.svg" name="Sass" />
          <ImageTec src="/python.svg" name="Python" />
          <ImageTec src="/node.svg" name="Node" />
          <ImageTec src="/php.svg" name="PHP" />
          <ImageTec src="/kotlin.svg" name="Kotlin" />
          <ImageTec src="/mysql.svg" name="MySQL" />
          <ImageTec src="/mongodb.svg" name="mongoDB" />
          <ImageTec src="/java.svg" name="Java" />
          <ImageTec src="/express.svg" name="Express JS" />

        </div>
      </div>
      <style jsx>{`
              .cont {
                width: 98%
              }

              .description {
                color: #006bb3;
              }

              .super {
                background-color: white;
                border-radius: 12px;
                box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 auto;
                margin-top: -7em;
                width: 93%;
              }

              .skill-title {
                color: #006bb3;
                value: 80%;
                
              }
              
            `}</style>
    </div>
  )
}