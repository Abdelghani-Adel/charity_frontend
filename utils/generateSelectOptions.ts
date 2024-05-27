export const generateSelectOptions = (dataArray: any[], valueProp: string, labelProp: string) => {
  return dataArray.map((item) => ({
    value: item[valueProp],
    label: item[labelProp],
  }));
};
