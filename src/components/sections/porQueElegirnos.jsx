import React from "react";
import mujerTotem from "../../utilities/images/mujerTotem.jpg"
import totemImage1 from "../../utilities/images/totemImage1.png"
import totemImage2 from "../../utilities/images/totemImage2.png"
import totemImage3 from "../../utilities/images/totemImage3.png"
import totemImage4 from "../../utilities/images/totemImage4.png"
import totemImage5 from "../../utilities/images/totemImage5.jpg"
import totemImage6 from "../../utilities/images/totemImage6.jpg"
import totemImage7 from "../../utilities/images/totemImage7.jpg"
import totemImage8 from "../../utilities/images/totemImage8.jpg"

export const PorQueElegirnos = ()=> {
    return (
    <section id="¿Por-Que-Elegirnos?"className="w-screen h-screen ">
    <div className="flex flex-col  md:flex-row w-full h-screen   ">
        <div className=" flex flex-col   md:h-screen md:w-2/3 justify-center  px-6   md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10   ">
            <h2 className="md:text-5xl text-5xl  font-bold  text-left ">
                Innovacion <br /> Constante
            </h2>
            <p className="md:text-2xl text-3xl text-left">
            En EvenTouch, transformamos la forma en que las marcas se conectan con su audiencia. Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto. También creamos experiencias en eventos a través de tótems y pantallas touch, permitiendo que las marcas dejen una impresión duradera mientras recopilan datos valiosos para análisis y estrategias futuras.
            </p>
        </div>
        <div className="md:w-1/2 w-full h-screen flex  items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3  w-6/7 h-7/8 md:w-full md:h-full gap-6  md:pt-60 md:pl-20 md:pl-10 md:pr-35 md:pb-35 ">
            <div  className="md:w-full md:h-full grid-cols-2 grid grid-rows-1 gap-6 rounded-3xl   justify-center text-white ">
                <div className="h-full w-full rounded-3xl bg-cover bg-center filter g"
                    style={{ backgroundImage: `url(${totemImage1})` }}></div>
                <div className="h-full w-full rounded-3xl bg-cover bg-center filter g"
                    style={{ backgroundImage: `url(${totemImage2})` }}></div>
            </div >
            <div id="dataCardWhite" className="w-full h-full bg-[rgba(92,41,112,1)] rounded-3xl hidden md:flex flex-col items-center justify-center text-white p-12">

            </div>
            <div  className="md:w-full md:h-full  grid-cols-2 hidden md:grid grid-rows-1 gap-6 rounded-3xl   justify-center text-white ">
                <div className="h-full w-full rounded-3xl bg-cover bg-center filter g"
                    style={{ backgroundImage: `url(${totemImage3})` }}></div>
                <div className="h-full w-full rounded-3xl bg-cover bg-center filter g"
                    style={{ backgroundImage: `url(${totemImage4})` }}></div>
            </div >
            <div  className="md:w-full md:h-full  grid-cols-2 hidden md:grid grid-rows-1 gap-6 rounded-3xl   justify-center text-white ">
                <div className="h-full w-full rounded-3xl bg-cover bg-center filter g"
                    style={{ backgroundImage: `url(${totemImage5})` }}></div>
                <div className="h-full w-full rounded-3xl bg-cover bg-center filter g"
                    style={{ backgroundImage: `url(${totemImage6})` }}></div>
            </div >
            <div id="dataCard" className="w-full h-full bg-[rgba(28,15,33,1)] rounded-3xl hidden md:flex flex-col items-center justify-center text-white p-12">

            </div>
            <div  className="w-full h-full  grid-cols-2 grid grid-rows-1 gap-6 rounded-3xl   justify-center text-white ">
                <div className="h-full w-full rounded-3xl bg-cover bg-center filter g"
                    style={{ backgroundImage: `url(${totemImage7})` }}></div>
                <div className="h-full w-full rounded-3xl bg-cover bg-center filter g"
                    style={{ backgroundImage: `url(${totemImage8})` }}></div>
            </div >
        </div>
            
        </div>
    </div>
    </section>
) 
}