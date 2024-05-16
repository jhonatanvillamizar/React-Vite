import { ChevronRightIcon } from '@heroicons/react/24/solid'
const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
    return (
        <div className='flex justify-between items-center mb-3 border broder-black p-4 w-80 rounded-lg'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span>01.02.23</span>
                    <span>🛍 {totalProducts} articles</span>
                </p>
                <p className='flex gap-1 items-center'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black' />
                </p>
            </div>
        </div>
    )
}

export default OrdersCard