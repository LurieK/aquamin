/**
 * block-2 block main entry point
 *
 * This file orchestrates all the script files
 * together to create a WordPress block.
 */

/**
 * Import dependencies
 */
import Icon from './icon.inline.svg';
import edit from './block-2-edit';
import save from './block-2-save';
import block from './block.json';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
registerBlockType(block.name, {
	title: __('block-2', 'aquamin'),
	description: __('block-2 block', 'aquamin'),
	icon: Icon,
	edit,
	save,
});
