import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Banner } from '../data/mockData';

const { width: screenWidth } = Dimensions.get('window');
const BANNER_WIDTH = screenWidth - 32;

interface PromoBannerProps {
    banners: Banner[];
    autoScrollInterval?: number;
}

export default function PromoBanner({ banners, autoScrollInterval = 4000 }: PromoBannerProps) {
    const flatListRef = useRef<FlatList>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (banners.length <= 1) return;

        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % banners.length;
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            setActiveIndex(nextIndex);
        }, autoScrollInterval);

        return () => clearInterval(interval);
    }, [activeIndex, banners.length, autoScrollInterval]);

    const renderBanner = ({ item }: { item: Banner }) => (
        <View style={[styles.bannerContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.bannerContent}>
                <Text style={styles.bannerTitle}>{item.title}</Text>
                <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
                <TouchableOpacity style={styles.bannerButton}>
                    <Text style={styles.bannerButtonText}>{item.buttonText}</Text>
                    <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: item.image }} style={styles.bannerImage} />
        </View>
    );

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
    }).current;

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={banners}
                renderItem={renderBanner}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                contentContainerStyle={styles.flatListContent}
            />
            <View style={styles.pagination}>
                {banners.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            index === activeIndex && styles.paginationDotActive,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    flatListContent: {
        paddingHorizontal: 16,
    },
    bannerContainer: {
        width: BANNER_WIDTH,
        height: 140,
        borderRadius: 16,
        flexDirection: 'row',
        overflow: 'hidden',
        marginRight: 16,
    },
    bannerContent: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    bannerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    bannerSubtitle: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.9)',
        marginBottom: 12,
    },
    bannerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    bannerButtonText: {
        fontSize: 14,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    },
    bannerImage: {
        width: 140,
        height: '100%',
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        gap: 6,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(76, 175, 80, 0.3)',
    },
    paginationDotActive: {
        backgroundColor: '#4CAF50',
        width: 20,
    },
});
