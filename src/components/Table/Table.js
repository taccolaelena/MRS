import React from 'react'

import cn from 'classnames'
import BootstrapTable from 'react-bootstrap-table-next'

import './Table.scss'

const NO_DATA_TEXT = 'Данных нет';

export default function Table(props) {
    const {
        data,
        columns,
        keyField,
        expandRow,
        className,
        containerClass,
        isStriped,
        hasBorders,
        hasHover,
        noDataText,
    } = props;

    return (
        <div className={cn('TableContainer', containerClass)}>
            {data ? <BootstrapTable // смотрим, есть ли что-то в "data" - если да, то рендерим таблицу, иначе, показываем текст NO_DATA_TEXT
                expandRow={expandRow}
                data={data}
                columns={columns}
                keyField={keyField}
                classes={cn('Table', className)}
                headerClasses={'Table-Header'}
                striped={isStriped}
                hover={hasHover}
                bordered={hasBorders}
                noDataIndication={noDataText}
            /> : <div>{NO_DATA_TEXT}</div>} 
        </div>
    )
}
