import React from 'react';
import { contact } from '../api'
import $ from 'jquery'

// Contact component render contact form
class Contact extends React.Component {
  state = {
	  contactName: '',
	  contactEmail: '',
	  contactMessage: ''
  }

  // Change state of input field so text is updated while typing
  handleChangeName = (e) => {
    console.log(e)
    this.setState({
      contactName: e.target.value,
    });
  }
  // Change state of input field so text is updated while typing
  handleChangeEml = (e) => {
    this.setState({
      contactEmail: e.target.value,
    });
  }
  // Change state of input field so text is updated while typing
  handleChangeMsg = (e) => {
    this.setState({
      contactMessage: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      contactName: '',
      contactEmail: '',
      contactMessage: ''
    });

    const response = await contact(this.state.contactName, this.state.contactEmail, this.state.contactMessage)

    console.log(response)

    if (response.ok) {
	    this.setState({
		    contactName: 'success',
		    contactEmail: 'success',
		    contactMessage: '<h1>Success!</h1><p>Email Sent</p>'
	    });

	    $('#formContact').slideUp();
	    $('#formContact').after(this.state.contactMessage);

	    console.log('success', response.response)
    } else {
      this.setState({
		    contactName: 'Oops!',
		    contactEmail: 'Oops!',
		    contactMessage: 'Please email stephyx.web@gmail.com'
	    });

	    console.log(response.response)
    }
  }

  render() {
    return (
      <div className="contact" id="contact">
        <div className="filter">
          <form className="form contact-form-all flex column" onSubmit={this.handleSubmit} id="formContact">
            <div className="contact-desktop">
              <div className="contact-left">
                <input placeholder="Name" className="form-input contact-name" id="formName" type="text" name="formName" value={this.state.contactName} onChange={this.handleChangeName} required/>
                <input placeholder="Email" className="form-input contact-email" id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this.handleChangeEml} required/>
              </div>
              <textarea placeholder="Message" className="form-input contact-message"  id="formMsg" name="formMsg" rows="8" cols="40" value={this.state.contactMessage} onChange={this.handleChangeMsg} required></textarea>
            </div>
            <input type="submit" value="Submit" className="contact-submit" id="btn-submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
