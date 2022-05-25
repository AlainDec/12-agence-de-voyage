import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import data from '../data/circuits.js';

const link = () => {
    console.log("test lien");
}

const CircuitsScrolling: React.FC = ():JSX.Element => {
    return (
        <>
            <Text style={styles.txtTitleRubric}>Les circuits Worldfly</Text>
            <ScrollView style={styles.circuitContainer} horizontal={true}>
                {
                    data.map( (value: any) => {
                        return (
                            <TouchableOpacity  onPress={() => link()} key={value.id}>
                            <View 
                                style={styles.circuitCard}
                                >
                                <Image 
                                    source={value.img}
                                    style={styles.circuitCardImg} />
                               
                                <View style={styles.circuitCardContent}>
                                    <View style={styles.circuitCardContentLeft}>
                                        <Text style={styles.txtCircuitLocation}>{value.location}</Text>
                                        <Text style={styles.txtCircuitName}>{value.name}</Text>
                                        <Text style={styles.txtCircuitDuration}>{value.duration}</Text>
                                    </View>
                                    <View style={styles.circuitCardContentRight}>
                                        <Text style={styles.circuitCardTxtFrom}>&Agrave; partir de</Text>
                                        <Text style={styles.circuitCardTxtPrice}>{value.price}&euro;</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity >
                        )
                    })
                }
            </ScrollView>
        </>
    );
}

export default CircuitsScrolling;