const interceptComponent = Footer => {
    Footer.removeJSX("Newsletter");
    Footer.insertBeforeJSX('div className={classes.links}', '<Newsletter />');
};

exports.interceptComponent = interceptComponent;