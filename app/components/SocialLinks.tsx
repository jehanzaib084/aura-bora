const socials = [
  "TIKTOK",
  "TWITTER",
  "INSTAGRAM",
  "TUMBLR",
  "SPOTIFY"
];

export default function SocialLinks() {
  return (
    <div className="w-full text-white text-stroke font-gliker border-y-[1.5] border-black bg-rainbow">
        <div className="
          flex flex-wrap items-center justify-evenly w-full gap-2 px-2 py-2 md:py-4
        ">
          {socials.map((name, idx) => (
            <span
              key={idx}
              className="text-4xl md:text-5xl uppercase drop-shadow-stroke cursor-pointer"
            >
              {name}
            </span>
          ))}
        </div>
    </div>
  );
}
