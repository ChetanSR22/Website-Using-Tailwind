import React from "react";

const Footer = () =>{
    return (
        <div className="flex flex-col gap-12S md:flex-row md:justify-between">
            <ul className="flex gap-6 font-lato text-gray-400">
                <li>
                    <a href="#">Instagram</a>
                </li>
                <li>
                    <a href="#">LinkedIn</a>
                </li>
                <li>
                    <a href="#">FaceBook</a>
                </li>
            </ul>
            <div className="flex gap-2">
                <img src="./assests/help.jpg" alt="Help" className="h-[40px] rounded-2xl"/>
                <div>
                    <p className="font-playfair font-thin">Chetan</p>
                    <a href="#" className="font-lato font-medium">Click here for help</a>
                </div>
            </div>
        </div>
    )
}

export default Footer