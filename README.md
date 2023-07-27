# PWA Studio Customization

## Project info
Based on [PWA Studio](https://github.com/magento/pwa-studio). Customizations leverages [@larsroettig/component-targetables](https://www.npmjs.com/package/@larsroettig/component-targetables) module to intercept core files and make necessary changes. 

Scaffolded with [@magento/create-pwa](https://www.npmjs.com/package/@magento/create-pwa). \
Backend URI used in sample .env file: https://master-7rqtwti-c5v7sxvquxwl4.eu-4.magentosite.cloud/ 


## Prerequisites
- NodeJS >=14 LTS
- NPM

## Project setup

1. Clone repo
2. Install dependencies
```
npm i
``` 
3. Create sample environment variables file
```
cp .env.sample .env
```
4a. Run development server 
```
npm run watch
``` 
4b. or production server
```
npm run build
npm run start
```
## Automated testing
Project has already few tests written using [Cypress](https://www.cypress.io/) to run them via CLI run:
```
npm run cy:run
```  
Alternatively, you can use Cypress test runner with it's own GUI, run:
```
npm run cy:open
```

Documentation for Magento PWA Studio packages is located at [https://developer.adobe.com/commerce/pwa-studio/](https://developer.adobe.com/commerce/pwa-studio/).
