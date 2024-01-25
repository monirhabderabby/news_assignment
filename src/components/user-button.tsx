"use client";

// Packages
import { LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

// Local Imports
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserButton = () => {
  const session = useSession();

  if (session.status === "unauthenticated") {
    return (
      <Link href="/login">
        <User className="hover:text-orange-600 cursor-pointer" />
      </Link>
    );
  }

  const logoutHandler = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User className="hover:text-orange-600 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Button
          variant="outline"
          className="w-full flex gap-x-2"
          onClick={logoutHandler}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
