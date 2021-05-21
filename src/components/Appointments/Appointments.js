import React, { Component } from 'react'

import Moment from 'react-moment'

import './Appointments.scss'

import Table from '../Table/Table'
import Header from '../Header/Header'

import appointment from '../../images/appointment.png'

import { appointments as data } from '../../lib/MockData'

const TITLE = 'Приёмы'

const columns = [
    {
        dataField: 'date',
        text: 'Дата',
        headerStyle: { width: '200px' },
        formatter: (v, row) => {
            return (
                <Moment date={v} format='DD.MM.YYYY HH.mm' />
            )
        }
    },
    {
        dataField: 'clientName',
        text: 'Клиент'
    },
    {
        dataField: 'status',
        text: 'Статус'
    },
    {
        dataField: 'holderName',
        text: 'Принимающий'
    },
    {
        text: 'Жалобы',
        dataField: 'compliences'
    },
    {
        text: 'Диагноз',
        dataField: 'diagnosis'
    }
];

export default class Appointments extends Component {


    render() {

        return (
            <div className='Appointments'>
                <Header
                    title={TITLE}
                    userName='Иванов Иван Иванович'
                    className='Appointments-Header'
                    renderIcon={() => (
                        <img src={appointment} className='Header-Icon' />
                    )}
                />
                <div className='Appointments-Body'>
                    <Table
                        data={data}
                        columns={columns}
                    />
                </div>
            </div>
        )
    }
}