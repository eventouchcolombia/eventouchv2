import React from "react";

export const CasosDeExito = ()=> {
    return(
        <section id="Casos-de-Exito" className="w-screen h-screen ">
        <div className="flex flex-col  md:flex-row w-full h-screen ">
            <div className=" flex flex-col md:h-screen w-full md:w-2/3 justify-center  px-6   md:pl-100 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10   ">
                <h2 className="md:text-5xl text-5xl  font-bold  text-left  ">
                    Datos que <br /> Inspiran
                </h2>
                <p className="md:text-2xl text-3xl text-left">
                Conoce cómo hemos ayudado a diversas marcas a transformar su publicidad y conectar de manera efectiva con su audiencia.
                </p>
            </div>
            <div className="md:w-1/2 w-full h-screen flex items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-full gap-8 md:pt-78 md:pl-20 md:pl-10 md:pr-35 md:pb-55 ">
                <div className="w-full h-full bg-red-300 rounded-2xl">

                </div >
                <div className="w-full h-full bg-gray-300 rounded-2xl">
                    
                </div>
                <div className="w-full h-full bg-green-100 rounded-2xl">
                
                </div>
                <div className="w-full h-full bg-white-300 rounded-2xl">
                
                </div>
            </div>
                
            </div>
        </div>
        </section>
    ) 
}