export default function({children}:{
    children: React.ReactNode
}){
    return(
        <div>
            <div className="text-center p-4 bg-green-200 text-black">
                layout....  :|
            </div>
            {children}
        </div>
    )
}
