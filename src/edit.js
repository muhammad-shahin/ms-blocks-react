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
	const demoSlides = [0, 1, 2, 3];
	// previous next slider control
	const slideNext = (slideNumber) => {
		if (slideNumber < demoSlides.length - 1) {
			setCurrentSlide(slideNumber + 1);
		}
	};
	const slidePrev = (slideNumber) => {
		if (slideNumber !== 0) {
			setCurrentSlide(slideNumber - 1);
		}
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
			<div className="slider-container">
				<div
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
					className="slider"
				>
					{/* slides */}
					{demoSlides.map((slide, index) => (
						<div key={"Slide" + index} className="slide">
							<img
								src={`https://source.unsplash.com/random/?productivity,city,${slide}`}
								class="img-fluid rounded-top"
								alt=""
							/>
						</div>
					))}
				</div>
				{/* slider buttons */}
				<div className="slider-buttons-container">
					<button>
						<img src="https://i.ibb.co/KK9fbn2/prev.png" alt="" />
					</button>

					<button>
						<img src="https://i.ibb.co/rMkqLVp/next.pngs" alt="" />
					</button>
				</div>
			</div>
		</Fragment>
	);
}
