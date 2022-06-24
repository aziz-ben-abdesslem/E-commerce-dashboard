import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import CommandeService from '../../../Services/CommandeService'


function UpdateOrder() {
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const {id}=useParams()
    const onChangehandle=(e)=>{
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
    }
    const onSubmitHandle=(e)=>{
      e.preventDefault()
      Swal.fire({
        title: 'Voulez-vous enregistrer les modifications?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Enregistrer',
        denyButtonText: `N'enregistre pas`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/getAllOrders")
          CommandeService.update(id,data).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
        } 
      })
    }
  useEffect( () => {
      CommandeService.get(id).then(res=>{
          console.log(res)
          setData(res.data.data)
      }).catch(err=>{
          console.log(err)
      })
  },[] )

    return (
        <div><div>
            <div className="page-content-wrap">
                <div className="row" style={ {background: "#f5f5f5 url(../img/bg.png) left top repeat"}}>
                    <div className="col-md-12">
                        <form className="form-horizontal" onSubmit={onSubmitHandle} >
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title"><strong> Màj </strong> Commandes</h3>
                                </div>
                                <div className="panel-body">                              




                                    <div className="form-group">
                                        <label className="col-md-3 col-xs-12 control-label">status</label>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="input-group">
                                                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                                                <input type="text" className="form-control" value={data.status} name="status" onChange={onChangehandle} />
                                            </div>
                                            <span className="help-block">Ajouter status</span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-3 col-xs-12 control-label">Prix_total</label>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="input-group">
                                                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                                                <input type="text" className="form-control" value={data.total}  name="total"  onChange={onChangehandle} />
                                            </div>
                                            <span className="help-block">Ajouter prix_total</span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-3 col-xs-12 control-label">createdAt</label>
                                        <h4>{String(data.createdAt).substring(0,10 )}</h4>
                                    </div>

                                </div>
                                <div className="panel-footer">
                                    <Link to="/getAllOrders" className="btn btn-primary">Liste des Commandes</Link>
                                    <button className="btn btn-primary pull-right" type="submit">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
export default UpdateOrder