import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../data/mockData';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = (screenWidth - 48) / 2;

interface ProductCardProps {
    product: Product;
    onPress?: () => void;
    onFavoritePress?: () => void;
}

export default function ProductCard({ product, onPress, onFavoritePress }: ProductCardProps) {
    const formatPrice = (price: number): string => {
        return `Rp ${price.toLocaleString('id-ID')}`;
    };

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <Ionicons key={i} name="star" size={14} color="#FFC107" />
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <Ionicons key={i} name="star-half" size={14} color="#FFC107" />
                );
            } else {
                stars.push(
                    <Ionicons key={i} name="star-outline" size={14} color="#FFC107" />
                );
            }
        }
        return stars;
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <View style={styles.newBadge}>
                    <Text style={styles.newBadgeText}>NEW</Text>
                </View>
                <TouchableOpacity style={styles.favoriteButton} onPress={onFavoritePress}>
                    <Ionicons
                        name={product.isFavorite ? 'heart' : 'heart-outline'}
                        size={20}
                        color={product.isFavorite ? '#F44336' : '#666'}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.category}>{product.category}</Text>
                <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
                <View style={styles.ratingContainer}>
                    <View style={styles.stars}>
                        {renderStars(product.rating)}
                    </View>
                    <Text style={styles.reviewCount}>{product.reviewCount}</Text>
                </View>
                <Text style={styles.price}>{formatPrice(product.price)}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: CARD_WIDTH,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    imageContainer: {
        width: '100%',
        height: 120,
        backgroundColor: '#F5F5F5',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    newBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#4CAF50',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    newBadgeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    favoriteButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 32,
        height: 32,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        padding: 12,
    },
    category: {
        fontSize: 10,
        color: '#999',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    stars: {
        flexDirection: 'row',
        marginRight: 6,
    },
    reviewCount: {
        fontSize: 12,
        color: '#999',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});
