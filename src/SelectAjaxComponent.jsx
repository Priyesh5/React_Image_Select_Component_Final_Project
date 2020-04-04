import React, { Component } from 'react';
import axios from 'axios';
class SelectAjaxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:['Select Image'],
            imageBuffered: ""
        }
    }
    
    componentDidMount=()=>{
        this.loadData();
    }
    loadData=()=>{
        var URLToGetItems;
        axios.get(URLToGetItems , {
    }).then((resp) => {
        var arrayChoice = ['Select Image'];
        var a = JSON.parse(resp.data.body);
        for(var i=1;a[i] !== undefined; i++){
            arrayChoice.push(a[i].Key)
        }
        this.setState({images: arrayChoice});
    },(error) => {
        console.log(`Error Occured ${error}`);
    });
}

handleSub(evt){
    var urldata = evt.target.value;
    var URLToSelectImage;
    if(urldata === 'Select Image'){
        return alert("No option Selected");
    }
    var imgdata;
    axios.get(URLToSelectImage , {
    }).then((resp) => {
        var a = JSON.parse(resp.data.body);
        imgdata = a.Body.data
        const buffer = imgdata // e.g., <Buffer 89 50 4e ... >
        const b64 = new Buffer(buffer).toString('base64')
        this.setState({"imageBuffered": b64});
    },(error) => {
        console.log(`Error Occured ${error}`);
    });
}

render() {
    return (  
        <div className="container">
        <div className="container">
        <select className="form-control" onChange={this.handleSub.bind(this)}>
                 {
                     this.state.images.map((d,i) => (
                         <option key={i} value={d}>{(d.split('.')[0].split('/')[1])}</option>
                     ))
                 }
        </select> 
        </div>
        <hr/>
            <div>
            <center>
            <img src={`data:image/jpeg;base64,${this.state.imageBuffered}`} alt="No Image Selected"/>
            </center>
            </div>
            </div>
            );
        }
    }
    
    export default SelectAjaxComponent;
