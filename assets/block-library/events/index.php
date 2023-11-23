<?php
/**
 * Gutenberg block setup
 */

// enqueue block assets
wp_register_style( 'aquamin-block-events-style', get_template_directory_uri() . '/dist/block-library/events/events-style.css', null, '1.0' );
wp_register_script( 'aquamin-block-events-script', get_template_directory_uri() . '/dist/block-library/events/events-script.js', null, '1.0', true );

// register the block
register_block_type(
	__DIR__, array(
		'style_handles' => ['aquamin-block-events-style'],
		'view_script_handles' => ['aquamin-block-events-script'],
		'render_callback' => function( $attributes, $content, $block ) {
			ob_start();
			get_template_part(
				'assets/block-library/' . basename( __DIR__ ) . '/events-markup',
				null,
				array(
					'attributes' => $attributes,
					'content'    => $content,
					'block'      => $block,
				)
			);
			return ob_get_clean();
		},
	)
);
