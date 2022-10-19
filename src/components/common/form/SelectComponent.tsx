import { Select } from '@mantine/core'
import type { FC } from 'react'
import React from 'react'

type NumberInputProps = {
    label: string
    name: string
    placeholder: string
    form: any
    data: any
}

const NumberInputComponent: FC<NumberInputProps> = ({
    label,
    name,
    placeholder,
    form,
    data,
}) => {
    return (
        <Select
            styles={{ input: { height: 47 }, label: { fontSize: 18 } }}
            required
            label={label}
            data={data}
            placeholder={placeholder}
            {...form.getInputProps(name)}
        />
    )
}

export default NumberInputComponent
