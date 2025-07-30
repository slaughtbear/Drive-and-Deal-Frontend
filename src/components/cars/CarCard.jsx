import { useNavigate } from "react-router-dom";
import { PiCarProfileLight } from "react-icons/pi";

function CarCard({ car }) {
  const navigate = useNavigate();
  return (
    <article className="rounded-xl border-2 mt-3 border-neutral-800 bg-neutral-950">
      <div
        key={car.id}
        className="flex items-start gap-4 p-4 sm:p-6 lg:p-8"
        onClick={() => {
          navigate(`${car.id}`);
        }}
      >
        <button className="block shrink-0">
          <PiCarProfileLight className="size-14 rounded-lg object-cover bg-neutral-800 p-2 text-green-500" />
        </button>

        <div>
          <h3 className="font-medium text-white sm:text-lg">
            <a href="#" className="hover:underline">
              {" "}
              {`${car.brand} ${car.model}`}{" "}
            </a>
          </h3>
        </div>
      </div>

      <div className="flex justify-end">
        <strong className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>

          <span className="text-[10px] font-medium sm:text-xs">Disponible</span>
        </strong>
      </div>
    </article>
  );
}

export default CarCard;
