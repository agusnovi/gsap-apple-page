'use client'
import { useState } from 'react';
import Categories from "./categories";
import Navbar from './navbar';

export default function Header() {
    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    return (
      <header className="fixed top-0 z-12 left-0 w-full z-10 bg-white">
        <Navbar />
        <Categories />
      </header>
    );
}