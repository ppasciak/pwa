const interceptComponent = Logo => {
    Logo.addImport('import logo from "src/components/Logo/logo.svg"')

    Logo.insertBeforeSource(`import logo from './VeniaLogo.svg';`, '', {
        remove: `import logo from './VeniaLogo.svg';`.length
    });
};

exports.interceptComponent = interceptComponent;
