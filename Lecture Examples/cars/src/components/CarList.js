import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  // FIXME: Rerender bug because useSelector returns a new object everytime
  //   const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
  //     const filteredCars = data.filter((car) =>
  //       car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );

  //     return {
  //       cars: filteredCars,
  //       name: form.name,
  //     };
  //   });

  const searchTerm = useSelector(({ cars: { searchTerm } }) => searchTerm);
  const cars = useSelector(({ cars: { data } }) => data).filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const name = useSelector(({ form: { name } }) => name);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
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
