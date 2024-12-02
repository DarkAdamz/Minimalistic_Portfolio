import React from "react";
import {BentoGrid, BentoGridItem} from "./ui/bento-grid";
import {TextRevealCard} from "./ui/text-revealing-Card";
import {gridItems} from "@/data";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    />
                ))}
            </BentoGrid>
            <TextRevealCard
                className="m-auto bg w-full"
                text="What I have to offer..."
                revealText="I  specializing in React, Tailwind, and Next.js. I create sleek, responsive web applications with a focus on performance and user experience."
            />
        </section>
    );
};

export default Grid;
