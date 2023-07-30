import React from 'react'

const Options = ({value,name}) => {
    return (
        <option key={value} value={value}>{value} - {name}</option>
    )
}

export default Options