import React from "react";

const Body = () =>{
    return (
        <div className="space-y-4 lg:flex">
        <div className="flex items-center justify-center lg:flex-1 lg:h-[400px] lg:order-2 lg:justify-end">
        <img src="./assests/js.jpeg" alt="logo" className="absolute -rotate-[45deg] h-64 md:h-72 lg:h-[220px]"/>
        <img src="./assests/next.png" alt="logo" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[220px]"/>
        <img src="./assests/node.png" alt="logo" className="absolute -rotate-[15deg] h-64 md:h-64 lg:h-[220px] px-2"/>
        <img src="./assests/react.png" alt="logo" className="absolute h-64 md:h-72 lg:h-[220px]"/>

        </div>
        <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">This is me 
        chetan and I'm Making Projects</h1>
        <p className="font-lato text-gray-400">This is my first Tailwind css project using vite</p>
        <form action="" className="flex flex-col gap-4 md:flex-row py-4">
        <input type="email" placeholder="Email Address" className="rounded-md px-4 py-3 placeholder:text-gray-400"/>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Contact me</button>

        </form>
        <div className="flex gap-2 py-4">
            <img src="./assests/images.png" alt="image" className="h-[30px]"/>
            <p className="font-lato text-400">Feel Free to Contact me</p>
        </div>

        </div>
        </div>
    )
}

export default Body