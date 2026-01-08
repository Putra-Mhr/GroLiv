import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useRef, useState } from 'react'
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { Banner } from '../data/mockData'

/* ================= CONFIG ================= */

const { width: screenWidth } = Dimensions.get('window')
const HORIZONTAL_PADDING = 16
const ITEM_SPACING = 16
const BANNER_WIDTH = screenWidth - HORIZONTAL_PADDING * 2
const SNAP_INTERVAL = BANNER_WIDTH + ITEM_SPACING

/* ================= TYPES ================= */

interface PromoBannerProps {
    banners: Banner[]
    autoScrollInterval?: number
}

/* ================= COMPONENT ================= */

export default function PromoBanner({
    banners,
    autoScrollInterval = 4000,
}: PromoBannerProps) {
    const flatListRef = useRef<FlatList>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    /* ---------- AUTO SCROLL ---------- */
    useEffect(() => {
        if (banners.length <= 1) return

        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % banners.length

            flatListRef.current?.scrollToOffset({
                offset: nextIndex * SNAP_INTERVAL,
                animated: true,
            })

            setActiveIndex(nextIndex)
        }, autoScrollInterval)

        return () => clearInterval(interval)
    }, [activeIndex, banners.length, autoScrollInterval])

    /* ---------- RENDER ITEM ---------- */
    const renderBanner = ({ item }: { item: Banner }) => (
        <View style={styles.bannerWrapper}>
            <View style={styles.bannerContainer}>
                {/* Background Image */}
                <Image source={{ uri: item.image }} style={styles.backgroundImage} />

                {/* Dark Overlay */}
                <View style={styles.overlay} />

                {/* Content */}
                <View style={styles.bannerContent}>
                    <Text style={styles.bannerTitle}>{item.title}</Text>
                    <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>

                    <TouchableOpacity style={styles.bannerButton}>
                        <Text style={styles.bannerButtonText}>{item.buttonText}</Text>
                        <Ionicons
                            name="arrow-forward"
                            size={14}
                            color="#FFFFFF"
                            style={{ marginLeft: 6 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

    /* ================= RENDER ================= */

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={banners}
                renderItem={renderBanner}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}

                snapToInterval={SNAP_INTERVAL}
                snapToAlignment="start"
                decelerationRate="fast"

                contentContainerStyle={{
                    paddingHorizontal: HORIZONTAL_PADDING,
                }}

                onMomentumScrollEnd={(event) => {
                    const index = Math.round(
                        event.nativeEvent.contentOffset.x / SNAP_INTERVAL
                    )
                    setActiveIndex(index)
                }}
            />

            {/* Pagination */}
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
    )
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 16,
    },

    bannerWrapper: {
        width: BANNER_WIDTH,
        marginRight: ITEM_SPACING,
    },

    bannerContainer: {
        width: '100%',
        height: 140,
        borderRadius: 18,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: '#000',
    },

    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },

    bannerContent: {
        paddingHorizontal: 20,
        paddingVertical: 18,
        maxWidth: '75%',
    },

    bannerTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 6,
    },

    bannerSubtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.9)',
        lineHeight: 18,
        marginBottom: 14,
    },

    bannerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    bannerButtonText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    },

    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 14,
        gap: 6,
    },

    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },

    paginationDotActive: {
        width: 24,
        backgroundColor: '#4CAF50',
    },
})
