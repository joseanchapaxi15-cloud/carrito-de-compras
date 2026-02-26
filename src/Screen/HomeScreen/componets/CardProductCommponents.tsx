import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { stylesGlobal } from '../../../theeme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constans';
import { ModalProductCommponets } from './ModalProductCommponets';

interface Props {
    item: Product;
    changeStockProduct: (id: number, quantity: number) => void;
}

export const CardProductCommponents = ({ item, changeStockProduct }: Props) => {

    //hook useState para mostrar el modal del producto seleccionado
    const [showModal, setShowModal] = useState<boolean>(false);

    //funcion para mostrar el modal del producto seleccionado
    const hidenModal = (): void => {
        setShowModal(!showModal);
    }

    return (
        <>
            <View style={stylesGlobal.containerCard}>
                <Image style={stylesGlobal.imageCard} source={{
                    uri: item.pathImage
                }} />
                <View >
                    <Text style={stylesGlobal.titleCard}>{item.name}</Text>
                    <Text style={stylesGlobal.textPrice}>Precio: ${item.price.toFixed(2)}</Text>
                </View>
                <View style={stylesGlobal.iconCard}>
                    <Icon name='add-shopping-cart'
                        size={33}
                        color={TERTIARY_COLOR}
                        onPress={hidenModal}
                    />
                </View>
            </View>
            <ModalProductCommponets isVisible={showModal} item={item} hidenModal={hidenModal}
                changeStockProduct={changeStockProduct} />
        </>
    )
}
