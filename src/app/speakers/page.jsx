'use client'
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
const page = () => {
    return (
        <div>
            <Header active="speakers" />
            <div className="min-h-[100vh] px-8">
                <div className=" flex flex-col justify-center items-center mt-6 mb-10 gap-10">
                    <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[#70307E] text-xl sm:text-2xl font-medium text-center">Inaugural Sessions</p>
                <div className="flex gap-6 lg:gap-10 justify-center flex-wrap">
                    <img src='/1.jpg' className=" w-4/5 sm:w-2/5 md:w-[30%] rounded-xl"></img>
                    <img src='/2.jpg' className=" w-4/5 sm:w-2/5 md:w-[30%] rounded-xl"></img>
                    <img src='/3.jpg' className=" w-4/5 sm:w-2/5 md:w-[30%] rounded-xl"></img>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[#70307E] text-xl sm:text-2xl font-medium text-center">Keynote Sessions</p>
                <div className="flex gap-6 lg:gap-10 justify-center flex-wrap">
                    <img src='/4.jpg' className="w-4/5 sm:w-2/5 md:w-[30%] rounded-xl"></img>
                    <img src='/5.jpg' className="w-4/5 sm:w-2/5 md:w-[30%] rounded-xl"></img>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[#70307E] text-xl sm:text-2xl font-medium text-center">Panel Discussion- Navigating Challenges and Seizing Opportunities: Women's Leadership in STEM</p>
                <div className="flex gap-6 lg:gap-10 justify-center flex-wrap">
                    <img src='/6.jpg' className="w-4/5 sm:w-2/5 md:w-[30%] rounded-xl"></img>
                    <img src='/7.jpg' className="w-4/5 sm:w-2/5 md:w-[30%] rounded-xl"></img>
                    <img src='/8.jpg' className=" w-4/5 sm:w-2/5 md:w-[30%] rounded-xl"></img>
                </div>
                </div>
                </div>
            </div>
        <Footer />
    </div>
    )
}

export default page