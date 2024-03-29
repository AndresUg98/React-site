import { ChevronRightIcon } from "@heroicons/react/24/solid"; //Añadiendiendo iconos con hero icons (https://heroicons.com/)

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-3">
      <div className="flex justify-between w-full">
        <p className=" flex flex-col ">
          <span className="font-light">01.02.2023</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2np">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
