import React, { useState } from 'react';
import axios from 'axios';
import StyledSearchbar from "../../styles/styled_searchbar/styledSearchbar";
import StyledButton from "../../styles/styled_button/styledButton.js";

export default function CreateCategory({ categorySelect, setPut, put, dataCategories }) {
  const [input, setInput] = useState('');

  const handleChange = async () => {
    setPut(!put);
    await axios.post('categories/updateCategory', {
      name: categorySelect,
      newName: input,
    });
    alert('Categoría Modificada');
    dataCategories();
  };

  return (
    <div>
      {categorySelect === '-Seleccione una Categoría-' ? (
        ''
      ) : (
        <div>
          <h2>Modificar Categoría</h2>
          <form>
            {/* <label>{categorySelect}</label> */}
            <StyledSearchbar
              placeholder="Ingrese nuevo nombre..."
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <br />
            <StyledButton
              type="submit"
              value="Enviar"
              onClick={handleChange}
            >
              Enviar
            </StyledButton>
          </form>
        </div>
      )}
    </div>
  );
}
