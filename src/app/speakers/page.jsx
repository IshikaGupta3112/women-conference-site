'use client'
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
const page = () => {
    return (
        <div>
            <Header active="speakers" />
            <div className="min-h-[100vh]">
                <div className="p-10 font-medium text-lg">Speakers will be updated soon...</div>
            </div>
        <Footer />
    </div>
    )
}

export default page