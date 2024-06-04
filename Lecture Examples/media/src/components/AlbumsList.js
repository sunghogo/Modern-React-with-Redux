import { GoChecklist } from "react-icons/go";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import { Skeleton } from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  // results object returned from calling query hook has a couple properties
  // data = reponse data, error = null/Error object, isLoading = boolean if loading 1st time
  // isFetching = boolean if loading, refetch = function to rerun query
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  // mutations hook returns the actual mutation function and the results object
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loadng albums.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem ket={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row m-2 items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
