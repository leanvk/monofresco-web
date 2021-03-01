import * as React from "react";
import imgPsico from "./../img/psicologia_1.jpg";
import imgEdu from "./../img/edu_fisica_1.jpg";
import imgBandera from "./../img/bandera_1.jpg";
import { useState } from "react";

import Diseñadora from "./../img/img (1).jpg";
//import  Arquitecto from "./../img/img (2).jpg";
import Arquitecto from "./../img/img (3).jpg";
import DiseñadoraIndustrial from "./../img/img (4).jpg";
import CienciasPoliticas from "./../img/img (5).jpg";
import Administrador from "./../img/img (6).jpg";
import Terapeuta from "./../img/img (7).jpg";
import Arquitecto2 from "./../img/img (8).jpg";
//import  img9 from "./../img/img (9).jpg";
import Farmaceutica from "./../img/img (10).jpg";
import LicTurismo from "./../img/img (11).jpg";
import Psicologia from "./../img/img (12).jpg";
import Arquitecta from "./../img/img (13).jpg";
import LicComercio from "./../img/img (14).jpg";
import Veterinaria from "./../img/img (15).jpg";
import Economista from "./../img/img (16).jpg";

import colors from "./../colors";





const imgArray = [
  imgEdu,
  imgPsico,
  imgBandera,
  Diseñadora,
  Arquitecto,
  DiseñadoraIndustrial,
  CienciasPoliticas,
  Administrador,
  Terapeuta,
  Arquitecto2,
  Farmaceutica,
  LicTurismo,
  Psicologia,
  Arquitecta,
  LicComercio,
  Veterinaria,
  Economista,
];

const nameArray = [
  'Profe edu. fisica',
  'Psicologa',
  'Jura a la bandera',
  'Diseñadora',
  'Arquitecto',
  'Dis. Industrial',
  'Ciencias Politicas',
  'Administrador',
  'Terapeuta',
  'Arquitecto',
  'Farmaceutica',
  'Lic. Turismo',
  'Psicologia',
  'Arquitecta',
  'Lic. Comercio',
  'Veterinaria',
  'Economista',
];



//position: absolute;





function SvgComponent(props) {
  const [index, setIndex] = useState(1);

  const imgCentral = imgArray[index];

  const imgLeft = imgArray[index - 1];

  const imgRight = imgArray[index + 1];

  

  const handleClickMinus = () => { if (index>1) {setIndex(index - 1)}};
  const handleClickplus = () => { if (index<imgArray.length-2) {setIndex(index + 1)}};
  return (
    <>

     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={1161.063}
        height={890.533}
        viewBox="0 0 1500 1000"
        {...props}
      
       
      >
  
        <defs>
          <linearGradient
            id="prefix__b"
            x1={0.049}
            y1={0.5}
            x2={0.951}
            y2={0.5}
            gradientUnits="objectBoundingBox"
          >
            <stop offset={0} stopColor="#f4f4f4" />
            <stop offset={0.525} stopColor="#d0cfcf" />
            <stop offset={0.923} stopColor="#f6f6f6" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <image id="prefix__a" width={488.398} height={584.57} />
        </defs>
        <g data-name="Group 24" transform="rotate(24 -13.817 1759.421)">
          <image
            data-name="64938703_2805536219460644_2571486601766073447_n"
            width={399.925}
            height={399.925}
            transform="rotate(-5.13 861.778 -275.424)"
            href={imgRight}
            
            
          />
          <g data-name="Group 12">
            <g data-name="Group 7">
              <use
                data-name="Rectangle 65"
                opacity={0.25}
                xlinkHref="#prefix__a"
                style={{
                  mixBlendMode: "multiply",
                  isolation: "isolate",
                }}
              />
              <g data-name="Group 6">
                <path
                  data-name="Path 13"
                  d="M0 37.136l46.816 514.411 408.694-37.136L408.694 0zm424.561 379.369L59.583 449.669 23.937 58l364.978-33.166z"
                  transform="translate(16.33 16.42)"
                  fill="url(#prefix__b)"
                />
              </g>
            </g>
            <text
               data-name="Psicolog\xEDa"
               transform="rotate(-5.13 6810.657 -3198.292)"
               fill="#4d4e4e"
               fontSize={49}
               fontFamily="Bariol-Bold, Bariol"
               fontWeight={700}
               transform-origin='-5% 35%'
               text-anchor="middle"
            >
              <tspan id='left-text'x={-15} y={-80}>
                {nameArray[index+1]}
              </tspan>
            </text>
          </g>
        </g>
        <g data-name="Group 25" transform="rotate(-11 1406.416 135.422)">
          <image
            data-name="67084815_1009265259411276_3187594230592418317_n"
            width={408.681}
            height={408.681}
            transform="rotate(-5.13 854.826 -207.71)"
            href={imgLeft}
            className='img'
            class="img"
          />
          <g data-name="Group 12">
            <g data-name="Group 7">
              <use
                data-name="Rectangle 65"
                transform="scale(1.016)"
                opacity={0.25}
                xlinkHref="#prefix__a"
                style={{
                  mixBlendMode: "multiply",
                  isolation: "isolate",
                }}
              />
              <g data-name="Group 6">
                <path
                  data-name="Path 13"
                  d="M0 37.746L47.585 560.6l415.4-37.746L415.4 0zm431.532 385.6l-370.97 33.706L24.33 58.951 395.3 25.242z"
                  transform="translate(16.598 16.69)"
                  fill="url(#prefix__b)"
                />
              </g>
            </g>
            <text
              data-name="Psicolog\xEDa"
              transform="rotate(-5.13 6810.657 -3198.292)"
              fill="#4d4e4e"
              fontSize={49}
              fontFamily="Bariol-Bold, Bariol"
              fontWeight={700}
              transform-origin='0% 25%'
              text-anchor="middle"
            >
              <tspan id='right-text'x={-15} y={-80} >
                {nameArray[index-1]}
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Group 23"
          transform="matrix(.998 .07 -.07 .998 297.643 0)"
        >
          <image
            data-name="67525695_451381262376324_7531612079674303601_n"
            width={451.406}
            height={451.406}
            transform="rotate(-5.13 1026.918 -311.475)"
            href={imgCentral}
            className='img'
            class="img"
          />
          <g data-name="Group 22">
            <g data-name="Group 7">
              <use
                data-name="Rectangle 65"
                transform="scale(1.131)"
                opacity={0.25}
                xlinkHref="#prefix__a"
                style={{
                  mixBlendMode: "multiply",
                  isolation: "isolate",
                }}
              />
              <g data-name="Group 6">
                <path
                  data-name="Path 13"
                  d="M0 41.992l52.938 581.673 462.132-41.992L462.134 0zm480.075 428.974l-412.7 37.5L27.067 65.582l412.7-37.5z"
                  fill="url(#prefix__b)"
                  transform="translate(18.465 18.567)"
                />
              </g>
            </g>
            <text
              data-name="Psicolog\xEDa"
              transform="rotate(-5.13 6810.657 -3198.292)"
              fill="#4d4e4e"
              fontSize={49}
              fontFamily="Bariol-Bold, Bariol"
              fontWeight={700}
              transform-origin='50% 0%'
              text-anchor="middle"
              
            >
              <tspan id='text-center'x={-15} y={-80} 
              >
                {nameArray[index]}
                
              </tspan>
            </text>
            
          </g>
          <circle className='cirlce'  cx="65" cy="617" r="60"   fill={colors.blue} ></circle>
          <text
          onClick={handleClickMinus}
               data-name="Psicolog\xEDa"
               transform="rotate(-5.13 6810.657 -3198.292)"
               fill={colors.withe}
               fontSize={85}
               fontFamily="Bariol-Bold, Bariol"
               fontWeight={700}
               transform-origin='0% 0%'
               text-anchor="middle"
               className='cirlce'
            >
              <tspan x={-255} y={20} className='cirlce'>
              {'<'}
              </tspan>
            </text>
            
          <circle  className='cirlce'  cx="540" cy="575" r="60"   fill={colors.blue}/>
          <text
              onClick={handleClickplus}
               data-name="Psicolog\xEDa"
               transform="rotate(-5.13 6810.657 -3198.292)"
               fill={colors.withe}
               fontSize={85}
               fontFamily="Bariol-Bold, Bariol"
               fontWeight={700}
               transform-origin='0% 0%'
               text-anchor="middle"
               
            >
              <tspan x={232} y={20} className='cirlce'>
              {'>'}
              </tspan>
            </text>
        
        </g>
        
      </svg>
    </>
  );
}

export default SvgComponent;
