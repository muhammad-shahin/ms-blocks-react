import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { sliderInfo, setAttributes } = attributes;

	const demoSlides = [0, 1, 2, 3];

	return (
		<div {...useBlockProps.save()}>
			<div className="slider-container">
				<div className="slider">
					{/* Slides */}
					{sliderInfo?.images?.length > 0
						? sliderInfo?.images?.map((slideImage, index) => (
								<div
									key={"Slide" + index}
									className="slide"
									data-slide-index={index}
								>
									<img
										style={{ height: `${sliderInfo?.height}px` }}
										src={slideImage?.url}
									/>
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
				{/* Slider buttons */}
				<div className="slider-buttons-container">
					<button className="prev-btn">
						<img src="https://i.ibb.co/KK9fbn2/prev.png" alt="" />
					</button>
					<button className="next-btn">
						<img src="https://i.ibb.co/rMkqLVp/next.pngs" alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}
