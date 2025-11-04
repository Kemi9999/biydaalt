"use client";
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function ProductPage() {
  const [selectedImage, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('');

  const productImages = [
    'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965',
    'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-2.png?v=1689798965',
    'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-circles-blue.png?v=1690003396'
  ];

  const colors = [
    { name: 'Black', available: true },
    { name: 'White', available: true },
    { name: 'Blue', available: false }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  const relatedProducts = [
    {
      name: 'Acme T-Shirt',
      price: '$20.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-black.png?v=1690003675',
      href: '/product/acme-t-shirt'
    },
    {
      name: 'Acme Prism T-Shirt',
      price: '$25.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-1.png?v=1690003571',
      href: '/product/acme-rainbow-prism-t-shirt'
    },
    {
      name: 'Acme Baby Cap',
      price: '$10.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png?v=1690002570',
      href: '/product/acme-baby-cap'
    },
    {
      name: 'Acme Cap',
      price: '$20.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hat-1.png?v=1690002833',
      href: '/product/acme-cap'
    },
    {
      name: 'Acme Baby Onesie',
      price: '$10.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png?v=1690002632',
      href: '/product/acme-baby-onesie'
    },
    {
      name: 'Acme Hoodie',
      price: '$50.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482',
      href: '/product/acme-hoodie'
    },
    {
      name: 'Acme Cup',
      price: '$15.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088',
      href: '/product/acme-cup'
    },
    {
      name: 'Acme Bomber Jacket',
      price: '$50.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bomber-jacket-army.png?v=1690002722',
      href: '/product/acme-bomber-jacket'
    },
    {
      name: 'Acme Mug',
      price: '$15.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527',
      href: '/product/acme-mug'
    },
    {
      name: 'Acme Drawstring Bag',
      price: '$12.00',
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304',
      href: '/product/acme-drawstring-bag'
    }
  ];

  const handlePrevImage = () => {
    setSelectedImg((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImg((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-black text-white">
  
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


      <main className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
     
          <div className="h-full w-full basis-full lg:basis-4/6">
           
            <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
              <img 
                alt="Acme Circles T-Shirt"
                src={productImages[selectedImage]}
                className="h-full w-full object-contain"
              />
              
              {/* Image Navigation */}
              <div className="absolute bottom-[15%] flex w-full justify-center">
                <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
                  <button 
                    onClick={handlePrevImage}
                    aria-label="Previous product image" 
                    className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                  >
                    <ChevronLeft className="h-5" />
                  </button>
                  <div className="mx-1 h-6 w-px bg-neutral-500"></div>
                  <button 
                    onClick={handleNextImage}
                    aria-label="Next product image" 
                    className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                  >
                    <ChevronRight className="h-5" />
                  </button>
                </div>
              </div>
            </div>

        
            <ul className="my-12 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
              {productImages.map((image, index) => (
                <li key={index} className="h-20 w-20">
                  <button 
                    onClick={() => setSelectedImg(index)}
                    aria-label="Select product image" 
                    className="h-full w-full"
                  >
                    <div className={`group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black ${selectedImage === index ? 'border-2 border-blue-600' : 'border-neutral-200 dark:border-neutral-800'}`}>
                      <img 
                        alt={`Acme Circles T-Shirt - ${index + 1}`}
                        src={image}
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="basis-full lg:basis-2/6">
            <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
              <h1 className="mb-2 text-5xl font-medium">Acme Circles T-Shirt</h1>
              <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
                <p>$20.00<span className="ml-1 inline">USD</span></p>
              </div>
            </div>


            <dl className="mb-8">
              <dt className="mb-4 text-sm uppercase tracking-wide">Color</dt>
              <dd className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => color.available && setSelectedColor(color.name)}
                    disabled={!color.available}
                    title={`Color ${color.name}${!color.available ? ' (Out of Stock)' : ''}`}
                    className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                      selectedColor === color.name 
                        ? 'ring-1 ring-blue-600' 
                        : 'ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600'
                    } ${
                      !color.available 
                        ? 'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700'
                        : ''
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </dd>
            </dl>

      
            <dl className="mb-8">
              <dt className="mb-4 text-sm uppercase tracking-wide">Size</dt>
              <dd className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    title={`Size ${size}`}
                    className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                      selectedSize === size 
                        ? 'ring-1 ring-blue-600' 
                        : 'ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </dd>
            </dl>

            {/* Product Description */}
            <div className="prose mx-auto max-w-6xl text-base leading-7 text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white mb-6 text-sm leading-tight dark:text-white/[60%]">
              60% combed ringspun cotton/40% polyester jersey tee.
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={!selectedSize}
              className={`relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white ${
                !selectedSize ? 'cursor-not-allowed opacity-60 hover:opacity-60' : 'hover:opacity-90'
              }`}
            >
              <div className="absolute left-0 ml-4">
                <Plus className="h-5" />
              </div>
              {selectedSize ? 'Add To Cart' : 'Please select an option'}
            </button>
          </div>
        </div>

        <div className="py-8">
          <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
          <ul className="flex w-full gap-4 overflow-x-auto pt-1">
            {relatedProducts.map((product, index) => (
              <li key={index} className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
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
      </main>

    
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