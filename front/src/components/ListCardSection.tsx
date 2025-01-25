'use client';
import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import CardMovieCover from '@/components/CardMovieCover';
import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import { IListCardSectionProps } from '@/interface/globalTypes'; 

const ListCardSection: React.FC<IListCardSectionProps> = ({ section }) => {
  const filteredItems = movieDataHelpers.filter((item) => item.section === section);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showRightNav, setShowRightNav] = useState(true);
  const [showLeftNav, setShowLeftNav] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

      const isAtStart = scrollLeft <= 10;
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;

      setShowRightNav(!isAtEnd);
      setShowLeftNav(!isAtStart);
      setShowRightShadow(!isAtEnd);
      setShowLeftShadow(!isAtStart && scrollLeft > 0);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const firstChild = scrollContainerRef.current.children[0] as HTMLElement;
      const itemWidth = firstChild?.offsetWidth || 300;

      scrollContainerRef.current.scrollBy({
        left: itemWidth * 3,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const firstChild = scrollContainerRef.current.children[0] as HTMLElement;
      const itemWidth = firstChild?.offsetWidth || 300;

      scrollContainerRef.current.scrollBy({
        left: -(itemWidth * 3),
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={(e) => {
        const relatedTarget = e.relatedTarget as Node | null;

        if (!relatedTarget || !containerRef.current) {
          setIsHovering(false);
          return;
        }

        try {
          if (containerRef.current.contains(relatedTarget)) {
            return;
          }
        } catch (error) {
          console.log('Error checking contains:', error);
        }

        setIsHovering(false);
      }}
    >
      {showRightShadow && (
        <div
          className="absolute right-0 top-0 bottom-0 w-[4rem] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0))',
          }}
        />
      )}
      {showLeftShadow && (
        <div
          className="absolute left-0 top-0 bottom-0 w-[4rem] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))',
          }}
        />
      )}

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-smooth w-full"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        onScroll={handleScroll}
      >
        <style jsx global>{`
          #ListCardSection::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {filteredItems.slice(0, 10).map((item) => (
          <div key={item.id} className="flex-shrink-0 w-fit px-[0.2rem] xss:px-[0.5rem] md:px-[0.9rem] mx-2">
            <CardMovieCover {...item} />
          </div>
        ))}
      </div>

      {(showRightNav && isHovering) && (
        <button
          onClick={handleScrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 
                   bg-black/50 hover:bg-black/80 
                   w-12 h-12 rounded-full 
                   flex items-center justify-center
                   transition-all duration-300
                   z-20"
          style={{
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {(showLeftNav && isHovering) && (
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 
                   bg-black/50 hover:bg-black/80 
                   w-12 h-12 rounded-full 
                   flex items-center justify-center
                   transition-all duration-300
                   z-20"
          style={{
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default ListCardSection;