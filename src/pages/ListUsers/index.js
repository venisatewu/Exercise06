import React, { Component } from "react";
import NavBar from "../../components/NavBar";

class listUsers extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
  
    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(parsedJSON => parsedJSON.data.map(data => (
            {
              id: `${data.id}`,
              address: `${data.email}`,
              firstName: `${data.first_name}`,
              lastName: `${data.last_name}`,
              image: `${data.avatar}`,
  
            }
          )))
          .then(items => this.setState({
            items,
            isLoaded: false
          }))

          .catch(error => console.log('parsing failed', error))
    }
  
    render() {
        const {items } = this.state;
          
        return (
          <div className="boxWhite">
                <NavBar />
                <h2>List Users</h2>
                {
                items.length > 0 ? items.map(item => {
                const {id, address, firstName, lastName,  image} = item;
                
                return (
                  <div 
                    key={id} className="bgCircle">
                    <center> <img src={image} alt={firstName} className="circle"/> 
                    <div className="ctr">
                        <h5>{firstName} {lastName} </h5>
                        <h6>{address}</h6>
                    </div>
                    </center>
                  </div>
                );
                }) : null
                }
            </div>
        );
      }
    }
  
  export default listUsers;