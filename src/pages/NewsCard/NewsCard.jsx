import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    tags,
  } = singleNews;

  return (
    <div className="bg-base-100 shadow-md rounded-xl border border-gray-200 overflow-hidden mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600 text-xl">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 px-4">
        {title}
      </h3>

      {/* Image */}
      <div className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="px-4 pb-3 text-gray-600 text-sm leading-relaxed">
        {details.slice(0, 200)}...
        <button className="text-orange-500 font-semibold hover:underline ml-1">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3">
        {/* Rating */}
        <div className="flex items-center text-orange-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "" : "opacity-30"} />
          ))}
          <span className="ml-2 text-gray-800 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
