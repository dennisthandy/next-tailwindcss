function Header(props) {
    return (
        <div className="bg-french-blue bg-header-network bg-no-repeat bg-cover bg-revert sm:bg-center md:bg-contain md:bg-center">
            <div className="mx-auto w-3/4 text-center py-14">
                <h1 className="text-white text-3xl font-bold mx-auto leading-relaxed md:w-9/12">Penyedia Aplikasi Monitoring Jaringan Indonesia</h1>
                <p className="text-white mt-5 font-thin text-sm">Memenuhi semua kebutuhan aplikasi monitoring jaringan perusahaan Anda</p>
                
                <button className="flex items-center gap-3 mx-auto mt-10 bg-yellow-1 rounded-lg py-3 px-5 sm:px-3">
                    <img src="/icons/play_circle_outline.png" alt="icon-play"/>
                    <span className="text-sm font-semibold">Pelajari Lebih Lanjut</span> 
                </button>
            </div>
        </div>
    )
}

export default Header
