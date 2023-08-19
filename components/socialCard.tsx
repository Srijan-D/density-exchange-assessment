import "../app/globals.css"

import Image from "next/image"

import { MotionDiv } from "./motion-div-wrapper"
import sun from '../public/sun.png'
import path from '../public/path.png'

export function SocialCard() {
    return (
        <section className="mt-28 flex md:mt-40 md:px-4">
            <MotionDiv
                initial={{ y: 40, opacity: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.6,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex h-full w-[88vw] flex-col  rounded-3xl bg-[#EDF8FE] px-4 py-8 md:w-full md:p-16"
            >
                <MotionDiv
                    initial={{ y: 20, opacity: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.6,
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center"
                >
                    <p className="text-sm font-semibold  text-[#53553]">
                        Let your friends, family, and co-workers rate your skills.
                    </p>
                    <h1 className="mt-3 text-xl font-bold text-black md:text-3xl">
                        Ever Wondered what others think of you?
                    </h1>
                </MotionDiv>
                <div className="flex items-center justify-center">
                    <ul className="timeline ml-1 mt-12 md:ml-40" id="timeline">
                        <li className="li">
                            <MotionDiv
                                initial={{ scale: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                    type: "spring",
                                }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="timestamp "
                            >
                                <Image
                                    src={sun}
                                    width={50}
                                    height={50}
                                    className="-mb-6"
                                />
                            </MotionDiv>
                            <MotionDiv
                                initial={{ y: 20, opacity: 0 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.3,
                                    type: "spring",
                                }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="status"
                            >
                                <h4 className="text-sm font-medium">
                                    {" "}
                                    Answer question on your social skills
                                </h4>
                            </MotionDiv>
                        </li>
                        <li className="li ">
                            <MotionDiv
                                initial={{ scale: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                    type: "spring",
                                }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="timestamp"
                            >
                                <Image
                                    src={sun}
                                    width={50}
                                    height={50}
                                    className="-mb-6"
                                />
                            </MotionDiv>
                            <MotionDiv
                                initial={{ y: 20, opacity: 0 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.3,
                                    type: "spring",
                                }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="status"
                            >
                                <h4 className="text-sm font-medium">
                                    Let others anonymously answer the same questions about you
                                </h4>
                            </MotionDiv>
                        </li>
                        <li className="li">
                            <MotionDiv
                                initial={{ scale: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                    type: "spring",
                                }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="timestamp"
                                id="last"
                            >
                                <Image
                                    src={sun}
                                    width={50}
                                    height={50}
                                    className="-mb-6"
                                />
                            </MotionDiv>
                            <MotionDiv
                                initial={{ y: 20, opacity: 0 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.3,
                                    type: "spring",
                                }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="status"
                            >
                                <h4 className="text-sm font-medium">
                                    Find out where you and others see things the same way-and
                                    where not!
                                </h4>
                            </MotionDiv>
                        </li>
                    </ul>
                </div>
                <MotionDiv
                    initial={{ scale: 0, opacity: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                    }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-4 flex items-center justify-center "
                >
                    <Image
                        src={path}
                        width={1000}
                        height={1000}
                        className="scale-75 p-2 md:scale-100 "
                    />
                </MotionDiv>
            </MotionDiv>
        </section>
    )
}
