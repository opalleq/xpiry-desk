import * as React from 'react';
import { Category, getEnumKeys, PeriodType, PeriodTypes } from '../../models/interfaces';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as formSelectors from './selectors'
import { useEffect, useState } from 'react';
import './Form.css';

const categories = [{name: 'Medicine', value: 'medicine'}, {name: 'Food', value: 'food'}]

const AddEditForm = () => {
  const form = useSelector(formSelectors.form);
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [period, setPeriod] = useState(0)
  const [periodType, setPeriodType] = useState('')
  const [category, setCategory] = useState('')
  const [productionDate, setProductionDate] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false)

  useEffect(() => {
    setName(form.name || '')
    setPeriod(form.period || 0)
    setPeriodType(form.periodType || 'days')
    setCategory(form.category || '')
    setProductionDate(form.productionDate || '')
    setExpirationDate(form.expirationDate || '')
  }, [form]);

  const addCategory = (value) => {
    categories.push({name: value, value})
    setCategory(value)
    setShowNewCategoryInput(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id: form.id,
      name,
      category,
      period,
      periodType,
      productionDate,
      expirationDate
    }
    if (form.isEdit) {
      dispatch({type: 'UPDATE', item: data})
    } else {
      dispatch({type: 'ADD', item: data})
    }
    dispatch({type: 'RESET'})
  }

  return (
      <>
        <form onSubmit={handleSubmit} className="m-4">
          <div className="form-block">
            <label>
              Name*:
            </label>
            <input
                type="text"
                required
                name="name"
                value={name}
                onChange={e => {
                  setName(e.target.value)
                }}
            />
          </div>
          <div className="form-block">
            <label>
              Category:
            </label>
            <select name="category" value={form.category} onChange={e => {
              setCategory(e.target.value)
            }}>
              {categories.map((option: Category, index: number) => (
                  <option key={index} value={option.value}>
                    {option.name}
                  </option>
              ))}
            </select>
            <button type="button"
                    className="btn-sm"
                    onClick={() => {setShowNewCategoryInput(true)}}>Add Category</button>
            {showNewCategoryInput &&
              <>
                <input
                  type='text'
                  value={newCategory}
                  onChange={e => {
                    setNewCategory(e.target.value)
                  }}
                />
                <button
                  type="button"
                  className="btn-sm"
                  onClick={() => {addCategory(newCategory)}}>Save</button>
              </>
            }
          </div>
          <div className="form-block">
            <label>
              Expiration Date:
            </label>
            <input
                type="text"
                name="expirationDate"
                value={expirationDate}
                onChange={e => {
                  setExpirationDate(e.target.value)
                }}
            />
          </div>
          <div className="form-block">
            <label>
              Production Date:
            </label>
            <input
                type="text"
                name="productionDate"
                value={productionDate}
                onChange={e => {
                  setProductionDate(e.target.value)
                }}
            />
          </div>
          <div className="form-block">
            <label>
              Period of Validity:
            </label>
            <input
                type="text"
                name="period"
                value={period}
                onChange={e => {
                  setPeriod(parseInt(e.target.value))
                }}
            />
            <select
                name="periodType"
                value={form.periodType} onChange={e => {
                  setPeriodType(e.target.value)
                }}>
              {getEnumKeys(PeriodTypes).map((option: PeriodType, index: number) => (
                  <option key={index} value={option.toLowerCase()}>
                    {PeriodTypes[option]}
                  </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn-common">Save</button>
        </form>
        <Link to="items" className="btn-common">View items</Link>
      </>
  );
}

export default AddEditForm