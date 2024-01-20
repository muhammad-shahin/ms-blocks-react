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
		const sliderContent = block.querySelector(".slider-content");
		const sliderButtons = block.querySelectorAll(".slider-button");

		sliderButtons.forEach((button, index) => {
			button.addEventListener("click", function () {
				const slideIndex = parseInt(
					button.getAttribute("data-slide-index"),
					10,
				);
				const translateValue = `translateX(-${slideIndex * 100}%)`;

				// Set the 'data-current-slide' attribute to the clicked button index
				block.setAttribute("data-current-slide", slideIndex);

				// Update the slider content's transform property
				sliderContent.style.transform = translateValue;
			});
		});
	}
});
