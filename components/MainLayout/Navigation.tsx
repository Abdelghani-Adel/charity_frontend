import { TOKEN_NAME } from "@/assets/enums";
import navLinks, { INavLink } from "@/assets/navigation_links";
import { getCookie } from "@/utils/cookies";
import { decodeToken } from "@/utils/jwt";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { v4 } from "uuid";

const getLinksForUser = (userRoles: string[]) => {
  return navLinks
    .filter((item) => item.roles.some((role) => userRoles.includes(role)))
    .map((item) => ({
      ...item,
      children: item.children.filter((child) =>
        child.roles.some((role) => userRoles.includes(role))
      ),
    }));
};

const Navigation = () => {
  const [userRoles, setUserRoles] = useState<string[]>([]);

  useEffect(() => {
    const token = getCookie(TOKEN_NAME);
    const decodedToken = decodeToken(token ?? "");
    if (decodedToken) {
      setUserRoles(decodedToken.roles);
    }
  }, []);

  const userLinks = getLinksForUser(userRoles);

  return (
    <nav className="w-full">
      <ul className="flex flex-col space-y-4">
        {userLinks.map((item) => (
          <NavItem item={item} key={v4()} />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ item }: { item: INavLink }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => setIsOpened(!isOpened);
  return (
    <li key={item.href} className="flex flex-col items-start">
      <div className="flex items-center w-full">
        {/* Main item */}
        <Link href={item.href} className="flex items-center w-full">
          <item.icon />
          <span className={`mr-2 transition-width duration-300 overflow-hidden w-auto `}>
            {item.label}
          </span>
        </Link>

        {/* Arrow */}
        {item.children.length > 0 && (
          <button onClick={toggle} className="focus:outline-none ml-2">
            <IoChevronDownOutline
              className={`h-4 w-4 transition-transform ${isOpened ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        )}
      </div>

      {/* Sub items */}
      {item.children.length > 0 && isOpened && (
        <ul
          className={`mt-2 ml-2  transition-max-height duration-300 overflow-hidden  w-full max-h-screen `}
        >
          {item.children.map((child) => (
            <li key={child.href} className="p-2 w-full hover:bg-gray-600">
              <Link href={child.href} className="flex items-center">
                <span className="ml-2">{child.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navigation;
