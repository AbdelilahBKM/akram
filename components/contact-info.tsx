import { JSX, SVGProps } from "react";
import Image from "next/image";

export default function Contact_info() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto py-12 md:py-16 text-slate-600">
      <div className="space-y-4 flex flex-col justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Joignez-Nous:</h2>
          <p className="text-muted-foreground">
            Contactez Akram Ameublement Marrakech pour tous vos avis, devis,
            commandes et pour tout renseignement pouvant vous aider a mieux
            réaliser vos projets soit la fabrication ou la restauration
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BuildingIcon className="w-5 h-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Akram Ameublement.</h3>
              <p className="text-muted-foreground">
                Av. Palastine, Marrakesh 40000, Morocco
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-muted-foreground" />
            <div>
              <p>+212 66124-5588</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="w-5 h-5 text-muted-foreground" />
            <div>
              <p>akram@info.ma</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/images/map.png"
          width="600"
          height="400"
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function BuildingIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
