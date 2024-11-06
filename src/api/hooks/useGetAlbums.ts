import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../musicApi";
import { TAlbum } from "@/types/Album";

export const useGetAlbums = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["albums", id],
    queryFn: () => getAlbums(id),
  });

  const transformedData = data?.album?.map((item: TAlbum) => ({
    ...item,
  }));

  return { data: transformedData, isLoading };
};
