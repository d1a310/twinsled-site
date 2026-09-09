import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'neonlab-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (!saved) {
      return []
    }

    const parsed = JSON.parse(saved)

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart)

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cart),
    )
  }, [cart])

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingIndex = currentCart.findIndex(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.color?.value === item.color?.value &&
          cartItem.size?.value === item.size?.value,
      )

      if (existingIndex === -1) {
        return [
          ...currentCart,
          {
            ...item,
            cartId: `${item.productId}-${item.color?.value}-${item.size?.value}`,
          },
        ]
      }

      return currentCart.map((cartItem, index) => {
        if (index !== existingIndex) {
          return cartItem
        }

        return {
          ...cartItem,
          quantity:
            cartItem.quantity + item.quantity,
          totalPrice:
            cartItem.totalPrice + item.totalPrice,
        }
      })
    })
  }

  const removeFromCart = (cartId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.cartId !== cartId,
      ),
    )
  }

  const updateQuantity = (
    cartId,
    newQuantity,
  ) => {
    if (newQuantity < 1) {
      removeFromCart(cartId)
      return
    }

    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartId !== cartId) {
          return item
        }

        const unitPrice =
          item.totalPrice / item.quantity

        return {
          ...item,
          quantity: newQuantity,
          totalPrice:
            unitPrice * newQuantity,
        }
      }),
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const totalItems = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0,
    )
  }, [cart])

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.totalPrice,
      0,
    )
  }, [cart])

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider',
    )
  }

  return context
}

export default CartProvider