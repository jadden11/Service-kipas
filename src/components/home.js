import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { FaFan, FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdOutlineDownloadDone } from "react-icons/md";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                MZAR.id
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Service Kipas Angin
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Service Kipas angin wilayah{" "}
                <a
                  className="text-blue-500 hover:text-blue-700 font-semibold underline transition-colors duration-300"
                  href="https://www.bing.com/maps?osid=e9f89db2-3f1d-4e4b-807b-2738d0e6981c&cp=-6.387612~106.853683&lvl=12.183098&pi=0&v=2&sV=2&form=S00027"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gunung Putri
                </a>{" "}
                Bogor
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-4">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B6289670086485&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition-all duration-300"
          >
            <FaWhatsapp className="w-10 h-10 text-green-500" />
          </a>
        </div>

        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="kipas.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Service Kipas angin semua merek, biaya terjangkau sesuai
                kerusakan.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FaFan
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Kerusakan.
                    </strong>{" "}
                    Silahkan contact kami untuk menanyakan kerusakan.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <IoIosSend
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-300"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Kirim.
                    </strong>{" "}
                    Dapat anda kirim ke alamat yang kami berikan.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <MdOutlineDownloadDone
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Selesai.
                    </strong>{" "}
                    Setelah perbaikan selesai akan kami confirmasi untuk
                    melakukan pengiriman kepada anda.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Pengerjaan kami lakukan setelah unit datang ke tempat kami dan
                akan di confirmasi kedatangan dan pengerjaan kepada anda, Jika
                ada komponen yang harus di ganti atau kerusakan lain akan kami
                confirmasi kepada anda.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Keterangan.
              </h2>
              <p className="mt-6">
                Pastikan anda menghubungi kami untuk konsultasi kerusakan,
                Setelahnya anda bisa kirimkan unit ke lokasi kami, Untuk biaya
                pengiriman di tanggung anda, Biaya untuk perbaikan akan di lihat
                dari kerusakan dan harga komponen yang mengalami kerusakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
