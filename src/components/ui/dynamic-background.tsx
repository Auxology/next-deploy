
export const DynamicBackground = () => {
    return (
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-br from-accentColor/5 to-transparent" />
        </div>
    )
}
