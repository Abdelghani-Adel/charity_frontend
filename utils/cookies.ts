export function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}

export function setCookie(
  name: string,
  value: string,
  expiration: string
): void {
  const date = new Date();
  date.setTime(date.getTime() + 1 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
