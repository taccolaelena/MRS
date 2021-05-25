import React from 'react'

import cn from 'classnames'
import { Label, Input, FormGroup } from 'reactstrap'

import './CheckboxField.scss'

export default function CheckboxField(props) {
    const onChange = e => {
        const value = e.target.checked
        const { name, onChange: cb } = props
        cb(name, value)
    };

    const {
        label,
        value,
        className
    } = props;

    return (
        <FormGroup check className={cn('CheckboxField', className)}>
            <Label
                check
                className='CheckboxField-Label'>
                <Input
                    type='checkbox'
                    value={value}
                    onClick={onChange}
                    className='CheckboxField-Checkbox'
                />
                {label}
            </Label>
        </FormGroup>
    )
}

