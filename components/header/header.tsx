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

/*async function getStaticProps() {
  let data: NavItems[] = []
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort,
    +(process.env.TIMEOUT ?? TIMEOUT_DEFAULT),
  );

  try {
    const response = await fetch('menus', {
      signal: controller.signal,
    });
    data = await response.json();
  } catch (e) {
    data = DEFAULT_MENU;
  } finally {
    clearTimeout(timeout);
  }

  return {
    props: {
      menus: data,
    }
  }
}*/
