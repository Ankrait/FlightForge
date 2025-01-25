export type OriginType = 'city' | 'country' | 'airport';

export interface IOrigin {
  code: string;
  type: OriginType;
}
