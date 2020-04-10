import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../utils';
import { Button } from '../../components';

const ActionButton = ({ desc, title }) => {
    return (
        <View style={styles.wrapper.component}>
            <Text style={styles.text.description}>{desc}</Text>
            <Button title={title} />
        </View>
    )
}

const styles = {
    wrapper: {
        component: { marginBottom: 43, maxWidth: 225 }
    },
    text: {
        description: { fontSize: 10, textAlign: 'center', color: colors.text.default, paddingHorizontal: '15%', marginBottom: 6 }
    },

}

export default ActionButton;