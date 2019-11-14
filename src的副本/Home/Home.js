import React, { Component } from 'react';
import './Home.css';
import Carousel from 'antd-mobile/lib/carousel'; 
import 'antd-mobile/lib/carousel/style/css';
import Flex from 'antd-mobile/lib/flex';
import 'antd-mobile/lib/flex/style/css';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}></div>
);

class Home extends Component {
    state = {
        data: ['slider1', 'slider2'],
        imgHeight: 217,
    }

    render() {
        return (
            <div className='home-container'>
                <div className='home-title'>住吧家居</div>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <img
                            key={val}
                            src={require(`../images/${val}.jpg`)}
                            alt=""
                            style={{width: '100%', height: '217px',verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>
                <div className="flex-container">
                    <Flex justify="center">
                    <PlaceHolder className="inline" style={{background:`url(${require("../images/home_hot.jpg")})`,backgroundSize: '110px 110px' }}/>
                    <PlaceHolder className="inline" style={{margin:'0 10px 0 10px',background:`url(${require("../images/home_personal.jpg")})`,backgroundSize: '110px 110px' }}/>
                    <PlaceHolder className="inline" style={{background:`url(${require("../images/home_shop.jpg")})`,backgroundSize: '110px 110px' }}/>
                    </Flex>
                </div>

                <div className='hot-container'>
                    <div className='hot-recommend'>
                        <span className='hot-sign'>|</span><span className='hot-title'>热门推荐</span>
                    </div>
                    <div className='hot-img'>
                        <img 
                            alt=''
                            src={require(`../images/in.jpg`)}
                            style={{width: '100%',height: '217px'}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
