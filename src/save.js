// save.js
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
export default function save({ attributes }) {
	const { sliderInfo } = attributes;

	return (
		<div {...useBlockProps.save()} data-current-slide="0">
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
					<div className="slider-content">
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
					<button className="slider-button" data-slide-index="0">
						1
					</button>
					<button className="slider-button" data-slide-index="1">
						2
					</button>
				</div>
			</div>
		</div>
	);
}
