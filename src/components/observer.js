import { useEffect } from "react";

export default function useIntersectionObserver(setActiveLink) {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    if (typeof setActiveLink !== "function") return;

    // Get the header height for offset calculations
    const getHeaderHeight = () => {
      const header = document.querySelector("header");
      return header ? header.offsetHeight : 80;
    };

    // Function to get all valid sections
    const getSections = () => {
      // Get all sections that have an ID attribute
      const sections = Array.from(document.querySelectorAll('section[id]'));
      return sections;
    };

    // Function to get element visibility percentage
    const getVisibilityPercentage = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const headerHeight = getHeaderHeight();

      // Calculate the visible height of the element
      const elementHeight = rect.height;
      const visibleTop = Math.max(rect.top, headerHeight);
      const visibleBottom = Math.min(rect.bottom, windowHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // Return the percentage of the element that is visible
      return (visibleHeight / elementHeight) * 100;
    };

    // Function to determine which section is most visible
    const getMostVisibleSection = () => {
      const sections = getSections();
      let maxVisibility = 0;
      let mostVisibleSection = null;

      sections.forEach(section => {
        const visibility = getVisibilityPercentage(section);
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = section;
        }
      });

      // Only consider a section as visible if it's at least 10% visible
      return maxVisibility > 10 ? mostVisibleSection : null;
    };

    // Function to update active section
    const updateActiveSection = () => {
      const mostVisibleSection = getMostVisibleSection();
      if (mostVisibleSection && mostVisibleSection.id) {
        setActiveLink(mostVisibleSection.id);
      }
    };

    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        // If any section intersects, update the active section
        if (entries.some(entry => entry.isIntersecting)) {
          updateActiveSection();
        }
      },
      {
        // Start observing slightly above the viewport to account for header
        rootMargin: `-${getHeaderHeight()}px 0px -10% 0px`,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
      }
    );

    // Start observing all sections
    const sections = getSections();
    sections.forEach(section => observer.observe(section));

    // Add scroll listener for more precise updates
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(updateActiveSection);
    };

    // Add resize listener to handle layout changes
    let resizeTimeout;
    const handleResize = () => {
      if (resizeTimeout) {
        window.cancelAnimationFrame(resizeTimeout);
      }
      resizeTimeout = window.requestAnimationFrame(updateActiveSection);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial update
    setTimeout(updateActiveSection, 100);

    // Cleanup function
    return () => {
      // Disconnect observer
      observer.disconnect();

      // Remove event listeners
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Clear any pending timeouts
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      if (resizeTimeout) {
        window.cancelAnimationFrame(resizeTimeout);
      }
    };
  }, [setActiveLink]);
}