
const imageCode = `const categoryImageElement = image && <CategoryImage src={image} name={categoryName}/>;\n`

const interceptComponent = CategoryContent => {
    CategoryContent.addImport('import CategoryImage from "src/components/CategoryImage/categoryImage"')

    CategoryContent
        .insertAfterSource(
            'totalCount,\n',
            'image,\n'
        )
        .insertBeforeSource('const categoryDescriptionElement', imageCode)
        .insertBeforeSource('<StoreTitle>{categoryName}</StoreTitle>\n', '{categoryImageElement}\n')
};

exports.interceptComponent = interceptComponent;
