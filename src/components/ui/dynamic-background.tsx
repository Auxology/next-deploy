export const DynamicBackground = () => {
    return (
        <div className="absolute inset-0">
            {/* Professional gradient using your accent colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-accentColor/10 via-green-700/5 to-white/60" />
            
            {/* Soft blur effect */}
            <div className="absolute inset-0 backdrop-blur-[4px] bg-accentColor/5" />
            
            {/* Subtle radial highlight */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/10 to-transparent" />
            
            {/* Additional layer for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-accentColor/5" />
        </div>
    )
}