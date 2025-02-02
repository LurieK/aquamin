<?php
/**
 * My My Dynamic Block dynamic block PHP.
 *
 * This file renders the dynamic block.
 * 
 * @param  array $args 					Arguments from get_template call.
 * @param  array $args[ 'attributes' ]  Block attributes.
 * @param  array $args[ 'content' ]     Block content.
 * @param  array $args[ 'block' ]       Block instance.
 * @return string
 */
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'my-dynamic-block' ) ) ?>>
	<!-- replace this demo code with your own: -->
	<?php echo $args[ 'content' ] !== '' ? $args[ 'content' ] : 'The My Dynamic Block block.'; ?>
</div>