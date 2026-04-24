import Categories from "./categories";
import Navbar from './navbar';

export default function Header() {
    return (
      <header className="fixed top-0 z-2 left-0 w-full bg-white">
        <Navbar />
        <Categories />
      </header>
    );
}