import Image from "next/image"

export const Navbar = () => {
    return (
        <header>
            <div className="navbar fixed top-0 z-50 w-full bg-[#D3CCC1] text-[#040404]">
                <div className="flex items-center justify-between p-2 md:p-4">
                    <button className="p-2">Menu</button>

                    <div className="absolute left-1/2 -translate-x-1/2 transform">
                        <Image 
                            src='/logo.svg' 
                            alt="Real Estate Paris" 
                            width={180} 
                            height={30} 
                            className="w-32 m:w-44" 
                        />
                    </div>

                    <div className="flex">Icons</div>
                </div>
            </div>
        </header>
    )
}