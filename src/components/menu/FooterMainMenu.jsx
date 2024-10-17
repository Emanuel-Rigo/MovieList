"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiCircleList, CiSquarePlus } from "react-icons/ci";
import SearchBar from "./SearchBar";
import OrderListButtons from "./OrderListButtons";
import CardMenuMovie from "./CardMenuMovie";

export const FooterMainMenu = () => {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col gap-4 justify-between h-full ">
      <div className="">
        <div className="pb-4">
          <CardMenuMovie></CardMenuMovie>
        </div>
        <div className="pb-4">
          <Link
            style={{ fontSize: "4rem" }}
            className="bg-neutral-900 hover:bg-neutral-950 rounded-lg w-full h-18 flex justify-between items-center text-orange-700 hover:text-orange-500"
            href="/add-movie"
          >
            <span className="text-lg ps-4 text-white">Movies: 291</span>
            <CiSquarePlus />
          </Link>
        </div>{" "}
        <div className="pb-4">
          <OrderListButtons />
        </div>
        {/* {pathname == "/" ? (
        <Link
          style={{ fontSize: "4rem" }}
          className="bg-orange-500 rounded-lg  h-36 flex w-full justify-center items-center text-2xl"
          href="/list"
        >
          <CiCircleList />
        </Link>
      ) : (
        <Link href="/">Home</Link>
      )} */}
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};
