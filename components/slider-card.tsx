type TProps = {
  title: string
  emoji: string
  bgColor: string
  content: string
  tilted?: boolean
  text?: string
}

export function SliderCard({
  title,
  emoji,
  bgColor,
  content,
  tilted,
  text,
}: TProps) {
  return (
    <div
      className={`w-96 flex-col space-y-5 rounded-2xl p-6 py-8 ${bgColor} bg-pr scroll-smooth ${
        tilted ? "-rotate-6" : "rotate-0"
      }`}
    >
      <div className="text-3xl">{emoji}</div>
      <h1 className={`text-lg font-semibold text-black ${text} `}>{title}</h1>
      <p className={`text-sm text-gray-500 ${text}`}>{content}</p>
    </div>
  )
}
