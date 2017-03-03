import React, { Component } from 'react';
import '../styles/app.scss';
import avatar from '../images/starwars-darth-vader.png';
import avatar2 from '../images/starwars-stormtrooper.png';
import {browserHistory} from 'react-router';
import correct from '../images/correct.png';
import incorrect from '../images/incorrect.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      value2:'',
      usernameerror:false,
      passworderror:false,
      submit: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(event){

    this.setState({
      submit:true
    })
    if(this.state.value === 'yoda' && this.state.value2 === 'dogbah'){
      browserHistory.push('/avatars');
        alert('Login Successfull');
    }
    else{
        this.refs.avatar.src = avatar2;
      if(this.state.value === 'yoda' && this.state.value2 !== 'dogbah'){
        this.refs.username_validation.src = correct;
        this.refs.password_validation.src = incorrect;
        this.refs.username_validation.style.display = "flex";
        this.refs.password_validation.style.display = "flex";
        this.setState({
          usernameerror:false,
          passworderror:true
        })
      }
      else if(this.state.value !== 'yoda' && this.state.value2 === 'dogbah'){
        this.refs.username_validation.src = incorrect;
        this.refs.password_validation.src = correct;
        this.refs.username_validation.style.display = "flex";
        this.refs.password_validation.style.display = "flex";
        this.setState({
          usernameerror:true,
          passworderror:false
        })
      }
      else{
        this.refs.username_validation.src = incorrect;
        this.refs.password_validation.src = incorrect;
        this.refs.username_validation.style.display = "flex";
        this.refs.password_validation.style.display = "flex";
        this.setState({
          usernameerror:true,
          passworderror:true,
        })
      }
      event.preventDefault();
    }

  }

  handleBlur(flag){
    // console.log('reached onblur');
    // if(flag === 'username'){
    //   this.refs.username.style.border=  ' 1px solid #b9b9b9';
    //   this.refs.username.style.bordexShadow='0px 0px 4px #dadada' ;
    // }
    // else if(flag === 'password'){
    //   this.refs.password.style.border=  ' 1px solid #b9b9b9';
    //   this.refs.password.style.bordexShadow='0px 0px 4px #dadada' ;
    // }

  }

  handleChangeName(event){
    this.setState({value: event.target.value});
  }
  handleChangePassword(event){
  this.setState({value2: event.target.value});
  }
  render() {
    console.log('this.state',this.state);
    var username_icon_class = '';
    var password_icon_class = '';
    if(this.state.value && this.state.value2){
      if(this.state.usernameerror && !this.state.passworderror){
        username_icon_class = 'error';
        password_icon_class = 'correct';
      }
      else if( !this.state.usernameerror && this.state.passworderror){
        username_icon_class = 'correct';
        password_icon_class = 'error';
      }
      else if(!this.state.usernameerror && !this.state.passworderror){
        username_icon_class = '';
        password_icon_class = '';
      }
      else if(this.state.usernameerror && this.state.passworderror){
        username_icon_class = 'error';
        password_icon_class = 'error';
      }
    }

    return (
      <div className="app animated fadeInDown">
        <div className="login_box_wrapper">
          <img className="login_avatar animated swing " src={avatar} ref="avatar" alt="avatar"/>

            <form className="login_form  animated fadeInDown" onSubmit={this.handleSubmit}>
                  <div className="form_title">unlock the force</div>
                  <div className="username_wrapper">
                    <input type="text" className={"username "+`${username_icon_class}`} value={this.state.value} onChange={this.handleChangeName} onBlur={() => this.handleBlur('username')} placeholder="Name" ref="username"/>
                    {this.state.value && <img ref="username_validation" className="username_error_icon"/>}
                  </div>
                  <div className="password_wrapper">
                    <input type="password" className={"password " +`${password_icon_class}`} value={this.state.value2} onChange={this.handleChangePassword} onBlur={() => this.handleBlur('password')} placeholder="Password" ref="password"/>
                    {this.state.value2 && <img ref="password_validation" className="password_error_icon"/>}
                  </div>
                  {this.state.value && this.state.usernameerror && !this.state.passworderror && <div className="usernameerror">The username you have entered doesnot match the password</div>}
                  {this.state.value2 && this.state.passworderror && !this.state.usernameerror && <div className="passworderror">The password you have entered doesnot match the username</div>}
                  {this.state.value && this.state.value2 && this.state.passworderror && this.state.usernameerror && <div className="generalerror">The password and username doesnot exist</div>}
                  <input type="submit" className="submit" value="Login" />
            </form>
        </div>
      </div>
    );
  }
}

export default App;
