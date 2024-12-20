"use client";
import {cn} from "@/utils/cn";
import {BackgroundGradientAnimation} from "./GradientBg";
import {Globe} from "./Globe";
import {GlobeDemo} from "./GlobeDemo";
import {useState} from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import {IoCopyOutline} from "react-icons/io5";

export const BentoGrid = ({className, children}: {className?: string; children?: React.ReactNode}) => {
    return (
        <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className)}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("agwuuchea@gmail.com");
        setCopied(true);
    };
    return (
        <div
            className={cn(
                "row-span-1 rounded-3xl overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6} && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && <img src={img} alt={img} className={cn(imgClassName, "object-cover,object-center")} />}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
                    {spareImg && <img src={spareImg} alt={spareImg} className={"object-cover,object-center"} />}
                </div>
                <div>
                    {id === 6 && (
                        <BackgroundGradientAnimation>
                            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
                        </BackgroundGradientAnimation>
                    )}
                    <div
                        className={cn(
                            titleClassName,
                            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 lg:p-10"
                        )}
                    >
                        <div className="font-sans text-lg font-bold lg:text-3xl max-w-96 z-10 text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                            {title}
                            {id === 2 && <GlobeDemo />}
                            {/* Tech stack list div */}
                            {id === 3 && (
                                <div className="flex gap-1 lg:gap-3 w-fit relative bottom-0 right-0 lg:right-0 md:top-0 mt-5">
                                    {/* tech stack lists */}
                                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                        {["Express", "MongoDB", "GSAP", "Framer"].map((item, i) => (
                                            <span
                                                key={i}
                                                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                                    </div>
                                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                                        {["React.js", "Next.js", "TailwindCSS", "Native"].map((item, i) => (
                                            <span
                                                key={i}
                                                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {id === 6 && (
                                <div className="mt-5 relative">
                                    <div className={`absolute -bottom-5 right-0`}>
                                        <Lottie
                                            options={{
                                                loop: copied,
                                                autoplay: copied,
                                                animationData: animationData,
                                                rendererSettings: {
                                                    preserveAspectRatio: "xMidYMid slice",
                                                },
                                            }}
                                        />
                                    </div>
                                    <MagicButton
                                        title={copied ? "Email copied" : "Copy my email"}
                                        icon={<IoCopyOutline />}
                                        position="left"
                                        otherClasses="bg-[#161a31]"
                                        handleClick={handleCopy}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="font-sans font-light text-[#c1c2d3] text-sm md:text-xs lg:text-base dark:text-neutral-300 z-10">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
