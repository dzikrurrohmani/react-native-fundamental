import {FlatList, View} from "react-native";
import Item from "./components/ProductItem";
import {useDeps} from "../../shared/hook/UseDependency";
import {useEffect, useState} from "react";
import MainContainer from "../../shared/components/MainContainer";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";
import AppBackground from "../../shared/components/AppBackground";
import {useTheme} from "../../shared/context/ThemeContext";

const ProductList = () => {
    const theme = useTheme();
    const {productService} = useDeps();
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [isNext, setIsNext] = useState(true);

    let prevOpenedRow;
    const row = [];

    useEffect(() => {
        onGetAllProduct();
    }, [page]);

    const onGetAllProduct = async () => {
        setIsFetching(true);
        try {
            const response = await productService.getAllProduct(page, 20);
            if (page === 1) {
                setProducts([
                        ...response
                    ]
                );
            } else {
                setProducts(prevState => [
                        ...prevState,
                        ...response
                    ]
                );
            }
            setIsFetching(false);
            setIsNext(true)
        } catch (e) {
            console.log(e);
            setIsNext(false)
            setIsFetching(false);
        }
    }
    const onFetchMore = async () => {
        if (isNext) {
            setPage(prevState => prevState + 1);
        } else {
            onGetAllProduct()
        }
    }

    const onRefresh = async () => {
        setPage(1);
    }

    const onDeleteItem = (index) => {
        console.log('Delete item', products[index])
    }

    const renderItem = ({item, index}) => {
        return <Item productName={item.productName} idx={index} onDelete={() => onDeleteItem(index)} refRow={refRows}
                     closeRow={() => closeRow(index)}/>
    }

    const refRows = (index, ref) => {
        row[index] = ref
    }

    const closeRow = (index) => {
        if (prevOpenedRow && prevOpenedRow !== row[index]) {
            prevOpenedRow.close();
        }
        prevOpenedRow = row[index];
    }
    return (
        <MainContainer>
            <AppBackground>
                <View style={{margin: theme.spacing.s}}>
                    <HeaderPageLabel text='Product'/>
                    <FlatList
                        onRefresh={onRefresh}
                        onEndReached={onFetchMore}
                        refreshing={isFetching}
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </AppBackground>
        </MainContainer>
    );
};
export default ProductList;