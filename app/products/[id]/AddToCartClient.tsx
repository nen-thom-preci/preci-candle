'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    productId: number
    productName: string
    priceString: string
}

export default function AddToCartClient({ productId, productName, priceString }: Props) {
    const router = useRouter()

    const handleAddToCart = () => {
        // Chuyển "89.000 đ" -> 89000
        const priceNum = Number(String(priceString).replace(/[^\d]/g, '')) || 0

        const item = {
            id: productId,
            name: productName,
            price: priceNum,
            qty: 1,
            createdAt: Date.now(),
        }

        try {
            const raw = localStorage.getItem('cart')
            const cart = raw ? JSON.parse(raw) : []
            cart.push(item)
            localStorage.setItem('cart', JSON.stringify(cart))
        } catch (err) {
            console.error('Lỗi lưu giỏ hàng', err)
        }

        router.push('/checkout')
    }

    return (
        <button
            onClick={handleAddToCart}
            className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all text-lg mb-4"
        >
            Thêm Vào Giỏ Hàng
        </button>
    )
}
