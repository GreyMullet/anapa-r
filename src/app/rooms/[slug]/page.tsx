"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import styles from "./style.module.css"

export default function RoomDetailed(){
  const { slug }=useParams()
  const [fullscreenSrc, setFullscreenSrc]=useState<string|null>(null)

  const imageCount=5
  const images=Array.from({ length: imageCount }, (_, i)=>`/rooms-detailed/${slug}/${i+1}.jpg`)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Номер: {slug}</h1>
      <div className={styles.gallery}>
        {images.map((src, i)=>(
          <div key={i} className={styles.imageWrapper} onClick={()=>setFullscreenSrc(src)}>
            <Image
              src={src}
              alt={`Фото ${i+1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
          </div>
        ))}
      </div>

      {fullscreenSrc && (
        <div className={styles.fullscreenOverlay} onClick={()=>setFullscreenSrc(null)}>
          <Image
            src={fullscreenSrc}
            alt="Fullscreen"
            fill
            className={styles.fullscreenImage}
            sizes="100vw"
          />
          <button className={styles.closeButton}>&times;</button>
        </div>
      )}
    </div>
  )
}
