import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductCommponents } from './componets/CardProductCommponents';
import Icon from '@expo/vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../../commons/constans';
import { stylesGlobal } from '../../theeme/appTheme';
import { ModalCartCommponets } from './componets/ModalCartCommponets';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}
export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {


    const products: Product[] = [
        { id: 1, name: "Funda de arroz", price: 2.00, stock: 10, pathImage: "https://static.wixstatic.com/media/772915_eec7277aca1f40e99248f55c118a3bb8.jpg/v1/fill/w_479,h_706,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/772915_eec7277aca1f40e99248f55c118a3bb8.jpg" },
        { id: 2, name: "Funda de azucar", price: 1.50, stock: 5, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBFF-9yo2EUfBa6Yz1lJtquDxEp0errpp-Q&s" },
        { id: 3, name: "Funda de papas", price: 3.00, stock: 0, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvvoLHZswHVPDw6K4Zqppfwvf8oF1B10lUw&s" },
        { id: 4, name: "Funda de fideos", price: 1.00, stock: 6, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOr6wSLJ2JEnwbweTMp0cDsLiWFURknHOlw&s" },
        { id: 5, name: "Funda de sal", price: 0.50, stock: 4, pathImage: "https://www.supermercadosantamaria.com/documents/10180/10504/31187_M.jpg" },
        { id: 6, name: "Funda de papas", price: 3.00, stock: 8, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvvoLHZswHVPDw6K4Zqppfwvf8oF1B10lUw&s" },
        { id: 7, name: "Funda de fideos", price: 1.00, stock: 6, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOr6wSLJ2JEnwbweTMp0cDsLiWFURknHOlw&s" },
        { id: 8, name: "Funda de sal", price: 0.50, stock: 4, pathImage: "https://www.supermercadosantamaria.com/documents/10180/10504/31187_M.jpg" },
    ];

    //hook useState permite gestionar la informacion de los productos 
    const [productsState, setProductsState] = useState<Product[]>(products);

    //hook useState para gestionar el carrito de compras
    const [cart, setCart] = useState<Cart[]>([]);//arreglo del carrito

    //hook useState para mostrar el modal del carrito de compras
    const [showModal, setShowModal] = useState<boolean>(false);

    //funsion para actualisar el estado del modal 
    const hidenModal = (): void => {
        setShowModal(!showModal);
    }

    //funcion para controlar el stock de los productos
    const changeStockProduct = (id: number, quantity: number): void => {
        const updateProduts = productsState.filter(item => item.id == id
            ? { ...item, stock: item.stock - quantity }
            : item);
        //modificar el arreglo de productos 
        setProductsState(updateProduts);
        //llamar ala funsion para añadir productos al carrito 
        addProductCart(id, quantity);


    }
    //funcion para agregar productos al carrito de compras
    const addProductCart = (id: number, quantity: number): void => {
        const product = productsState.find(product => product.id == id);


        // si no exixte el producto 
        if (!product) {
            return;
        }
        // crear el onjeto de lproducto 
        const newCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //añdir el producto al carrito de compras
        setCart([...cart, newCart]);
        console.log(cart);
    }

    return (
        <View>
            <View style={stylesGlobal.headerHome}>
                <TitleComponent title='Productos' />
                <View style={stylesGlobal.icomHome}>
                    <Text style={stylesGlobal.textIconCart}>{cart.length}</Text>
                    <Icon name='shopping-cart'
                        color={SECONDARY_COLOR}
                        size={30}
                        onPress={hidenModal}
                    />
                </View>

            </View>

            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProductCommponents item={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </BodyComponent>
            <ModalCartCommponets isVisible={showModal} cart={cart} hiddenModal={hidenModal} />
        </View>
    )
}
