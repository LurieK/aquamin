/**
 * events save interface
 *
 * This defines how the block gets
 * saved into the database. If
 * it returns null or <InnerBlocks.Content />
 * then is a dynamic block.
 */

/**
 * Import save dependencies
 */
const { InnerBlocks } = wp.blockEditor;

/**
 * Generate block HTML to save to the database
 */
const eventsBlockSave = () => {
	return <>
	<InnerBlocks.Content />

	<h2>This is some h2 in save.js</h2>
	
	</>;
};
export default eventsBlockSave;
