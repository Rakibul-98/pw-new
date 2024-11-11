
export default function MouseWheel() {
    return (
        <div className="absolute left-1/2 bottom-3 transform -translate-x-1/2 group z-50">
            <div className="w-4 px-1 pt-2 h-7 flex justify-center border-[3px] border-base-100 rounded-3xl box-content group-hover:border-primary">
                <div className="w-[6px] h-2 rounded-[25%] bg-base-100 animate-slide group-hover:animate-none group-hover:bg-primary">
                </div>
            </div>
        </div>

    )
}
