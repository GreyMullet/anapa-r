import { Room } from "@/entities/room"
import { roomsPrms } from "../config/roomsParams"
import styles from "./style.module.css"

export const Rooms=()=>{
  return(
    <div className={styles.roomsWrapper}>
        {roomsPrms.map((el, idx)=>(
            <Room
                key={idx}
                name={el.name}
                slug={el.slug}
                description={el.description}
                image={el.image}
            />
        ))}
    </div>
  )
}
