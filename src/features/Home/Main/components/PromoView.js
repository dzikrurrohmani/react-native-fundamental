import { ScrollView, View } from "react-native";
import PromoItem from "./PromoItem";

const PromoView = () => {
    const promos = [
        {id: 1, promo: "Discount Food"},
        {id: 2, promo: "Discount Beverage"},
        {id: 3, promo: "Discount Payday"},
        {id: 4, promo: "Discount Pay Later"},
        {id: 5, promo: "Discount Delivery"},
        {id: 6, promo: "Discount Shipping"},
        {id: 7, promo: "Discount 20%"},
        {id: 8, promo: "Discount 50%"},
        {id: 9, promo: "Discount 60%"},
        {id: 10, promo: "Free Delivery"},
    ]
    const renderPromoItem = () => {
        const promoItems = [];
        for (let i = 0; i < Math.ceil(promos.length/2); i++){
            let promo1Idx = i * 2;
            let promo2Idx = (i * 2) + 1;
            if (promo2Idx === promos.length){
                promo2Idx = null
            }
            const p = <View key={i}>
                <PromoItem promo={promos[promo1Idx]}/>
                {promo2Idx && <PromoItem promo={promos[promo2Idx]}/>}
            </View>
            promoItems.push(p)
        }
        return promoItems
    }
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderPromoItem()}
        </ScrollView>
    )
}


export default PromoView;