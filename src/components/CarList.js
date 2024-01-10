import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/store";

function CarList() {
  //Derieved state , we are using useSelector to get the state from the store
  const [data, { name, cost }] = useSelector(
    ({ cars: { data, searchTerm }, form }) => {
      return [
        data.filter((car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        form,
      ];
    }
  );
  const dispatch = useDispatch();

  //   const filteredCars = data.filter((car) =>
  //     car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   return filteredCars.map((car) => <p key={car.id}>{car.name}</p>);
  const handleDelete = (id) => {
    dispatch(removeCar(id));
  };
  const renderedCars = data.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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
