import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Product } from '../data/mockData';
import ProductCard from './ProductCard';

interface ProductGridProps {
    products: Product[];
    onProductPress?: (product: Product) => void;
    onFavoritePress?: (product: Product) => void;
}

export default function ProductGrid({ products, onProductPress, onFavoritePress }: ProductGridProps) {
    const renderProduct = ({ item }: { item: Product }) => (
        <ProductCard
            product={item}
            onPress={() => onProductPress?.(item)}
            onFavoritePress={() => onFavoritePress?.(item)}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                scrollEnabled={false}
                contentContainerStyle={styles.content}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    content: {
        paddingBottom: 16,
    },
    row: {
        justifyContent: 'space-between',
    },
});
