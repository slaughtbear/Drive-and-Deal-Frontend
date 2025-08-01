import { useNavigate } from "react-router-dom";
import { MdAssignment } from "react-icons/md";

function RentalCard({ rental }) {
  const navigate = useNavigate();
  return (
    <article className="rounded-xl border-2 mt-3 border-neutral-800 bg-neutral-950">
      <div
        key={rental.id}
        className="flex items-start gap-4 p-4 sm:p-6 lg:p-8"
        onClick={() => navigate(`${rental.id}`)}
      >
        <button className="block shrink-0">
          <MdAssignment className="size-14 rounded-lg object-cover bg-neutral-800 p-2 text-blue-500" />
        </button>

        <div>
          <h3 className="font-medium text-white sm:text-lg hover:underline">
            Cliente: {rental.clientName}
          </h3>
          <p className="text-sm text-gray-400">Auto: {rental.carModel}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <strong className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-blue-600 px-3 py-1.5 text-white">
          <span className="text-[10px] font-medium sm:text-xs">
            {rental.startDate} → {rental.endDate}
          </span>
        </strong>
      </div>
    </article>
  );
}

export default RentalCard;
