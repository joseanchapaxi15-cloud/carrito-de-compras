import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen';
import { stylesGlobal } from '../../../theeme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constans';

interface Props {
    isVisible: boolean;//mostar modal o no
    item: Product;
    hidenModal: () => void;//funcion para ocultar el modal
    changeStockProduct: (id:number, quantity: number) => void;//funcion para cambiar la cantidad
}

export const ModalProductCommponets = ({ isVisible, item, hidenModal, changeStockProduct }: Props) => {
    const [quantity, setQuantity] = useState<number>(1);
    const { width } = useWindowDimensions();
    const handleAddProduct=()=>{
        changeStockProduct(item.id, quantity);
        hidenModal();
        //reinicar la cnatidad 
        setQuantity(1);
    }
    
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{
                    ...stylesGlobal.bodyModal,
                    width: width * 0.80
                }}>
                    
                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>
                            {item.name} - ${item.price.toFixed(2)}
                        </Text>
                        <View style={stylesGlobal.iconCard}>
                            <Icon name='cancel'
                                color={TERTIARY_COLOR}
                                size={30}
                                onPress={hidenModal} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{
                            uri: item.pathImage
                        }} style={stylesGlobal.imageModal} />
                    </View>
                    {
                        (item.stock == 0)
                            ? <Text style={stylesGlobal.textStock}>Producto agotado</Text>
                            :
                            <>
                                <View style={stylesGlobal.containerQuantity}>
                                    <TouchableOpacity style={stylesGlobal.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity == 1}>
                                        <Text style={stylesGlobal.textQuantity}>-</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Text style={{ fontSize: 17 }}>{quantity}</Text>
                                    </TouchableOpacity >
                                    <TouchableOpacity style={stylesGlobal.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity == item.stock}>
                                        <Text style={stylesGlobal.textQuantity}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={stylesGlobal.textTotalPrice}> Total : ${(item.price * quantity).toFixed(2)}</Text>
                                </View>
                                <TouchableOpacity style={stylesGlobal.button} 
                                onPress={handleAddProduct}>
                                    <Text style={stylesGlobal.buttonTex}> Agregar Carrito</Text>
                                </TouchableOpacity>
                            </>
                    }
                </View>
            </View>
        </Modal>
    )
}
