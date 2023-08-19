import { MotionDiv } from "./motion-div-wrapper"
import { SliderCard } from "./slider-card"

export function Slider() {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="m-auto flex w-auto overflow-hidden"
    >
      <div className="no-scrollbar flex overflow-x-scroll">
        <div className="flex space-x-10  p-6">
          <SliderCard
            bgColor="bg-indigo-100"
            title="You get a promotion at work"
            content="You question yourself and wonder when they will realize you are an unqualified imposter"
            emoji="😃"
          />
          <SliderCard
            bgColor="bg-red-100"
            title="You argue with a colleague"
            content="You get angry and defensive, instead of staying open and working towards common ground"
            emoji="😠"
          />
          <SliderCard
            tilted
            bgColor="bg-purple-500"
            text="text-white"
            title="You attend a class reunion"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="🤨"
          />
          <SliderCard
            bgColor="bg-orange-200"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😳"
          />

        </div>
      </div>
    </MotionDiv>
  )
}
