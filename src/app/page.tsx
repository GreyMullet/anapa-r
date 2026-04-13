import { Rooms } from "@/features/rooms"
import { SectionDivider } from "@/shared/section-divider"
import { AboutSection } from "@/widgets/about-section"
import { BookingModule } from "@/widgets/booking-module"
import { HotelStreetView } from "@/widgets/hotel-street-view"
import { AddressSection } from "@/widgets/map"
import { ServicesTable } from "@/widgets/services-table"
import { WelcomeSection } from "@/widgets/welcome-section"

export default function Home(){
  return(
    <div>
      <WelcomeSection />
        <SectionDivider />
      <Rooms />
        <SectionDivider />
      <HotelStreetView />
        <SectionDivider />
      <AboutSection />
        <SectionDivider />
      <BookingModule />
        <SectionDivider />
      <AddressSection />
        <SectionDivider />
      <ServicesTable />
    </div>
  )
}
