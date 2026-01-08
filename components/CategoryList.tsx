import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Category } from '../data/mockData';

interface CategoryListProps {
    categories: Category[];
    onCategoryPress?: (category: Category) => void;
    onSeeAllPress?: () => void;
}

export default function CategoryList({ categories, onCategoryPress, onSeeAllPress }: CategoryListProps) {
    const getIconName = (iconName: string): keyof typeof Ionicons.glyphMap => {
        const iconMap: { [key: string]: keyof typeof Ionicons.glyphMap } = {
            leaf: 'leaf',
            nutrition: 'nutrition',
            wine: 'wine',
            basket: 'basket',
            water: 'water',
            home: 'home',
        };
        return iconMap[iconName] || 'ellipse';
    };

    const getIconColor = (categoryName: string): string => {
        const colorMap: { [key: string]: string } = {
            Vegetables: '#4CAF50',
            Fruits: '#F44336',
            Beverages: '#FFC107',
            Grocery: '#2196F3',
            'Edible oil': '#00BCD4',
            Household: '#9C27B0',
        };
        return colorMap[categoryName] || '#4CAF50';
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Categories</Text>
                <TouchableOpacity onPress={onSeeAllPress} style={styles.seeAllButton}>
                    <Ionicons name="chevron-forward" size={24} color="#666" />
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={styles.categoryItem}
                        onPress={() => onCategoryPress?.(category)}
                    >
                        <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
                            <Ionicons
                                name={getIconName(category.icon)}
                                size={28}
                                color={getIconColor(category.name)}
                            />
                        </View>
                        <Text style={styles.categoryName}>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    seeAllButton: {
        padding: 4,
    },
    scrollContent: {
        paddingHorizontal: 16,
        gap: 20,
    },
    categoryItem: {
        alignItems: 'center',
        width: 70,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryName: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
});
