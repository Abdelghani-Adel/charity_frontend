export interface IApiRes_GetIndigentDetails {
  info: {
    indigent_id: number;
    national_id: string;
    name: string;
    phone: string | null;
    kids: number | null;
    indigency_type_name: string;
    governorate_name: string;
    city_name: string;
    district_name: string;
    address: string | null;
  } | null;
  aids:
    | {
        aid_id: number;
        organization_name: string;
        aid_type_name: string;
        description: string;
        timestamp: string;
      }[]
    | []
    | null;
}
