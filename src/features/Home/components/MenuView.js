import { FlatList, ScrollView, View } from 'react-native';
import MenuItem from './MenuItem';

const MenuView = () => {
  const menus = [
    { id: '01', menu: 'Menu 01', icon:'th-list' },
    { id: '02', menu: 'Menu 02', icon:'th-list' },
    { id: '03', menu: 'Menu 03', icon:'th-list' },
    { id: '04', menu: 'Menu 04', icon:'th-list' },
    { id: '05', menu: 'Menu 05', icon:'th-list' },
    { id: '06', menu: 'Menu 06', icon:'th-list' },
    { id: '07', menu: 'Menu 07', icon:'th-list' },
    { id: '08', menu: 'Menu 08', icon:'th-list' },
    { id: '09', menu: 'Menu 09', icon:'th-list' },
    { id: '10', menu: 'Menu 10', icon:'th-list' },
    { id: '11', menu: 'Menu 11', icon:'th-list' },
    { id: '12', menu: 'Menu 12', icon:'th-list' },
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
    return <MenuItem menu={item}/>;
  };

  return (
    <View style={{flexDirection: 'column'}}>
      <FlatList
        data={menus}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-around'}}
      />
    </View>
  );
};

export default MenuView;
