import FavoriteImage from "./FavoriteImage";

// export default function FavoriteImageList({ photoIds }) {
//   const photoItems = photoIds.map((photoId) => (
//     <FavoriteImage key={photoId} photoId={photoId} />
//   ));

//   return <div>{photoItems}</div>;
// }

export default function FavoriteImageList({ photoIds }) {
  return (
    <div>
      {photoIds.map((photoId) => (
        <FavoriteImage key={photoId} photoId={photoId} />
      ))}
    </div>
  );
}
