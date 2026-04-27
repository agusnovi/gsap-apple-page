import { use } from 'react';
import Navbar from './navbar';
import { getMenus } from '@/actions/header';

export default function Header() {
  const menus = use(getMenus());

  return (
    <header className="fixed top-0 z-2 h-[62px] left-0 w-full bg-white">
      <Navbar menus={menus} />
    </header>
  );
}