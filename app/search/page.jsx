"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';

const p = [
    { id: '1', title: 'Acme Keyboard', handle: 'acme-mechanical-keyboard', price: '150.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/keyboard.png?v=1690003507', alt: 'Acme Keyboard' },
    { id: '2', title: 'Acme T-Shirt', handle: 'acme-t-shirt', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-black.png?v=1690003675', alt: 'Acme T-Shirt' },
    { id: '3', title: 'Acme Hoodie', handle: 'acme-hoodie', price: '50.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482', alt: 'Acme Hoodie' },
    { id: '4', title: 'Acme Circles T-Shirt', handle: 'acme-geometric-circles-t-shirt', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965', alt: 'Acme Circles T-Shirt' },
    { id: '5', title: 'Acme Prism T-Shirt', handle: 'acme-rainbow-prism-t-shirt', price: '25.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-1.png?v=1690003571', alt: 'Acme Prism T-Shirt' },
    { id: '6', title: 'Acme Cowboy Hat', handle: 'acme-cowboy-hat', price: '160.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-1.png?v=1690208765', alt: 'Acme Cowboy Hat' },
    { id: '7', title: 'Acme Slip-On Shoes', handle: 'acme-slip-on-shoes', price: '45.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/shoes-1.png?v=1690004109', alt: 'Acme Slip-On Shoes' },
    { id: '8', title: 'Acme Rainbow Sticker', handle: 'acme-rainbow-sticker', price: '4.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker-rainbow.png?v=1690003602', alt: 'Acme Rainbow Sticker' },
    { id: '9', title: 'Acme Cap', handle: 'acme-cap', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hat-1.png?v=1690002833', alt: 'Acme Cap' },
    { id: '10', title: 'Acme Dog Sweater', handle: 'acme-dog-sweater', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/dog-sweater-1.png?v=1690003132', alt: 'Acme Dog Sweater' },
    { id: '11', title: 'Acme Cup', handle: 'acme-cup', price: '15.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088', alt: 'Acme Cup' },
    { id: '12', title: 'Acme Bomber Jacket', handle: 'acme-bomber-jacket', price: '50.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bomber-jacket-army.png?v=1690002722', alt: 'Acme Bomber Jacket' },
    { id: '13', title: 'Acme Baby Cap', handle: 'acme-baby-cap', price: '10.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png?v=1690002570', alt: 'Acme Baby Cap' },
    { id: '14', title: 'Acme Baby Onesie', handle: 'acme-baby-onesie', price: '10.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png?v=1690002632', alt: 'Acme Baby Onesie' },
    { id: '15', title: 'Acme Sticker', handle: 'acme-sticker', price: '4.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker.png?v=1690003619', alt: 'Acme Sticker' },
    { id: '16', title: 'Acme Mug', handle: 'acme-mug', price: '15.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527', alt: 'Acme Mug' },
    { id: '17', title: 'Acme Drawstring Bag', handle: 'acme-drawstring-bag', price: '12.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304', alt: 'Acme Drawstring Bag' },
    { id: '18', title: 'Acme Pacifier', handle: 'acme-pacifier', price: '10.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/pacifier-1.png?v=1690003544', alt: 'Acme Pacifier' }
];

const collections = ['All', 'Bags', 'Drinkware', 'Electronics', 'Footware', 'Headwear', 'Hoodies', 'Jackets', 'Kids', 'Pets', 'Shirts', 'Stickers'];
const sortOptions = ['Relevance', 'Trending', 'Latest arrivals', 'Price: Low to high', 'Price: High to low'];

export default function AllProducts() {
    const [filteredProducts, setFilteredProducts] = useState(p);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCollection, setSelectedCollection] = useState('All');
    const [selectedSort, setSelectedSort] = useState('Relevance');
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let filtered = [...p];
        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.handle.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (selectedCollection !== 'All') {
            filtered = filtered.filter(product =>
                product.handle.toLowerCase().includes(selectedCollection.toLowerCase())
            );
        }
        switch (selectedSort) {
            case 'Price: Low to high':
                filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case 'Price: High to low':
                filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
            case 'Trending':
            case 'Latest arrivals':
                filtered.reverse();
                break;
        }
        setFilteredProducts(filtered);
    }, [searchQuery, selectedCollection, selectedSort]);

    return (
        <>
            <div>
                <title>Acme Store - All Products</title>
                <meta name="description" content="Browse all products at Acme Store" />
            </div>
            <div className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white min-h-screen">
                <nav className="relative flex items-center justify-between p-4 lg:px-6">
                    <div className="block flex-none md:hidden">
                        <button aria-label="Open mobile menu" className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex w-full items-center">
                        <div className="flex w-full md:w-1/3">
                            <a className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6" href="/">
                                <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className="h-[16px] w-[16px] fill-black dark:fill-white">
                                        <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                                        <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                                    </svg>
                                </div>
                                <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">Acme Store</div>
                            </a>
                            <ul className="hidden gap-6 text-sm md:flex md:items-center">
                                <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/all">All</a></li>
                                <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/all">Shirts</a></li>
                                <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/all">Stickers</a></li>
                            </ul>
                        </div>
                        <div className="hidden justify-center md:flex md:w-1/3">
                            <form className="relative w-full lg:w-80 xl:w-full" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Search for products..." autoComplete="off" className="w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                                    </svg>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-end md:w-1/3">
                            <button aria-label="Open cart">
                                <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 transition-all ease-in-out hover:scale-110">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                    </svg>
                                    {cartCount > 0 && <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">{cartCount}</span>}
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
                <main>
                    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
                        <div className="order-first w-full flex-none md:max-w-[125px]">
                            <nav>
                                <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">Collections</h3>
                                <ul className="hidden md:block">
                                    {collections.map((collection) => (
                                        <li key={collection} className="mt-2 flex text-black dark:text-white">
                                            <button onClick={() => setSelectedCollection(collection)} className={`w-full text-left text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 ${selectedCollection === collection ? 'underline' : ''}`}>
                                                {collection}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="order-last min-h-screen w-full md:order-none">
                            <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredProducts.map((product) => (
                                    <li key={product.id} className="aspect-square transition-opacity animate-fadeIn">
                                        <a className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
                                            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                                                <img alt={product.alt} loading="lazy" className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" src={product.image} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }} />
                                                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                                                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                                        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{product.title}</h3>
                                                        <p className="flex-none rounded-full bg-blue-600 p-2 text-white">${product.price}<span className="ml-1 inline hidden">USD</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-none flex-none md:order-last md:w-[125px]">
                            <nav>
                                <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">Sort by</h3>
                                <ul className="hidden md:block">
                                    {sortOptions.map((option) => (
                                        <li key={option} className="mt-2 flex text-sm text-black dark:text-white">
                                            <button onClick={() => setSelectedSort(option)} className={`w-full text-left hover:underline hover:underline-offset-4 ${selectedSort === option ? 'underline underline-offset-4' : ''}`}>
                                                {option}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </main>
                <footer className="text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
                        <div>
                            <a className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
                                <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[30px] w-[30px] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className="h-[10px] w-[10px] fill-black dark:fill-white">
                                        <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                                        <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                                    </svg>
                                </div>
                                <span className="uppercase">Acme Store</span>
                            </a>
                        </div>
                        <nav>
                            <ul>
                                <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/">Home</a></li>
                                <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/about">About</a></li>
                                <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="/terms">Terms</a></li>
                            </ul>
                        </nav>
                        <div className="md:ml-auto">
                            <a className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white" href="https://vercel.com">
                                <span className="px-3">▲</span>
                                <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
                                <span className="px-3">Deploy</span>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
                        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                            <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}