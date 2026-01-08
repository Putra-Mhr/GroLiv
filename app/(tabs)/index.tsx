import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryList from '../../components/CategoryList';
import ProductGrid from '../../components/ProductGrid';
import PromoBanner from '../../components/PromoBanner';
import SearchHeader from '../../components/SearchHeader';
import { mockBanners, mockCategories, mockProducts } from '../../data/mockData';

export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Green gradient header background */}
        <SearchHeader />

        {/* Promo Banner Carousel */}
        <View style={styles.bannerSection}>
          <PromoBanner banners={mockBanners} />
        </View>

        {/* White card container for categories and products */}
        <View style={styles.whiteContainer}>
          {/* Categories Section */}
          <CategoryList
            categories={mockCategories}
            onCategoryPress={(category) => console.log('Category pressed:', category.name)}
          />

          {/* Products Grid */}
          <ProductGrid
            products={mockProducts}
            onProductPress={(product) => console.log('Product pressed:', product.name)}
            onFavoritePress={(product) => console.log('Favorite pressed:', product.name)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9cec56ff',
  },
  scrollView: {
    flex: 1,
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 10,
  },
  bannerSection: {
    backgroundColor: '#9cec56ff',
    paddingBottom: 20,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 8,
    minHeight: 500,
  },
});