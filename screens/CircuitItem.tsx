import * as React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import { IData, IGalery } from '../interfaces/interfaces';
import { CircuitScrollingProps } from '../types/types';
import colors from '../themes/colors';

const BigImage = ({ dataItem, navigation }: any) => (

        <ImageBackground source={dataItem?.galery[0]?.img} style={styles.imgHomeBackground}>
            <View style={styles.circuitBannerAbsoluteView}>
                <Text style={styles.circuitTxtAbsoluteView}>{dataItem?.galery[0]?.name}</Text>
            </View>
        </ImageBackground>

);

const SmallImage = ({ dataGalery, navigation }: any) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('CircuitItemZoomPhoto', { itemPhoto: dataGalery })}
            style={{ width: '33.3333%', height: 100 }}
        >
            <ImageBackground source={dataGalery.img} style={styles.imgCircuitBg}>
                <View style={styles.circuitBannerAbsoluteView}>
                    <Text style={styles.circuitTxtAbsoluteView2}>{dataGalery?.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
};

const CircuitItem: React.FC<CircuitScrollingProps> = ({ navigation, route }: CircuitScrollingProps): JSX.Element => {
    const { itemCircuit } = route.params;

    if (itemCircuit == undefined || itemCircuit.galery == undefined) {
        return (<View><Text>Erreur</Text></View>)
    }
    
    let galeryData: IGalery[] = itemCircuit.galery;
    return (
        <View style={styles.containerView}>
            <ScrollView>
                <ImageBackground source={itemCircuit.imgBanner} style={styles.imgHomeTopBannerBackground}>
                    <View style={styles.circuitTopBannerAbsoluteView}>
                        <Logo size='small' direction='left' />
                    </View>
                </ImageBackground>

                <View style={styles.textMargin}>
                    <Text style={styles.txtCircuitLocation}>{itemCircuit.location}</Text>
                    <Text style={styles.txtCircuitName}>{itemCircuit.name}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>

                    <BigImage
                        dataItem={itemCircuit}
                        navigation={navigation}
                    />

                    <View style={styles.imgCircuitBgContainer}>
                        {
                            galeryData.map((value: IGalery, index) => {
                                {/* ne prends pas en compte l'index 0 */ }
                                console.log(value);
                                return index > 0 && (
                                    <SmallImage
                                        dataGalery={value}
                                        navigation={navigation}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </View>

                </View>
                <View style={styles.textMargin}>
                    <Text style={styles.txtH2}>R??sum??</Text>
                    <Text>D??couvrez l'Andalousie en toute libert??. Entre romance, passion, beaut?? et histoire, la r??gion du sud de l'Espagne a toutes les qualit??s pour faire de votre s??jour un moment inoubliable. Pour plus de confort, nous vous proposons des h??tels de cat??gorie standard ou sup??rieure (au choix).</Text>
                    <Text style={styles.txtH2}>Description d??taill??e</Text>
                    <Text style={styles.txtH3}>JOUR 1 : ARRIV??E SEVILLE</Text>
                    <Text>Arrivez ?? l'a??roport de S??ville o?? vous r??cup??rerez votre voiture de location. Vous prendrez une navette pour vous rendre ?? l???agence de location.{'\n'}
                        Direction votre h??tel pour l'enregistrement et premier tour dans la capitale andalouse.{'\n'}
                        D??ner libre et nuit ?? S??ville.{'\n'}
                        {'\n'}
                        Note : Vous recevrez l???ensemble des informations pour la location de voiture avant votre d??part.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 2 : SEVILLE</Text>
                    <Text>D??couvrez S??ville apr??s le petit-d??jeuner ?? l'h??tel.{'\n'}
                        {'\n'}
                        Durant cette journ??e, nous vous sugg??rons :{'\n'}
                        D??couvrez de cette ville avec une promenade matinale et visitez certaines des principales attractions de la capitale andalouse tels que le palais royal de l'Alcazar et la cath??drale, sites class??s au patrimoine mondial de l'UNESCO.{'\n'}
                        Continuez par Santa Cruz, le quartier pittoresque de la vieille ville. L'Alcazar Royal prend ses origines au 10??me si??cle, date ?? laquelle il est devenu le palais d'un calife maure. Au fil des si??cles, il s???est agrandi avec une s??rie de halls, de pavillons, de patios et de jardins magnifiques dans une vari??t?? de styles allant du mauresque et mud??jar, au gothique, ?? la Renaissance et au baroque. Admirez l'arabesque des sculptures, le carrelage orn?? et les tapisseries et peintures d??corant les murs.{'\n'}
                        Continuez vers la cath??drale, dont le glorieux clocher de la Giralda est le symbole le plus embl??matique de S??ville. La cath??drale a commenc?? sa vie comme mosqu??e au 12??me si??cle et a depuis grandi pour devenir la troisi??me plus grande ??glise du monde.{'\n'}
                        {'\n'}
                        Repas libres et nuit ?? S??ville.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 3 : SEVILLE / CORDOUE / GRENADE (350 km- 3h30)</Text>
                    <Text>Apr??s le petit d??jeuner, route vers Cordoue.{'\n'}
                        Cordoue ??tait la capitale du califat maure d???Al-Andalus ?? l'apog??e de ses pouvoirs et de sa gloire et nulle part cette richesse n'est plus ??vidente que dans le magnifique Grand Mosqu??e qui est aujourd???hui la cath??drale.{'\n'}
                        {'\n'}
                        Durant cette journ??e, nous vous sugg??rons :{'\n'}
                        Promenez-vous dans les salles de pri??re ?? colonnades, d??cor??es de centaines de colonnes de marbre reli??es par des arcs bicolores. Admirez le mihrab et les chapelles lat??rales, avec leur m??lange ??clectique de styles arabesque et baroque. Profitez du patio des orangers, une oasis de paix rafra??chie par l'ombre de 100 arbres, et d??couvrez les d??corations arabesques de ses portes ext??rieures.{'\n'}
                        Continuez le tour en marchant vers l'ancien quartier juif bpour visiter la synagogue du 14??me si??cle.{'\n'}
                        {'\n'}
                        Reprenez la route vers Grenade. Repas libres et nuit dans la r??gion de Grenade.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 4 : GRENADE</Text>
                    <Text>Prenez votre petit d??jeuner ?? l'h??tel avant la d??couverte de Grenade.{'\n'}
                        {'\n'}
                        Durant cette journ??e, nous vous sugg??rons :{'\n'}
                        Explorez la ville historique de Grenade et son plus grand tr??sor, le palais de l'Alhambra. Depuis plus de 1000 ans, cette ?? perle sertie ??meraudes ?? s???est tenue au sommet de la colline de Sabika surplombant la ville. Le complexe royal et les jardins ont ??t?? construits pour ??tre un paradis sur terre, avec patios, fontaines et sculptures complexes. ??merveillez-vous devant les nombreuses salles ?? couper le souffle, telles que la Cour des Myrtes etla salle des ambassadeurs, d??cor??e de pl??tres arabesques en nid d'abeilles ??labor??s. Admirez aussi la Cour des Lions, que les po??tes islamiques du Moyen Age d??crivaient comme la r??alisation physique du paradis.{'\n'}
                        Continuez votre tour par le palais du G??n??ralife. Promenez-vous dans ses jardins luxuriants au son apaisant de l'eau des canaux.Traversez le ravin verdoyant de la rivi??re Darro jusqu'au quartier historique d'Albaic??n, Le quartier mauresque de l'Albaic??n est un labyrinthe de ruelles et de placettes bord??es d'une multitude de maisons blanchies ?? la chaux. Les maisons serpentent vers les diff??rents points de vue offrant une vue imprenable sur l???Alhambra nich??e sous la Sierra Nevada.{'\n'}
                        {'\n'}
                        Repas libres et nuit ?? Grenade.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 5 : GRENADE / SEVILLE</Text>
                    <Text>Apr??s le petit d??jeuner, retour sur Seville.{'\n'}
                        {'\n'}
                        Durant cette journ??e, nous vous sugg??rons :{'\n'}
                        Profitez de voir le reste de la ville de S??ville. D??couvrez les 80 chapelles et plus de 700 ??uvres d'art religieux, voir l'??tonnant autel dor?? - qui a pris 80 ans pour le faire - et se promener ?? travers la paisible Cour des Orangers.{'\n'}
                        Savourez un d??licieux d??jeuner tapas dans un restaurant typique (non inclus).{'\n'}
                        {'\n'}
                        Repas libres et nuit ?? l???h??tel ?? S??ville.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 6 : SEVILLE ??? VOL RETOUR</Text>
                    <Text>Apr??s le petit d??jeuner et selon vos horaires de vols retour, route vers l???a??roport pour la restitution de la voiture. Vous prendrez une navette de l???agence de location pour vous rendre au terminal de l???a??roport.{'\n'}
                        {'\n'}{'\n'}
                        *** Fin de nos services ****{'\n'}
                    </Text>
                </View>
            </ScrollView>

        </View>
    );
}


export default CircuitItem;

const styles = StyleSheet.create({
    containerView: {
        /* marginTop: 40, */
        width: '100%',
        backgroundColor: '#ffffff',
    },
    textMargin: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    txtCircuitLocation: {
        fontSize: 10,
        fontWeight: 'bold',
        color: colors.primary,
    },
    txtCircuitName: {
        fontSize: 14,
        color: colors.secondary,
    },
    imgCircuitBgContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imgHomeTopBannerBackground: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
    },
    circuitTopBannerAbsoluteView: {
        flex: 1,
        flexDirection: 'column',
        paddingTop:10,
    },
    imgHomeBackground: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    circuitBannerAbsoluteView: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    circuitTxtAbsoluteView: {
        height: 20,
        backgroundColor: 'white',
        opacity: 0.7,
        paddingLeft: 5,
        fontSize: 10,
    },
    imgCircuitBg: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderColor: 'white',
        borderWidth: 1,
    },
    circuitTxtAbsoluteView2: {
        height: 15,
        backgroundColor: 'white',
        opacity: 0.7,
        paddingLeft: 5,
        fontSize: 8,
    },
    txtH2: {
        marginVertical: 10,
        fontSize: 18,
        color: colors.primary,
    },
    txtH3: {
        fontSize: 14,
        marginBottom: 10,
        color: colors.primary,
    },
});