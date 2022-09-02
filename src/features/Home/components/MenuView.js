import { FlatList, ScrollView, View } from 'react-native';
import MenuItem from './MenuItem';

const MenuView = () => {
  const menus = [
    { id: '01', menu: 'Menu 01' },
    { id: '02', menu: 'Menu 02' },
    { id: '03', menu: 'Menu 03' },
    { id: '04', menu: 'Menu 04' },
    { id: '05', menu: 'Menu 05' },
    { id: '06', menu: 'Menu 06' },
    { id: '07', menu: 'Menu 07' },
    { id: '08', menu: 'Menu 08' },
    { id: '09', menu: 'Menu 09' },
    { id: '10', menu: 'Menu 10' },
    { id: '11', menu: 'Menu 11' },
    { id: '12', menu: 'Menu 12' },
  ];

//   const renderMenuItem = () => {
//     const menuItems = [];
//     for (let i = 0; i < menus.length / 3; i++) {
//       let menu1Idx = i * 3;
//       let menu2Idx = i * 3 + 1;
//       let menu3Idx = i * 3 + 2;
//       if (menu2Idx >= menus.length) {
//         menu2Idx = null;
//       }
//       if (menu3Idx >= menus.length) {
//         menu3Idx = null;
//       }
//       const p = (
//         <View key={i} style={{ flexDirection: row }}>
//           <MenuItem menu={menus[menu1Idx]} />
//           {menu2Idx && <MenuItem menu={menus[menu2Idx]} />}
//           {menu3Idx && <MenuItem menu={menus[menu3Idx]} />}
//         </View>
//       );

//       menuItems.push(p);
//     }

//     return menuItems;
//   };

  const renderItem = ({ item }) => {
    return <MenuItem menu={item} />;
  };

  return (
    <View style={{flexDirection: 'column'}}>
      <FlatList
        data={menus}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        //   onRefresh={onRefresh}
        //   refreshing={isFetching}
        //   onEndReached={onFetchMore}
      />
    </View>
  );
};

export default MenuView;
