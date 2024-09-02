import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDealer, deleteDealer } from '../redux/dealerSlice';
import SearchBar from '../components/SearchBar';

const Dealer = () => {
  const dispatch = useDispatch();
  const dealers = useSelector((state) => state.dealer.dealers);
  const [filteredDealers, setFilteredDealers] = useState(dealers);
  const [newDealer, setNewDealer] = useState({
    name: '',
    enterpriseName: '',
    emailId: '',
    phoneNumber: '',
    address: '',
  });
  const [showForm, setShowForm] = useState(false);

  // Update filteredDealers whenever dealers change
  useEffect(() => {
    setFilteredDealers(dealers);
  }, [dealers]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      setFilteredDealers(
        dealers.filter((dealer) =>
          dealer.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredDealers(dealers);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addDealer(newDealer));
    setNewDealer({
      name: '',
      enterpriseName: '',
      emailId: '',
      phoneNumber: '',
      address: '',
    });
    setShowForm(false);
  };

  const handleDeleteDealer = (dealerName) => {
    dispatch(deleteDealer(dealerName));
    // Reapply search filter or reset the filtered list after deletion
    setFilteredDealers(filteredDealers.filter((dealer) => dealer.name.toLowerCase() !== dealerName.toLowerCase()));
  };

  return (
    <div className="dealer-page">
      <h2>Dealers</h2>

      <div className="dealer-actions">
        <SearchBar setItems={handleSearch} />
        <div className="action-buttons">
          <button className="add-dealer-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : 'Add New Dealer'}
          </button>
        </div>
      </div>

      {showForm && (
        <form className="add-dealer-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newDealer.name}
            onChange={(e) => setNewDealer({ ...newDealer, name: e.target.value })}
            placeholder="Enter dealer name"
            required
          />
          <input
            type="text"
            value={newDealer.enterpriseName}
            onChange={(e) => setNewDealer({ ...newDealer, enterpriseName: e.target.value })}
            placeholder="Enter enterprise name"
            required
          />
          <input
            type="email"
            value={newDealer.emailId}
            onChange={(e) => setNewDealer({ ...newDealer, emailId: e.target.value })}
            placeholder="Enter email ID"
            required
          />
          <input
            type="text"
            value={newDealer.phoneNumber}
            onChange={(e) => setNewDealer({ ...newDealer, phoneNumber: e.target.value })}
            placeholder="Enter phone number"
            required
          />
          <input
            type="text"
            value={newDealer.address}
            onChange={(e) => setNewDealer({ ...newDealer, address: e.target.value })}
            placeholder="Enter address"
            required
          />
          <button type="submit">Add Dealer</button>
        </form>
      )}

      <table className="dealers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Enterprise Name</th>
            <th>Email ID</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredDealers.map((dealer, index) => (
            <tr key={index}>
              <td>{dealer.name}</td>
              <td>{dealer.enterpriseName}</td>
              <td>{dealer.emailId}</td>
              <td>{dealer.phoneNumber}</td>
              <td>{dealer.address}</td>
              <td>
                <button
                  className="delete-dealer-btn"
                  onClick={() => handleDeleteDealer(dealer.name)}
                >
                  Delete Dealer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dealer;
