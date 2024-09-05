interface IQR_GetOrgGroups {
  group_id: number;
  group_name: string;
  group_description: string;
}

type IApiRes_GetOrgGroups = IQR_GetOrgGroups[] | [];

export default IApiRes_GetOrgGroups;
