'use client';

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFFDF6]">
        {children}
    </div>
  );
}