import { useEffect } from 'react';
import OPERATIONS from './categoryImage.gql.js';
import { useLazyQuery } from '@apollo/client';

export const useCategoryImage = (props) => {
    const { categoryId } = props;

    const { getCategoryImage } = OPERATIONS;

    const [getImage, { data: categoryImage }] = useLazyQuery(
        getCategoryImage,
        {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        }
    );

    useEffect(() => {
        if (categoryId) {
            getImage({
                variables: {
                    id: categoryId
                }
            });
        }
    }, [categoryId, getImage]);

    return {
        image: categoryImage?.categories.items[0].image
    };
};
