"use client";

import { signOut, signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <>
      <div>
        {status === "authenticated" ? (
          <>
            <div>
              <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center justify-between gap-4 px-2 sm:py-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          className="rounded-full hover:border-primary-foreground border-2"
                          src={session?.user?.image}
                          width={30}
                          height={30}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {session?.user.name}
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href="/"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                          <Home className="h-5 w-5" />
                          <span className="sr-only">Dashboard</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <ModeToggle />
                      </TooltipTrigger>
                      <TooltipContent side="right">Mode Toggle</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          className="rounded mx-2 p-2"
                          onClick={() => signOut()}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">SignOut</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href="#"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                          <Settings className="h-5 w-5" />
                          <span className="sr-only">Settings</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </nav>
              </aside>
            </div>
          </>
        ) : (
          <Button className="ml-20" onClick={() => signIn("google")}>
            SignIn
          </Button>
        )}
      </div>
    </>
  );
};

export default Navbar;
