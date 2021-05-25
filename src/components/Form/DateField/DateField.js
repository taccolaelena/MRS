import React from 'react'

import cn from 'classnames'
import { FormGroup, Label } from 'reactstrap'
import { DatePicker } from 'antd';
import './DateField.scss'

const { RangePicker } = DatePicker;

export default function DateField(props) {
    const {
        name,
        label,
        value,

        dateFormat,

        hasTime,
        timeFormat,
        timeInterval,

        onChange,
        className,
        placeholder
    } = props;

    return (
        <FormGroup className={cn('DateField', className)}>
            <div>
                {label ? (
                    <Label className='DateField-Label'>
                        {label}
                    </Label>
                ) : null}
                <RangePicker
                    showTime={hasTime}
                    onChange={value => onChange(value)}
                />
            </div>
        </FormGroup >
    )
}
