import ReactPlayer from "react-player/youtube"

// eslint-disable-next-line react/prop-types
const Video = ({videos}) => {
  

  return (
    <div className="px-4 md:px-8 lg:px-24 xl:px-32 mb-14">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {videos.
        // eslint-disable-next-line react/prop-types
        map((url, index) => (
          <div
            key={index}
            className="aspect-video w-full rounded-xl overflow-hidden shadow-lg"
          >
            <ReactPlayer
              url={url}
              width="100%"
              height="100%"
              controls
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Video
