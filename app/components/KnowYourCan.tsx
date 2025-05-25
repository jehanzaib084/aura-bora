import React from "react";

const nutrition = [
    { label: "Calories", value: "0" },
    { label: "Sugars", value: "0g" },
    { label: "Total Fat", value: "0g" },
    { label: "Protein", value: "0g" },
    { label: "Fiber", value: "0g" },
    { label: "Sodium", value: "0g" },
];

const icons = [
    { label: "SUGAR FREE", svg: <svg width="32" height="32">{/* ... */}</svg> },
    { label: "CALORIE FREE", svg: <svg width="32" height="32">{/* ... */}</svg> },
    { label: "NON-GMO", svg: <svg width="32" height="32">{/* ... */}</svg> },
    { label: "VEGAN", svg: <svg width="32" height="32">{/* ... */}</svg> },
    { label: "GLUTEN FREE", svg: <svg width="32" height="32">{/* ... */}</svg> },
    { label: "KOSHER", svg: <svg width="32" height="32">{/* ... */}</svg> },
    { label: "WHOLE30 APPROVED", svg: <svg width="32" height="32">{/* ... */}</svg> },
    { label: "FOR THE PLANET", svg: <svg width="32" height="32">{/* ... */}</svg> },
];

export default function KnowYourCans() {
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
                            Carbonated Water, Natural Pumpkin Flavor,<br />
                            Cinnamon Bark Extract, Clove Extract
                        </span>
                    </div>
                    <div className="flex w-full">
                        <span className="font-bold w-[50%] lg:w-[30%] lg:text-lg">
                            Tasting notes:
                        </span>
                        <span className="w-[50%] lg:w-[70%]">
                            nutty, sweet, creamy
                        </span>
                    </div>
                    <div className="flex w-full">
                        <span className="font-bold w-[50%] lg:w-[30%] lg:text-lg">
                            Haiku:
                        </span>
                        <span className="w-[50%] lg:w-[70%]">
                            Upside down I hang<br />
                            Pumpkin rivers, harvest moons<br />
                            I wish I could see
                        </span>
                    </div>
                </div>

                {/* Icons Row */}
                <div className="flex flex-wrap justify-center gap-4 p-4 mb-12">
                    {icons.map((icon) => (
                        <div key={icon.label} className="flex flex-col items-center">
                            <span className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center mb-2 border border-black">
                                {icon.svg}
                            </span>
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