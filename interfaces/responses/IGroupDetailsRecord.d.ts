import IIndigentRecord from "./IIndigentRecord";

export interface IGroupDetailsRecord {
  group_details: { group_name: string; group_description: string; indigents: IIndigentRecord[] };
}
