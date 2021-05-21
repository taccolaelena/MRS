import React, { Component } from 'react'

import cn from 'classnames'
import PropTypes from 'prop-types'
import { FormGroup, Label } from 'reactstrap'
import { DatePicker } from 'antd';
import './DateField.scss'

const { RangePicker } = DatePicker;

export default class DateField extends Component {

    static propTypes = {
        name: PropTypes.string,
        label: PropTypes.string,
        hasTime: PropTypes.bool,
        placeholder: PropTypes.string,
        dateFormat: PropTypes.string,
        timeFormat: PropTypes.string,
        timeInterval: PropTypes.number,
        className: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        hasTime: false,
        dateFormat: 'dd/MM/yyyy',
        // формат времени, отображающийся в выпадающем списке
        timeFormat: 'HH:mm',
        // шаг выбора времени 
        timeInterval: 30,
        onChange: function () { }
    }

    onChange = (value) => {
        const { name, onChange: cb } = this.props;
        cn(name, value);
    }

    render() {
        console.log("1111", this.props)
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
        } = this.props

        return (
            
            <FormGroup className={cn('DateField', className)}>
                <div>
                    {label ? (
                        <Label className='DateField-Label'>
                            {label}
                        </Label>
                    ) : null}
                        <RangePicker showTime />

                </div>
            </FormGroup >
        )
    }
}