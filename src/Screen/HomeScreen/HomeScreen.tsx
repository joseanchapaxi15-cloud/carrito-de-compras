import React from 'react';
import { FlatList,  Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductCommponents } from './componets/CardProductCommponents';

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {


    const products: Product[] = [
        { id: 1, name: "Funda de arroz", price: 2.00, stock: 10, pathImage: "https://static.wixstatic.com/media/772915_eec7277aca1f40e99248f55c118a3bb8.jpg/v1/fill/w_479,h_706,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/772915_eec7277aca1f40e99248f55c118a3bb8.jpg" },
        { id: 2, name: "Funda de azucar", price: 1.50, stock: 5, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBFF-9yo2EUfBa6Yz1lJtquDxEp0errpp-Q&s" },
        { id: 3, name: "Funda de papas", price: 3.00, stock: 8, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvvoLHZswHVPDw6K4Zqppfwvf8oF1B10lUw&s" },
        { id: 4, name: "Funda de fideos", price: 1.00, stock: 6, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOr6wSLJ2JEnwbweTMp0cDsLiWFURknHOlw&s" },
        { id: 5, name: "Funda de sal", price: 0.50, stock: 4, pathImage: "https://www.supermercadosantamaria.com/documents/10180/10504/31187_M.jpg" },
    ]
    return (
        <View>
            <TitleComponent title='Productos' />
            <BodyComponent>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProductCommponents />}
                    keyExtractor={(item) => item.id.toString()}

                />
            </BodyComponent>


        </View>
    )
}
