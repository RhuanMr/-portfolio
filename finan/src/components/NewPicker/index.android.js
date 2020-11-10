import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
 
import { PickerView } from './styles'

export default function NewPicker({ onChange }){
    return (
        <PickerView>
            <RNPickerSelect
            style={{
                inputIOS:{
                    height: 50,
                    padding: 5,
                    backgroundColor: '#C4C4C4',
                    fontSize: 16
                }
            }}  
            placeholder={{
                label: 'selecione o tipo', 
                color: '#FFF',
                value: null,
            }}
            onValueChange={ (tipo) => onChange(tipo) }
            items={[
                {label: 'estrela', value: 'estrela', color: '#222'},
                {label: 'moeda', value: 'moeda', color: '#222'},
                {label: 'flor', value: 'flor', color: '#222'},
                {label: 'fantasma', value: 'fantasma', color: '#222'}
            ]}
            />
        </PickerView>
    )
}