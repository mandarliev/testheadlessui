"use client";

import { Menu, Transition } from "@headlessui/react";

export default function Home() {
  return (
    <div>
      <Menu as="div">
        {({ open }) => (
          <>
            <Menu.Button className="rounded bg-blue-400 p-3">Menu</Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform translate-x-10 opacity-0"
              enterTo="transform translate-x-0 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="flex flex-col">
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      className={`p-2${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Option One
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Option Two
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Option Three
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
