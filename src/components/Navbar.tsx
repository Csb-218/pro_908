import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
//   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
//   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import search from "@/assets/search.svg";
import slack_logo from "@/assets/slack_logo.png";
export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="fixed top-0 z-20 w-full shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <div className='flex gap-x-4'>
                <a
              id="Slack"
              aria-label="Slack logo"
              aria-current="page"
              className="flex text-3xl font-semibold items-center gap-2 py-3  whitespace-nowrap focus:outline-none "
              href="javascript:void(0)"
            >
              <img src={slack_logo} alt="Slack logo" className="h-8" />
              slack
            </a>
            
            {/*      <!-- Navigation links --> */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-normal">Product</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Enterprise</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink>Resources</NavigationMenuLink>
 
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink>Pricing</NavigationMenuLink>

                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            </div>
            {/*      <!-- Brand logo --> */}
            
            
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>

            <div className="flex gap-x-4 items-center px-6 ml-auto lg:ml-0 lg:p-0">
              {/* <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>TRY FOR FREE</span>
              </button> */} 
              <img src={search} className="mx-3"></img>

              <Link to="/login" className="text-[#4e154b] mx-4">Sign in</Link>
              <Button variant="outline" className="border-2 rounded border-[#4e154b]">TALK TO SALES</Button>
              <Button variant="default" className="bg-[#4e154b] rounded">TRY FOR FREE</Button>
             

            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </>
  );
}
