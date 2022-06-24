import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ArticleService from '../../../Services/ArticleService'

function UpdateArt() {
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const [image,setImages]=useState([])
    const {id}=useParams()
    const onChangehandle=(e)=>{
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
    }
    const onSubmitHandle=(e)=>{
      e.preventDefault()

      const formdata = new FormData()//
  for (let i = 0; i < image.length; i++) {
    formdata.append("image",image[i])
  }
  formdata.append("ref_art",data.ref_art)
  formdata.append("designation",data.designation)
  formdata.append("prix",data.prix)
  formdata.append("description",data.description)
  formdata.append("genre",data.genre)
  formdata.append("type",data.type) 
  formdata.append("promotion",data.promotion) 
      
      Swal.fire({
        title: 'Voulez-vous enregistrer les modifications?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Enregistrer',
        denyButtonText: `N'enregistre pas`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/getAllArticles")
          ArticleService.update(id,formdata).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
          Swal.fire('Enregistrées!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
        }
      })
    }
  useEffect( () => {
      ArticleService.get(id).then(res=>{
          console.log(res)
          setData(res.data.data)
      }).catch(err=>{
          console.log(err)
      })
  },[] )

  const onHandleImage=e=>{
    console.log(e)
    setImages(e.target.files)
  }
    
  return (
    <div><div>
    <div className="page-content-wrap">
<div className="row" style={ {background: "#f5f5f5 url(../img/bg.png) left top repeat"}}>
 <div className="col-md-12">
   <form className="form-horizontal" onSubmit ={onSubmitHandle}>
     <div className="panel panel-default">
       <div className="panel-heading">
         <h3 className="panel-title"><strong> Mise à jour </strong> Article</h3>
        
       </div>
       <div className="panel-body">
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Ref_art</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.ref_art} name="ref_art" onChange={onChangehandle}/>
             </div>
             <span className="help-block">Ajouter ref_art</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Designation</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.designation} name="designation" onChange={onChangehandle}  />
             </div>
             <span className="help-block">Ajouter designation</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">prix</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.prix} name="prix" onChange={onChangehandle} />
             </div>
             <span className="help-block">Ajouter prix</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Description</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.description} name="description" onChange={onChangehandle}  />
             </div>
             <span className="help-block">Ajouter description</span>
           </div>
         </div>

         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Genre</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.genre} name="genre" onChange={onChangehandle}  />
             </div>
             <span className="help-block">Ajouter genre</span>
           </div>
         </div>

         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Type</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.type} name="type" onChange={onChangehandle}  />
             </div>
             <span className="help-block">Ajouter type</span>
           </div>
         </div>

         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">image</label>
           <div className="col-md-6 col-xs-12">
             <input type="file" className="form-control"  name="image" onChange={onHandleImage}  />
             <span className="help-block">Ajouter image</span>
           </div>
         </div>

         <label className="col-md-3 col-xs-12 control-label">En promotion
            <div className="col-md-6 col-xs-12">
            <select style={{width:200, marginLeft:253}} className="form-select" name="promotion" value={data.promotion} onChange={onChangehandle}>
              <option selected value=" ">--choix--</option>
              <option>true</option>
              <option>false</option>
            </select>
            </div>
            <span style={{marginRight: "-52%"}} className="help-block">ajouter promotion</span>
            </label>
       </div>
       <div className="panel-footer">
       <Link to="/getAllArticles" className="btn btn-primary">Liste des Articles</Link>
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

export default UpdateArt