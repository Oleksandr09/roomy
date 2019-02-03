import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';


class Owner_id extends React.Component {
  constructor() {
    super();
    this.state = {
      placeData: {}
    };

  }

  componentWillMount(){
    //Get the data on every place and insert to state.place
    axios.get(`/owners/58`)
      .then( res => {
        let data = res.data
        console.log(res.data);
        this.setState({ placeData: data})

      })
  }


  render() {
    const placesList = this.state.placeData

    return (

    <div>
      <div className="topsearch">
        <div className="wrapper">
          <img src="/images/logo_white.png" alt="Logo"></img>
          <p className="logout">Your Email</p>
          <a className="logout" href="">Logout</a>
        </div>
        </div>
        {console.log(placesList)}
        <Table borderless>
          <tbody>
            <tr>
              <th scope="row">Price:</th>
              <td>${this.state.placeData.price}</td>
            </tr>
            <tr>
              <th scope="row">Description:</th>
              <td>{this.state.placeData.description}</td>
            </tr>
            <tr>
              <th scope="row">Neighbourhood:</th>
              <td>{this.state.placeData.neighbourhood}</td>
            </tr>
            <tr>
              <th scope="row">Address:</th>
              <td>{this.state.placeData.street_number} {this.state.placeData.street_name}, {this.state.placeData.city}, {this.state.placeData.postal_code}</td>
            </tr>
            <tr>
              <th scope="row">Building Type:</th>
              <td>{this.state.placeData.type_of_building}</td>
            </tr>
            <tr>
              <th scope="row">Parking:</th>
              <td>{this.state.placeData.parking ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th scope="row"># of Baths:</th>
              <td>{this.state.placeData.number_of_bathrooms}</td>
            </tr>
            <tr>
              <th scope="row">Air condition:</th>
              <td>{this.state.placeData.air_condition ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th scope="row">Furnished:</th>
              <td>{this.state.placeData.furnished ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th scope="row">Laundry:</th>
              <td>{this.state.placeData.laundry ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </Table>








    </div>
      );

  }
}


// {placesList.map(place => {
//         return (
//           <div className="places pointer" data-id={place.id}>
//             <div className="map_places">
//                 <div>
//                   <img src="/images/room_exm.png" alt="room" className="img_place"></img>
//                 </div>
//                 <div>
//                   <div className="price">${place.price}/m</div>
//                   <div>{place.street_number} {place.street_name}, {place.city}, {place.province}, {place.postal_code}</div>
//                 </div>
//             </div>
//           </div>
//               // <p>{place.neighbourhood}</p>
//               )
//             })}


export default Owner_id;