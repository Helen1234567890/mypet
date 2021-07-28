import React, {Component} from 'react';


export default class pet extends Component {
    constructor() {
      super();
      this.state = {
          petList:{},
          maleList:[],
          femaleList:[]

      }
    }
    async componentDidMount() {
        let male = [];
        let female = [];

        fetch('http://5c92dbfae7b1a00014078e61.mockapi.io/owners',{
            method:'GET',
            headers:{
              'Content-Type':'application/json;charset=UTF-8'
            }
          })
           .then(res =>res.json())
           .then((data) => {
             this.setState({
                petList:data
             },function(){

                 this.state.petList.map((item0,index)=>{
                     male =item0.pets && item0.pets.map((item,index)=>{
                        if(item.type === "Cat"){
                            if(item0.gender === "Male"){
                               
                                return <tr key={index}><td></td><td>{item.name}</td></tr>
                            }
                        }

                    })
                    console.log(male)
                    female = item0.pets && item0.pets.map((item,index)=>{
                            if(item.type === "Cat"){
                                if(item0.gender === "Female"){
                                    return <tr key={index}><td></td><td>{item.name}</td></tr>
                                }
                            }
                        })  
                })
                this.setState({
                    maleList : male,
                    femaleList : female
                })
                })
             })
    }

    render() {
      const {maleList,femaleList} = this.state;

      return (
        <div>
          <table className='table'>
            <thead>
            <tr>
              <th>Male</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {maleList} 
            </tbody>
            <thead>
            <tr>
              <th>Female</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {femaleList}
            </tbody>
          </table>
        </div>
      );
    }
  }
