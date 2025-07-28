export const useSetHeroBgImage = () => {
  const setHeroBgImage = () => {
    // Get the hero image URL from Supabase
    // Update these values to match your bucket name and file path
    const { getImageUrl } = useGetBucketImage("gallery", "hero/hero-image.png");
    const heroImageUrl = getImageUrl();

    // Set the CSS custom property
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty(
        "--hero-bg-image",
        `url('${heroImageUrl}')`
      );
    }
  };

  return {
    setHeroBgImage,
  };
};
