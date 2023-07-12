import {
	BLOCKS,
	MARKS,
	INLINES,
	Document as RichTextDocument,
} from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import CloudinaryImage from './CloudinaryImage';

type RichTextProps = {
	document: RichTextDocument | undefined | null;
};

const options = {
	renderMark: {
		[MARKS.CODE]: (code: any) => {
			return (
				<pre>
					<code>{code}</code>
				</pre>
			);
		},
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node: any, children: any) => {
			if (
				node.content.find((item: any) =>
					item.marks?.find((mark: { type: string }) => mark.type === 'code')
				)
			) {
				return (
					<div>
						<pre>
							<code>{children}</code>
						</pre>
					</div>
				);
			}
			return <p>{children}</p>;
		},
		[INLINES.ENTRY_HYPERLINK]: (node: any) => {
			if (node.data.target.sys.contentType.sys.id === 'engineeringProjects') {
				return (
					<Link href={`/projects/${node.data.target.fields.slug}`}>
						{node.data.target.fields.title}
					</Link>
				);
			}
		},
		[INLINES.HYPERLINK]: (node: any) => {
			const text = node.content.find(
				(item: any) => item.nodeType === 'text'
			)?.value;
			return (
				<a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
					{text}
				</a>
			);
		},
		[BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
			if (node.data.target.sys.contentType.sys.id === 'image') {
				return (
					<CloudinaryImage
						alt={'some image'}
						src={node.data.target.fields.cloudinaryImage[0].url.toString()}
						width={1280}
						height={720}
						crop='thumb'
						format='webp'
					/>
				);
			}
		},
	},
};

function RichText({ document }: RichTextProps) {
	if (!document) {
		return null;
	}
	return <>{documentToReactComponents(document, options)}</>;
}

export default RichText;
