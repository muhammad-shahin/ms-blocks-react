import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<h2 className="text-color">{text}</h2>
		</div>
	);
}
