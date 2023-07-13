import { gql } from '@apollo/client';

export const GET_CATEGORY_IMAGE = gql`
    query getCategoryImageData($id: String!) {
        categories(filters: { category_uid: { in: [$id] } }) {
            # eslint-disable-next-line @graphql-eslint/require-id-when-available
            items {
                uid
                image
            }
        }
    }
`;

export default { getCategoryImage: GET_CATEGORY_IMAGE };
