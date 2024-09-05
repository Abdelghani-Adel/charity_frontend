interface IQR_Indigent {
  id: number;
  name: string;
}

// Interface for the response of the `get_group_details` function
interface IQR_GetGroupInfo {
  group_name: string;
  group_description: string;
  indigents: IQR_Indigent[];
}

type IApiRes_GetGroupInfo = IQR_GetGroupInfo | [];

export default IApiRes_GetGroupInfo;
