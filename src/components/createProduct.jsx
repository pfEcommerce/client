import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../Redux/actions/createProductActions";
import { getCategories } from "../Redux/actions/categoriesActions";
import { useNavigate } from "react-router-dom";

//control errores
function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!input.description) {
    errors.life = "Description is required ";
  } else if (!input.price) {
    errors.force = "Price is required";
  } else if (!input.stock) {
    errors.defense = "Stock es required";
  }
  return errors;
}

export default function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    categories: [],
  });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function hangleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setInput({
      ...input,
      categories: [...input.categories, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length) {
      dispatch(postProduct(input));
      alert("Product created exit");
      setInput({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        categories: [],
      });
    } else {
      alert("Complete todos los campos");
    }
    navigate.push("/");
  }

  return (
    <div>
      <h1>Add products</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={input.name}
          name="name"
          placeholder="Name..."
          required
          onChange={hangleChange}
        ></input>
        {errors.name && <h5>{errors.name}</h5>}
        <label>Description</label>
        <input
          type="text"
          value={input.description}
          name="description"
          placeholder="Description.."
          required
        >
          onChange={hangleChange}
        </input>
        {errors.description && <h5>{errors.description}</h5>}
        <label>Price</label>
        <input
          type="text"
          value={input.price}
          name="price"
          placeholder="Price..."
          required
        >
          onChange={hangleChange}
        </input>
        {errors.price && <h5>{errors.price}</h5>}
        <label>Stock</label>
        <input
          type="text"
          value={input.stock}
          name="stock"
          placeholder="Stock..."
          required
        >
          onChange={hangleChange}
        </input>
        {errors.stock && <h5>{errors.stock}</h5>}

        <select onChange={(e) => handleSelect(e)}>
          {categories?.map((i) => (
            <option key={i.id} value={i.name}>
              {i.name}
            </option>
          ))}
          <ul>
            <li>{input.categories.map((i) => i.name + ", ")}</li>
          </ul>
        </select>
        <div></div>
        <button type="submit">Crear </button>
      </form>
    </div>
  );
}
