import HeaderTopBar from "@components/HeaderTopBar";
import Link from "next/link";
import Image from "next/image";

export default function Header(props) {

    return(
        <>
            <header>
                <HeaderTopBar/>
                <div className="container py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center w-[82%]">
                            <div>
                                <Link href="/"><Image alt='' src="main-logo.png" width={150} height={100}></Image></Link>
                            </div>
                            <div className="flex w-[75%] mx-auto">
                                <div className="py-3 px-12 w-[40%] border border-theme-light-grey border-r-0 outline-none cursor-pointer relative after:z-20 group after:content-[''] after:absolute after:right-0 after:top-2/4 after:-translate-y-2/4 after:h-4/5 after:w-[1px] after:bg-theme-light-grey">
                                    All Categories
                                    <span className="absolute right-5 top-1/2 -translate-y-1/2"><Image width={9} height={4} src="drop-arrow.svg"/></span>
                                    <ul className="z-50 border-[1px] border-theme-light-grey absolute left-0 top-full bg-theme-white w-full hidden group-hover:block">
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Digital Services Wholesale</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href=""><a className="flex justify-between w-full" >Apparels <span className="rounded-full text-theme-white bg-theme-primary-red py-[1px] px-2">HOT</span></a></Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Kitchen</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Beauty</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Tools</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Car Accessories</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Fitness</Link></li>
                                        <hr className="my-7 mx-10"/>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href=""><a className="flex justify-between w-full">Home Decor <span className="rounded-full text-theme-white bg-[#9ad222] py-[1px] px-2">NEW</span></a></Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Art</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Pet Food And Accessories Health</Link></li>
                                    </ul>
                                </div>
                                <div className="w-[60%]">
                                    <input className="w-[90%] h-full p-2 border border-theme-light-grey border-l-0 drop-shadow-none filter-none backdrop-filter-none outline-none" placeholder="Search your favorite product..."/>
                                    <button className="w-[10%] bg-theme-primary-black text-theme-white px-5 py-3 transition duration-500 hover:bg-theme-red"><Image src="search.svg" width={15} height={15}/></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[28%]">
                            <div className="flex items-start cursor-pointer relative group">
                                <div className="mr-2">
                                    <Image src="user-dp.svg" width={30} height={30}/>
                                </div>
                                <div className="leading-4 group">
                                    <span className="theme-sec-light-grey">Sign In</span>
                                    <p className="font-bold">Account</p>
                                </div>
                                <ul className="hidden group-hover:block absolute top-full left-0 w-48 bg-theme-primary-black z-10 rounded-md overflow-hidden">
                                    <li className="text-center">
                                        <Link href=""><a className="text-theme-white py-3 px-2 block transition-all duration-100 hover:bg-theme-red">Sign In</a></Link>
                                    </li>
                                    <li className="text-center">
                                        <Link href=""><a className="text-theme-white py-3 px-2 block transition-all duration-100 hover:bg-theme-red">Sign Up</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <Link href=""><a className="absolute w-full h-full z-10"></a></Link>
                                <Image src="head-wishlist-icon.svg" width={20} height={20}/>
                                <span className="bg-theme-red text-theme-white py-[0.5rem] px-[0.3rem] leading-[0] rounded-full absolute -right-2 top-1 text-[0.7rem]">5</span>
                            </div>
                            <div className="relative">
                                <Link href=""><a className="absolute w-full h-full z-10"></a></Link>
                                <Image src="head-cart-icon.svg" width={20} height={20}/>
                                <span className="bg-theme-red text-theme-white py-[0.5rem] px-[0.3rem] leading-[0] rounded-full absolute -right-3 top-1 text-[0.7rem]">5</span>
                            </div> 
                            <div className="leading-4">
                                <span className="theme-sec-light-grey">Total</span>
                                <p className="font-bold">00.20  AED</p>
                            </div>
                            <Link href=""><a className="font-semibold transition-all hover:text-theme-red">En/AR</a></Link>
                        </div>
                    </div>
                </div>
                <div className="border-t-[1px] border-b-[1px] border-theme-light-grey relative">
                    <div className="container border-botto px-5 md:px-52">
                        <div className="flex items-center">
                            <div className="w-[35%]">
                                <div className="py-2 px-14 outline-none mr-14 cursor-pointer relative after:z-20 group after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-theme-light-grey">
                                    All Categories
                                    <span className="absolute right-5 top-1/2 -translate-y-1/2"><Image width={9} height={4} src="drop-arrow.svg"/></span>
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2"><Image width={13} height={12} src="hamburger-icon.svg"/></span>
                                    <ul className="py-5 border-[1px] border-theme-light-grey absolute left-0 top-full bg-theme-white z-10 w-full hidden group-hover:block">
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Digital Services Wholesale</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href=""><a className="flex justify-between w-full" >Apparels <span className="rounded-full text-theme-white bg-theme-primary-red py-[1px] px-2">HOT</span></a></Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Kitchen</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Beauty</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Tools</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Car Accessories</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Fitness</Link></li>
                                        <hr className="my-7 mx-10"/>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href=""><a className="flex justify-between w-full">Home Decor <span className="rounded-full text-theme-white bg-[#9ad222] py-[1px] px-2">NEW</span></a></Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Art</Link></li>
                                        <li className="py-3 px-10 hover:bg-theme-light-grey"><Link href="">Pet Food And Accessories Health</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <nav className="w-[65%]">
                                <ul className="flex items-center justify-between list-none">
                                    <li><Link href=""><a className="transition-all duration-500 hover:text-theme-light-red ">Homepage</a></Link></li>
                                    <li className="group"><Link href="">
                                            <a className="transition-all duration-500 hover:text-theme-light-red">
                                                Shop
                                            </a>
                                        </Link>
                                        <div className="border-b-[1px] border-theme-light-grey absolute left-0 top-full- z-10 w-full bg-theme-white hidden group-hover:block ">
                                            <div className="container py-20 px-5 md:px-52">
                                                <ul className="flex gap-14 justify-center">
                                                    <li>
                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red ">
                                                                <Image src="drop-img1.webp" width={200} height={300}/>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="flex flex-col gap-3"> 
                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red font-semibold underline uppercase mb-7">
                                                                Women
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Stitched Collection
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Unstitched Collection
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Kurti Collection
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Modest Wear (Abaya)
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Kurti Collection
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Modest Wear (Abaya)
                                                            </a>
                                                        </Link>
                                                        
                                                    </li>

                                                    <li className="flex flex-col gap-3"> 
                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red font-semibold underline uppercase mb-7">
                                                                Men
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Kurtas
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Jeans
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Shirts
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Suits
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Kurti Collection
                                                            </a>
                                                        </Link>

                                                        <Link href="">
                                                            <a className="transition-all duration-500 hover:text-theme-light-red uppercase text-xs">
                                                                Modest Wear (Abaya)
                                                            </a>
                                                        </Link>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link href=""><a className="transition-all duration-500 hover:text-theme-light-red ">Pages</a>
                                    </Link></li>
                                    <li><Link href=""><a className="transition-all duration-500 hover:text-theme-light-red ">About</a>
                                    </Link></li>
                                    <li><Link href=""><a className="transition-all duration-500 hover:text-theme-light-red ">Blog</a>
                                    </Link></li>
                                    <li><Link href=""><a className="transition-all duration-500 hover:text-theme-light-red ">Contact</a>
                                    </Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
