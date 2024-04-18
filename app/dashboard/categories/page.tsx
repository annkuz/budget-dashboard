import React from 'react'
import DataTable from './data-table'
import columns, { Category } from './columns'

async function getData(): Promise<Category[]> {
  return [
    {
      id: '11',
      name: 'Clothes',
    },
    {
      id: '12',
      name: 'Books',
    }
  ]
}

const CategoriesPage = async () => {

  const data = await getData();

  return (
    <DataTable columns={columns} data={data} />
  )
}

export default CategoriesPage