import React from "react";
import Image from "next/image";

interface KnowYourCanProps {
    ingredients: string;
    tastingNotes: string;
    haiku: string;
}

const nutrition = [
    { label: "Calories", value: "0" },
    { label: "Sugars", value: "0g" },
    { label: "Total Fat", value: "0g" },
    { label: "Protein", value: "0g" },
    { label: "Fiber", value: "0g" },
    { label: "Sodium", value: "0g" },
];

const icons = [
    { label: "SUGAR FREE", image: "/png-sugar-free_150x.avif" },
    { label: "CALORIE FREE", image: "/png-carlorie-free_150x.avif" },
    { label: "NON-GMO", image: "/png-gmo-free_150x.avif" },
    { label: "VEGAN", image: "/png-vegan_150x.avif" },
    { label: "GLUTEN FREE", image: "/png-gluten-free_150x.avif" },
    { label: "KOSHER", image: "/png-kosher_150x.avif" },
    { label: "WHOLE30 APPROVED", image: "/png-whole-30-approved_150x.avif" },
    { label: "FOR THE PLANET", image: "/png-one-percent-for-the-planet_150x.avif" },
];

export default function KnowYourCans({ ingredients, tastingNotes, haiku }: KnowYourCanProps) {
    return (
        <section className="w-full bg-[#d47eb4] py-8 px-2 flex flex-col items-center">
            <h2 className="text-white text-5xl md:text-7xl font-bold mb-8 tracking-wide text-center font-gliker w-full max-w-5xl px-4 text-stroke drop-shadow-stroke">
                KNOW YOUR CANS
            </h2>

            <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
                {/* Nutrition Table */}
                <div className="w-full px-4">
                    {nutrition.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-between border-t border-black font-mono text-lg md:text-xl py-2"
                        >
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                        </div>
                    ))}
                    <div className="border-t border-black"></div>
                </div>

                {/* Details */}
                <div className="w-full flex flex-col gap-2 font-mono text-base text-left text-black p-4">
                    <div className="flex w-full">
                        <span className="font-bold w-[50%] lg:w-[30%] lg:text-lg">
                            Ingredients:
                        </span>
                        <span className="w-[50%] lg:w-[70%]">
                            {ingredients.split(',').map((ingredient, index) => (
                                <React.Fragment key={index}>
                                    {ingredient.trim()}
                                    {index < ingredients.split(',').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </span>
                    </div>
                    <div className="flex w-full">
                        <span className="font-bold w-[50%] lg:w-[30%] lg:text-lg">
                            Tasting notes:
                        </span>
                        <span className="w-[50%] lg:w-[70%]">
                            {tastingNotes}
                        </span>
                    </div>
                    <div className="flex w-full">
                        <span className="font-bold w-[50%] lg:w-[30%] lg:text-lg">
                            Haiku:
                        </span>
                        <span className="w-[50%] lg:w-[70%]">
                            {haiku.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < haiku.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </span>
                    </div>
                </div>

                {/* Icons Row */}
                <div className="flex flex-wrap justify-center gap-4 p-4 mb-12">
                    {icons.map((icon) => (
                        <div key={icon.label} className="flex flex-col items-center">
                            <Image
                                src={icon.image}
                                alt={icon.label}
                                width={64}
                                height={64}
                                className="mb-2"
                            />
                            <span className="text-xs text-black font-mono text-center uppercase tracking-wide leading-tight">
                                {icon.label.split(" ").map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}