import React from 'react';
import { Layout } from 'antd';
import './App.css'
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'


const { Footer } = Layout;

function App() {


  return (
    <div className="App">
      <Layout>

        <Footer>

          <div className="line-5" />

          <div className="sm">
            <h2 style={{ fontWeight: 900, fontStyle: 'bold', fontFamily: 'Inter', marginLeft: '10px' }}>Site map</h2>
            <div className="ul" style={{ marginLeft: '20px' }}>
              <h5>Recipe</h5>
              <h5>cocktail</h5>
              <h5>About us</h5>

            </div>


          </div>
          <div className="vl" />


          <div className="cu" >


            <h2 style={{ fontWeight: 900, fontStyle: 'bold', fontFamily: 'Inter' }}>Contact us</h2>

            <div className="q" style={{ marginRight: '1%' }}>
              <h5>+91 9764314857</h5>
              <h5 style={{ marginRight: '15px' }}>Goa India</h5>

              <h2 style={{ fontWeight: 700, fontStyle: 'bold', fontFamily: 'Inter', marginRight: '-2%' }}>Lets Be friends!</h2>

              <div>
                <FacebookFilled style={{ fontSize: 30, padding: '0 20px', }} />
                <InstagramFilled style={{ fontSize: 30 }} />



              </div>



            </div>


          </div>




        </Footer>
      </Layout>

    </div>
  )
}

export default App



