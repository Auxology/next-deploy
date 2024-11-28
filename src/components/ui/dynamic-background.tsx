export const DynamicBackground = () => {
    return (
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-accentColor/10 to-transparent" />
            <div className="after:absolute after:inset-0 after:bg-white/20 after:backdrop-blur-lg after:-z-10 after:rounded-full after:scale-90" />
        </div>
    )
}
