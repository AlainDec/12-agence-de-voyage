import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Logo from '../components/Logo';
import CircuitsScrolling from '../components/CircuitsScrolling';
import HomeSubFooter from '../components/HomeSubFooter';
import { CircuitScrollingProps, ServicesProps } from '../types/types';

type ServiceNavigation = ServicesProps['navigation']
type ServicesRoute = ServicesProps['route']

const Home: React.FC<CircuitScrollingProps> = ({ route, navigation }: CircuitScrollingProps): JSX.Element => {
    const nav = useNavigation<ServiceNavigation>()
    const rte = useRoute<ServicesRoute>()
    return (
        <View style={styles.containerView}>
            <ScrollView>
                <Logo size='tall' direction='center' />
                <Image source={require('../assets/video-accueil.png')} style={styles.imgHomeBackground} />
                <CircuitsScrolling route={route} navigation={navigation} />
                <HomeSubFooter navigation={nav} route={rte} />
            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    containerView: {
        marginTop: 40,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    imgHomeBackground: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
});