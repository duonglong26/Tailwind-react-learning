import React from 'react'

function Header() {
    return (
        <div class="bg-slate-400 w-full h-full bg-[url('/public/asset/image/bg_verify-scaled.jpg')] flex items-center bg-cover bg-center ">
            <form class=" w-full h-96 flex justify-center flex-col items-center">
                <h1 class="flex justify-center pb-8">
                    <img src="https://winecellar.vn/wp-content/uploads/2021/07/Winecellar-Logo-120721-1.png" alt="Wine_image" class="h-full"/>
                </h1>
                <p class="text-base">Vui lòng cung cấp thông tin.</p>
                <p class="text-lg font-medium">QUÝ KHÁCH ĐÃ ĐỦ 18 TUỔI?</p>
                <div class="pt-12">
                   <button class="bg-white w-48 h-10 rounded-lg border-2 border-black mx-2 font-medium">ĐỦ 18 TUỔI</button> 
                   <button class="bg-white w-48 h-10 rounded-lg border-2 border-black mx-2 font-medium">CHƯA ĐỦ 18 TUỔI</button> 
                </div>
                <div class="pt-12">
                    <p>
                        <em class="text-red-800 text-sm">Website chỉ giới thiệu sản phẩm rượu vang đến đối tượng trên 18 tuổi.</em>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Header;
