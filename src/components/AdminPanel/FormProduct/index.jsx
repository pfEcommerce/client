import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { postProduct, editProduct } from '../../../Redux/actions/productsActions'; 
 import { useNavigate } from "react-router"; 
import { getCategories } from "../../../Redux/actions/categoriesActions";

//control errores
function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    } else if (!input.price) {
      errors.price = "Price is required ";
    } else if (!input.stock) {
      errors.stock = "Stock is required";
    } else if (!input.description) {
      errors.description = "Description es required";
    } else if (!input.image) {
        errors.image = "Image es required";
       } else if (!input.category) {
            errors.category = "Category es required";
       }
    return errors;
  }
export default function FormProducts () {
  
 const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const categ = useSelector((state) => state.rootReducer.categories);
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name:"",
        price:"",
        stock:"",
        description:"",
        image:"",
        category:[]
    });
    /* useEffect(() => {
        dispatch(getCategories());
      }, [dispatch]); */

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

      function handleSubmit(e) {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            if(input.category.length === 0) {
                alert("no hay categorias")
            } else {
                dispatch(postProduct(input));
            }
      
        
          
          alert("Product created exit");
          setInput({
            name:"",
            price:"",
            stock:"",
            description:"",
            image:"",
            category:[]
            
          });
        } else {
          alert("Complete todos los campos");
        }
        let inputs = document.querySelectorAll('input[type=checkbox]');
        inputs.forEach((item) => {
            item.checked = false;
        });
        alert(`El producto ${input.name} ha sido creado`);
        navigate("/home") 
      }

      function handleSelect(e) {
          if(e.target.checked) {
            setInput({
                ...input,
                category: [...input.category, e.target.value],
                
              });
          } else {
            setInput({
                ...input,
                category: input.category.filter((category)=>category!==e.target.value) 
                
              }); 
          }
      }
     


    return (
     <div>
     <h3>Productos</h3>
     <div>
     <form onSubmit = {e => {handleSubmit(e)}}>
         <div>
     <label>Crear producto</label>
     </div>
     <label>Name</label>
     <div>
        <input
          type="text"
          value={input.name}
          name="name"
          placeholder="Name..."
          required
          onChange={e =>hangleChange(e)}
        />
        {errors.name && <h5>{errors.name}</h5>}
        </div>
        <label>Price</label>
        <div>
        <input
          type="text"
          value={input.price}
          name="price"
          placeholder="Price..."
          required
        
          onChange={e =>hangleChange(e)}
        />
        {errors.price && <h5>{errors.price}</h5>}
        </div>
        <label>Stock</label>
        <div>
        <input
          type="text"
          value={input.stock}
          name="stock"
          placeholder="Stock"
          required
          
            onChange={e =>hangleChange(e)}
          />
          {errors.stock && <h5>{errors.stock}</h5>}
          </div>
  
        <label>Description</label>
        <div>
        <input
          type="text"
          value={input.description}
          name="description"
          placeholder="Description.."
          required
        
          onChange={e =>hangleChange(e)}
          />
        {errors.description && <h5>{errors.description}</h5>}
        </div>
        <label>Image</label>
        <div>
        <input
          type="text"
          value={input.image}
          name="image"
          placeholder="Image.."
          required
        
          onChange={e =>hangleChange(e)}
          />
        {errors.image && <h5>{errors.image}</h5>}
        </div>
         
        <h5>Categorias</h5>
        <div>
         {
         categ && categ.map((c)=> {
             return (
             <div key={c.name}>
                <label>{c.name}</label> 
                <input type="checkbox" value={c.name}
                onChange={(e)=>handleSelect(e)}/>
            </div>) 
         })
         }


        </div>



       
         
      
        <button type="submit">Crear </button>
      </form>
      </div>
    </div>
  );

}