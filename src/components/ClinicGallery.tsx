import Image from "next/image";
import { clinicPhotos } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { StockBadge, StockNote } from "./ui/StockBadge";

const spans = [
  // 1 Reception — hero tile
  "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  // 2-5 paired rows
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  // 6-9 wide tiles
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-2 lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  // 10 full width
  "sm:col-span-2 lg:col-span-4",
];

export function ClinicGallery() {
  return (
    <div>
      <div className="grid auto-rows-[190px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {clinicPhotos.map((photo, i) => (
          <Reveal
            key={photo.src}
            delay={i * 70}
            className={`relative overflow-hidden rounded-3xl border border-ink/8 bg-sand ${
              spans[i] ?? ""
            }`}
          >
            <div className="group relative h-full w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-semibold tracking-widest text-cream uppercase backdrop-blur-sm">
                {photo.label}
              </span>
              {"stock" in photo && photo.stock && (
                <StockBadge className="absolute top-3 right-3" />
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <StockNote className="mt-5" />
    </div>
  );
}
