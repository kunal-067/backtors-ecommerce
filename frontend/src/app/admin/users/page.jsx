import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function ProductPage() {
    return (
        <div className='h-full shadow-md p-4'>
            <div className='flex justify-between'>
                <h2 className='font-medium text-[22px]'>Users</h2>

                <form action="#">
                    <Input placeHolder="Search" className='w-[210px] float-right mb-4' />
                </form>
            </div>

            <DataTable />

            <div className='py-4 flex justify-between'>
                <Select>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="20" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                </Select>

                <PaginationCard className='w-fit m-0' />
            </div>
        </div>
    )
}

function PaginationCard({ className }) {
    return (
        <Pagination className={className}>
            <PaginationContent>
                <PaginationPrevious />
                <PaginationLink className={'border-[2px] mr-1'}>1</PaginationLink>
                <PaginationLink className={'border-[2px]'}>2</PaginationLink>
                <PaginationEllipsis />
                <PaginationNext />
            </PaginationContent>
        </Pagination>
    )
}
function DataTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className='text-right pr-8'>Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow>
                    <TableCell>127</TableCell>
                    <TableCell><img className='hover:scale-[3] cursor-pointer' src={'/products/prod-1.png'} width={26} height={26} alt='img' /></TableCell>
                    <TableCell>Prod- 1</TableCell>
                    <TableCell>₹450</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell className='text-right'>
                        <Button variant='destructive' className='mr-2'>Remove</Button>
                        <Button>Edit</Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>127</TableCell>
                    <TableCell><img className='hover:scale-[3] cursor-pointer' src={'/products/prod-3.png'} width={26} height={26} alt='img' /></TableCell>
                    <TableCell>Prod- 1</TableCell>
                    <TableCell>₹450</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell className='text-right'>
                        <Button variant='destructive' className='mr-2'>Remove</Button>
                        <Button>Edit</Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>127</TableCell>
                    <TableCell><img className='hover:scale-[3] cursor-pointer' src={'/products/prod-4.png'} width={26} height={26} alt='img' /></TableCell>
                    <TableCell>Prod- 1</TableCell>
                    <TableCell>₹450</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell className='text-right'>
                        <Button variant='destructive' className='mr-2'>Remove</Button>
                        <Button>Edit</Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>127</TableCell>
                    <TableCell ><img className='hover:scale-[3] cursor-pointer' src={'/products/prod-5.png'} width={26} height={26} alt='img' /></TableCell>
                    <TableCell>Prod- 1</TableCell>
                    <TableCell>₹450</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell className='text-right'>
                        <Button variant='destructive' className='mr-2'>Remove</Button>
                        <Button>Edit</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default ProductPage