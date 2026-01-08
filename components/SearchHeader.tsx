import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const PRIMARY_GREEN = '#4CAF50';

interface SearchHeaderProps {
    onNotificationPress?: () => void;
    onWishlistPress?: () => void;
}

export default function SearchHeader({ onNotificationPress, onWishlistPress }: SearchHeaderProps) {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#999"
                />
            </View>
            <TouchableOpacity style={styles.iconButton} onPress={onNotificationPress}>
                <Ionicons name="notifications-outline" size={28} color="transparent" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={onWishlistPress}>
                <Ionicons name="heart-outline" size={28} color="transparent" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 4,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingHorizontal: 16,
        height: 44,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
});
