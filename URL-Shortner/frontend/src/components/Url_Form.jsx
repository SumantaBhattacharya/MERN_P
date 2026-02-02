import { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
const Url_Form =  () => {

    const [isUrl, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!isUrl) {
      alert("Please enter a URL to shorten")
      return;
    }

    const shortenedUrl = await createShortUrl(isUrl);
    setShortUrl(shortenedUrl)
    setUrl("")

    }

  return (
     <div className="w-full max-w-xl">
        <form 
        onSubmit={handleSubmit}
        className="flex w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden"
        >
          <input
            type="url"
            placeholder="Paste a long URL (https://..)"
            value={isUrl}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-3 bg-transparent outline-none text-white"
          />
          <button className="bg-white text-black px-6 font-semibold hover:bg-neutral-200">
            Shorten URL
          </button>

         {/* {shortUrl && (
          <div>

          </div>
         )} */}

        </form>
        {shortUrl && (
        <div className="bg-neutral-900 border mt-4 border-neutral-700 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-2">Your Short URL:</h3>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-white outline-none"
            />
            <button
              onClick={()=>{
                navigator.clipboard.writeText(shortUrl);
                alert("Copied to the clipboard")
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Copy
            </button>
          </div>
          <p className="text-neutral-400 text-sm mt-2">
            Click the copy button to share your shortened URL
          </p>
        </div>
      )}
        </div>
  )
}

export default Url_Form