
import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button";

import AtomModel from "../components/Electron";
import RotatingGlobe from "../components/Globe";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        const email = "srijanpatel911@gmail.com";
        navigator.clipboard.writeText(email);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
    const cardRefs = useRef([]);

    // Hover Effects: Apply rotation on mousemove
    useEffect(() => {
        cardRefs.current.forEach((card) => {
            if (!card) return;

            const handleMouseMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                // Update CSS variables for glow effect
                card.style.setProperty("--x", `${x}%`);
                card.style.setProperty("--y", `${y}%`);

                // Calculate rotation values
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = -(e.clientY - rect.top - centerY) / 20;
                const rotateY = (e.clientX - rect.left - centerX) / 20;

                // Apply 3D transform
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            };

            const handleMouseLeave = () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, []);
    return (
        <section className="c-space my-20 " id="about" >
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/* ABOUT SECTION */}
                <div className="col-span-1 xl:row-span-3 bento-item">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[0] = el)}
                    >
                        <img className=" w-full  sm:h-[276px] h-fit object-contain" src="/assets/grid1-removebg.png" alt="grid-1" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Srijan Patel</p>
                            <p className="grid-subtext">Aspiring Fullstack Developer with experience in multiple Projects . Solved 150+ problems on both LeetCode (1500+ rating)
                            and Codeforces (1050+ rating ).</p>
                        </div>
                    </div>
                </div>

                {/* TECH STACK SECTION */}
                <div className="col-span-1 xl:row-span-3">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[1] = el)}
                    >
                        <img className=" w-full  sm:h-[276px] h-fit object-contain" src="/assets/grid2.png" alt="grid-2" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">C++ | Python | Pandas | Numpy | JavaScript | React | Express JS | Tailwind 
                            </p>
                        </div>
                    </div>
                </div>

                {/* CONTACT ME SECTION */}
                <div className="col-span-1 xl:row-span-4 pointer-events-auto  ">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[2] = el)}
                    >
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center  pointer-events-auto z-50 cursor-pointer">
                           <RotatingGlobe />
                        </div>
                        <div className="pointer-events-auto z-50 cursor-pointer">
                            <p className="grid-headtext">I work remotely across all timezones.</p>
                            <p className="grid-subtext">I am based in Delhi, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/* PASSION FOR CODING */}
                <div className="col-span-2 xl:row-span-3">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[3] = el)}
                    >
                        <img className="w-full sm:h-[266px] h-fit object-contain" src="/assets/grid3.png" alt="grid-3" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I love solving problems and building things through code.</p>
                        </div>
                    </div>
                </div>

                {/* EMAIL COPY SECTION */}
                <div className="col-span-1 xl:row-span-2 pointer-events-auto z-50 cursor-pointer ">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[4] = el)}
                    >
                        <img
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                            src="/assets/grid4.png"
                            alt="grid-4"
                        />
                        <div className="space-y-2 mt-8">
                            {/* <p className="grid-subtext text-center">Contact me</p> */}
                            <div className="copy-container " onClick={handleCopy}>
                                <img className="pointer-events-auto z-50 cursor-pointer " src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    My Email ID
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;