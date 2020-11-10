import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
 
import { PickerView } from '../NewPicker/styles'

export default function ListPicker({ onChange }){
    return (
        <PickerView>
            <RNPickerSelect
            style={{
                inputIOS:{
                    height: 50,
                    padding: 5,
                    backgroundColor: '#FFF',
                    fontSize: 16
                }
            }}  
            placeholder={{
                label: 'selecione o tipo',
                color: '#222',
                value: null,
            }}
            onValueChange={ (tipo) => onChange(tipo) }
            items={[
                {label: 'amigos', value: 'amigos', color: '#222'},
                {label: 'trocas', value: 'trocas', color: '#222'},
            ]}
            />
        </PickerView>
    )
}