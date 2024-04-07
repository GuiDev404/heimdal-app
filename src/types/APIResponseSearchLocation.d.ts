export interface LocalNames {
  [key: string]: string | undefined;
}

export interface SearchLocation {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

// export type Coords = Pick<SearchLocation, 'lon' | 'lat'>
