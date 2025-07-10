export default function PageLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF9ED]">
            <div className="flex flex-col items-center gap-8">
                {/* Loading Text */}
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-2xl font-gliker text-[#F5B54A] text-stroke drop-shadow-stroke">
                        Loading...
                    </h2>
                    <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-full bg-[#F5B54A] animate-pulse"
                                style={{
                                    animationDelay: `${i * 0.2}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#F7B7D7] rounded-full opacity-20 animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-[#d6ef70] rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-[#FFB17A] rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
                </div>
            </div>
        </div>
    );
} 