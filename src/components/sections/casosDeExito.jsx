import React from "react";

export const CasosDeExito = ()=> {
    return(
        <section id="Casos-de-Exito" className="w-screen h-screen ">
        <div className="flex flex-col  md:flex-row w-full h-screen ">
            <div className=" flex flex-col   md:h-screen w-full md:w-2/3 justify-center  px-6   md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10   ">
                <h2 className="md:text-5xl text-5xl  font-bold  text-left ">
                    Datos que <br /> Inspiran
                </h2>
                <p className="md:text-2xl text-3xl text-left">
                Conoce cómo hemos ayudado a diversas marcas a transformar su publicidad y conectar de manera efectiva con su audiencia.
                </p>
            </div>
            <div className="md:w-1/2 w-full h-screen flex md:items-center items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-6/7 h-7/8 md:w-full md:h-full gap-6  md:pt-78 md:pl-20 md:pl-10 md:pr-35 md:pb-55 ">
                <div id="dataCard" className="md:w-full md:h-full  bg-[rgba(28,15,33,1)] rounded-3xl flex flex-col items-center justify-center text-white p-12">
                    <h2 className="text-6xl font-bold">+80%</h2>
                    <p className="md:text-sm text-2xl">Aumento en la interaccion del publico con publicidad interactiva</p>
                </div >
                <div id="dataCardWhite" className="w-full h-full bg-[rgba(92,41,112,1)] rounded-3xl flex flex-col items-center justify-center text-white p-12">
                     <h2 className="text-6xl font-bold">3X</h2>
                     <p className="md:text-sm text-2xl">Más recordación de marca con experiencias digitales innovadoras.</p>
                </div>
                <div id="dataCardWhite" className="w-full h-full bg-[rgba(92,41,112,1)] rounded-3xl flex flex-col items-center justify-center text-white p-12">
                    <h2 className="text-6xl font-bold">+70%</h2>
                    <p className="md:text-sm text-2xl">De los asistentes a eventos prefieren activaciones tecnológicas sobre publicidad tradicional.</p>
                </div>
                <div id="dataCard" className="w-full h-full bg-[rgba(28,15,33,1)] rounded-3xl flex flex-col items-center justify-center text-white p-12">
                    <h2 className="text-6xl font-bold">90%</h2>
                    <p className="md:text-sm text-2xl">De las marcas que usan tecnología interactiva ven un crecimiento en conversiones y engagement.</p>
                </div>
            </div>
                
            </div>
        </div>
        </section>
    ) 
}