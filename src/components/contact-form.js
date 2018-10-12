import React from 'react';
// import $ from 'jquery';
import { contact } from '../api'

// // Contact component render contact form
class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  }
  submitForm = async (e) => {
    e.preventDefault()
    await contact(this.state.name, this.state.email, this.state.message)
  }

//   constructor(props){
//     super(props);
//     this.state = {
//       contactName: '',
//       contactEmail: '',
//       contactMessage: ''
//     };
//
//     this._handleSubmit = this._handleSubmit.bind(this);
//     this._handleChangeName = this._handleChangeName.bind(this);
//     this._handleChangeEml = this._handleChangeEml.bind(this);
//     this._handleChangeMsg = this._handleChangeMsg.bind(this);
//   }
//
//   // Change state of input field so text is updated while typing
//   _handleChangeName(e) {
//     this.setState({
//       contactName: e.target.value,
//     });
//   }
//   // Change state of input field so text is updated while typing
//   _handleChangeEml(e) {
//     this.setState({
//       contactEmail: e.target.value,
//     });
//   }
//   // Change state of input field so text is updated while typing
//   _handleChangeMsg(e) {
//     this.setState({
//       contactMessage: e.target.value
//     });
//   }
//
//   _handleSubmit(e) {
//     e.preventDefault();
//     this.setState({
//       contactName: '',
//       contactEmail: '',
//       contactMessage: ''
//     });
//
//     $.ajax({
//       url: process.env.NODE_ENV !== "production" ? '/getMail' : "./contact.php",
//       type: 'POST',
//       data: {
//         'form_name': this.state.contactName,
//         'form_email': this.state.contactEmail,
//         'form_msg': this.state.contactMessage
//       },
//       cache: false,
//       success: function(data) {
//         // Success..
//         this.setState({
//           contactName: 'success',
//           contactEmail: 'success',
//           contactMessage: '<h1>Success!</h1><p>Email Sent</p>'
//         });
//         $('#formContact').slideUp();
//         $('#formContact').after(this.state.contactMessage);
//         console.log('success', data);
//       }.bind(this),
//       // Fail..
//       error: function(xhr, status, err) {
//         console.log(xhr, status);
//         console.log(err);
//         this.setState({
//           contactName: 'danger',
//           contactEmail: 'danger',
//           contactMessage: '<h1>Sorry</h1><p>Please email stephyx.web@gmail.com</p>'
//         });
//         console.log(this.state.contactName + this.state.contactEmail + this.state.contactMessage + 'fail');
//       }.bind(this)
//     });
//   }

  render() {
    return (
      <div className="contact" id="contact">
        <div className="filter">
          <form className="form contact-form-all flex column" onSubmit={this.submitForm} id="formContact">
            <div className="contact-desktop">
              <div className="contact-left">
                <input placeholder="Name" className="form-input contact-name" id="formName" type="text" name="formName" onKeyUp={(event) => this.setState({name: event.target.value})} required/>
                <input placeholder="Email" className="form-input contact-email" id="formEmail" type="email" name="formEmail" onKeyUp={(event) => this.setState({email: event.target.value})} required/>
              </div>
              <textarea placeholder="Message" className="form-input contact-message"  id="formMsg" name="formMsg" rows="8" cols="40" onKeyUp={(event) => this.setState({message: event.target.value})} required></textarea>
            </div>
            <button type="submit" value="Submit" className="contact-submit" id="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;