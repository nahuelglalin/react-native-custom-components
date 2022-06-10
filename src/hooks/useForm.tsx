import { useState } from 'react'

export const useForm = < T extends Object >( initState: T) => {

    const [state, setState] =  useState( initState );

    //el parametro value va a ser el dato que el usuario ingrese en un input
    //por lo general es un string, pero tambien puede ser un input
    //por ejemplo, isSubscribed va a ser un boolean. Como no se de que tipo de dato
    //va a ser, le pongo < K extends Object >.
    const onChange = < K extends Object >(value: K, field: keyof T) => {
        setState({
            ...state,
            [field]: value,
        });
    }

  return {
    ...state,
    form: state,
    onChange
  }
}
