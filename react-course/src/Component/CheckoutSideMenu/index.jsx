import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './style.css'


const CheckoutSideMenu = () => {
    const context  = useContext(ShoppingCartContext)

    const handelDelete = (id) => {
        const filteredProducts = context.cardProducts.filter(product => product.id != id)
        context.setCardProducts(filteredProducts)
    }

    const handelCheckout = () => {
        const orderToAdd = {
            data: '01.02.23',
            products: context.cardProducts,
            totalProducts: context.cardProducts.length,
            totalPrice: totalPrice(context.cardProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCardProducts([])
        context.closeCheckoutSideMenu()
        context.setSearchByTitle(null)
    }
    
    return (
        <aside className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                        className='h-6 w-6 text-black cursor-pointer' 
                        onClick={() => context.closeCheckoutSideMenu()}
                    />
                </div>
            </div>
           
            <div className='px-3 overflow-y-scroll flex-1'> 
            {/* overflow-y-scroll te permite hacer scroll hacia abajo cuando se muestras mas contenido */}
                {
                    context.cardProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            imageUrl={product.image}
                            price={product.price}
                            handelDelete={handelDelete}
                        /> 
                    ))
                }
            </div>  

            <div className='px-3 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cardProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                        className='w-full bg-black py-3 text-white rounded-lg' 
                        onClick={() => handelCheckout()}>
                        Checkout
                    </button>
                </Link>   
            </div>
        </aside>
    )
}

export default CheckoutSideMenu