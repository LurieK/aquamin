/**
 * hero editor interface
 *
 * This defines how the block works
 * within the back-end block editor.
 */

/**
 * Import edit dependencies
 */
const ServerSideRender = wp.serverSideRender;

/**
 * Generate block editor component
 */
const heroBlockEdit = ({ attributes }) => {
	return (
		<ServerSideRender
			block="aquamin/hero"
			attributes={attributes}
		/>
	);
};
export default heroBlockEdit;
