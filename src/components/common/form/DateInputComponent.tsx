import { DatePicker } from '@mantine/dates'
import dayjs from 'dayjs'
import type { FC } from 'react'
import { Calendar } from 'tabler-icons-react'

type DateInputProps = {
    label: string
    placeholder: string
    name: string
    minDate?: Date
    form: any
}

const DateInputComponent: FC<DateInputProps> = ({
    label,
    placeholder,
    name,
    minDate = dayjs(Date.now()).toDate(),
    form,
}) => {
    return (
        <DatePicker
            styles={{ input: { height: 47 }, label: { fontSize: 18 } }}
            placeholder={placeholder}
            label={label}
            minDate={minDate}
            required
            {...form.getInputProps(name)}
            icon={<Calendar size={20} />}
        />
    )
}

export default DateInputComponent
