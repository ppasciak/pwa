const interceptComponent = Header => {
    Header
        .insertBeforeSource('{searchBar}', '', {remove: `{searchBar}`.length})
        .insertAfterSource('<MegaMenu />\n', '{searchBar}')
};

exports.interceptComponent = interceptComponent;
