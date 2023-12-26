"use client"

import { Menu } from "@headlessui/react";

export default function Home() {
  return (
    <div>
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
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
      </Menu>
    </div>
  );
}
