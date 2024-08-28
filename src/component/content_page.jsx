import React, { useEffect,useState } from 'react'
import "./content.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Contentpage = () => {

  const[topic,setTopic] = useState([]);
  const[des,setDes]=useState([]);
  const name=useParams();
  
  useEffect(() => {
    func();
  }, [])
  
  const func = ()=> {axios({
     url:"data.json",
     method:"get"
   }).then((response)=>{
     setTopic(response.data);
   })
  }

  const getDesc=(r)=>{
    setDes(r);
  }
  return (
    <div className='Content_page'>
      <div className='navbar'>
        
      </div>
      <div className='content_area'>
        <div className='toc'>
          <h2>Quantum</h2>
          {
             topic.map((top)=>{
              return(<div id='left_link'onClick={()=>{
                  getDesc(top);
                }}>{top.Topicname}</div>)
              })
            }
        </div>
        <div className='main_area'>
          <div className='upper_area'>
            <div id='describe'>
             
             {
              des? des.Description : console.log(topic[0])
             }
            </div>
            <div id="img">image</div>
          </div>
          <div className='lower_part'>
            hello
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contentpage