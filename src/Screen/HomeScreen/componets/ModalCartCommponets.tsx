import React from 'react';
import { Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Cart } from '../HomeScreen';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constans';
import { stylesGlobal } from '../../../theeme/appTheme';

interface Props {
    isVisible: boolean;//mostar modal o no
    cart: Cart[];//arreglo de productos en el carrito
    hiddenModal: () => void;//funcion para ocultar el modal

}

export const ModalCartCommponets = ({ isVisible, cart, hiddenModal }: Props) => {
    const { width } = useWindowDimensions();

    //funcion para calcular el total de la compra
    const totalPay = (): number => {
        let total: number = 0;
        cart.forEach(item => {
            total += item.total;
        });
        return total;
    }
    //funsion para comprar productos 
    const handleBuy =():void=> {
        hiddenModal();
    }
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{
                    ...stylesGlobal.bodyModal
                    , width: width * 0.80
                }}>
                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>
                            Mis Productos
                        </Text>
                        <View style={stylesGlobal.iconCard}>
                            <Icon name='cancel'
                                color={TERTIARY_COLOR}
                                size={30}
                                onPress={hiddenModal} />
                        </View>
                    </View>
                    <View style={stylesGlobal.headerTable}>
                        <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 10 }}>Producto</Text>
                        <View style={stylesGlobal.headerDescripcion}>
                            <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 10 }}>Pre.</Text>
                            <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 10 }}>Cant.</Text>
                            <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 10 }}>Total</Text>
                        </View>
                    </View>
                    <FlatList //para trabajar con datos 
                        data={cart}
                        renderItem={({ item }) =>
                            <View style={stylesGlobal.headerTable}>
                                <Text>{item.name} </Text>
                                <View style={stylesGlobal.headerDescripcion}>
                                    <Text style={{ marginHorizontal: 5 }}>${item.price.toFixed(2)} </Text>
                                    <Text style={{ marginHorizontal: 25 }}>{item.quantity} </Text>
                                    <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 2 }}>${item.total.toFixed(2)} </Text>
                                </View>
                            </View>
                        }
                        keyExtractor={(item) => item.id.toString()} />
                    <View style={stylesGlobal.containerTotalPay}>
                        <Text style={stylesGlobal.textoTotalPay}>Total Pagar:${totalPay().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={stylesGlobal.button}
                        onPress={ handleBuy}>
                        <Text style={stylesGlobal.buttonTex}> Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
