import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { CgEditUnmask } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import AuthUser from "../../Hooks/AuthUser";
import GetUserHook from "../../Hooks/FetchFunction/GetUserHook";

// const { userInfo, userRole } = AuthUser();
// console.log(userInfo);

function ProfileMenu() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { logout, token, userInfo } = AuthUser();
  console.log("userInfo from nav ", token);
  useEffect(() => {
    const baseUrl = `https://go-tutor-server.zayedabdullah.com/api/v1/users/${userInfo._id}`;
    GetUserHook(baseUrl, setUser, setLoading);
  }, [userInfo._id]);

  // profile menu component

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      route: "/my-profile",
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      route: "/",
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-blue-500 p-0.5"
            src={user?.imageURL}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-2">
        {profileMenuItems.map(({ label, icon, route }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <Link
              to={route}
              key={label}
              onClick={isLastItem ? logout : closeMenu}
              className={`flex items-center gap-2 rounded mb-2${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
                onClick: {},
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list component
const navListItems = [
  {
    label: "Become A Teacher",
    icon: CubeTransparentIcon,
    route: "/provide-teacher-info",
  },
  {
    label: "Tuitions",
    icon: Square3Stack3DIcon,
    route: "/tuition-posts",
  },
  {
    label: "Tutors",
    icon: BsPeople,
    route: "/tutors",
  },
  {
    label: "Post",
    icon: CgEditUnmask,
    route: "/post-a-tuition",
  },
  // {
  //   label: "Blog",
  //   icon: CodeBracketSquareIcon,
  //   route: "/blog",
  // },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, route }, key) => (
        <Link
          key={label}
          to={route}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Link>
      ))}
    </ul>
  );
}

const ComplexNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const { token } = AuthUser();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto p-2 rounded-t-none ">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Link
          to="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-xl"
        >
          Go<span className="text-[#7839ff] font-bold">Tutor</span>
        </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {token ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            {" "}
            <button className="absolute top-0 right-0  bg-[#7839ff] text-white px-5 py-1 rounded-lg">
              Sign In
            </button>
          </Link>
        )}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default ComplexNavbar;
