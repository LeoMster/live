import React, { Component } from 'react';
import './Shop.css';
import Carousel from 'antd-mobile/lib/carousel'; 
import 'antd-mobile/lib/carousel/style/css';
import Flex from 'antd-mobile/lib/flex';
import 'antd-mobile/lib/flex/style/css';
import Menu from 'antd-mobile/lib/menu';
import 'antd-mobile/lib/menu/style/css';
import ActivityIndicator from 'antd-mobile/lib/activity-indicator';
import 'antd-mobile/lib/activity-indicator/style/css';
import NavBar from 'antd-mobile/lib/nav-bar';
import 'antd-mobile/lib/nav-bar/style/css';


const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}></div>
);

const data = [
    {
      value: '1',
      label: 'Food',
    }, {
      value: '2',
      label: 'Supermarket',
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true,
    },
  ];

class Shop extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
            data: ['shop_banner', 'shop_banner', 'shop_banner', 'shop_banner'],
            imgHeight: 206,
            value: '美食'
        };
    }
    handleClick = (e) => {
        e.preventDefault(); 
        this.setState({
          show: !this.state.show,
        });
        if (!this.state.initData) {
          setTimeout(() => {
            this.setState({
              initData: data,
            });
          }, 500);
        }
    }


    onMaskClick = () => {
        this.setState({
          show: false,
        });
    }

    render() {
        const { initData, show } = this.state;
        const menuEl = (
            <Menu
                className="single-foo-menu"
                data={initData}
                value={['1']}
                level={1}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.6}
            />
        );
        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div className='shop-container'>
                <div className='shop-title' style={{position: 'relative'}}>
                    <div className='shop-title'>商城</div>
                    <img                        
                        alt=''
                        src={require(`../images/shopcar.png`)}
                        style={{display: 'block',width: '25px',height: '25px',position: 'absolute',right: 15,top: 22}}
                    />
                </div>
                <div className='shop-slider'>
                    <div className='shop-search'>
                        <div className={show ? 'single-menu-active' : ''} style={{opacity: '1'}}>
                            <div>
                            <NavBar
                                icon={<img 
                                        src={require(`../images/menu.png`)} 
                                        alt="" 
                                        style={{display: 'block',width: '25px',height: '25px'}}
                                    />}
                                mode="light"
                                onLeftClick={this.handleClick}
                                className="single-top-nav-bar"
                            >
                                <input type='search' placeholder='请输入关键词搜索' style={{width: '400px',height: '20px',fontSize: '15px'}}/>                               
                            </NavBar>
                            </div>

                            {show ? initData ? menuEl : loadingEl : null}
                            {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                        </div>
                    </div>
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
                </div>
                <div className='shop-list'>
                    <div className="flex-container-shop">
                        <Flex justify="center">
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/desk.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#fc5387'}} />
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/bed.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#48cbfe'}}/>
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/chair.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#fc9f25'}}/>
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/tea.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#31d3d2'}}/>
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/guizi.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#fd4140'}}/>
                        </Flex>
                    </div>
                    <div>
                        <ul className='icon-list' style={{listStyle: 'none',display: 'inline-block',margin: '0 auto'}}>
                            <li style={{marginLeft: '-3px',marginRight: '58px'}}>床</li>
                            <li style={{marginRight: '58px'}}>桌</li>
                            <li style={{marginRight: '58px'}}>椅</li>
                            <li style={{marginRight: '58px'}}>几</li>
                            <li>柜</li>
                        </ul>
                    </div>
                    <div className="flex-container-shop" style={{marginTop: '-10px'}}>
                        <Flex justify="center">
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/book.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#4242f7'}}/>
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/sofa.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: 'pink'}}/>
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/home.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#d4f1d2'}}/>
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/outdoor.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#928ac1'}}/>
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/slice.png")}) 10px 10px no-repeat`,backgroundSize:'40px 40px',backgroundColor: '#94939a'}}/>
                        </Flex>
                    </div>
                    <div>
                        <ul className='icon-list' style={{listStyle: 'none',display: 'inline-block',margin: '0 auto'}}>
                            <li style={{marginLeft: '-8px',marginRight: '45px'}}>书架</li>
                            <li style={{marginRight: '30px'}}>沙发</li>
                            <li style={{marginRight: '14px'}}>家居饰品</li>
                            <li style={{marginRight: '16px'}}>户外家居</li>
                            <li>全部分类</li>
                        </ul>
                    </div>
                </div>
                <div className='shop-shops'>
                    <div className="flex-container-shops">
                        <Flex justify="center">
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/shop_cup.jpg")}) no-repeat`,backgroundSize: '175px 120px'}}/>
                        <PlaceHolder className="inline" style={{background:`url(${require("../images/shop_block.jpg")}) no-repeat`,backgroundSize: '175px 120px'}}/>
                        </Flex>
                    </div>
                    <div>
                        <ul className='icon-list' style={{listStyle: 'none',display: 'inline-block',margin: '0 auto',color: 'gray'}}>
                            <li style={{marginLeft: '-28px',marginRight: '20px',fontSize: '12px'}}>Top Art Studio 欧式风格精细...</li>
                            <li style={{fontSize: '12px'}}>顺顺工艺欧式风格塑料外框黑...</li>
                        </ul>
                        <ul className='icon-list' style={{listStyle: 'none',display: 'inline-block',margin: '0 auto'}}>
                            <li style={{marginLeft: '-28px',marginRight: '130px'}}>￥ 39.95</li>
                            <li>￥ 83.99</li>
                        </ul>
                    </div>
                    <div className="flex-container-shops">
                        <Flex justify="center">
                        <PlaceHolder className="inline" style={{width: '360px',height: '180px',background:`url(${require("../images/slider2.jpg")})`,backgroundSize: '360px 180px' }}/>
                        </Flex>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;