'use client'

import { cn } from '@/utils/cn'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import {
	AnchorHTMLAttributes,
	DetailedHTMLProps,
	useEffect,
	useState,
} from 'react'

type NavLinkProps = LinkProps &
	DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> & {
		activeClassName?: string
	}

const NavLink: React.FC<NavLinkProps> = ({
	href,
	as,
	replace,
	scroll,
	shallow,
	prefetch,
	locale,
	className,
	activeClassName = 'active',
	...props
}) => {
	const pathname = usePathname()
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		if (pathname) {
			setIsActive(pathname === href || pathname === as)
		}
	}, [pathname, href, as])

	const combinedClassName = cn(isActive ? activeClassName : '', className)

	return (
		<Link
			href={href}
			as={as}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			prefetch={prefetch}
			locale={locale}
			passHref
			className={combinedClassName}
			{...props}
		></Link>
	)
}

export default NavLink
