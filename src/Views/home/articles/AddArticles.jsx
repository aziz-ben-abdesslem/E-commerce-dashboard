import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArticleService from '../../../Services/ArticleService' 
import { useNavigate } from 'react-router'
import "./article.css"
const Articles = () => {


  const initialValues = {
    ref_art: "",
    designation: "",
    prix: "",
    description: "",
    
    genre: "",
    type: "",
}


  const navigate=useNavigate()
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [data,setData]=useState({initialValues})
const [image,setImages]=useState([])

  const onChangehandle=(e)=>{
    setData({
      // ... bich nbadlou e data
      ...data,
      [e.target.name]:e.target.value
    })
  }
  
  const onSubmitHandle=(e)=>{
    e.preventDefault()
    setFormErrors(validate(data));
    setIsSubmit(true)
    const formdata = new FormData()//
  for (let i = 0; i < image.length; i++) {
    formdata.append("image",image[i])
  }
  formdata.append("ref_art",data.ref_art)
  formdata.append("designation",data.designation)
  formdata.append("prix",data.prix)
  formdata.append("description",data.description)
  formdata.append("promotion",data.promotion)
  formdata.append("genre",data.genre)
  formdata.append("type",data.type)



      /* Read more about isConfirmed, isDenied below */
    
         navigate("/getAllArticles")
        ArticleService.create(formdata).then(res=>{
          setData(res.data.data)
          
          console.log(res)
          
        }).catch(err=>{
          console.log(err)
        }) 
      }
    
  
const onHandleImage=e=>{
  console.log(e)
  setImages(e.target.files)
}

useEffect(() => {
  console.log(formErrors)
  if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data)
  }

}, [formErrors]
)

const validate = (values) => {
  const errors = {}

  if (!values.ref_art) {

      errors.ref_art = "ref_art est requis!"

  }

  if (!values.designation) {

      errors.designation = "designation est requis!"
  }

  if (!values.prix) {
      errors.prix = "prix est requis !"
  } 

  if (!values.description) {

      errors.description = "description est requis!"

  }

  // if (!values.image) {

  //     errors.image = "image est requis!"

  // }

  if (!values.genre) {

      errors.genre = "genre est requis!"

  }

  if (!values.type) {

      errors.type = "type est requis!"

  }

  return errors;
}


  return (
    <div>
       <div className="page-content-wrap">
  <div className="row" style={ {background: "#f5f5f5 url(../img/bg.png) left top repeat"}}>
    <div className="col-md-12">
      <form className="form-horizontal" onSubmit={onSubmitHandle} >
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"><strong>Ajouter Article</strong></h3>
          </div>
          <div className="panel-body">
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Ref_art</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" required name='ref_art' value={data.ref_art} onChange={onChangehandle}/>
                  
                </div>
                <span className="help-block">ajouter ref_art</span>
                <p className='errorrequired'>{formErrors.ref_art}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Designation</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" required name='designation' value={data.designation} onChange={onChangehandle}/>
                  
                </div>
                <span className="help-block">ajouter designation</span>
                <p className='errorrequired'>{formErrors.designation}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Prix</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" required name='prix' value={data.prix} onChange={onChangehandle}/>
                  
                </div>
                <span className="help-block">ajouter prix</span>
                <p className='errorrequired'>{formErrors.prix}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Description</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" required name='description' value={data.description} onChange={onChangehandle} />
                  
                </div>
                <span className="help-block">ajouter description</span>
                <p className='errorrequired'>{formErrors.description}</p>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Genre</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" required name='genre' value={data.genre} onChange={onChangehandle} />
                  
                </div>
                <span className="help-block">ajouter genre</span>
                <p className='errorrequired'>{formErrors.genre}</p>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Type</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" required name='type' value={data.type} onChange={onChangehandle} />
                  
                </div>
                <span className="help-block">ajouter type</span>
                <p className='errorrequired'>{formErrors.type}</p>
              </div>
            </div>



            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Image</label>
              <div className="col-md-6 col-xs-12">
                <input multiple type="file" className="form-control" required name="image" value={data.image} onChange={onHandleImage}/>
                
                <span className="help-block">ajouter image</span>
                {/* <p className='errorrequired'>{formErrors.image}</p> */}
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
            
           {/* <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Promotion</label>
              <div className="col-md-6 col-xs-12">
                <select type="text" className="form-select" name="promotion" value={data.promotion} onChange={onChangehandle}>
                <option selected value=" ">--choix--</option>
              <option>true</option>
              <option>false</option>
                <span className="help-block">ajouter promotion</span>
                </select>
              </div>
            </div> */}

          </div>
          
          
        </div>
        

      <div className="panel-footer">
          <Link to="/getAllArticles" className="btn btn-primary">Liste des Articles</Link>
          <button className="btn btn-primary pull-right" type="submit">Envoyer</button>
          </div>
          </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Articles