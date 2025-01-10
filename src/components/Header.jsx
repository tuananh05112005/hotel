import {
  Disclosure, DisclosureButton, DisclosurePanel,
  Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/react';
import {
  Bars3Icon, BellIcon,
  ChevronDownIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
<Routes>
<Route path="/about" element={<About/>} />
</Routes>


const navigation = [
  { name: 'Trang chủ', href: '/', current: true },
  { name: 'Về chúng tôi', href: '/about', current: false },
  { 
    name: 'Phòng', 
    href: '#',
    current: false,
    submenu: [
      { name: 'Phòng đơn', href: '/single-room' },
      { name: 'Phòng đôi', href: '/double-room' },
      { name: 'Phòng VIP', href: '/vip-room' }
    ]
  },
  { 
    name: 'Ẩm thực', 
    href: '#',
    current: false,
    submenu: [
      { name: 'Nhà hàng', href: '/restaurant' },
      { name: 'Bar & Cafe', href: '/bar-cafe' },
      { name: 'Tiệc & Sự kiện', href: '/events' }
    ]
  },
  { name: 'Dịch vụ', href: '/services', current: false },
  { name: 'Liên hệ', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  alt="Logo"
                  src="assets/logo.webp"
                  className="h-12 w-auto"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-2">
                {navigation.map((item) => !item.submenu ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current 
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900',
                      'px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Menu as="div" key={item.name} className="relative">
                    <MenuButton className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-200 text-sm font-medium inline-flex items-center">
                      {item.name}
                      <ChevronDownIcon className="ml-1 size-4" />
                    </MenuButton>
                    <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-1">
                      {item.submenu.map((subitem) => (
                        <MenuItem key={subitem.name}>
                          <a href={subitem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                            {subitem.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                <button className="rounded-full p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200">
                  <BellIcon className="size-5" />
                </button>

                <Menu as="div" className="relative">
                  <MenuButton className="flex rounded-full ring-1 ring-gray-200 hover:ring-gray-300 transition-all duration-200">
                    <img
                      alt="User"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-1">
                    <MenuItem>
                      <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                        Tài khoản
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                        Cài đặt
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                        Đăng xuất
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none">
                    {open ? (
                      <XMarkIcon className="size-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="size-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {!item.submenu ? (
                    <DisclosureButton
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-gray-900',
                        'block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50'
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                  ) : (
                    <Menu>
                      <MenuButton className="w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-left">
                        <span className="flex items-center justify-between">
                          {item.name}
                          <ChevronDownIcon className="size-5" aria-hidden="true" />
                        </span>
                      </MenuButton>
                      <MenuItems className="mt-1 ml-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <MenuItem key={subitem.name}>
                            <a
                              href={subitem.href}
                              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                            >
                              {subitem.name}
                            </a>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  )}
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}