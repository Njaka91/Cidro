import ReactPlayer from "react-player/youtube"

const Video = () => {

const videos = [
        "https://www.youtube.com/watch?v=_QWZQh0YYWA",
        "https://www.youtube.com/watch?v=XpDEdMu_6O8",
      ];
  return (
    

<div className="flex flex-row gap-4 justify-center items-center w-full h-80">
    {videos.map((url, index)=> (
      
            <ReactPlayer
        key={index}

        url={url}
        className="react-player"
        width="75%"
        height="100%"
        controls
      />
        
    ))}
</div>
  )
}

export default Video
