import React from 'react';
import $ from 'jquery';

// Contact component render contact form
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeEml = this._handleChangeEml.bind(this);
    this._handleChangeMsg = this._handleChangeMsg.bind(this);
  }

  // Change state of input field so text is updated while typing
  _handleChangeName(e) {
    this.setState({
      contactName: e.target.value,
    });
  }
  // Change state of input field so text is updated while typing
  _handleChangeEml(e) {
    this.setState({
      contactEmail: e.target.value,
    });
  }
  // Change state of input field so text is updated while typing
  _handleChangeMsg(e) {
    this.setState({
      contactMessage: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({
      contactName: '',
      contactEmail: '',
      contactMessage: ''
    });

    $.ajax({
      url: process.env.NODE_ENV !== "production" ? '/getMail' : "./contact.php",
      type: 'POST',
      data: {
        'form_name': this.state.contactName,
        'form_email': this.state.contactEmail,
        'form_msg': this.state.contactMessage
      },
      cache: false,
      success: function(data) {
        // Success..
        this.setState({
          contactName: 'success',
          contactEmail: 'success',
          contactMessage: '<h1>Success!</h1><p>Email Sent</p>'
        });
        $('#formContact').slideUp();
        $('#formContact').after(this.state.contactMessage);
        console.log('success', data);
      }.bind(this),
      // Fail..
      error: function(xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        this.setState({
          contactName: 'danger',
          contactEmail: 'danger',
          contactMessage: '<h1>Sorry</h1><p>Please email stephyx.web@gmail.com</p>'
        });
        console.log(this.state.contactName + this.state.contactEmail + this.state.contactMessage + 'fail');
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="contact" id="contact">
        <div className="filter">
          <form className="form contact-form-all flex column" onSubmit={this._handleSubmit} id="formContact">
            <input placeholder="Name" className="form-input contact-name" id="formName" type="text" name="formName" value={this.state.contactName} onChange={this._handleChangeName} required/>
            <input placeholder="Email" className="form-input contact-email" id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this._handleChangeEml} required/>
            <textarea placeholder="Message" className="form-input contact-message"  id="formMsg" name="formMsg" rows="8" cols="40" value={this.state.contactMessage} onChange={this._handleChangeMsg} required></textarea>
            <input type="submit" value="Submit" className="contact-submit" id="btn-submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;