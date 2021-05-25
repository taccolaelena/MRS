import React, { useEffect, useState } from 'react';

import Moment from 'react-moment'

import './Appointments.scss'
import Table from '../Table/Table'
import Header from '../Header/Header'
import TextField from '../Form/TextField/TextField'
import DateField from '../Form/DateField/DateField'
import CheckboxField from '../Form/CheckboxField/CheckboxField'
import appointment from '../../images/appointment.png'
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

export default function Appointments() {

    const [filter, setFilter] = useState(
        {
            startDate: null,
            endDate: null,
            clientName: '',
            onlyMe: false,
            diagnosis: ''
        }
    );

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/appointments')
            .then((response) => {
                return response.json();
            })
            .then((res) => {
              setData(res);  
            });
    });

    const onChangeFilterField = (name, value) => {
        setFilter(
            { ...filter, ...{ [name]: value } }
        );
    }

    const onChangeFilterDateField = (name, value) => {
        const startDate = value[0].format();
        const endDate = value[1].format();
        setFilter(
            { ...filter, ...{ startDate, endDate } }
        );
    }

    const {
        startDate,
        endDate,
        clientName,
        onlyMe,
        diagnosis
    } = filter;

    let filtered = data?.filter(o => {
        return (startDate ? o.date >= startDate : true) &&
            (endDate ? o.date <= endDate : true) &&
            (clientName ? (clientName.length > 2 ? o.clientName.includes(clientName) : true) : true) &&
            (onlyMe ? o.holderName === USER : true) &&
            (diagnosis ? (diagnosis.length > 2 ? o.diagnosis.includes(diagnosis) : true) : true)
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
                            onChange={onChangeFilterDateField}
                        />
                        <TextField
                            name='diagnosis'
                            value={diagnosis}
                            placeholder='Диагноз'
                            className='Appointments-FilterField'
                            onChange={onChangeFilterField}
                        />
                        <TextField
                            name='clientName'
                            value={clientName}
                            placeholder='Клиент'
                            className='Appointments-FilterField'
                            onChange={onChangeFilterField}
                        />
                        <CheckboxField
                            name='onlyMe'
                            label='Только я'
                            value={onlyMe}
                            className='Appointments-FilterField'
                            onChange={onChangeFilterField}
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
