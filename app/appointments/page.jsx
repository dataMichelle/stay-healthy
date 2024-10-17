import Link from "next/link";
import LandingCard from "@/components/LandingCard";
import SessionLayout from "@/components/SessionLayout"; // Import the SessionLayout component

export default function AppointmentsPage() {
  return (
    <SessionLayout>
      <div className="mt-10">
        <h1>Appointments</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/appointments/instant">
            <LandingCard
              title="Instant Consultation"
              description="Get immediate medical advice from our experts."
              imageSrc="/instant_consult.png"
            />
          </Link>
          <Link href="/appointments/new">
            <LandingCard
              title="Book an Appointment"
              description="Schedule an appointment with a healthcare provider."
              imageSrc="/book_appt.png"
            />
          </Link>
        </div>
      </div>
    </SessionLayout>
  );
}
