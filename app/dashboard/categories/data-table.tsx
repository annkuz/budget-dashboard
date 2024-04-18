"use client"

import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TableRoot, TableBody, TableColumnHeaderCell, TableHeader, TableRow, TableCell } from "@radix-ui/themes";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue> ({ 
  columns, 
  data,
 } : DataTableProps<TData, TValue>) {

  const table = useReactTable({
    data,
      columns,
      getCoreRowModel: getCoreRowModel(),
  });
  return (
    <TableRoot variant="surface">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableColumnHeaderCell key={header.id}>
                {header.isPlaceholder ? null : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableColumnHeaderCell>
            ))}
          </TableRow>
          ))
        }
      </TableHeader>
      <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>
                No results
              </TableCell>
            </TableRow>
          )}
      </TableBody>
    </TableRoot>
  );
}
export default DataTable;