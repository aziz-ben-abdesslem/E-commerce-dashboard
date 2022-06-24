import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import UsersService from "../../../Services/UsersService"
import ArticleService from "../../../Services/ArticleService";
import ServiceRepService from "../../../Services/ServiceRepService";
import CommandeService from "../../../Services/CommandeService"
import ContactService from "../../../Services/ContactService";





const Layout = () => {



  const [status,setStatus]=useState([]);
  const [index,setIndex]=useState([]);
  
  
  useEffect( () =>{
  const sStatus=[];
  const sIndex=[];
  
  const GetAllcmd = async()=>{
    //const reqData = await fetch("");
    const reqData = await fetch("http://mongodb://localhost:27017/project/commandes");
    const resData = await reqData.json();
    console.log(resData);
  
    //for(let i=0;  i<resData.length; i++){
       //sStatus.push(resData[i].status)
      // sIndex.push(parseInt(resData[i]._id));
   // }
   // setIndex(sStatus);
    //setStatus(sIndex);
    //console.log(sIndex);
  }
  
  GetAllcmd();
  
  },[])

  const [data,setData]=useState({})
  
  const [Articles, setAricles] = useState([]);
  const GetAllart = () => {
    ArticleService.getAll()
      .then((res) => {
        console.log(res);
        setAricles(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetAllart();
  }, []);


  const [Commande, setCommande] = useState([]);
  const GetAllcmd = () => {
    CommandeService.getAll()
      .then((res) => {
        console.log(res);
        setCommande(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllcmd();
  }, []);


  const [ServiceRep, setService] = useState([]);
  const GetAllserv = () => {
    ServiceRepService.getAll()
      .then((res) => {
        console.log(res);
        setService(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllserv();
  }, []);

  
    const [messages, setMessages] = useState([])
    const GetAll = () => {
      ContactService.getAll().then(res => {
        console.log("response >>>>", res)
        setMessages(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    }
    useEffect(() => {
      GetAll()
    }, [])

  const [Users, setUsers] = useState([]);
  const GetAllusers = () => {
    UsersService.getAll()
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllusers();
  }, []);

  

  return (
    <div>
      {" "}
      <ul className="breadcrumb">
      </ul>
      <div className="page-content-wrap">
        {/* START WIDGETS */}
        <div className="row">


        <div className="col-md-4">
            <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              <div className="widget-item-left">
              <span class="fa fa-users"></span>
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">{Object.keys(Users).length}</div>
                <div className="widget-title">Nombre des Utilisateurs</div>
                <div className="widget-subtitle">Dans votre site</div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>

            {/* END WIDGET REGISTRED */}
          </div>

            {/* START WIDGET REGISTRED */}
            <div className="col-md-4">
            <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              <div className="widget-item-left">
              <span class="fa fa-list"></span>
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">{Object.keys(Articles).length}</div>
                <div className="widget-title">Nombre des Articles</div>
                <div className="widget-subtitle">Dans votre site</div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>

            {/* END WIDGET REGISTRED */}
          </div>


          <div className="col-md-4">
            {/* START WIDGET Services */}
            <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              <div className="widget-item-left">
                <span class="fa fa-wrench"></span>
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">{Object.keys(ServiceRep).length}</div>
                <div className="widget-title">Nombre des Services</div>
                <div className="widget-subtitle">Dans votre site</div>
              </div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>
          </div>
          {/* END WIDGET Services */}

          {/* START WIDGET order */}
          <div className="col-md-4">
            
          <div
              className="widget widget-default widget-item-icon"
              onclick="location.href='pages-address-book.html';"
            >
              
              <div className="widget-item-left">
                <span class="glyphicon glyphicon-shopping-cart"></span>
              </div>
                <div className="widget-data">
                <div className="widget-int num-count">{Object.keys(Commande).length}</div>
                  <div className="widget-title">Nombre total<br />de commande</div>
                  
                </div>
              
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
            </div>
            {/* END WIDGET order */}
          </div>
          {/* START WIDGET Message */}
          <div className="col-md-4">
              <div
                className="widget widget-default widget-item-icon"
                onclick="location.href='pages-messages.html';">
                <div className="widget-item-left">
                  <span className="fa fa-envelope" />
                </div>
                <div className="widget-data">
                  <div className="widget-int num-count">{Object.keys(messages).length}</div>
                  <div className="widget-title"> Nombre total <br/> des Messages </div>
                </div>
                <div className="widget-controls">
                  <a
                    href="#"
                    className="widget-control-right widget-remove"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Remove Widget"
                  >
                    <span className="fa fa-times" />
                  </a>
                </div>
              </div>
          </div> 
          {/* END WIDGET Message */}

          <div className="col-md-4">
            {/* START WIDGET CLOCK */}
            <div className="widget widget-info widget-padding-sm">
              <div className="widget-big-int plugin-clock">00:00</div>
              <div className="widget-subtitle plugin-date">Chargement...</div>
              <div className="widget-controls">
                <a
                  href="#"
                  className="widget-control-right widget-remove"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Remove Widget"
                >
                  <span className="fa fa-times" />
                </a>
              </div>
              <div className="widget-buttons widget-c3">
                <div className="col">
                  <a href="#">
                    <span className="fa fa-clock-o" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <span className="fa fa-bell" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <span className="fa fa-calendar" />
                  </a>
                </div>
              </div>
            </div>
            {/* END WIDGET CLOCK */}
          </div>

        </div>
        {/* END WIDGETS */}
        <div className="row">
        <div className="row">
          <h1 style={{textAlign:"center"}}>les commandes par saison</h1>
          <Chart style={{marginLeft:"-25%"}}
          
          
          type="pie"
          width={1349}
          height={550}
          series={[15,30,45,20]}
          // series={index}
          options={ {
            
            
            noData:{text:"Données Vides"},

            colors:['#c2975b','#95b75d','#117F84','#ac327a'],
            labels:['automne','hiver','été','printemps'],
            // labels:status

            }
          }
          
          
          >

          </Chart>


          <h1 style={{textAlign:"center"}}>L'évolution du service réparation par an</h1>
          <Chart style={{marginLeft:"5%"}}
          
          
          type="bar"
          width={1000}
          height={400}
          series=
          {
          
            [{

              name:"Réparations",
              data:[20,40,30,50,60],

             }]
            
          }

          options={ {

            theme:{mode:'dark'},
            noData:{text:"Données Vides"},
            colors:['#95b75d'],

          xaxis:{
            categories:['2018','2019','2020','2021','2022'],
            title:{
              text:"Année",
              style:{color:"#c2975b"}   
            }
          },

          yaxis:{
            
            title:{
              text:"Nombre de réparations",
              style:{color:"#c2975b"}   
            }
          }
            }
          }
          
          
          />

          

        {/* <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart> */}
      
        </div>

        </div>

        <div className="row">
          <div className="col-md-12">
          </div>
          <div
            className="common-modal modal fade"
            id="common-Modal1"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-content">
              <ul className="list-inline item-details">
                <li>
                  <a href="http://themifycloud.com/downloads/janux-premium-responsive-bootstrap-admin-dashboard-template/">
                    Modèles d'administration
                  </a>
                </li>
                <li>
                  <a href="http://themescloud.org">Bootstrap themes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Layout;