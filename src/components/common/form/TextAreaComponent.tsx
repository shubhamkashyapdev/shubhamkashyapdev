import { Textarea } from "@mantine/core"
import React from "react"

const TextAreaComponent = ({ label, name, placeholder, form, rows = 5 }) => {
  return (
    <Textarea
      styles={{ label: { fontSize: 18 } }}
      required
      label={label}
      placeholder={placeholder}
      {...form.getInputProps(name)}
      minRows={rows}
    />
  )
}

export default TextAreaComponent
