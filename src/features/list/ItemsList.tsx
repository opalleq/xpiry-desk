import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as itemsSelectors from './selectors';

const ItemsList = () => {
  const items = useSelector(itemsSelectors.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAdd = () => {
    navigate('/')
    dispatch({type: 'NEW'})
  }

  const handleEdit = item => {
    navigate('/')
    dispatch({type: 'FILL',
    item: {
      ...item
    }})
  }

  const handleDelete = item => {
    dispatch({type: 'DELETE', id: item.id})
  }

  if (!items.length) return (<div>No items<button type="button" className="btn-common" onClick={() => {handleAdd()}}>Add item</button></div>)
  return (
      <>
        <button type="button" className="btn-common" onClick={() => {handleAdd()}}>Add item</button>
        <table>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Produced on</th>
            <th>Valid until</th>
            <th>Period of Validity</th>
            <th></th>
            <th></th>
          </tr>
          <tbody>
          {items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.productionDate}</td>
                <td>{item.expirationDate}</td>
                <td>{item.period || ''} {item.periodType}</td>
                <td><button type="button" onClick={() => {handleEdit(item)}}>Edit</button></td>
                <td><button type="button" onClick={() => {handleDelete(item)}}>Delete</button></td>
              </tr>
          ))}
          </tbody>
        </table>
      </>
  );
}

export default ItemsList
