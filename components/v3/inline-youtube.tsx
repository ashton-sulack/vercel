'use client'

import { useState } from 'react'

type InlineYouTubeProps = {
  videoId: string
  title: string
  poster: string
  badge?: string
  priority?: boolean
}

export function InlineYouTube({ videoId, title, poster, badge, priority = false }: InlineYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="video-frame">
      <button
        className="video-poster"
        type="button"
        onClick={() => setIsPlaying(true)}
        aria-label={`Play video: ${title}`}
      >
        <img src={poster} alt="" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
        <span className="play-button" aria-hidden="true">▶</span>
        {badge && <span className="video-badge">{badge}</span>}
      </button>
    </div>
  )
}
