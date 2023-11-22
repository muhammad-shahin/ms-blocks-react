<?php
/**
 * Plugin Name:       Ms Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ms-blocks
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
function ms_blocks_ms_blocks_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ms_blocks_ms_blocks_block_init' );
