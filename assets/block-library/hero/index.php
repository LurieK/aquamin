<?php
/**
 * Gutenberg block setup
 */

// enqueue block assets
wp_register_style( 'aquamin-block-hero-style', get_template_directory_uri() . '/dist/block-library/hero/hero-style.css', null, '1.0' );
wp_register_script( 'aquamin-block-hero-script', get_template_directory_uri() . '/dist/block-library/hero/hero-script.js', null, '1.0', true );

// register inner blocks
register_block_type( __DIR__ . '/hero-item' );

// register the block
register_block_type( __DIR__, array(
	'style_handles' => ['aquamin-block-hero-style'],
	'view_script_handles' => ['aquamin-block-hero-script'],
) );
