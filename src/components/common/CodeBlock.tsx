import { Highlight, Language, themes } from 'prism-react-renderer'
import React from 'react'

import { CSSProperties } from 'react'

interface CodeBlockProps {
	code: string
	language: Language
	lines?: boolean
	size?: string
	customStyle?: CSSProperties
}

const CodeBlock = ({
	code,
	language,
	lines = false,
	size = '',
	customStyle,
}: CodeBlockProps): JSX.Element => {
	return (
		<Highlight code={code.trim()} language={language} theme={themes.nightOwl}>
			{({
				className,
				style,
				tokens,
				getLineProps,
				getTokenProps,
			}: {
				className: string
				style: CSSProperties
				tokens: Array<Array<any>>
				getLineProps: (input: {
					key?: React.Key
					style?: CSSProperties
					line: any
				}) => React.DetailedHTMLProps<
					React.HTMLAttributes<HTMLDivElement>,
					HTMLDivElement
				>
				getTokenProps: (input: {
					key?: React.Key
					style?: CSSProperties
					token: any
				}) => React.HTMLProps<HTMLElement>
			}) => (
				<pre
					className={className + size}
					style={Object.assign(
						{
							...style,
							padding: '20px',
							borderRadius: '15px',
							maxWidth: '670px',
						},
						customStyle
					)}
				>
					{tokens.map((line, i) => (
						// eslint-disable-next-line react/jsx-key
						<div
							{...getLineProps({
								line,
								key: i,
								style: {
									// display: 'flex',
									// flexWrap: 'wrap',
									// alignItems: 'center',
									textWrap: 'wrap',
								},
							})}
						>
							{lines && <span className='text-gray-500 mr-1.5'>{i + 1}</span>}
							{line.map((token, key) => (
								// eslint-disable-next-line react/jsx-key
								<span
									{...getTokenProps({
										token,
										key,
									})}
								/>
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default CodeBlock
