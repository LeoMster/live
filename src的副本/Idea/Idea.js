import React, { Component } from 'react';
import './Idea.css';
import Flex from 'antd-mobile/lib/flex';
import 'antd-mobile/lib/flex/style/css';

const PlaceHolder = ({ className = '', ...restProps },props) => (
  <div className={`${className} placeholder`} {...restProps} >
      <div className='bottom-introduction'>
          <div style={{background:`url(${require("../images/linggan_head.jpg")}) 2px 0px no-repeat`,backgroundSize: '27px 27px'}} className='bottom-head'></div>
          <div className='bottom-text' style={{color: 'gray'}}>橙色律动</div>
          <div className='bottom-icon'>
              <img
                alt=''
                src={require(`../images/heart.png`)}
                style={{width: '25px',height: '25px',marginTop: '2px'}}
               />
          </div>
      </div>
  </div>
);

class Idea extends Component {
    render() {
        return (
            <div className='idea-container'>
                <div className='idea-title' style={{position: 'relative'}}>
                    <div className='idea-title'>灵感</div>
                    <img                        
                        alt=''
                        src={require(`../images/bg.png`)}
                        style={{display: 'block',width: '25px',height: '25px',position: 'absolute',right: 15,top: 22}}
                    />
                </div>
                <div className='idea-nav'>
                    <li style={{color: '#3fcccb'}}>推荐</li>
                    <li>冬季</li>
                    <li>宜家</li>
                    <li>小清新</li>
                    <li>小户型</li>
                    <li>个性色彩</li>
                    <li>彪</li>
                    <button className='btn'>+</button>
                </div>
                <div className="flex-container-idea">
                    <Flex justify="center">
                    <PlaceHolder className="inline" style={{marginRight: '10px',borderRadius: '10px',background:`url(${require("../images/linggan1.jpg")}) -1px -3px`,backgroundSize: '180px 180px'}}/>
                    <PlaceHolder className="inline" style={{borderRadius: '10px',background:`url(${require("../images/linggan1.jpg")}) -1px -3px`,backgroundSize: '180px 180px'}}/>
                    </Flex>
                </div>
                <div className="flex-container-idea">
                    <Flex justify="center">
                    <PlaceHolder className="inline" style={{marginRight: '10px',borderRadius: '10px',background:`url(${require("../images/linggan1.jpg")}) -1px -3px`,backgroundSize: '180px 180px'}}/>
                    <PlaceHolder className="inline" style={{borderRadius: '10px',background:`url(${require("../images/linggan1.jpg")}) -1px -3px`,backgroundSize: '180px 180px'}}/>
                    </Flex>
                </div>
                <div className="flex-container-idea">
                    <Flex justify="center">
                    <PlaceHolder className="inline" style={{marginRight: '10px',borderRadius: '10px',background:`url(${require("../images/linggan1.jpg")}) -1px -3px`,backgroundSize: '180px 180px'}}/>
                    <PlaceHolder className="inline" style={{borderRadius: '10px',background:`url(${require("../images/linggan1.jpg")}) -1px -3px`,backgroundSize: '180px 180px'}}/>
                    </Flex>
                </div>
            </div>
        );
    }
}

export default Idea;