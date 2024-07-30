import { styles } from '@/constants/styles.constant'
import { cn } from '@/utils/cn'
import React from 'react'

type TypeButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

export default function Button({ className, ...props }: TypeButtonProps) {
	return <button className={cn(styles.btn, className)} {...props} />
}
