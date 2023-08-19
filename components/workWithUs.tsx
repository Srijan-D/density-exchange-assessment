import Image from 'next/image'
import { cardData } from '../db'
import WorkCard from "./workCard"
import { MotionDiv } from "./motion-div-wrapper"
import { MotionHeading } from "./motion-wrapper"
import boo from '../public/boo.svg'


export function WorkWithUs() {

    const CardData = cardData

    return (
        <section className="mt-24 flex w-screen  items-center justify-center px-1  md:mt-36 md:h-full md:w-full md:px-40">
            <MotionDiv
                initial={{ y: 40, opacity: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex h-full w-[90%] flex-col gap-8 rounded-3xl bg-[#F3F1FF] px-2 pb-6 pt-12 md:h-[90vh] md:flex-row  md:gap-12 md:px-12 md:pb-8 md:pt-20">
                <div className="flex flex-1 flex-col  ">
                    <MotionDiv
                        initial={{ x: '-200', scale: 0, opacity: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 50
                        }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-start ">
                        <h1 className="text-3xl font-bold text-black md:text-4xl ">Work with us</h1>
                    </MotionDiv>
                    <MotionDiv
                        initial={{ y: 40, opacity: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.8
                        }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-6 flex flex-col gap-1 rounded-3xl bg-white  md:h-[60vh]">
                        <div className="flex flex-[0.7] flex-col p-4 md:px-6">
                            <Image
                                src={boo}
                                width={100}
                                height={100}
                                alt="boo"
                                className='-ml-5'
                            />
                            <h2 className='mb-2 text-start text-2xl font-semibold text-[#363636]'>About</h2>
                            <p className='text-start font-semibold text-[#535353]'>At ahead our goal is to make self-improvement dun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</p>
                        </div>
                        <div className="flex flex-[0.3] flex-col gap-1 rounded-3xl bg-[#FEF6F0] p-2  md:px-6">
                            <h2 className='mb-2 text-start text-2xl font-semibold text-[#363636]'>Product</h2>
                            <p className='mb-3 text-start font-semibold text-[#535353]'>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager-like we did... </p>
                        </div>
                    </MotionDiv>
                </div>

                <MotionDiv
                    initial={{ y: 40, opacity: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-1 flex-col justify-end">
                    <div className="flex items-center justify-center md:justify-end">
                        <MotionHeading
                            initial={{ x: '200', scale: 0, opacity: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 50
                            }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center text-3xl font-bold text-[#6B4DEE] md:text-end md:text-4xl">ahead
                        </MotionHeading>
                    </div>
                    <div className="mt-4 flex w-full flex-row overflow-x-hidden px-4 py-8 md:flex-col md:overflow-y-auto">
                        {
                            CardData.map((item, index) => (
                                <WorkCard heading={item.heading} info={item.info} key={index} />
                            ))
                        }
                    </div>
                </MotionDiv>
            </MotionDiv>
        </section>
    )
}
