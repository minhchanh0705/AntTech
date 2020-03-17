import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Player extends Component {
    render() {
        const { player } = this.props.myPlayer;
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>{player}</Text>
                    <View style={{ flex: 10 }}>
                        {this.props.myIsAdding ?
                            <TouchableOpacity>
                                <View style={styles.button}>
                                    <Text style={styles.btn_delete}>Save</Text>
                                </View>
                            </TouchableOpacity>
                            : null}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(Player);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E6E6FA',
        padding: 10,
        margin: 10
    },
    button: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        backgroundColor:'red'
    },
    btn_save: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        color: 'white',
        fontSize: 14
    },
})