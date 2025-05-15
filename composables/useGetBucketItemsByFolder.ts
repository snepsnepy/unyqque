// composables/useGetBucketItemsByFolder.ts
export const useGetBucketItemsByFolder = (folderName: string) => {
  const { $supabase } = useNuxtApp();

  const images = ref<{ name: string; url: string }[]>([]);
  const limit = 3;
  const page = ref(0);
  const loading = ref(false);
  const noMore = ref(false);

  const loadImages = async () => {
    if (loading.value || noMore.value) return;

    loading.value = true;

    const from = page.value * limit;

    const { data: files, error } = await $supabase.storage
      .from("gallery")
      .list(folderName, {
        limit,
        offset: from,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) {
      console.error("Error fetching gallery images:", error);
      loading.value = false;
      return;
    }

    if (!files || files.length === 0) {
      noMore.value = true;
      loading.value = false;
      return;
    }

    const newImages = files.map((file) => {
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

    images.value.push(...newImages);

    if (files.length < limit) noMore.value = true;
    page.value++;
    loading.value = false;
  };

  return {
    images,
    loadImages,
    loading,
    noMore,
  };
};
