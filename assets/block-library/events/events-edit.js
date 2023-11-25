/**
 * events editor interface
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
const eventsBlockEdit = ({ attributes }) => {
	return (
	<>
		<h2>This is a H2 in edit.js</h2>
			<ServerSideRender block="aquamin/events" attributes={attributes} />
		<input></input>
	</>
	);
};
export default eventsBlockEdit;
