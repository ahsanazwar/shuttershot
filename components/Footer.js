import Image from 'next/image';
import Link from 'next/link';
import FooterCopyRight from '@components/FooterCopyRight';
export default function Footer() {
    return(
        
        <footer className="border-t-[1px] border-b-[1px] border-theme-light-grey">

            <div className="container pt-[45px] pb-[40px] px-5 md:px-52">
                <div className="grid grid-cols-1 md:grid-cols-6 md:gap-5">                
                    <div className="md:col-span-2 ...">
                        <Image alt='' src="main-logo.png" width={150} height={100}></Image>
                        <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p></div>
                    <div>
                        <h1 className="text-lg font-semibold uppercase leading-[45px] mb-3">
                            INFORMATION
                            <span className="w-[40%] h-[1px] bg-theme-black block"></span>
                        </h1>
                        <ui className="list-none">
                            <li className="text-sm mb-5 ">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">HOME</a>
                                </Link>
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">About Us </a>
                                </Link>
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">Skin Care</a>
                                </Link>
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">Hair Care</a>
                                </Link>
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">Body Care</a>
                                </Link >
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">Contact us</a>
                                </Link>
                            </li>            
                        </ui>     
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold uppercase leading-[45px] mb-3">
                            Catalog
                            <span className="w-[30%] h-[1px] bg-theme-black block"></span>
                        </h1>
                        <ui className="list-none">
                            <li className="text-sm mb-5 capitalize">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">Brands</a>
                                </Link>
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">Women</a>
                                </Link>
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">Men</a>
                                </Link >
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">Children</a>
                                </Link>
                            </li>         
                        </ui>     
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold uppercase leading-[45px] mb-3">
                            My Account
                            <span className="w-[40%] h-[1px] bg-theme-black block"></span>
                        </h1>
                        <ui className="list-none">
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">My Name</a>
                                </Link>
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">My Address</a>
                                </Link>
                            </li>
                            <li className="text-sm mb-5">
                                <Link href="">
                                    <a className="transition-colors hover:text-theme-light-red hover:underline">My Cart</a>
                                </Link>
                            </li>       
                        </ui>  

                        <h1 className="text-lg font-semibold uppercase leading-[45px] mb-3">
                            Payment Method
                            <span className="w-[40%] h-[1px] bg-theme-black block"></span>
                        </h1>
                        <div>
                            <Image src="payment-cards.svg" width={150} height={20}/>
                        </div>    
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold uppercase leading-[45px] mb-3">
                            Address
                            <span className="w-[40%] h-[1px] bg-theme-black block"></span>
                        </h1>
                        <ui className="list-none">
                            <li className="text-xs mb-5 flex align-top">

                                <div className="mr-1 mt-1 w-10"><Image src="f-home-icon.svg" width={30} height={15}/></div>
                                <span className="leading-4">Lorem ipsum dolor sit amconsectetur adipiscing</span>
                            </li>
                            <li className="text-xs mb-5 flex align-top">

                                <div className="mr-1 w-6"><Image src="f-phone.svg" width={30} height={15}/></div>
                                <Link href="tel:+97 123 456 789"><a><span className="leading-4">+97 123 456 789</span></a></Link>
                            </li>
                            <li className="text-xs mb-5 flex align-top">

                                <div className="mr-1 w-6"><Image src="f-mail.svg" width={30} height={15}/></div>
                                <Link href="mailto:Info@example.com"><a><span className="leading-4">Info@example.com</span></a></Link>
                            </li>        
                        </ui>   
                        <h1 className="text-lg font-semibold uppercase leading-[45px] mb-3">
                            Social media
                            <span className="w-[40%] h-[1px] bg-theme-black block"></span>
                        </h1>
                        <ul>
                            <li><Image src="fb.svg" width={15} height={15}/></li>
                        </ul>  
                    </div>
                </div>
            </div>
            <FooterCopyRight/>
        </footer>
    )
}