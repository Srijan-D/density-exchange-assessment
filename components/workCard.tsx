const WorkCard = ({ heading, info }) => {
    return (
        <div className='mr-6 flex w-44 shrink-0 flex-col gap-4 rounded-xl bg-white p-4 drop-shadow-xl duration-300 hover:bg-[#fcfbff] hover:text-white md:mb-6 md:h-56 md:w-96'>
            <h2 className='text-sm font-bold text-black md:text-lg'>{heading}</h2>
            <p className='text-xs font-semibold text-[#363636] md:text-sm'>{info}</p>
        </div>
    )
}

export default WorkCard