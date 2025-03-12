import { ref } from "vue";

export const useGetApi = async (url: string) => {
  const data = ref<string | null>(null);
  const error = ref<Error | null>(null);

  try {
    const res = await fetch(url);
    data.value = await res.json();
  } catch (err: any) {
    error.value = err;
  }

  return { data, error };
};
