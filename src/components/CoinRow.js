import React from 'react'

function formatNumber(number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number)
    
}

function formatPerecentage(number){
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
    }).format(number)
}


const CoinRow = ({coin, index}) => {
    //console.log(coin, index)
  return (
    <tr>
        <td id='index'>{index}</td>
        <td>
            <img id='logo' src={coin.image} alt={coin.name} className='img-fluid me-4' />
            <span>{coin.name}</span>
            <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
        </td>
        <td>{formatNumber(coin.current_price)}</td>
        <td className={coin.price_change_percentage_24h > 0 ?  'text-success' : 'text-danger'}>
            {formatPerecentage(coin.price_change_percentage_24h)}
        </td>
        <td>{formatNumber(coin.total_volume)}</td>

    </tr>
  )
}

export default CoinRow