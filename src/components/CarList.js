import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/store";

function CarList() {
  const { data, searchTerm } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  //   if (searchTerm === "") {
  //     return data.map((car) => <p key={car.id}>{car.name}</p>);
  //   }
  //   const filteredCars = data.filter((car) =>
  //     car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   return filteredCars.map((car) => <p key={car.id}>{car.name}</p>);
  const handleDelete = (id) => {
    dispatch(removeCar(id));
  };
  const renderedCars = data.map((car) => {
    return (
      <div key={car.id} className="car-form panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleDelete(car.id)}
        >
          Remove
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
export default CarList;
