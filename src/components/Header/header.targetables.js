const interceptComponent = Header => {
    Header.insertBeforeSource('{searchBar}', '', {
        remove: `{searchBar}`.length
    })
        .insertAfterSource('<MegaMenu />\n', '{searchBar}')
        .removeJSX('div className={classes.switchersContainer}')
        .setJSXProps('Logo', { width: '{40}', height: '{40}' });
};

exports.interceptComponent = interceptComponent;
