import { XMarkIcon } from "@heroicons/react/24/solid"; //Añadiendiendo iconos con hero icons (https://heroicons.com/)

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;

  let renderXmarkIcon;

  if (handleDelete) {
    renderXmarkIcon = (
      <XMarkIcon
        onClick={() => handleDelete(id)}
        className="h-6 w-6 text-black-500 cursor-pointer"
      />
    );
  }

  return (
    <div className="flex justify-between item-center mb-3">
      <div className="flex item-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
            srcset=""
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex item-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXmarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
