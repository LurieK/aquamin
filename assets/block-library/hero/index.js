/**
 * hero block main entry point
 *
 * This file orchestrates all the script files
 * together to create a WordPress block.
 */

/**
 * Register inner blocks
 */
import './hero-item';

/**
 * Import dependencies
 */
import Icon from './icon.inline.svg';
import edit from './hero-edit';
import save from './hero-save';
import block from './block.json';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
registerBlockType(block.name, {
	title: __('hero', 'aquamin'),
	description: __('This block holds the h1 and h3 for the site, as well as a background image', 'aquamin'),
	icon: Icon,
	edit,
	save,
});
