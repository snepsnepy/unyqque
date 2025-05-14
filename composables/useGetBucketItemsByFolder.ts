export const useUseGetBucketItemsByFolder = async (folderName: string) => {
  const { $supabase } = useNuxtApp();

  try {
    // List all files in the 'designs' folder
    const { data: files, error } = await $supabase.storage
      .from("gallery")
      .list(folderName);

    if (error) throw error;

    // Get public URLs for each image
    const imagesWithUrls = files.map((file) => {
      const {
        data: { publicUrl },
      } = $supabase.storage
        .from("gallery")
        .getPublicUrl(`${folderName}/${file.name}`);

      return {
        name: file.name,
        url: publicUrl,
      };
    });

    return imagesWithUrls;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
};
