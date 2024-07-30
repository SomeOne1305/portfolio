import { styles } from '@/constants/styles.constant'
import Image from 'next/image'

export default function ProjectCard() {
	return (
		<div className='flex flex-col'>
			<div className='w-full text-xl my-2'>
				<span className='text-violet-600 font-bold'>Project 1</span>
				<span className='text-gray-500'>{' //  '} _natlib-kumkurgan</span>
			</div>
			<div className='w-full mt-4 border border-gray-500 rounded-xl overflow-hidden'>
				<div className='w-full h-64 relative'>
					<Image
						src={
							'https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-2048x1001.png'
						}
						alt=''
						fill
					/>
				</div>
				<div className='w-full p-4'>
					<div className='inline-flex items-center gap-1 mb-2'>
						{Array.from({ length: 3 }).map((_, i) => (
							<div key={'icon_' + i} className='rounded-md p-1 bg-primary'>
								<Image
									src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
									alt='icon'
									width={30}
									height={30}
									unoptimized
								/>
							</div>
						))}
					</div>
					<p className='text-lg line-clamp-3 text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
						nobis unde ea obcaecati. Accusamus assumenda labore odit laborum
						unde reiciendis totam ullam in consequatur, officia temporibus
						quaerat ratione veniam adipisci!
					</p>
					<a
						href='#'
						target='_blank'
						className={styles.btn + ' bg-gray-500 mt-4 inline-block'}
					>
						view-project
					</a>
				</div>
			</div>
		</div>
	)
}
