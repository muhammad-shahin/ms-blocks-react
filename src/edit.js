import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ColorPicker } from "@wordpress/components";
import "./editor.scss";
import { useState, Fragment, useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const { text, sliderInfo } = attributes;
	const [currentSlide, setCurrentSlide] = useState(0);

	// handle slider height change
	const handleHeightChange = (value) => {
		setAttributes({
			sliderInfo: { ...sliderInfo, height: value },
		});
	};
	// handle slider Border Radius change
	const handleBorderRadiusChange = (value) => {
		setAttributes({
			sliderInfo: { ...sliderInfo, borderRadius: value },
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
						label={__("Slider Height (px)", "ms-blocks")}
						placeholder="Change Slider Height"
						onChange={(v) => handleHeightChange(v)}
						defaultValue={sliderInfo?.height}
						type="number"
					/>
					<TextControl
						label={__("Slider Border Radius (px)", "ms-blocks")}
						placeholder="Change Slider Border Radius"
						onChange={(v) => handleBorderRadiusChange(v)}
						defaultValue={sliderInfo?.borderRadius}
						type="number"
					/>
					<TextControl
						label={__("Slider Overlay Intensity", "ms-blocks")}
						placeholder="Change Overlay Intensity"
						onChange={(v) =>
							setAttributes({
								sliderInfo: { ...sliderInfo, overlayIntensity: v },
							})
						}
						defaultValue={sliderInfo?.overlayIntensity}
						type="number"
						min="0.1"
						max="1"
						step="0.1"
					/>
					<label htmlFor="colorPicker">{__("Overlay Color", "my-block")}</label>
					<ColorPicker
						color={sliderInfo?.overlayColor}
						onChangeComplete={(newColor) =>
							setAttributes({
								sliderInfo: { ...sliderInfo, overlayColor: newColor.hex },
							})
						}
						id="colorPicker"
					/>
				</PanelBody>
			</InspectorControls>
			<div
				className="slider-container"
				style={{
					height: `${sliderInfo?.height}px`,
					borderRadius: `${sliderInfo?.borderRadius}px`,
				}}
			>
				<div
					className="slider-wrapper"
					style={{ borderRadius: `${sliderInfo?.borderRadius}px` }}
				>
					<div
						className="slider-content"
						style={{
							transform: `translateX(-${currentSlide * 100}%)`,
						}}
					>
						<div className="slide">
							<img src="https://i.ibb.co/4S1Pcj1/team-member-1.jpg" />
							{/* overlay effect on image */}
							<div
								className="image-overlay"
								style={{
									opacity: `${sliderInfo?.overlayIntensity}`,
									backgroundColor: `${sliderInfo?.overlayColor}`,
								}}
							></div>
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
