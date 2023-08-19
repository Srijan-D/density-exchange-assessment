"use client"

import Image from "next/image"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import boo from '../public/boo.svg'

import { MotionDiv } from "./motion-div-wrapper"
import { MotionHeading } from "./motion-wrapper"
import { MotionParagraph } from "./motion-p-wrapper"


export function Timeline() {
    return (
        <section className="mt-12 flex w-[80%] flex-col  items-start justify-center font-[Montserrat] md:mt-28 md:px-40">
            <MotionParagraph
                initial={{ x: '-200', scale: 0, opacity: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 50

                }}
                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className='md:text-md text-sm font-medium text-[#535353] '
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad facere recusandae.
            </MotionParagraph>

            <div className='flex'>
                <MotionHeading
                    initial={{ x: '-200', scale: 0, opacity: 0 }}
                    transition={{
                        delay: 0.7,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 50

                    }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className='my-4 inline text-2xl  font-bold text-black md:mb-1 md:text-4xl'
                >
                    Lorem, ipsum dolor.
                </MotionHeading>

                <MotionDiv
                    initial={{ rotate: -90, x: 400, y: 20 }}
                    whileInView={{
                        rotate: 0,
                        x: 0,
                        y: 0,
                    }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={boo}
                        width={80}
                        height={80}
                        alt="boo"
                        className='hidden rotate-[25deg] rounded-full opacity-90 md:flex'
                    />
                </MotionDiv>
            </div>

            <div className="flex w-full flex-col ">
                <VerticalTimeline
                    layout={'1-column-left'}
                    lineColor={"#C3B6F9"}
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius: '15px' }}
                        iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
                        icon={"🧠"}
                        iconClassName='flex justify-center items-center '
                    >
                        <h3 className="vertical-timeline-element-title text-lg font-semibold text-black ">
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm font-medium text-[#535353]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora iusto modi reprehenderit, nemo fugit. Corrupti iusto omnis placeat qui quibusdam voluptatibus quisquam.
                        </h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education "
                        contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius: '15px' }}
                        iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
                        icon={"🏋️"}
                        iconClassName='flex justify-center items-center '
                    >
                        <h3 className="vertical-timeline-element-title text-lg font-semibold text-black ">
                            Old habits are hard to break.
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm font-medium text-[#535353]">
                            And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use (instead of shouting at your boss).
                        </h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education "
                        contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius: '15px' }}
                        iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
                        icon={"💡"}
                        iconClassName='flex justify-center items-center '
                    >
                        <h3 className="vertical-timeline-element-title text-lg font-semibold text-black ">
                            You and your motivation don’t have a long-term relationship.
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm font-medium text-[#535353]">
                            Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises.
                        </h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education "
                        contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius: '15px' }}
                        iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
                        icon={"📖"}
                        iconClassName='flex justify-center items-center '
                    >
                        <h3 className="vertical-timeline-element-title text-lg font-semibold text-black ">
                            Books just don’t offer practical solutions.
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm font-medium text-[#535353]">
                            Remember when you learned to ride a bike just by reading? Yeah, we don’t either. We help you take concrete small steps towards your goals.
                        </h4>
                    </VerticalTimelineElement>

                </VerticalTimeline>

            </div>

        </section>
    )
}

