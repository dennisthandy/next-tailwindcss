function Drawer({open}) {
    return (
        <div className="bg-yale-blue p-5 flex flex-col gap-5 justify-between text-white text-sm">
            <img src="/netmonk-logo-white.svg" alt="logo" className="w-1/4"/>
            <div>
                <ul className="flex flex-col gap-3">
                    <li>
                        <a href="" className="border-b-2">Beranda</a>
                    </li>
                    <li><a href="">Produk & Solusi</a></li>
                    <li><a href="">Tentang Kami</a></li>
                    <li><a href="">Blog & Event</a></li>
                    <li><a href="">Kontak</a></li>
                </ul>
            </div>
            <div className="flex gap-3">
                <button className="border rounded-lg py-1 px-3 hover:bg-white hover:text-black">Demo</button>
                <button className="text-black rounded-lg bg-white py-1 px-5 shadow-lg">Coba Gratis</button>
            </div>
        </div>
    )
}

export default Drawer
