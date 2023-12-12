import { HeartIcon, UserIcon } from "@heroicons/react/24/outline";

/* eslint-disable react/prop-types */
function MovieCard({
  id,
  backdrop_path,
  title,
  overview,
  vote_average,
  vote_count,
}) {
  return (
    <div key={id} className="p-4 shadow-md flex flex-col space-y-4">
      <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-xs">{overview}</p>

      <div className="flex space-x-2 !mt-auto">
        <div className="flex space-x-2">
          <HeartIcon width={24} fill="red" />
          <p>{vote_average}</p>
        </div>
        <div className="flex space-x-2">
          <UserIcon width={24} />
          <p>{vote_count}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
