import { NumberInput } from '@mantine/core'
import type { FC } from 'react'
import React from 'react'

type NumberInputProps = {
    label: string
    name: string
    placeholder: string
    form: any
    min?: number
    max?: number
}

const NumberInputComponent: FC<NumberInputProps> = ({
    label,
    name,
    placeholder,
    form,
    min,
    max,
}) => {
    return (
        <NumberInput
            styles={{ input: { height: 47 }, label: { fontSize: 18 } }}
            required
            label={label}
            placeholder={placeholder}
            hideControls={true}
            min={min}
            max={max}
            {...form.getInputProps(name)}
        />
    )
}

export default NumberInputComponent
