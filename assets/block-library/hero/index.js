/**
 * hero block main entry point
 *
 * This file orchestrates all the script files
 * together to create a WordPress block.
 */

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
	description: __('this is the hero for the top of the page', 'aquamin'),
	icon: Icon,
	edit,
	save,
});
