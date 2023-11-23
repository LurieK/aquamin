/**
 * events block main entry point
 *
 * This file orchestrates all the script files
 * together to create a WordPress block.
 */

/**
 * Import dependencies
 */
import Icon from './icon.inline.svg';
import edit from './events-edit';
import save from './events-save';
import block from './block.json';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
registerBlockType(block.name, {
	title: __('events', 'aquamin'),
	description: __('this is for events', 'aquamin'),
	icon: Icon,
	edit,
	save,
});
