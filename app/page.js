"use client"; // Because your Home page uses state, events, and client-side behavior

import React from "react";
import { ShoppingCart, Search, Menu } from "lucide-react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Acme Circles T-Shirt",
      price: "$20.00 USD",
      image:
        "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965",
      href: "/product/acme-geometric-circles-t-shirt",
      large: true,
    },
    {
      id: 2,
      name: "Acme Drawstring Bag",
      price: "$12.00 USD",
      image:
        "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304",
      href: "/product/acme-drawstring-bag",
    },
    {
      id: 3,
      name: "Acme Cup",
      price: "$15.00 USD",
      image:
        "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088",
      href: "/product/acme-cup",
    },
  ];

  const carouselProducts = [
    {
      name: "Acme Mug",
      price: "$15.00",
      image:
        "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527",
      href: "/product/acme-mug",
    },
    {
      name: "Acme Hoodie",
      price: "$50.00",
      image:
        "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482",
      href: "/product/acme-hoodie",
    },
    {
      name: "Acme Baby Onesie",
      price: "$10.00",
      image:
        "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png?v=1690002632",
      href: "/product/acme-baby-onesie",
    },
    {
      name: "Acme Baby Cap",
      price: "$10.00",
      image:
        "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png?v=1690002570",
      href: "/product/acme-baby-cap",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-carousel {
          animation: carousel 20s linear infinite;
        }
        
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>

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

      {/* Product Grid */}
      <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        {/* Large Product - T-Shirt */}
        <div className="md:col-span-4 md:row-span-2">
          <a className="relative block aspect-square h-full w-full" href={products[0].href}>
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img 
                alt={products[0].name}
                src={products[0].image}
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                    {products[0].name}
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    $20.00<span className="ml-1 inline hidden @[275px]/label:inline">USD</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Small Product - Bag */}
        <div className="md:col-span-2 md:row-span-1">
          <a className="relative block aspect-square h-full w-full" href={products[1].href}>
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img 
                alt={products[1].name}
                src={products[1].image}
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                    {products[1].name}
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    $12.00<span className="ml-1 inline hidden @[275px]/label:inline">USD</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Small Product - Cup */}
        <div className="md:col-span-2 md:row-span-1">
          <a className="relative block aspect-square h-full w-full" href={products[2].href}>
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img 
                alt={products[2].name}
                src={products[2].image}
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                    {products[2].name}
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    $15.00<span className="ml-1 inline hidden @[275px]/label:inline">USD</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="w-full overflow-x-auto pb-6 pt-1">
        <ul className="flex animate-carousel gap-4">
          {[...carouselProducts, ...carouselProducts, ...carouselProducts].map((product, index) => (
            <li key={index} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <a className="relative h-full w-full" href={product.href}>
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img 
                    alt={product.name}
                    loading="lazy"
                    src={product.image}
                    className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
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
      </div>

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
                <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300 text-black dark:text-neutral-300" href="/">
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