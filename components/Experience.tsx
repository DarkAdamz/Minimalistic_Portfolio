import {workExperience} from "@/data";
import React from "react";
import {Button} from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
    return (
        <div className="py-20" id="experience">
            <h1 className="heading">
                My <span className="text-purple">Qualities</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                        duration={Math.floor(Math.random() * 10000) + 1000}
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
                            <Image src={card.thumbnail} alt={card.thumbnail} className="lg:w-32md:w-20 w-16" />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                                {/* <p className="text-start text-white-100 mt-5 font-semibold">{card.title}</p> */}
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
