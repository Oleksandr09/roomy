import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Collapse, Button, CardBody, Card, CustomInput } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Geocode from "react-geocode";
import key from "./google.jsx";
import Place_id from './Place_id.jsx';

// Geocode.setApiKey(process.env.API_KEY);


const LatitudeLongitude = ({ hover, hover_id, text, onMouseEnter, onMouseLeave }) =>
<Button data-id={text}
onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}
color="success"
className={Number(hover_id) === Number(text) && hover ? "hover_but" : "" }>{text}</Button>;


// const getLatLongFromAddress = (address) => {
//   return Geocode.fromAddress(address).then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//     return { lat, lng }
//   },
//   error => {
//     console.error(error);
//     return error;
//   }
// );
// }

// {
//       isUpdatingPlaces ? (<div>Is loading...</div>) : ()
//     }
// const isUpdatingPlaces = this.state.isUpdatingPlaces;
      // isUpdatingPlaces: true,

class SimpleMap extends Component {

  // componentDidMount() {
  //   const newPlaces = this.state.places.map(place => {
  //     getLatLongFromAddress(place.addre).then(latlong => {
  //       const newPlace = {
  //       ...place,
  //       lat: latlong.lat,
  //       lng: latlong.lng
  //     }

  //     return newPlace


  //     })


  //   })

  //   this.setState({places: newPlaces, isUpdatingPlaces: false})
  // }

constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      hover: false,
      hover_id: -1,

      places: [
        {
          id: 1,
          postal_code: 'M4S 2H4',
          street_number: 45,
          street_name: 'Dunfield Avenue',
          province: 'ON',
          city: 'Toronto',
          price: 1200.00,
          lat: 43.706198,
          lng: -79.394332
        },
        {
          id: 2,
          postal_code: 'M1P 2B7',
          street_number: 1159,
          street_name: 'Birchmount Rd',
          province: 'ON',
          city: 'Toronto',
          price: 595.00,
          lat: 43.741207,
          lng: -79.281756
        },
        {
          id: 3,
          postal_code: 'M5V 3Z1',
          street_number: 25,
          street_name: 'Telegram Mews',
          province: 'ON',
          city: 'Toronto',
          price: 3000.00,
          lat: 43.640995,
          lng: -79.394570
        },
        {
          id: 4,
          postal_code: 'M4S 2H4',
          street_number: 45,
          street_name: 'Dunfield Avenue',
          province: 'ON',
          city: 'Toronto',
          price: 1200.00,
          lat: 43.706198,
          lng: -79.394332
        },
        {
          id: 5,
          postal_code: 'M1P 2B7',
          street_number: 1159,
          street_name: 'Birchmount Rd',
          province: 'ON',
          city: 'Toronto',
          price: 595.00,
          lat: 43.741207,
          lng: -79.281756
        },
        {
          id: 6,
          postal_code: 'M5V 3Z1',
          street_number: 25,
          street_name: 'Telegram Mews',
          province: 'ON',
          city: 'Toronto',
          price: 3000.00,
          lat: 43.640995,
          lng: -79.394570
        }
      ]
     };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  static defaultProps = {
    center: {
      lat: 43.761539,
      lng: -79.411079
    },
    zoom: 11
  };

  toggleHover = (e) => {
    this.setState({ hover: true, hover_id: e.target.dataset.id });
  };

  toggleLeave = (e) => {
    this.setState({ hover: false });
  };


  render() {

    const placesList = this.state.places;

    return (

      <div className="middle_all">
        <div className="google_map">
          <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
            {placesList.map(latlong => {
              return (
                <LatitudeLongitude
                hover={this.state.hover}
                hover_id={this.state.hover_id}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleLeave}
                key={latlong.id}
                lat={latlong.lat}
                lng={latlong.lng}
                text={latlong.id}
                />
                )
            })}
          </GoogleMapReact>
        </div>
        <div className="right">
          <div className="topsearch">
            <div className="wrapper">
              <Button className="button_char" onClick={this.toggle}>SEARCH</Button>
              <p className="logout">Your Email</p>
              <a className="logout" href="">Logout</a>
              <img src="/images/logo_white.png" alt="Logo"></img>
            </div>
            <Collapse isOpen={this.state.collapse}>
              <Card style={{ marginTop: '1rem' }}>
                <CardBody>
                  <Form>
                  <p className="price">Please, choose your search criteria:</p>
                    <FormGroup row>
                      <Label for="exampleSelect" sm={3}>Neighbourhood</Label>
                      <Col sm={9}>
                        <Input type="select" name="select" id="exampleSelect" >
                          <option>Etobicoke</option>
                          <option>North York</option>
                          <option>York-Crosstown</option>
                          <option>Uptown</option>
                          <option>Midtown</option>
                          <option>Downtown</option>
                          <option>West End</option>
                          <option>East York</option>
                          <option>East End</option>
                          <option>Scarborough</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleSelect" sm={3}>Type of building</Label>
                      <Col sm={9}>
                        <Input type="select" name="select" id="exampleSelect" >
                          <option>Condo</option>
                          <option>Apartment</option>
                          <option>House</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="From">Monthly Price (per room) From:</Label>
                          <Input type="text" name="from" id="from" placeholder="" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="To">To:</Label>
                          <Input type="text" name="to" id="to" placeholder="" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup row>
                      <Label for="parkingCheckbox" sm={3}>Parking</Label>
                      <Col sm={9}>
                        <CustomInput type="switch" id="parkingSwitch" name="parkingSwitch" label="Turn on if you need a parking place" onClick = {this._handleSmoker} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="laundryCheckbox" sm={3}>Laundry</Label>
                      <Col sm={9}>
                        <CustomInput type="switch" id="laundrySwitch" name="laundrySwitch" label="Turn on if you need a washer/dryer" onClick = {this._handleSmoker} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="AC_Checkbox" sm={3}>Air conditioning</Label>
                      <Col sm={9}>
                        <CustomInput type="switch" id="AC_Switch" name="AC_Switch" label="Turn on if you need AC" onClick = {this._handleSmoker} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="furnishedCheckbox" sm={3}>Furnished</Label>
                      <Col sm={9}>
                        <CustomInput type="switch" id="furnishedSwitch" name="furnishedSwitch" label="Turn on if you need a furnished place" onClick = {this._handleSmoker} />
                      </Col>
                    </FormGroup>
                    <Button type="submit" className="button_char" >GO FOR IT</Button>
                  </Form>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="scrollable">
          {placesList.map(place => {
              return (
                <div
                key={"place"+place.id} className={Number(this.state.hover_id) === place.id && this.state.hover ? "hover_place" : "" }>
                  <div className="places" data-id={place.id}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleLeave}>
                    <div className="map_places">
                    <div className="place_number">{place.id}</div>
                      <div>
                        <img src="/images/room_exm.png" alt="room" className="img_place"></img>
                      </div>
                      <div>
                        <div className="price">${place.price}/m</div>
                        <div>{place.street_number} {place.street_name}, {place.city}, {place.province}, {place.postal_code}</div>
                        <Place_id place_id={place.id}></Place_id>
                      </div>
                    </div>
                  </div>
                </div>
                )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;