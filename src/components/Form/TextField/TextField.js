import React from 'react'

import cn from 'classnames'
import { Label, Input, FormGroup } from 'reactstrap'

import './TextField.scss'

export default function TextField(props) {
    const onChange = e => {
        const value = e.target.value
        const { name, onChange: cb } = props
        cb(name, value)
    }

    const {
        type,
        name,
        label,
        value,
        className,
        placeholder
    } = props

    return (
        <FormGroup className={cn('TextField', className)}>
            {label ? (
                <Label className='TextField-Label'>
                    {label}
                </Label>
            ) : null}
            <Input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className='TextField-Input'
                onChange={onChange}
            />
        </FormGroup>
    )
}
