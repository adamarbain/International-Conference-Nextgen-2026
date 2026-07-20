import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const certificates = Array.from({ length: 29 }, (_, index) => {
  const padded = String(index + 1).padStart(4, "0");
  return {
    id: index + 1,
    file: `/icgsbt2026_presenter_certs/ICGSBT2026_Presenter_Certificates_page-${padded}.jpg`,
    label: `Certificate ${index + 1}`,
  };
});

export default function CertificatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHero
        title="Certificates"
        subtitle="Download your conference certificate in JPG format directly from this page."
        badge="Download"
      />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-blue-800">
            <p className="font-semibold">Available for download</p>
            <p className="mt-2 text-blue-700">
              Each certificate is provided as a JPG file. Click the download button on any card below to save it to your device.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[3/4] w-full bg-gray-100">
                  <Image
                    src={certificate.file}
                    alt={certificate.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-navy">
                        {certificate.label}
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">JPG certificate</p>
                    </div>
                    <a
                      href={certificate.file}
                      download
                      className="inline-flex items-center rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
