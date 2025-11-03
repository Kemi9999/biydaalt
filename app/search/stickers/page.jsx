"use client";
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, ChevronDown } from 'lucide-react';

export default function StickersPage() {
  const [selectedCollection, setSelectedCollection] = useState('Stickers');
  const [selectedSort, setSelectedSort] = useState('Relevance');

  const collections = [
    'All',
    'Bags',
    'Drinkware',
    'Electronics',
    'Footware',
    'Headwear',
    'Hoodies',
    'Jackets',
    'Kids',
    'Pets',
    'Shirts',
    'Stickers'
  ];

  const sortOptions = [
    { name: 'Relevance', href: '/search/stickers' },
    { name: 'Trending', href: '/search/stickers?sort=trending-desc' },
    { name: 'Latest arrivals', href: '/search/stickers?sort=latest-desc' },
    { name: 'Price: Low to high', href: '/search/stickers?sort=price-asc' },
    { name: 'Price: High to low', href: '/search/stickers?sort=price-desc' }
  ];

  const products = [
    {
      name: 'Acme Sticker',
      price: '$4.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker.png?v=1690003619',
      href: '/product/acme-sticker'
    },
    {
      name: 'Acme Rainbow Sticker',
      price: '$4.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker-rainbow.png?v=1690003602',
      href: '/product/acme-rainbow-sticker'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <button 
            aria-label="Open mobile menu" 
            className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
          >
            <Menu className="h-4" />
          </button>
        </div>
        
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <a className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6" href="/">
              <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-label="Acme Store logo" 
                  viewBox="0 0 32 28" 
                  className="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]"
                >
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                Acme Store
              </div>
            </a>
            
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search">
                  All
                </a>
              </li>
              <li>
                <a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search/shirts">
                  Shirts
                </a>
              </li>
              <li>
                <a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search/stickers">
                  Stickers
                </a>
              </li>
            </ul>
          </div>
          
          <div className="hidden justify-center md:flex md:w-1/3">
            <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full" action="/search">
              <input 
                type="text" 
                placeholder="Search for products..." 
                autoComplete="off" 
                className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400" 
                name="q" 
                defaultValue=""
              />
              <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                <Search className="h-4" />
              </div>
            </form>
          </div>
          
          <div className="flex justify-end md:w-1/3">
            <button aria-label="Open cart">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                <ShoppingCart className="h-4 transition-all ease-in-out hover:scale-110" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        {/* Left Sidebar - Collections */}
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <nav>
            <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">Collections</h3>
            
            {/* Desktop Collection List */}
            <ul className="hidden md:block">
              {collections.map((collection) => (
                <li key={collection} className="mt-2 flex text-black dark:text-white">
                  {collection === selectedCollection ? (
                    <p className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline underline-offset-4">
                      {collection}
                    </p>
                  ) : (
                    <a 
                      className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100" 
                      href={`/search/${collection.toLowerCase()}`}
                    >
                      {collection}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Collection Dropdown */}
            <ul className="md:hidden">
              <div className="relative">
                <div className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30">
                  <div>{selectedCollection}</div>
                  <ChevronDown className="h-4" />
                </div>
              </div>
            </ul>
          </nav>
        </div>

        {/* Center - Product Grid */}
        <div className="order-last min-h-screen w-full md:order-none">
          <section>
            <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <li key={index} className="aspect-square transition-opacity animate-fadeIn">
                  <a className="relative inline-block h-full w-full" href={product.href}>
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                      <img 
                        alt={product.name}
                        loading="lazy"
                        src={product.image}
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                        style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                      />
                      <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                          <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                            {product.name}
                          </h3>
                          <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                            {product.price}<span className="ml-1 inline hidden @[275px]/label:inline">USD</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Sidebar - Sort */}
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <nav>
            <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">Sort by</h3>
            
            {/* Desktop Sort List */}
            <ul className="hidden md:block">
              {sortOptions.map((option) => (
                <li key={option.name} className="mt-2 flex text-sm text-black dark:text-white">
                  {option.name === selectedSort ? (
                    <p className="w-full hover:underline hover:underline-offset-4 underline underline-offset-4">
                      {option.name}
                    </p>
                  ) : (
                    <a 
                      className="w-full hover:underline hover:underline-offset-4" 
                      href={option.href}
                    >
                      {option.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Sort Dropdown */}
            <ul className="md:hidden">
              <div className="relative">
                <div className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30">
                  <div>{selectedSort}</div>
                  <ChevronDown className="h-4" />
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-sm text-neutral-500 dark:text-neutral-400">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
          <div>
            <a className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
              <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[30px] w-[30px] rounded-lg">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-label="Acme Store logo" 
                  viewBox="0 0 32 28" 
                  className="h-4 w-4 fill-black dark:fill-white h-[10px] w-[10px]"
                >
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
              <span className="uppercase">Acme Store</span>
            </a>
          </div>
          
          <nav>
            <ul>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/terms-conditions">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/shipping-return-policy">
                  Shipping &amp; Return Policy
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/frequently-asked-questions">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="md:ml-auto">
            <a 
              className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white" 
              aria-label="Deploy on Vercel" 
              href="https://vercel.com/templates/next.js/nextjs-commerce"
            >
              <span className="px-3">▲</span>
              <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
              <span className="px-3">Deploy</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
            <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <p>
              <a href="https://github.com/vercel/commerce">View the source</a>
            </p>
            <p className="md:ml-auto">
              <a href="https://vercel.com" className="text-black dark:text-white">
                Created by ▲ Vercel
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}