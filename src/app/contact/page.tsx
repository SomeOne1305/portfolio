'use client'
import { CodeBlock } from '@/components/common'
import Form from '@/components/Form'
import { useCodeStore } from '@/stores/useCodeStore'

export default function ContactPage() {
	const { username, name, message, email } = useCodeStore()
	const code = `ㅤ // ${new Date().toDateString()}
	// Sending form data
	const button = document.getElementById('sendBtn');

	const message = {
		name: "${name}",
		email: "${email}",
		username:"@${username}",
		message:"${message}"
	}
	button.addEventListener('click', async ()=>{
		try{
			await fetch(process.env.URL,{
				method:"POST", 
				headers:{
					"Content-Type":"application/json"
				},
				body: messsage
			})
		} catch(error){
			alert('Error occured in sending message !')
		}
	})
	`

	return (
		<div className='w-full h-screen flex items-start '>
			<div className='w-[300px] h-screen border-r border-gray-500'>
				<div className='w-full mt-[38px] py-2'></div>
			</div>
			<div className='w-full h-screen overflow-y-scroll custom-scrollbar'>
				<div className='container ml-0 flex'>
					<div className='w-1/2 py-2 mt-14'>
						<Form />
					</div>
					<div className='w-1/2 border-l border-gray-600 py-2 mt-14 flex justify-center items-center pl-5'>
						<CodeBlock
							code={code}
							language='typescript'
							lines={true}
							size=' text-lg'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
