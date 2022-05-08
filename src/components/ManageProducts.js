import React, { useState, useEffect } from 'react'
import './ManageProducts.css';
import { addProduct, deleteProduct } from '../action';
import { useDispatch, useSelector } from 'react-redux'

const initialValue = {
        product_name: "",
        product_price: "",
        product_description: "",
        product_image: ""
}

const ManageProducts = () => {

    const [value, setValue] = useState(initialValue);
    const [image, setImage] = useState("");
    const dispatch = useDispatch();

    const data = useSelector((state) => state.appReducer)

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});

    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    
    async function Main(file) {
        const imageToBase64 = await toBase64(file);
        setImage(imageToBase64);
    }

    const handleImageUpload = (e) => {
        Main(e.target.files[0]);
    }

    useEffect(() => {
        setValue((prevValue) => {
            return {
                product_name: prevValue.product_name,
                product_price: prevValue.product_price,
                product_description: prevValue.product_description,
                product_image: image
                
            }
        })


    }, [image])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(value))
        setValue(initialValue);
    }
    
    return (
        <div className='manageProducts'>

            <form onSubmit={handleSubmit}>
                <section>
                    <div className='manageProducts__boxes'>
                        <label htmlFor="name"> Product name </label>
                        <input id="name" className='input' type="text" placeholder='Enter product name' value={value.product_name} name="product_name" onChange={handleChange} autoComplete="off" required />
                    </div>

                    <div className='manageProducts__boxes'>
                        <label htmlFor="price"> Price </label>
                        <input id="price" className='input' type="number" placeholder='Enter price' min={0} value={value.product_price} name="product_price" onChange={handleChange} required />
                    </div>
                </section>

                <section>
                    <div className='manageProducts__boxes'>
                        <label htmlFor="description"> Product description </label>
                        <textarea id="description" rows="1" cols="5" className='input' placeholder="Enter description" value={value.product_description} name="product_description" onChange={handleChange} required></textarea>
                    </div>

                    <div className='manageProducts__boxes'>
                        <label htmlFor="image"> Product image </label>
                        <input id="image" type="file"  name="product_image" onChange={handleImageUpload} required />
                    </div>
                </section>

                <button type="submit"> Add product</button>
            </form>

            <br /><br />
            
            {
                data.length > 0 &&

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item) => {
                                    return (
                                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="flex justify-start items-center px-6 py-4 text-xl font-xl text-gray-700 dark:text-white whitespace-nowrap">
                                                <img className='mr-4' src={item.product.product_image} width="50px" />
                                                {item.product.product_name}
                                            </th>
                                            <td className="px-6 py-4 font-bold text-lg">
                                                {item.product.product_description}
                                            </td>
                                            <td className="px-6 py-4 font-bold text-lg">
                                                {item.product.product_price}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a className="text-lg text-cyan-600 cursor-pointer" onClick={() => dispatch(deleteProduct(item.id))}> Remove </a>
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                                
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default ManageProducts