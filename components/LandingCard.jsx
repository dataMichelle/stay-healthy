import Image from "next/image";

export default function LandingCard({ title, description, imageSrc }) {
  return (
    <div className="max-w-xs border rounded-lg shadow-lg flex flex-col items-center p-4">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={398}
        className="rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4 text-center">{title}</h2>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  );
}
