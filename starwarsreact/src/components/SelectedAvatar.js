import React, { Component } from 'react';
import '../styles/selectedavatar.scss';
import data from '../mydata.json';
import bb8 from '../images/starwars-bb-8.png';
import stormtrooper from '../images/starwars-stormtrooper.png';
import r2d2 from '../images/starwars-r2-d2.png';
import darthvader from '../images/starwars-darth-vader.png';
import c3po from '../images/starwars-c-3po.png';
import bobafett from '../images/starwars-boba-fett.png';

class SelectedAvatar extends Component {
  constructor(props){
    super(props);
    this.state = {
      myavatar: null
    }
    this.goback = this.goback.bind(this);
  }
  componentDidMount(){
    console.log('state',this.state);
    const {params} = this.props;
    const myavatardata = data.filter(function(d){
          if( d.id === params.avatar_name){
            return d;
          }
    })
    this.setState({
      myavatar: myavatardata
    })

  }

  goback(){
    console.log(this.props.param);
    window.history.go(-1);
  }


  render() {
    var name = this.state.myavatar && this.state.myavatar[0] ? this.state.myavatar[0].name : '';
    var desc = this.state.myavatar && this.state.myavatar[0] ? this.state.myavatar[0].about : '';
    var id = this.state.myavatar && this.state.myavatar[0] ? this.state.myavatar[0].id : '';
    var imgUrl = '';
    if(this.state.myavatar && this.state.myavatar[0]){
      if(this.state.myavatar[0].id === 'bb8'){
         imgUrl = bb8;
      }
      else if (this.state.myavatar[0].id === 'stormtrooper') {
        imgUrl = stormtrooper;
      }
      else if (this.state.myavatar[0].id === 'r2d2') {
        imgUrl = r2d2;
      }
      else if (this.state.myavatar[0].id === 'darthvader') {
        imgUrl = darthvader;
      }
      else if (this.state.myavatar[0].id === 'c3po') {
        imgUrl = c3po;
      }
      else if (this.state.myavatar[0].id === 'bobafett') {
        imgUrl = bobafett;
      }
    }

    return (
      <div className="selected_avatar animated zoomIn">
        <div className="selected_avatar_wrapper">
          <div className="back" onClick={this.goback}><span className="back_icon"></span>Go Back</div>
          <div className="header">unlock the force</div>
          <div className="avatar_description animated bounceInUp">
              <div className="avatar_info">

                  <img src={imgUrl} className={"avatar_image_"+id} alt="selected_avatar"/>

                <div className="desc_block">
                  <div className="title">{name}</div>
                  <div className="desc">{desc}</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedAvatar;
