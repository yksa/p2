import { useQuery } from "@tanstack/react-query";
import { TAlbum } from "@/types/Album";
import { getTracks } from "../musicApi";

export const useGetTracks = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["tracks", id],
    queryFn: () => getTracks(id),
  });

  const transformedData = data?.track?.map((item: TAlbum) => ({
    ...item,
  }));

  return { data: transformedData, isLoading };
};
