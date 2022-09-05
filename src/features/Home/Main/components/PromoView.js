import { ScrollView, View } from 'react-native';
import PromoItem from './PromoItem';

const PromoView = () => {
  const promos = [
    { id: 1, promo: 'Discount Food 1' },
    { id: 2, promo: 'Discount Food 2' },
    { id: 3, promo: 'Discount Food 3' },
    { id: 4, promo: 'Discount Food 4' },
    { id: 5, promo: 'Discount Food 5' },
    { id: 6, promo: 'Discount Food 6' },
    { id: 7, promo: 'Discount Food 7' },
    { id: 8, promo: 'Discount Food 8' },
  ];

  const renderPromoItem = () => {
    const promoItems = [];
    for (let i = 0; i < promos.length / 2; i++) {
      let promo1Idx = i * 2;
      let promo2Idx = i * 2 + 1;
      if (promo2Idx === promos.length) {
        promo2Idx = null;
      }
      const p = (
        <View key={i}>
          <PromoItem promo={promos[promo1Idx]} />
          {promo2Idx && <PromoItem promo={promos[promo2Idx]} />}
        </View>
      );

      promoItems.push(p);
    }

    return promoItems
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {renderPromoItem()}
    </ScrollView>
  );
};

export default PromoView;
