import { useCategoryImage } from './useCategoryImage';

export default function wrapUseCategoryContent(originalUseCategoryContent) {
    return function(props) {
        // we cloud also overwrite some props before we execute the useCheckout function.
        const originalReturn = originalUseCategoryContent(props);
        // we partly overwrite the result and extend it
        return { ...originalReturn, ...useCategoryImage(props) };
    };
}
