/**
 * hero save interface
 *
 * This defines how the block gets
 * saved into the database. If
 * it returns null or <InnerBlocks.Content />
 * then is a dynamic block.
 */

/**
 * Import save dependencies
 */

import classnames from 'classnames';

const { useBlockProps, RichText, InnerBlocks } = wp.blockEditor;

/**
 * Generate block HTML to save to the database
 */
const heroBlockSave = ({ attributes, className }) => {
	// get the attributes we care about
	const { title, subtitle, backgroundImage } = attributes;

	// set props for the outermost block element
	const blockProps = useBlockProps.save({
        className: classnames('hero', className),
        style: { backgroundImage: `url(${backgroundImage})` },
    });

	// apply wrapper props to outermost block element so it can contain inner blocks

	// output the block's html
	return (
		 <div {...blockProps}>
            <div className='hero-text'>
                <RichText.Content tagName="h1" className='slide-in-left' value={title} />
                <RichText.Content tagName="h3" className='slide-in-right' value={subtitle} />
            </div>
			<div className="hero-buttons">
                <InnerBlocks.Content />
            </div>
        </div>
	);
};
export default heroBlockSave;
