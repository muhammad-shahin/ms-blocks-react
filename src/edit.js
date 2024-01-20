import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	ColorPicker,
	Button,
} from "@wordpress/components";
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
	const slideNext = () => {
		if (currentSlide < demoSlides.length - 1) {
			setCurrentSlide(currentSlide + 1);
		}
	};
	const slidePrev = () => {
		if (currentSlide !== 0) {
			setCurrentSlide(currentSlide - 1);
		}
	};

	const handleImageSelection = (images) => {
		// Handle the selected images, e.g., store them in sliderInfo
		setAttributes({
			sliderInfo: {
				...sliderInfo,
				images: [...sliderInfo?.images, ...images],
			},
		});
		console.log("New added images :", images);
	};
	console.log("all images :", sliderInfo?.images);
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__("Slider Settings", "ms-blocks")}
					initialOpen={true}
				>
					{/* Image selection button */}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(images) => handleImageSelection(images)}
							allowedTypes={["image"]}
							multiple={true} // Allow multiple images
							value={sliderInfo?.images.map((img) => img.id)}
							render={({ open }) => (
								<Button variant="secondary" onClick={open}>
									Select Images
								</Button>
							)}
						/>
					</MediaUploadCheck>
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
					{sliderInfo?.images?.length > 0
						? sliderInfo?.images?.map((slideImage, index) => (
								<div key={"Slide" + index} className="slide">
									<img src={slideImage?.url} />
									<p>Slide {index + 1}</p>
								</div>
						  ))
						: demoSlides.map((slide, index) => (
								<div key={"Slide" + index} className="slide">
									<img
										src={`https://source.unsplash.com/random/?productivity,city,${slide}`}
									/>
									<p>Sample Slider {slide + 1}</p>
								</div>
						  ))}
				</div>
				{/* slider buttons */}
				<div className="slider-buttons-container">
					<button onClick={slidePrev}>
						<img src="https://i.ibb.co/KK9fbn2/prev.png" alt="" />
					</button>

					<button onClick={slideNext}>
						<img src="https://i.ibb.co/rMkqLVp/next.pngs" alt="" />
					</button>
				</div>
			</div>
		</Fragment>
	);
}
