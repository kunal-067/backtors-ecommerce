const colors = ['#23A6F0', '#23856D', '#E77C40', '#252B42']
function ScreenProdCard({ img, name, brand, price, mrp }) {
    return (
        <div className='h-[615px] w-[238px]'>
            <div className='h-[427px] w-full' style={{ backgroundImage: `url(${img})` }} />

            <div className="text-center gap-[8px] flex flex-col mt-5">
                <b className="text-[16px] font-bold leading-[24px]">{name}</b>
                <p className="leading-[24px] text-[#737373] text-[14px] font-bold">{brand}</p>
                <p className="leading-[24px] font-bold text-[16px]"><span className="text-[#BDBDBD]">₹{mrp}</span> <span className="#23856D">₹{price}</span> </p>
                <div className="mx-auto flex"> 
                    {
                        colors.map((color, index) => (
                            <div key={index} className={`size-[16px] rounded-full m-[2px]`} style={{backgroundColor:`${color}`}}></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ScreenProdCard