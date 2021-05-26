import React from 'react'

import cn from 'classnames'
import BootstrapTable from 'react-bootstrap-table-next'

import './Table.scss'

const NO_DATA_TEXT = 'Данных нет'

export default function Table(props) {
    const getRowStyle = (row, rowIndex) => {
        return props.getRowStyle(row, rowIndex)
    }

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

console.log("4444444444444444", data, columns, keyField);

    return (
        <div className={cn('TableContainer', containerClass)}>
            <BootstrapTable
                expandRow={expandRow}
                data={data}
                columns={columns}
                keyField={keyField}
                classes={cn('Table', className)}
                headerClasses={'Table-Header'}
                striped={isStriped}
                hover={hasHover}
                bordered={hasBorders}
                rowStyle={getRowStyle}
                noDataIndication={noDataText}
            />
        </div>
    )
}
