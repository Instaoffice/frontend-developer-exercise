import React, { Component } from 'react';
import '../styles/avatars.scss';
import {browserHistory} from 'react-router';

class Avatars extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      value2:'',
      error:[],
      selectedavatar: 'bb8'
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.showAvatar = this.showAvatar.bind(this);

  }

  handleOptionChange(event){
    this.setState({
      selectedavatar: event.target.value
    })
  }

  showAvatar(){
    browserHistory.push('/avatars/'+`${this.state.selectedavatar}`);
  }


  render() {
    return (
      <div className="avatar animated zoomIn delay0">
        <div className="avatar_wrapper">
          <div className="header animated delay1 bounceInUp">unlock the force</div>
          <div className="avatar_selector_block">
            <div className="avatar_selector_headline animated fadeInUp delay2">Please Choose Your Character</div>
            <form className="avatar_form">
              <div className="radio">
                <label className={"avatar1 animated fadeInLeft delay3 "+ (this.state.selectedavatar === 'bb8' ? 'opacityzero'  : 'opacityfull')}>
                  <input type="radio" name="radio" value="bb8" onChange={this.handleOptionChange} checked={this.state.selectedavatar === 'bb8' ? true : false} />
                  <div className="check animated fadeInUp delay4"></div>
                </label>
              </div>
              <div className="radio">
                <label className={"avatar2 animated fadeInLeft delay4 "+ (this.state.selectedavatar === 'stormtrooper' ? 'opacityzero'  : 'opacityfull')}>
                  <input type="radio" name="radio" value="stormtrooper" onChange={this.handleOptionChange} checked={this.state.selectedavatar === 'stormtrooper' ? true : false}/>
                  <div className="check animated fadeInUp delay5"></div>
                </label>
              </div>
              <div className="radio ">
                <label className={"avatar3 animated fadeInLeft delay5 "+ (this.state.selectedavatar === 'r2d2' ? 'opacityzero'  : 'opacityfull')}>
                  <input type="radio" name="radio" value="r2d2" onChange={this.handleOptionChange} checked={this.state.selectedavatar === 'r2d2' ? true : false}/>
                  <div className="check animated fadeInUp delay6"></div>
                </label>
              </div>
              <div className="radio">
                <label className={"avatar4 animated fadeInLeft delay6 "+ (this.state.selectedavatar === 'darthvader' ? 'opacityzero'  : 'opacityfull')}>
                  <input type="radio" name="radio" value="darthvader" onChange={this.handleOptionChange} checked={this.state.selectedavatar === 'darthvader' ? true : false}/>
                  <div className="check animated fadeInUp delay7"></div>
                </label>
              </div>
              <div className="radio">
                <label className={"avatar5 animated fadeInLeft delay7 "+ (this.state.selectedavatar === 'c3po' ? 'opacityzero'  : 'opacityfull')}>
                  <input type="radio" name="radio" value="c3po" onChange={this.handleOptionChange} checked={this.state.selectedavatar === 'c3po' ? true : false}/>
                  <div className="check animated fadeInUp delay8"></div>
                </label>
              </div>
              <div className="radio">
                <label className={"avatar6 animated fadeInLeft delay8 "+ (this.state.selectedavatar === 'bobafett' ? 'opacityzero'  : 'opacityfull')}>
                  <input type="radio" name="radio" value="bobafett" onChange={this.handleOptionChange} checked={this.state.selectedavatar === 'bobafett' ? true : false}/>
                  <div className="check animated fadeInUp delay8"></div>
                </label>
              </div>
            </form>
            <div className="avatar_detail_button animated fadeInUp delay8" onClick={this.showAvatar}>SHOW DETAILS</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatars;
