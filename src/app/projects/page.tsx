import CheckBox from '@/components/common/CheckBox'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
	return (
		<div className='w-full h-screen flex items-start '>
			<div className='w-[300px] h-screen border-r border-gray-500'>
				<CheckBox className='mt-10' />
			</div>
			<div className='w-full h-screen overflow-y-scroll custom-scrollbar'>
				<div className='container ml-0'>
					<div className='w-full p-5 mt-[3%]'>
						<div className='w-full grid grid-cols-3 gap-10 p-5'>
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
