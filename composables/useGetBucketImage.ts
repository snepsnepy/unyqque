export const useGetBucketImage = (bucketName: string, filePath: string) => {
  const { $supabase } = useNuxtApp();

  const getImageUrl = () => {
    const {
      data: { publicUrl },
    } = $supabase.storage.from(bucketName).getPublicUrl(filePath);

    return publicUrl;
  };

  return {
    getImageUrl,
  };
};
