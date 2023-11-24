<?php
/**
 * Gutenberg block setup
 */

// enqueue block assets
wp_register_style( 'aquamin-block-block-2-style', get_template_directory_uri() . '/dist/block-library/block-2/block-2-style.css', null, '1.0' );

// register the block
register_block_type( __DIR__, array(
	'style_handles' => ['aquamin-block-block-2-style'],
) );
