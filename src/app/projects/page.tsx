import CheckBox from '@/components/common/CheckBox'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
	return (
		<div className='w-full h-screen flex items-start '>
			<div className='w-[300px] h-screen border-r border-gray-500 hidden lg:block'>
				<CheckBox className='mt-10' />
			</div>
			<div className='w-full h-screen overflow-y-scroll custom-scrollbar'>
				<div className='container max-sm:p-0 lg:ml-0'>
					<div className='w-full pt-[10%] lg:p-5 mt-[3%]'>
						<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 p-5'>
							{Array.from({ length: 6 }).map((_, i) => (
								<ProjectCard key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
