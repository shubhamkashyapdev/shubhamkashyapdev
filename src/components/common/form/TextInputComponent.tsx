import { TextInput } from '@mantine/core'
import type { FC } from 'react'
import React from 'react'

type TextInputProps = {
    label: string
    name: string
    placeholder: string
    form: any
    type?: string
    max?: number
    labelDark?: string
}
const TextInputComponent: FC<TextInputProps> = ({
    label,
    name,
    placeholder,
    form,
    type = 'text',
    labelDark,
}) => {
    return (
        <TextInput
            styles={{
                input: { height: 47, backgroundColor: 'white' },
                label: { fontSize: 18, color: labelDark && '#333' },
            }}
            required
            type={type}
            label={label}
            placeholder={placeholder}
            {...form.getInputProps(name)}
        />
    )
}

export default TextInputComponent
