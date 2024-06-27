export function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}

export function setCookie(name: string, value: string, expiration: string): void {
  const date = new Date();
  const expires = "expires=" + expiration;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
