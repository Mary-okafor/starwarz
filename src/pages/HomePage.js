import AsidePanel from "../atoms/AsidePanel/AsidePanel"
import LoginForm from "../molecules/LoginForm/LoginForm"


function HomePage () {
    return <div className="flex h-screen">
        <div className="w-1/4"><AsidePanel/> </div>
        <div className="w-3/4 flex justify-center"><LoginForm/></div>
       
        
        
    </div>
}

export default HomePage