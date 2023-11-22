import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";
import { useState, Fragment } from "@wordpress/element";
const { Fragment } = wp.element;

export default function Edit({ attributes, setAttributes }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { text } = attributes;
	console.log(text);
	const handleTextChange = (value) => {
		console.log(value);
		setAttributes({
			text: value,
		});
	};
	const handleSlideChange = (slideNumber) => {
		setCurrentSlide(slideNumber);
	};
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__("Slider Settings", "ms-blocks")}
					initialOpen={true}
				>
					<TextControl
						label={__("Slider Settings", "ms-blocks")}
						placeholder="Here You can edit text"
						onChange={(v) => handleTextChange(v)}
						defaultValue={text}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="slider-container">
				<div className="slider-wrapper">
					<div
						className="slider-content"
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}
					>
						<div className="slide">
							<img src="https://i.ibb.co/4S1Pcj1/team-member-1.jpg" />
							{/* overlay effect on image */}
							<div className="image-overlay"></div>
						</div>
						<div className="slide">
							<img src="https://i.ibb.co/sFnNv0t/team-member-2.jpg" />
						</div>
					</div>
				</div>
				{/* slider button */}
				<div className="slider-button-container">
					<button
						className="slider-button"
						onClick={() => handleSlideChange(0)}
					>
						1
					</button>
					<button
						className="slider-button"
						onClick={() => handleSlideChange(1)}
					>
						2
					</button>
				</div>
			</div>
		</Fragment>
	);
}
