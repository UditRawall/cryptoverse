import React, { useEffect } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../Services/CryptoApi';
import {Cryptocurrencies, News} from '../component';

const {Title}=Typography;

const Homepage = () => {
 const {data, isFetching} = useGetCryptosQuery(10);
 const globalStats = data?.data?.stats;
  console.log(globalStats);

  if(isFetching) return 'Loading...';
  return (
    <>
    <Title level={2} className='heading'>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchange" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap " value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Toatl 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Top 10 Cryptocurrenencies in the world.</Title>
      <Title level={3} className='home-title'><Link to='/cryptocurrencies'>Show more</Link></Title>

    </div>
    <Cryptocurrencies simplified/>
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Latest Crypto News</Title>
      <Title level={3} className='home-title'><Link to='/news'>Show more</Link></Title>

    </div>
    <div style={{maxHeight:"40rem", overflow:"hidden"}}><News simplified /></div>
    </>
  )
}

export default Homepage;