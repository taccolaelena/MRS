import React, { Component } from 'react'

import Moment from 'react-moment'

import './Appointments.scss'
import Table from '../Table/Table'
import Header from '../Header/Header'
import TextField from '../Form/TextField/TextField'
import DateField from '../Form/DateField/DateField'
import CheckboxField from '../Form/CheckboxField/CheckboxField'
import appointment from '../../images/appointment.png'
import { appointments as data } from '../../lib/MockData'
import { Form } from 'reactstrap'


const TITLE = 'Приёмы';
const USER = 'Иванов Иван Иванович';
const columns = [
    {
        dataField: 'date',
        text: 'Дата',
        headerStyle: {
            width: '150px'
        },
        formatter: (v, row) => {
            return (
                <Moment date={v} format='DD.MM.YYYY HH.mm' />
            )
        }
    },
    {
        dataField: 'clientName',
        text: 'Клиент',
        headerStyle: {
            width: '300px'
        }
    },
    {
        dataField: 'status',
        text: 'Статус'
    },
    {
        dataField: 'holderName',
        text: 'Принимающий',
        headerStyle: {
            width: '300px'
        }
    },
    {
        dataField: 'compliences',
        text: 'Жалобы',
        headerStyle: {
            width: '200px'
        }
    },
    {
        dataField: 'diagnosis',
        text: 'Диагноз',
        headerStyle: {
            width: '200px'
        }
    }
];

export default class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                startDate: null,
                endDate: null,
                clientName: '',
                onlyMe: false
            }
        };
    }

    onChangeFilterField = (name, value) => {
        const { filter } = this.state;
        this.setState({
            filter: { ...filter, ...{ [name]: value } }
        });
    }

    onChangeFilterDateField = (name, value) => {
        const { filter } = this.state;
        const startDate = value[0].format();
        const endDate = value[1].format();
        this.setState({
            filter: { ...filter, ...{ startDate, endDate } }
        });
    }

    render() {
        const {
            startDate,
            endDate,
            clientName,
            onlyMe,
        } = this.state.filter;

        let filtered = data.filter(o => {
            return (startDate ? o.date >= startDate : true) &&
                (endDate ? o.date <= endDate : true) &&
                (clientName ? (clientName.length > 2 ? o.clientName.includes(clientName) : true) : true) &&
                (onlyMe ? o.holderName === USER : true)
        })

        return (
            <div className='Appointments'>
                <Header
                    title={TITLE}
                    userName={USER}
                    className='Appointments-Header'
                    bodyClassName='Appointments-HeaderBody'
                    renderIcon={() => (
                        <img src={appointment} className='Header-Icon' />
                    )}
                />
                <div className='Appointments-Body'>
                    <div className='Appointments-Filter'>
                        <Form className='Appointments-FilterForm'>
                            <DateField
                                hasTime
                                className='Appointments-FilterField'
                                onChange={this.onChangeFilterDateField}
                            />
                            <TextField
                                name='clientName'
                                value={clientName}
                                placeholder='Клиент'
                                className='Appointments-FilterField'
                                onChange={this.onChangeFilterField}
                            />
                            <CheckboxField
                                name='onlyMe'
                                label='Только я'
                                value={onlyMe}
                                className='Appointments-FilterField'
                                onChange={this.onChangeFilterField}
                            />
                        </Form>
                    </div>
                    <Table
                        data={filtered}
                        className='AppointmentList'
                        columns={columns}
                    />
                </div>
            </div>
        )
    }
}