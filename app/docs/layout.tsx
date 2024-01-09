export default function Layout({children}:{children:React.ReactNode}) {
    return (
        <div>
            <div className="w-1/4">
                left panel
            </div>
            <div className="w-3/4">
                {children}
            </div>
        </div>
    )
}