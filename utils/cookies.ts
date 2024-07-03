export function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}

export function setCookie(name: string, value: string, expiration: string): void {
  const date = new Date();
  const expirationDuration = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
  date.setTime(date.getTime() + expirationDuration);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

export function deleteCookie(name: string): void {
  // Set the cookie with the same name and an expiration date in the past
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}
