
interface LogoProps {
    className: string
}
export function Logo({className}:LogoProps) {
    return (
    <div>
        <h1 className={`text-white font-semibold pb-6 ${className}`}>SnipSavvy</h1>
    </div>
    )
}