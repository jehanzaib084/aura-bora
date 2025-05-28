import StoryCard from '@/app/components/StoryCard';
import ZeroSection from '@/app/components/ZeroSection';
import SocialLinks from '@/app/components/SocialLinks';
import CustomTestimonialGrid from './components/TestimonialGrid';
import HomeCarouselWrapper from './components/HomeCarouselWrapper';

export default async function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-mono bg-[#FFF9ED]">
      
      {/* HomePage Story Card */}
      <div className="w-full max-w-3xl px-8 py-16 flex flex-col items-center">
        <div className="w-full flex flex-col">
          <p className="text-xl">
            Aura Bora is a
          </p>
          <div className="w-full">
            <StoryCard />
          </div>
          <div className="w-full max-w-xl">
            <p className="text-lg">
              No added sugar, sweeteners, citric acid,
            </p>
            <p className="text-lg">
              or artificial ingredients.
            </p>
          </div>
        </div>
      </div>
      {/* HomePage Story Card END*/}

      {/* Marquee Carousel Animation */}
      <div className="relative w-full overflow-hidden whitespace-nowrap bg-rainbow py-2 border-t-1 border-b-[1.5]">
        <div className="flex animate-marquee">
          <div className="flex shrink-0 items-center space-x-6 px-4">
            <span className="inline-block mx-6 bullet-before">Zero Sugar</span>
            <span className="inline-block mx-6 bullet-before">Whole30</span>
            <span className="inline-block mx-6 bullet-before">Kosher</span>
            <span className="inline-block mx-6 bullet-before">1% for the Planet</span>
            <span className="inline-block mx-6 bullet-before">Vegan</span>
            <span className="inline-block mx-6 bullet-before">Zero Sweeteners</span>
            <span className="inline-block mx-6 bullet-before">Zero Sodium</span>
            <span className="inline-block mx-6 bullet-before">Zero Calories</span>
            <span className="inline-block mx-6 bullet-before">Zero Sugar</span>
            <span className="inline-block mx-6 bullet-before">Whole30</span>
            <span className="inline-block mx-6 bullet-before">Kosher</span>
            <span className="inline-block mx-6 bullet-before">1% for the Planet</span>
            <span className="inline-block mx-6 bullet-before">Vegan</span>
            <span className="inline-block mx-6 bullet-before">Zero Sweeteners</span>
            <span className="inline-block mx-6 bullet-before">Zero Sodium</span>
            <span className="inline-block mx-6 bullet-before">Zero Calories</span>
          </div>
        </div>
      </div>
      {/* Marquee Carousel Animation END */}

      <HomeCarouselWrapper />

      <ZeroSection />

      <CustomTestimonialGrid />

      <SocialLinks />
  
      <br />
    </div>
  );
} 
