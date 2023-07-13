const interceptComponent = Footer => {
    // Execute our JSX manipulation
    Footer.removeJSX("Newsletter");
    Footer.insertBeforeJSX('div className={classes.links}', '<Newsletter />');
};

exports.interceptComponent = interceptComponent;