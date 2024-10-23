// ninset-inline-start: -0.749rem

export default function Chat() {
	return (
		<>
    <div className="flex flex-col gap-4">
      <div className="chat chat-end">
        <div className="chat-header text-n-5">
          Selynt
          <time className="text-xs opacity-[0.7] ml-1 md:ml-2">12:12</time>
        </div>
        <div className="chat-bubble max-w-[calc(100%-3rem)] md:max-w-[80%] text-n-5">
          First draft is up!{" "}
          <a className="italic underline hidden md:inline text-blue-600">
            www.you.com
          </a>
          <br className="hidden md:block" />
          Let me know what you think!
        </div>
        <div className="chat-footer opacity-50 text-n-5 text-xs">
          Delivered
        </div>
      </div>

      <div className="chat chat-start mt-4 md:mt-8">
        <div className="chat-header text-n-5 text-right">
          Obi-Wan
          <time className="text-xs opacity-[0.7] ml-1 md:ml-2">2:12</time>
        </div>
        <div className="chat-bubble max-w-[calc(100%-3rem)] md:max-w-[80%] text-n-5">
          This looks great! Can we adjust the color scheme slightly?
        </div>
      </div>
    </div>
		</>
	)
}