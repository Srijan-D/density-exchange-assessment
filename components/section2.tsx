
import { MotionDiv } from "./motion-div-wrapper"

export function MidSection() {
    return (
        <section className='mt-28 flex flex-col gap-8 px-8 text-center font-[Montserrat] md:mt-40 md:flex-row md:gap-6 md:px-40 md:text-start'>
            <MotionDiv
                initial={{ y: 20, opacity: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='flex flex-[0.4]  items-start justify-center gap-6 text-xl font-bold text-[#212121] md:text-3xl'>
                Lorem ipsum dolor sit consectetur.
                <br />
                Lorem, ipsum.
            </MotionDiv>
            <MotionDiv
                initial={{ y: 20, opacity: 0 }}
                transition={{
                    delay: 0.6,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='mx-5 flex flex-[0.3] items-start justify-center text-lg font-semibold text-[#363636]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptas doloribus atque harum velit.
            </MotionDiv>
            <MotionDiv
                initial={{ y: 20, opacity: 0 }}
                transition={{
                    delay: 0.8,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='mx-5 flex flex-[0.3] items-start justify-center text-lg font-semibold text-[#363636]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </MotionDiv>
        </section>
    )
}
