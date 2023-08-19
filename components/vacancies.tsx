import { MotionDiv } from "./motion-div-wrapper"
import { MotionHeading } from "./motion-wrapper"

const data = [
  {
    title: "Senior Engineer",
    pos: "Full Time Position",
    location: "Berlin",
    salary: "€65-85k",
  },
  {
    title: "Senior Designer",
    pos: "Full Time Position",
    location: "Remote",
    salary: "€45-65k",
  },
  {
    title: "Superstar Intern",
    pos: "Part Time Position",
    location: "England",
    salary: "€40-50k",
  },
] as const

export function Vacancies() {
  return (
    <MotionDiv
      initial={{ y: 40, opacity: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="mb-10 mt-40 flex w-[85%] flex-col gap-8 md:px-40"
    >
      <div className="flex items-start justify-center md:justify-start">
        <MotionHeading
          initial={{ x: "-200", scale: 0, opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-black md:ml-2 md:text-start md:text-4xl"
        >
          Open Vacancies
        </MotionHeading>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        {data.map((item, id) => (
          <VacanciesCard
            key={id}
            title={item.title}
            pos={item.pos}
            location={item.location}
            salary={item.salary}
          />
        ))}
      </div>
    </MotionDiv>
  )
}

type TProps = Omit<(typeof data)[number], "id"> & { id?: number }

function VacanciesCard({ title, pos, location, salary }: TProps) {
  return (
    <MotionDiv
      initial={{ scale: 0, opacity: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-[0.33] flex-col rounded-xl bg-[#FEFBEC] px-6 py-8"
    >
      <h1 className="mb-3 text-lg font-bold text-black">{title}</h1>
      <ul className="list-disc">
        <li className="ml-4 text-sm font-semibold text-[#535353]">{pos}</li>
        <li className="ml-4 text-sm font-semibold text-[#535353]">
          {location}
        </li>
        <li className="ml-4 text-sm font-semibold text-[#535353]">{salary}</li>
      </ul>
      <div className="flex items-center justify-start">
        <button className="mt-6 rounded-[50px] bg-black px-4 py-3 text-sm font-semibold text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] duration-300 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          See Details
        </button>
      </div>
    </MotionDiv>
  )
}
