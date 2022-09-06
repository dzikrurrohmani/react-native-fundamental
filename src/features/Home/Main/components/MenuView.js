import {FlatList, View} from "react-native";
import { theme } from "../../../../shared/Theme";
import MenuItem from "./MenuItem";

const MenuView = () => {
    const menus = [
        {id: 1, menu: 'Menu 1'},
        {id: 2, menu: 'Menu 2'},
        {id: 3, menu: 'Menu 3'},
        {id: 4, menu: 'Menu 4'},
        {id: 5, menu: 'Menu 5'},
        {id: 6, menu: 'Menu 6'},
        {id: 7, menu: 'Menu 7'},
        {id: 8, menu: 'Menu 8'},
        {id: 9, menu: 'Menu 9'},
        {id: 10, menu: 'Menu 10'},
        {id: 11, menu: 'Menu 11'},
        // {id: 12, menu: 'Menu 12'},
    ];
    const renderItem = ({item}) => {
        return <MenuItem product={item}/>
    }
    const renderMenuViews = () => {
        const menuViews = []
        for (let i = 0; i < menus.length; i++){
            const startIndex = (i * 3);
            const endIndex = (i * 3 + 3);
            const dataMenu = menus.slice(startIndex, endIndex);
            let contentStyle = {
                flex: 1, justifyContent: 'space-around'
            }
            if (dataMenu.length %3 != 0){
                dataMenu.push({id: -1, menu: ''})
            }
            const m = (
                <FlatList
                    key={i}
                    data={dataMenu}
                    horizontal
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                    contentContainerStyle={contentStyle}
                />
            )
            menuViews.push(m)
        }
        return menuViews;
    }
    return (
        // <FlatList
        //     data={menus}
        //     renderItem={renderItem}
        //     numColumns={3}
        //     columnWrapperStyle={{justifyContent: 'space-around'}} keyExtractor={item => item.id}/>
        <View style={{flex: 1, marginHorizontal: theme.spacing.m}}>
            {renderMenuViews()}
        </View>
    )
}

export default MenuView;