import React from 'react';  
import Home from '../Home/Home';
import Idea from '../Idea/Idea';
import Shop from '../Shop/Shop';
import Mine from '../Mine/Mine';
import Tabs from 'antd-mobile/lib/tabs'; 

const tabs = [
  { title: '首页', sub: '1' ,img: 'home'},
  { title: '灵感', sub: '2' ,img: 'idea'},
  { title: '商城', sub: '3' ,img: 'shop'},
  { title: '我的', sub: '4' ,img: 'mine'},
];

const App = () => (
  <div>
      <Tabs
        tabs={tabs}
        initialPage={0}
        tabBarPosition="bottom"
        renderTab={tab => 
          <div>
            <span>
              <img 
                style={{width: '15px',height: '15px',display: 'block'}} 
                src={require(`../images/${tab.img}.png`)} 
                alt=''
              />   
            </span>
          </div>}
      >
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
          <Home/>
        </div>
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
          <Idea/>
        </div>
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
          <Shop />
        </div>
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
          <Mine/>
        </div>
      </Tabs>
  </div>
);

export default App;




