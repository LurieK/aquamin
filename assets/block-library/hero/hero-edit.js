/**
 * hero editor interface
 *
 * This defines how the block works
 * within the back-end block editor.
 */

/**
 * Import edit dependencies
 */
import classnames from "classnames";

const { __ } = wp.i18n;
const { useBlockProps, InnerBlocks, RichText, MediaPlaceholder } = wp.blockEditor;

/**
 * Generate block editor component
 */
const heroBlockEdit = ({ attributes, setAttributes, className }) => {
  const { title, subtitle, backgroundImage } = attributes;

  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };

  const onChangeSubtitle = (newSubtitle) => {
    setAttributes({ subtitle: newSubtitle });
  };

const onSelectImage = (media) => {
  if (media && media.url) {
    setAttributes({ backgroundImage: media.url });
  } else {
    console.error('Media object is undefined or media URL is missing');
  }
};

const blockProps = useBlockProps({
  className: classnames("hero", className),
  style: backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {},
});


      const ALLOWED_BLOCKS = ['core/button']; // Specify allowed blocks here


  return (
    <div {...blockProps}>
      <RichText
        tagName="h1"
        className="slide-in-left"
        value={title}
        onChange={onChangeTitle}
        placeholder={__("Enter your title here", "aquamin")}
      />
      <RichText
        tagName="h3"
        className="slide-in-right"
        value={subtitle}
        onChange={onChangeSubtitle}
        placeholder={__("Enter your subtitle here", "aquamin")}
      />
      <MediaPlaceholder
        onSelect={onSelectImage}
        allowedTypes={["image"]}
        labels={{ title: "Background Image" }}
        value={backgroundImage}
      />

	  <div className="hero-buttons">
                <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
            </div>
    </div>
  );
};
export default heroBlockEdit;
