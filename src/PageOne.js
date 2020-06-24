import React, { Component } from 'react';

import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import { Actions } from 'react-native-router-flux';


export default class PageOne extends Component {

    state = { text: '' };

    render() {

        return (

            <View style={styles.container}>
            <TextInput
                    style={{fontSize:24}}
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    placeholder="Escribe aqui..."
                />

        <TouchableOpacity style={styles.btnContainer} onPress={this.onPressNext.bind(this)}>

        <Text style={styles.textColor}>Mandar datos a la siguiente pantalla</Text>

        </TouchableOpacity>

        </View>

        );

    }

    onPressNext() {

        Actions.PageTwo({ data: this.state.text });

    }

}

const styles = {
    

    container: {

        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        backgroundColor: '#CFF0CF'

    },

    textColor: {

        color: '#fff',
        fontSize : 22

    },

    btnContainer: {

        backgroundColor: '#0abde3',

        padding: 20,

        borderRadius: 5

    }

};