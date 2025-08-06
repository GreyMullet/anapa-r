import { SectionDivider } from "@/shared/section-divider"
import { AboutSection } from "@/widgets/about-section"
import { BookingModule } from "@/widgets/booking-module"
import { AddressSection } from "@/widgets/map"
import { ServicesTable } from "@/widgets/services-table"
import { WelcomeSection } from "@/widgets/welcome-section"

export default function Home(){
  return(
    <div>
      <WelcomeSection />
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
