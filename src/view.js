/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log("Hello World! (from create-block-ms-blocks block)");
/* eslint-enable no-console */
// view.js
document.addEventListener("DOMContentLoaded", function () {
	const block = document.querySelector(".wp-block-create-block-ms-blocks");

	if (block) {
		const sliderContent = block.querySelector(".slider");
		const prevBtn = block.querySelector(".prev-btn");
		const nextBtn = block.querySelector(".next-btn");
		const totalSlides = block.querySelectorAll(".slide");
		let currentSlide = 0;

		// previous next slider control
		const slidePrev = () => {
			if (currentSlide > 0) {
				currentSlide = currentSlide - 1;
				sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
			}
		};
		const slideNext = () => {
			if (currentSlide < totalSlides.length - 1) {
				currentSlide = currentSlide + 1;
				sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
			}
		};

		prevBtn.addEventListener("click", slidePrev);
		nextBtn.addEventListener("click", slideNext);
	}
});
