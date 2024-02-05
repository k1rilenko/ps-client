export interface CategoryGridDto {
  data: CategoryGrid;
}

export interface CategoryGrid {
  categoryGridRetrieve: CategoryGridRetrieve;
}

export interface CategoryGridRetrieve {
  __typename: string;
  concepts: Concept[];
  facetOptions: FacetOption[];
  id: string;
  localizedName: string;
  pageInfo: PageInfo;
  products: any[];
  reportingName: string;
  sortedBy: SortedBy;
  sortingOptions: SortingOption[];
}

export interface Concept {
  __typename: string;
  id: string;
  media: Media[];
  name: string;
  products: Product[];
}

export interface Media {
  __typename: string;
  role: string;
  type: string;
  url: string;
}

export interface Product {
  __typename: string;
  id: string;
}

export interface FacetOption {
  __typename: string;
  displayName: string;
  name: string;
  values: Value[];
}

export interface Value {
  __typename: string;
  count: number;
  displayName: string;
  key: string;
}

export interface PageInfo {
  __typename: string;
  isLast: boolean;
  offset: number;
  size: number;
  totalCount: number;
}

export interface SortedBy {
  __typename: string;
  displayName: string;
  isAscending: boolean;
  name: string;
}

export interface SortingOption {
  __typename: string;
  displayName: string;
  isAscending: boolean;
  name: string;
}
