import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateCategory from "../UpdateCategory/index"
import StyledSearchbar from "../../styles/styled_searchbar/styledSearchbar";
import StyledButton from "../../styles/styled_button/styledButton.js";

export default function FormCategories({ name }) {
    const [categories, setCategories] = useState([]);
    const [categorySelect, setCategorySelect] = useState(
        '-Seleccione una Categoría-'
    );
    const [addCategory, setAddCategory] = useState('');
    const [put, setPut] = useState('true');
    const [reload, setReload] = useState('true');

    useEffect(() => {
        dataCategories();
    }, [put, reload]);

    async function dataCategories() {
        let data = await axios.get('/categories');
        setCategories(data.data);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if (!categorySelect) {
            alert('Esta vacío');
        } else {
            await axios.post('/categories/deleteCategory', {
                name: categorySelect,
            });
            alert('Eliminado');
            dataCategories();
        }
        setReload(!reload);
    };

    const handleAddCategory = async (e) => {
        e.preventDefault();
        if (!addCategory) {
            alert('Ingrese nuevo nombre');
        } else {
            await axios.post('/categories/addCategory', {
                name: addCategory,
            });
            alert('Categoria Creada');
            setAddCategory("")
            dataCategories();
        }
        setReload(!reload);
    };

    return (
        <div>
            <div>
                <h3>Categorías</h3>
                <div>
                    <form onSubmit={handleAddCategory}>
                        <label>
                            Agregar una nueva Categoría
                        </label>
                        <br />

                        <StyledSearchbar
                            value={addCategory}
                            placeholder="Ingrese nueva Categoría..."
                            onChange={(e) => setAddCategory(e.target.value)}
                        />
                        <br />
                        <br />
                        <StyledButton
                            type="submit"
                            onClick={(e) => handleAddCategory(e)}
                        >
                            Agregar
                        </StyledButton>
                    </form>

                    <form>
                        <br />
                        <label>Eliminar o Modificar Categoría</label>
                        <br />
                        <select
                            type="text"
                            name=""
                            required
                            onChange={(e) => setCategorySelect(e.target.value)}
                        >
                            <option defaultValue>-Seleccione una Categoría-</option>
                            {categories?.map((x) => (
                                <option key={x.name} value={x.name}>
                                    {x.name}
                                </option>
                            ))}
                        </select>

                        {categorySelect === '-Seleccione una Categoría-' ? (
                            ''
                        ) : (
                            <div>
                                <StyledButton
                                    type="submit"
                                    onClick={(e) => handleDelete(e)}
                                >
                                    Eliminar
                                </StyledButton>
                                {categories.length === 0 ? (
                                    ''
                                ) : (
                                    <StyledButton
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPut(false);
                                        }}
                                    >
                                        Modificar
                                    </StyledButton>
                                )}
                            </div>
                        )}
                        <br />

                        <div>
                            {put ? (
                                ''
                            ) : (
                                <UpdateCategory
                                    categorySelect={categorySelect}
                                    setPut={setPut}
                                    put={put}
                                    dataCategories={dataCategories}
                                />
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}