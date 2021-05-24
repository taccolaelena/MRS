import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Home.scss'

import Header from '../Header/Header'

import user from '../../images/user.svg'
import star from '../../images/star.svg'
import nurse from '../../images/nurse.png'
import house from '../../images/house.png'
import clients from '../../images/clients.png'
import messages from '../../images/messages.png'
import broadcast from '../../images/broadcast.png'
import employees from '../../images/employees.png'
import appointment from '../../images/appointment.png'

const TITLE = 'Домашняя';

const SECTIONS = [
  { title: 'Приёмы', href: '/appointments', icon: appointment },
  { title: 'События', href: '/events', icon: star },
  { title: 'Оповещения', href: '/notifications', icon: broadcast },
  { title: 'Сообщения', href: '/messages', icon: messages },
  { title: 'Клиенты', href: '/clients', icon: clients },
  { title: 'Сотрудники', href: '/employees', icon: employees }
];

export default class Home extends Component {

  render() {
    return (
      <div className='Home'>
        <Header
          title={TITLE}
          userName='Иванов Иван Иванович'
          className='Home-Header'
          renderIcon={() => (
            <img src={house} alt='house' className='Header-Icon' />
          )}
        />
        <div className='Home-Body'>
          <div className='SectionNavigation'>
            {SECTIONS.map(({ title, href, icon }, index) => (
              <Link className='SectionNavigation-Item Section' to={href}>
                <img src={icon} className='Section-Icon' />
                <span className='Section-Title'>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}