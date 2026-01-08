// Data types and mock data for the grocery app
// Database-ready structures - replace with actual API calls

export interface Banner {
    id: string;
    title: string;
    subtitle: string;
    buttonText: string;
    image: string;
    backgroundColor: string;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewCount: number;
    image: string;
    isFavorite: boolean;
}

// Mock data - replace with database queries
export const mockBanners: Banner[] = [
    {
        id: '1',
        title: 'Fresh Vegetable',
        subtitle: 'Buy now for a great discount!',
        buttonText: 'More Detail',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400',
        backgroundColor: '#4CAF50',
    },
    {
        id: '2',
        title: 'Organic Fruits',
        subtitle: 'Fresh from the farm!',
        buttonText: 'Shop Now',
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400',
        backgroundColor: '#FF9800',
    },
];

export const mockCategories: Category[] = [
    { id: '1', name: 'Vegetables', icon: 'leaf', color: '#E8F5E9' },
    { id: '2', name: 'Fruits', icon: 'nutrition', color: '#FFEBEE' },
    { id: '3', name: 'Beverages', icon: 'wine', color: '#FFF3E0' },
    { id: '4', name: 'Grocery', icon: 'basket', color: '#E3F2FD' },
    { id: '5', name: 'Edible oil', icon: 'water', color: '#E0F7FA' },
    { id: '6', name: 'Household', icon: 'home', color: '#F3E5F5' },
];

export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Nama Produk',
        category: 'CATEGORY',
        price: 100000,
        rating: 4,
        reviewCount: 32,
        image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=300',
        isFavorite: false,
    },
    {
        id: '2',
        name: 'Nama Produk',
        category: 'CATEGORY',
        price: 100000,
        rating: 4,
        reviewCount: 32,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300',
        isFavorite: false,
    },
    {
        id: '3',
        name: 'Fresh Cabbage',
        category: 'Vegetables',
        price: 50000,
        rating: 4.5,
        reviewCount: 18,
        image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=300',
        isFavorite: true,
    },
    {
        id: '4',
        name: 'Organic Kale',
        category: 'Vegetables',
        price: 75000,
        rating: 5,
        reviewCount: 24,
        image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=300',
        isFavorite: false,
    },
];
