"use client"

import { ColumnDef } from "@tanstack/react-table";

export type Category = {
    id: string
    name: string
}

export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
]

export default columns;