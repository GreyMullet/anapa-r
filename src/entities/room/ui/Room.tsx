"use client"

import Image from "next/image"
import Link from "next/link"
import { RoomParams } from "@/shared/types/roomsParamsTypes"
import styles from "./style.module.css"

export const Room=({ name, slug, description, image }: RoomParams)=>{
  return(
    <Link href={`/rooms/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} fill style={{ objectFit: "cover", borderRadius: "12px" }} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  )
}
