import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { addMedicineGroup, deleteMedicineGroup } from '../redux/medicineGroupSlice';

const MedicineGroups = () => {
  const dispatch = useDispatch();
  const medicineGroups = useSelector((state) => state.medicineGroup.groups);
  const [filteredGroups, setFilteredGroups] = useState(medicineGroups);
  const [showForm, setShowForm] = useState(false);
  const [newMedicineGroup, setNewMedicineGroup] = useState({ name: '', quantity: '' });

  useEffect(() => {
    setFilteredGroups(medicineGroups);
  }, [medicineGroups]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      setFilteredGroups(
        medicineGroups.filter((group) =>
          group.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredGroups(medicineGroups);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addMedicineGroup(newMedicineGroup));
    setNewMedicineGroup({ name: '', quantity: '' });
    setShowForm(false);
  };

  const handleDeleteGroup = (groupName) => {
    dispatch(deleteMedicineGroup(groupName));
  };

  return (
    <div className="medicine-groups-page">
      <h2>Medicine Groups</h2>

      {/* Search bar with actions */}
      <div className="group-actions">
        <SearchBar setItems={handleSearch} />
        <div className="action-buttons">
          <button className="add-group-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : 'Add New Group'}
          </button>
        </div>
      </div>

      {/* Form for adding a new group */}
      {showForm && (
        <form className="add-group-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newMedicineGroup.name}
            onChange={(e) => setNewMedicineGroup({ ...newMedicineGroup, name: e.target.value })}
            placeholder="Enter group name"
            required
          />
          <input
            type="number"
            value={newMedicineGroup.quantity}
            onChange={(e) => setNewMedicineGroup({ ...newMedicineGroup, quantity: e.target.value })}
            placeholder="Enter quantity"
            required
          />
          <button type="submit">Add Group</button>
        </form>
      )}

      {/* Table displaying group names, number of medicines, and actions */}
      <table className="medicine-groups-table">
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Number of Medicines</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredGroups.map((group, index) => (
            <tr key={index}>
              <td>{group.name}</td>
              <td>{group.medicines.length}</td>
              <td>
                <button
                  className="view-details-btn"
                  onClick={() => alert(`Viewing details for ${group.name}`)}
                >
                  View Full Details
                </button>
                <button
                  className="delete-group-btn"
                  onClick={() => handleDeleteGroup(group.name)}
                >
                  Delete Group
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineGroups;
