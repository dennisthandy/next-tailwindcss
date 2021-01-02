function Footer({ showTryBanner }) {
    return (
        <footer className="relative mt-32 md:mt-96">
            {/* coba button */}
            {showTryBanner &&
                <div className="absolute bg-yale-blue bg-footer-network bg-no-repeat bg-cover bg-unset md:bg-center grid place-items-center mx-auto w-60 sm:w-9/12 md:w-8/12 right-0 left-0 -top-24 py-16 md:py-24 rounded-lg">
                    <button className="bg-yellow-1 rounded-lg font-semibold py-3 px-4 md:px-6 shadow-md text-xs">Coba "Netmonk Basic" Gratis</button>
                </div>
            }

            {/* content web */}
            <div className={`bg-sky-blue ${showTryBanner ? 'pt-28 md:pt-44' : 'pt-10 md:pt-20'} pb-16`}>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 sm:gap-5 w-60 sm:w-9/12 md:w-8/12 mx-auto">
                    <div>
                        <img src="/netmonk-logo.svg" alt="logo" className="w-36 sm:w-32" />
                        <p className="mt-3 font-semibold sm:text-sm">Effortless Network, <br/> Better Conneted World</p>
                    </div>
                    <div>
                        <strong>Menu</strong>
                        <ul className="mt-3 text-gray-600 flex flex-col gap-5 sm:text-xs">
                            <li><a href="">Beranda</a></li>
                            <li><a href="">Produk & Solusi</a></li>
                            <li><a href="">Tentang Kami</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Kontak</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Kebijakan Penggunaan</a></li>
                            <li><a href="">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                    <div>
                        <strong>Produk & Solusi</strong>
                        <ul className="mt-3 text-gray-600 flex flex-col gap-5 sm:text-xs">
                            <li><a href="">Netmonk Basic</a></li>
                            <li><a href="">Netmonk Basic + Custom Built</a></li>
                            <li><a href="">Full Custom Built</a></li>
                        </ul>
                    </div>
                    <div>
                        <strong>Kontak Kami</strong>
                        <ul className="mt-3 text-gray-600 flex flex-col gap-5 sm:text-xs">
                            <li className="flex items-center gap-2 sm:gap-0">
                                <img src="/icons/message.png" alt="email" className="w-5 h-5"/>
                                <a href="">contact@netmonk.com</a>
                            </li>
                            <li className="flex gap-3 sm:gap-1 items-center rounded-full bg-green-1 py-2 px-5 sm:py-1 sm:px-3 shadow-md">
                                <img src="/icons/whatsapp.png" alt="wa" className="w-7 sm:w-5"/>
                                <a href="" className="font-semibold text-white sm:text-xs">Whatsapp Netmonk</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong>Ikuti Kami</strong>
                        <ul className="mt-3 text-gray-600 flex gap-5">
                            <li>
                                <a href="">
                                    <img src="/icons/Twitter.png" alt="tw-logo" className="w-5 h-5 sm:w-4 sm:h-4"/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/icons/Facebook.png" alt="fb-logo" className="w-5 h-5 sm:w-4 sm:h-4" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/icons/Instagram.png" alt="ig-logo" className="w-5 h-5 sm:w-4 sm:h-4" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/icons/Youtube.png" alt="yt-logo" className="w-5 h-5 sm:w-4 sm:h-4" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/icons/Medium.png" alt="med-logo" className="w-5 h-5 sm:w-4 sm:h-4" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className="text-center py-5 bg-yale-blue text-white">
                <span>&copy; 2020 by Netmonk. All right reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
