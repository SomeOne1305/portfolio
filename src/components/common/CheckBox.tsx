import { cn } from '@/utils/cn'
import React from 'react'

type TypeCheckBoxProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>

export default function CheckBox({ className, ...props }: TypeCheckBoxProps) {
	return (
		<input
			type='checkbox'
			className={cn('size-7 marker:bg-[#607B96]', className)}
			{...props}
		/>
	)
}
