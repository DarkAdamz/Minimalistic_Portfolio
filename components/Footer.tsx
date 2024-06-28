import React from "react";
import MagicButton from "./ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";
import {socialMedia} from "@/data";

const Footer = () => {
    return (
        <footer id="contact" className="w-full pt-20 pb-10">
            <div className="w-full absolute left-0 -bottom-72 min-h-72">
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-80" />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lG:max-w-[45vw]">
                    Ready to take <span className="text-purple">your digital presence</span>to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and we'll make your dream a reality.
                </p>
                <a href="agwuuchea@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                        otherClasses="md:mt-20"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright 2024 &#169; Agwu Uche.A </p>
                <div className="flex items-center gap-6 md:gap-3">
                    {socialMedia.map((profile) => (
                        <div
                            key={profile.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black"
                        >
                            <img src={profile.img} alt={profile.id} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
