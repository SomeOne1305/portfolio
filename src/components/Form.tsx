import { styles } from '@/constants/styles.constant'
import { useCodeStore } from '@/stores/useCodeStore'
import { FormSchema, TypeForm } from '@/types/form.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './common'

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TypeForm>({
		resolver: zodResolver(FormSchema),
	})
	const onSubmit = (data: TypeForm) => {
		console.log(data)
		console.log(errors)
	}
	const { setEmail, setMessage, setName, setUsername } = useCodeStore()
	return (
		<form
			id='contact-form'
			className='w-[440px] max-xs:w-full p-2 mx-auto flex flex-col items-center mt-[10%]'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className='w-full flex flex-col mt-3'>
				<label htmlFor='name' className={styles.label}>
					_name:
				</label>
				<input
					type='text'
					id='name'
					className='p-2 text-lg bg-[#011221] text-[#607B96] border border-gray-500 focus:ring-2 focus:ring-[#607B96] rounded-lg outline-none autofill:bg-[#011221] autofill:text-[#607B96]'
					{...register('name', {
						required: true,
						pattern: new RegExp('^[A-Za-z][A-Za-z0-9_]*$'),
					})}
					autoComplete='name'
					onInput={(e: ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
				/>
			</div>
			<div className='w-full flex flex-col mt-3'>
				<label htmlFor='email' className={styles.label}>
					_email:
				</label>
				<input
					type='email'
					id='email'
					className='p-2 text-lg bg-[#011221] text-[#607B96] border border-gray-500 focus:ring-2 focus:ring-[#607B96] rounded-lg outline-none autofill:bg-[#011221] autofill:text-[#607B96]'
					{...register('email', {
						required: true,
					})}
					onInput={(e: ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
					autoComplete='email'
				/>
			</div>
			<div className='w-full flex flex-col mt-3'>
				<label htmlFor='username' className={styles.label}>
					_telegram_username:
				</label>
				<input
					type='text'
					id='username'
					className='p-2 text-lg bg-[#011221] text-[#607B96] border border-gray-500 focus:ring-2 focus:ring-[#607B96] rounded-lg outline-none autofill:bg-[#011221] autofill:text-[#607B96]'
					{...register('username', {
						required: true,
						pattern: new RegExp('^[A-Za-z][A-Za-z0-9_]*$'),
					})}
					onInput={(e: ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
					autoComplete='username'
				/>
			</div>
			<div className='w-full flex flex-col mt-3'>
				<label htmlFor='message' className={styles.label}>
					_message:
				</label>
				<textarea
					rows={10}
					id='message'
					className='p-2 text-lg bg-[#011221] text-[#607B96] border border-gray-500 focus:ring-2 focus:ring-[#607B96] rounded-lg outline-none autofill:bg-[#011221] autofill:text-[#607B96] custom-scrollbar resize-none'
					{...register('message', {
						required: true,
					})}
					onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
						setMessage(e.target.value)
					}
				/>
			</div>
			<div className='w-full py-3'>
				<Button type='submit' className='bg-gray-500/50 mt-4 text-slate-100'>
					submit-message
				</Button>
			</div>
		</form>
	)
}
