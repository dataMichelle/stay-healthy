import Image from "next/image";
import LandingCard from "@/components/LandingCard"; // Adjust the import path as necessary
import Link from "next/link";
import SessionLayout from "@/components/SessionLayout"; // Import the SessionLayout

export default function Home() {
  return (
    <div className="mt-10">
      <h1>Browse our Services</h1>
      <p className="text-center mb-6">
        Love yourself enough to live a healthy lifestyle.
      </p>
      <div className="flex flex-wrap justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Instant Consultation: Protected */}
        <SessionLayout route="/appointments/instant">
          <LandingCard
            title="Instant Consultation"
            description="Get immediate medical advice from our experts."
            imageSrc="/instant_consult.png"
          />
        </SessionLayout>

        {/* Book an Appointment: Protected */}
        <SessionLayout route="/appointments">
          <LandingCard
            title="Book an Appointment"
            description="Schedule an appointment with a healthcare provider."
            imageSrc="/book_appt.png"
          />
        </SessionLayout>

        {/* Self Checkup: Public */}
        <Link href="/self-checkup">
          <LandingCard
            title="Self Checkup"
            description="Perform a self-checkup to monitor your health."
            imageSrc="/self_checkup.png"
          />
        </Link>

        {/* Health Tips: Public */}
        <Link href="/blog">
          <LandingCard
            title="Health Tips and Guidance"
            description="Receive tips and guidance to maintain a healthy lifestyle."
            imageSrc="/health_tips.png"
          />
        </Link>
      </div>
    </div>
  );
}
