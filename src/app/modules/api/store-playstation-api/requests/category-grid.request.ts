import { StorePlaystationApiRequest } from '../models/store-playstation-api-request';
import { CategoryGridDto } from '../dto/category-grid.dto';

const variables = {
  id: '28c9c2b2-cecc-415c-9a08-482a605cb104',
  pageArgs: { size: 24, offset: 24 },
  sortBy: null,
  filterBy: [],
  facetOptions: [
    'ageRating',
    'conceptGenres',
    'conceptReleaseDate',
    'conceptVrCompatibility',
    'webBasePrice',
    'productGenres',
    'productReleaseDate',
    'productVrCompatibility',
    'storeDisplayClassification',
    'targetPlatforms',
  ],
  maxResults: null,
};

const extensions = { persistedQuery: { version: 1, sha256Hash: '4ce7d410a4db2c8b635a48c1dcec375906ff63b19dadd87e073f8fd0c0481d35' } };

export const categoryGridRequest = (): StorePlaystationApiRequest<null, CategoryGridDto> => ({
  method: 'GET',
  url: 'api/graphql/v1/op',
  params: {
    operationName: 'categoryGridRetrieve',
    extensions: JSON.stringify(extensions),
    variables: JSON.stringify(variables),
  },
});
