import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import ContactService from '../../../Services/ContactService'


const GetAllmessages = () => {
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


  const onDelete = (id) => {

    Swal.fire({
      title: 'Etes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprime-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        ContactService.remove(id).then(res => {
          GetAll()

        })
        Swal.fire(
          'Supprimé!',
          'Votre fichier a été supprimé.',
          'success'
        )
      }
    })
  }

  return (

    <div>
      <div className="row" style={ {background: "#f5f5f5 url(../img/bg.png) left top repeat"}}>
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title"><strong>Liste des Messages</strong></h3>
            </div>
            <div className="panel-body panel-body-table">
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-actions">
                  <thead>
                    <tr>
                      <th width={50}><center>Id</center></th>
                      <th width={80}>Nom</th>
                      <th width={100}>Sujet</th>
                      <th width={50}>Num_tel1</th>
                      <th width={50}>Email</th>
                      <th width={50}>Message</th>
                      <th width={50}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((item, index) => {

                      return (<tr id="trow_1">
                        <td className="text-center">{index}</td>
                        <td><strong>{item.nom}</strong></td>
                        <td>{item.sujet}</td>
                        <td>{item.num_tel1}</td>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                        <td>
                    
                          <button className="btn btn-danger btn-rounded btn-sm" onClick={() => onDelete(item._id)}><span className="fa fa-times" /></button>
                        </td>
                      </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GetAllmessages