import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const { width, height } = Dimensions.get('screen');

// https://cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true

const ReelsScreen = () => {
    const videos = [
        { id: 1, uri: 'https://cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true' },
        { id: 2, uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
        // Add more video objects here
    ];

    const flatListRef = useRef(null);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    const playSecondVideo = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: 1, animated: true });
        }
    };

    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const isScrollingDown = contentOffset.y > 0;

        if (isScrollingDown && !isScrollingDown) {
            setIsScrollingDown(true);
            playSecondVideo();
        } else if (!isScrollingDown && isScrollingDown) {
            setIsScrollingDown(false);
        }
    };

    const renderItem = ({ item }) => (
        <View style={{ width: width, height: height }}>
            <View style={styles.header} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <AntDesign name='arrowleft' style={{ color: 'white', marginEnd: 30 }} size={22} />
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 700 }} >Reels</Text>
                </View>
                <View>
                    <Feather name='camera' style={{ color: 'white' }} size={30} />
                </View>
            </View>
            <View style={styles.footer} >
                <View style={styles.profile}>
                    <View style={{ marginEnd: 10 }} >
                        <FontAwesome name='user-circle-o' size={45} color='#fff' />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 700 }} >John Joe</Text>
                            <TouchableOpacity>
                                <Text style={{ marginHorizontal: 10, color: '#fff', borderColor: 'white', borderStyle: 'solid', borderWidth: 2, paddingHorizontal: 14, paddingVertical: 3, borderRadius: 10 }}  > Follow </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 5 }} >
                            <Text style={{ color: '#fff' }} >
                                lorem ipsum illhekl
                            </Text>
                        </View>
                    </View>

                </View>
                <View style={{ marginVertical: 5, paddingHorizontal: 20 }} >
                    <Text style={{ color: '#fff', flexWrap: 'wrap', width: '80%' }} >
                        lorem ipsum illhekl kfifk lfi kfls dfa dfds fsdd fj ij k lk ijijlk lj
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8, paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row' }} >
                        <AntDesign name='heart' style={{ marginHorizontal: 5 }} color='#fff' size={30} />
                        <FontAwesome name='comment' style={{ marginHorizontal: 5 }} color='#fff' size={30} />
                        <Feather name='send' style={{ marginHorizontal: 5 }} color='#fff' size={30} />
                        <AntDesign name='ellipsis1' style={{ marginHorizontal: 5 }} color='#fff' size={30} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                        <AntDesign name='heart' style={{ marginHorizontal: 5 }} color='#fff' size={15} />
                        <Text style={{ color: '#fff', marginRight: 5 }}>10k</Text>
                        <FontAwesome name='comment' style={{ marginHorizontal: 5 }} color='#fff' size={15} />
                        <Text style={{ color: '#fff' }}>5k</Text>
                    </View>
                </View>


                <View style={{ backgroundColor: 'black', position: 'static', bottom: 0, justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: width, alignItems: 'center' }} >
                        <Foundation name='home' style={{ color: 'white' }} size={35} />
                        <AntDesign name='search1' style={{ color: 'white' }} size={35} />
                        <MaterialIcons name='video-library' style={{ color: 'white' }} size={35} />
                        <Feather name='shopping-bag' style={{ color: 'white' }} size={35} />
                        <EvilIcons name='user' style={{ color: 'white' }} size={45} />
                    </View>
                </View>


            </View>


            <Video
                source={{ uri: item.uri }}
                style={styles.reel}
                resizeMode="contain"
                // useNativeControls
                shouldPlay
                // shouldPlay={!isScrollingDown && item.id === 1}
                isLooping
                isPlaying
                // shouldPlay
                onError={(error) => console.error("Video playback error:", error)}
            />
        </View>
    );

    return (
        <View>
            <FlatList
                data={videos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                vertical
                pagingEnabled
                showsHorizontalScrollIndicator={true}
            // onScroll={handleScroll}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 2,
        marginTop: 40,
        paddingHorizontal: 25,
        width: width
    },

    footer: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        end: 0
    },

    profile: {
        flexDirection: 'row',
        paddingHorizontal: 20
    },

    reel: {
        flex: 1,
        height: height,
        width: width,
    }
})

export default ReelsScreen;
