
const imageCode = `const categoryImageElement = image && <CategoryImage src={image} name={categoryName}/>;\n`

const interceptComponent = CategoryContent => {
    CategoryContent.addImport('import CategoryImage from "src/components/CategoryImage/categoryImage"')

    CategoryContent
        .insertAfterSource(
            'totalCount,\n',
            'image,\n'
        )
        .insertBeforeSource('const categoryDescriptionElement', imageCode)
        .insertAfterSource('{categoryDescriptionElement}\n', '{categoryImageElement}\n')
        .insertAfterSource('<div className={classes.categoryHeader}>\n', '<div className={classes.titleWrapper}>')
        .insertAfterSource('{categoryDescriptionElement}', '</div>')
};

exports.interceptComponent = interceptComponent;
