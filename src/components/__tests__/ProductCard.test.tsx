import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ProductCard } from '../ProductCard'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import productReducer from '@/store/productSlice'

const mockProduct = {
  id: 1,
  name: 'Test Product',
  price: 99.99,
  image: '/test-image.jpg',
  description: 'Test description',
  category: 'test-category'
}

const store = configureStore({
  reducer: {
    products: productReducer
  }
})

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    )

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument()
    expect(screen.getByAltText(mockProduct.name)).toHaveAttribute('src', mockProduct.image)
  })

  it('handles add to favorites click', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    )

    const favoriteButton = screen.getByRole('button', { name: /add to favorites/i })
    fireEvent.click(favoriteButton)
    
    // Проверяем, что кнопка изменила состояние
    expect(screen.getByRole('button', { name: /remove from favorites/i })).toBeInTheDocument()
  })

  it('handles add to comparison click', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    )

    const compareButton = screen.getByRole('button', { name: /add to comparison/i })
    fireEvent.click(compareButton)
    
    // Проверяем, что кнопка изменила состояние
    expect(screen.getByRole('button', { name: /remove from comparison/i })).toBeInTheDocument()
  })
}) 