import { Highlight, Language, themes } from 'prism-react-renderer'
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
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={`${className} ${size}`}
					style={{
						...style,
						padding: '12px',
						borderRadius: '8px',
						maxWidth: '100%',
						overflowX: 'auto',
						...customStyle,
					}}
				>
					{tokens.map((line, i) => (
						<div
							key={i}
							{...getLineProps({
								line,
								style: { wordBreak: 'normal', whiteSpace: 'pre-wrap' },
							})}
						>
							{lines && <span className='text-gray-500 mr-2'>{i + 1}</span>}
							{line.map((token, key) => (
								<span
									key={key}
									style={{ wordBreak: 'normal' }}
									{...getTokenProps({ token })}
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
