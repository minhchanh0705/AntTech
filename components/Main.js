import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
import { Image, Input, Slider } from 'react-native-elements';
import { connect } from 'react-redux';
import Player from './Player'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            value: 0
        };
        this._onPressSave = this._onPressSave.bind(this);
    }
    _onPressSave(event) {
        const { fullname } = this.state;
        this.props.dispatch({
            type: 'ADD_PLAYER',
            fullname
        })
    }
    getPlayerList() {
        const { myArrayPlayers } = this.props;
        return myArrayPlayers;
    }
    onDelete(){
        this.props.dispatch({
            type:'DELETING'
        })
    }
    render() {
        const { fullname } = this.state;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={require('../Assets/ant-tech-logo.png')} />
                <View style={styles.loginInput}>
                    <Input
                        containerStyle={styles.input}
                        onChangeText={fullname => this.setState({ fullname })}
                        value={fullname}
                        inputStyle={{ marginLeft: 10, fontSize: 14, color: '#999999' }}
                        keyboardAppearance="light"
                        placeholder="Please enter full name"
                        fontFamily="Arial-Regular"
                        autoFocus={false}
                        autoCapitalize="none"
                        returnKeyType="next"
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        blurOnSubmit={false}
                        placeholderTextColor="#999999"
                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                    />
                    <TouchableOpacity onPress={this._onPressSave.bind(this)}>
                        <View style={styles.button}>
                            <Text style={styles.btn_login}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <Text style={{ justifyContent: 'center' }}>Age: {this.state.value}</Text>
                    <Slider
                        style={{ width: SCREEN_WIDTH - 70 }}
                        value={this.state.value}
                        minimumValue={1}
                        maximumValue={120}
                        minimumTrackTintColor={'#ff0000'}
                        maximumTrackTintColor={'#0039e6'}
                        thumbTintColor={'#f2f2f2'}
                        step={1}
                        onValueChange={value => this.setState({ value })
                        }
                    />
                </View>
                <FlatList
                    data={this.getPlayerList()}
                    renderItem={({ item }) =>
                        <TouchableOpacity onLongPress={this.onDelete}>
                            <Player myPlayer={item} />
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id + ''}
                />
            </View>
        );
    }
}
function mapStatetoProps(state) {
    return {
        myArrayPlayers: state.arrayPlayers
    };
}
export default connect(mapStatetoProps)(Main);

const styles = StyleSheet.create({
    add: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 150,
    },
    loginInput: {
        width: SCREEN_WIDTH - 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 30
    },
    input: {
        borderWidth: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        height: 30,
        justifyContent: 'center'
    },
    button: {
        borderWidth: 1,
        borderColor: '#999999',
        padding: 5,
        borderRadius: 5
    },
    btn_save: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        color: '#999999',
        fontSize: 14,
    },
    player:{

    }

});