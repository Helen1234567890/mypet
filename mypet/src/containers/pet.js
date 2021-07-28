import React, {Component} from 'react';


export default class pet extends Component {
    constructor() {
      super();
      this.state = {
          pet:{},
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
                pet:data
             },function(){
                this.state.pet.map((item0,index)=>{
                    item0.pets && item0.pets.map((item,index)=>{
                        if(item.type === "Cat"){
                            // if(item0.gender === "Male"){
                            //     male.push(<tr key={index}><td></td><td>{item.name}</td></tr>)
                            // }else {
                            //     female.push(<tr key={index}><td></td><td>{item.name}</td></tr>)
                            // }
                            if(item0.gender === "Male"){
                                male.push(item.name)
                            }else {
                                female.push(item.name)
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
        const {maleList,femaleList} =this.state;
        let newMaleList = [];
        let newFemaleList = [];
        
        
        maleList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        maleList.forEach(function(item,index){
            newMaleList.push(<tr key={index}><td></td><td>{item}</td></tr>);
        })
        femaleList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        femaleList.forEach(function(item,index){
            newFemaleList.push(<tr key={index}><td></td><td>{item}</td></tr>);
        })


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
           {newFemaleList}
            </tbody>
            <thead>
            <tr>
              <th>Female</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {this.state.femaleList}
            </tbody>
          </table>
        </div>
      );
    }
  }
