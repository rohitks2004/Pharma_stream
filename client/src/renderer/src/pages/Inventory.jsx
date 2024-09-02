import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicine, addstate, deleteMedicine } from '../redux/inventorySlice'; 
import SearchBar from '../components/SearchBar';
import moment from 'moment';
import axios from 'axios';

const Inventory = () => {
  const dispatch = useDispatch();
  const medicines = useSelector((state) => state.inventory.medicines);
  const [showForm, setShowForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [filteredMedicines, setFilteredMedicines] = useState(medicines);
  const [deleteInput, setDeleteInput] = useState('');
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    medicineId: '',
    category : '',
    cost: '',
    arrivalDate: '',
    expiryDate: '',
    quantity: '',
  });
  useEffect(()=>{
    fetchmedicine()
  },[])
  const fetchmedicine = async ()=>{
    try{
      const res = await axios.get(
        // "http://localhost:8800/api/superlogin/login"
        "http://localhost:8800/api/hinventory/",
        {withCredentials:true}
      );
      dispatch(addstate(res.data))
      }catch(e){
        console.log(e);
      }

  }

  useEffect(()=>{setFilteredMedicines(medicines)
  },[medicines])

  const handleAddItemClick = () => setShowForm(showForm ? false: true);
  const handleInputChange = (e) => setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addMedicine(newMedicine)); 
    setNewMedicine({
      name: '',
      medicineId: '',
      category : '',
      cost: '',
      arrivalDate: '',
      expiryDate: '',
      quantity: '',
    });
    setShowForm(false);
  };
  const handleDeleteButtonClick = () => setShowDeleteForm(showDeleteForm ? false : true);
  const handleDeleteInputChange = (e) => setDeleteInput(e.target.value);
  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteMedicine(deleteInput)); 
    setDeleteInput('');
    setShowDeleteForm(false);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredMedicines(medicines);
    } else {
      const filteredItems = medicines.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMedicines(filteredItems);
    }
  };

  return (
    <div className='inventory'>
      <div className='header-section'>
        <SearchBar setItems={handleSearch}/>
        <div className='action-buttons'>
          <button className='add-item' onClick={handleAddItemClick}>
            + Add item
          </button>
          <button className='delete-item' onClick={handleDeleteButtonClick}>
            Delete Item
          </button>
        </div>
      </div>

      {showForm && (
        <div className='add-item-form'>
          <form onSubmit={handleFormSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Medicine Name'
              value={newMedicine.name}
              onChange={handleInputChange}
              required
            />
            <input
              type='text'
              name='medicineId'
              placeholder='Medicine ID'
              value={newMedicine.medicineId}
              onChange={handleInputChange}
              required
            />
            <input
              type='text'
              name='category'
              placeholder='Medicine group'
              value={newMedicine.medicineGroup}
              onChange={handleInputChange}
              required
            />
             {/* arrivalDate: '',
             expiryDate: '', */}
            <input
              type='date'
              name='arrivalDate'
              // placeholder='arrivalDate'
              value={newMedicine.arrivalDate}
              onChange={handleInputChange}
              required
            />
            <input
              type='date'
              name='expiryDate'
              // placeholder='expiryDate'
              value={newMedicine.expiryDate}
              onChange={handleInputChange}
              required
            />
            <input
              type='number'
              name='cost'
              placeholder='Cost'
              value={newMedicine.cost}
              onChange={handleInputChange}
              required
            />
            <input
              type='number'
              name='quantity'
              placeholder='Quantity'
              value={newMedicine.quantity}
              onChange={handleInputChange}
              required
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      )}

      {showDeleteForm && (
        <div className='delete-item-form'>
          <form onSubmit={handleDeleteSubmit}>
            <input
              type='text'
              placeholder='Enter Medicine ID to Delete'
              value={deleteInput}
              onChange={handleDeleteInputChange}
              required
            />
            <button type='submit'>Delete</button>
          </form>
        </div>
      )}

      <div className='inventory-table'>
        <table>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Medicine ID</th>
              <th>Medicine group</th>
              <th>Expiry Date</th>
              <th>Stock in Qty</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.name}</td>
                <td>{medicine.medicineId}</td>
                <td>{medicine.category}</td>
                <td>{moment(medicine.expiryDate).format("DD-MM-YYYY")}</td>
                <td>{medicine.quantity}</td>
                <td>{"₹"+medicine.cost.toFixed(2)}</td>
                <td>
                  <button className='detail-button'>View Full Detail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Outlet />
    </div>
  );
};

export default Inventory;
