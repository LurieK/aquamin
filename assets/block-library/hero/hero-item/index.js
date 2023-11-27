/**
 * hero item block main entry point
 *
 * This file orchestrates all the script files
 * together to create a WordPress child block.
 */

/**
 * Import dependencies
 */
import Icon from './icon.inline.svg';
import edit from './hero-item-edit';
import save from './hero-item-save';
import block from './block.json';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
registerBlockType(block.name, {
	title: __('hero item', 'aquamin'),
	description: __('this is a button, or additional text that may be needed', 'aquamin'),
	icon: Icon,
	edit,
	save,
	parent: ['aquamin/hero'],
});
