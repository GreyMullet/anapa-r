"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { roomImageCounts } from "@/features/rooms"
import { roomsPrms } from "@/features/rooms/config/roomsParams"
import Image from "next/image"
import styles from "./style.module.css"

export default function RoomDetailed(){
  const params=useParams()
  const slug=params.slug as string

  const room=roomsPrms.find(room=>room.slug===slug)

  const [fullscreenSrc, setFullscreenSrc]=useState<string|null>(null)

  const imageCount=roomImageCounts[slug] ?? 0
  const images=Array.from({ length: imageCount }, (_, i)=>
    `/rooms-detailed/${slug}/${i+1}.jpg`
  )

  const videoSrc=`/rooms-detailed-videos/${slug}/vid.mp4`
  const videoPoster=`/rooms-detailed-videos/${slug}/poster.jpg` || "/placeholder-video.jpg"

  return(
    <div className={styles.container}>
      <h1 className={styles.title}>
        {room?.name}
      </h1>

      <div className={styles.heroMedia}>
        <div className={styles.mediaCard}>
          <div className={styles.mediaLabel}>Видео-тур по номеру</div>

          <div className={styles.videoWrapper}>
            <video
              className={styles.video}
              controls
              preload="metadata"
              playsInline
              poster={videoPoster}
            >
              <source src={videoSrc} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>

            <div className={styles.playOverlay}>
              <div className={styles.playButton}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v13.72l11-6.86z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {imageCount>0 && (
        <div className={styles.gallery}>
          {images.map((src, i)=>(
            <div
              key={i}
              className={styles.photoCard}
              onClick={()=>setFullscreenSrc(src)}
            >
              <Image
                src={src}
                alt={`Фото ${i+1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.photo}
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
              />
            </div>
          ))}
        </div>
      )}

      {fullscreenSrc && (
        <div className={styles.fullscreenOverlay} onClick={()=>setFullscreenSrc(null)}>
          <Image
            src={fullscreenSrc}
            alt="Полноэкранное фото"
            fill
            className={styles.fullscreenImage}
            sizes="100vw"
            priority
          />
          <button className={styles.closeBtn} aria-label="Закрыть">
            ×
          </button>
        </div>
      )}
    </div>
  )
}