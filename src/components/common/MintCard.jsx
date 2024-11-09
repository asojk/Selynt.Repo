const MintCard = ({ avatar, info, info1, info2, content1, content2 }) => {
	return (
		<div className="flex w-full max-w-xs flex-col rounded-3xl bg-gradient-to-br from-[#AEE1CF] to-[#7ABBA0] p-6 shadow-lg shadow-[#4A8C78]/50">
			<div className="mb-4 flex items-start">
				<div className="mr-4 h-12 w-12 flex-shrink-0 rounded-2xl bg-[#D6F0E3]/90">
					<img src={avatar} alt="Avatar" className="h-full w-full rounded-2xl object-cover" />
				</div>
				<div className="flex flex-grow flex-col space-y-2">
					<h3 className="break-words text-lg font-semibold text-[#2C5446]">{info}</h3>
					<div className="rounded-md bg-[#D6F0E3]/90 p-2">
						<p className="text-sm text-[#4A8C78]">{info1}</p>
					</div>
					<div className="rounded-sm bg-[#D6F0E3]/90 p-1">
						<p className="text-xs text-[#4A8C78]">{info2}</p>
					</div>
				</div>
			</div>
			<div className="mb-2 rounded-xl bg-[#D6F0E3]/90 p-3">
				<p className="text-sm text-[#2C5446]">{content1}</p>
			</div>
			<div className="rounded-md bg-[#D6F0E3]/90 p-2">
				<p className="text-xs text-[#4A8C78]">{content2}</p>
			</div>
		</div>
	)
}
export default MintCard
