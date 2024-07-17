import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  SectionList,
  SectionListData,
} from 'react-native';
import React, {memo, useEffect} from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import JustForYou from '../components/JustForYou';
import CategoriesList from '../components/FlatLists/CategoriesList';
import TrendingRecipesList from '../components/FlatLists/TrendingRecipesList';

type Section = {
  title: string;
  data: any[];
};

const Home = () => {
  const sections: Section[] = [
    {title: 'Header', data: [{}]},
    {title: 'SearchBar', data: [{}]},
    {title: 'JustForYou', data: [{}]},
    {title: 'CategoriesList', data: [{}]},
    {title: 'TrendingRecipesList', data: [{}]},
  ];

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<Section>;
  }) => {
    switch (section.title) {
      case 'Header':
        return <Header />;
      case 'SearchBar':
        return <SearchBar />;
      case 'JustForYou':
        return <JustForYou />;
      case 'CategoriesList':
        return <CategoriesList />;
      case 'TrendingRecipesList':
        return <TrendingRecipesList />;
      default:
        return null;
    }
  };

  const renderItem = ({item, section}: any) => {
    // Since each section only has one item, we return null to avoid rendering anything.
    return null;
  };

  return (
    <SafeAreaView style={styles.safeareaStyle}>
      <StatusBar barStyle={'light-content'} />
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaStyle: {
    flex: 1,
    marginHorizontal: 20,
    borderWidth: 0,
  },
});

export default memo(Home);
