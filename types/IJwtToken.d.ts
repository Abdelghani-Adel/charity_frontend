interface IJwtToken {
  id: number;
  name: string;
  username: string;
  roles: string[];
  organization_id: number;
  iat: number;
  exp: number;
}
