import React, { Component } from 'react';

import css from 'components/styles.module.scss'


class ContactForm extends Component {
    state = {
        name: '',
        phone: '',
    }

  controlInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(this.props)
    this.props.onSubmit(this.state);

    this.setState({
        name: '',
        phone: ''
    })
  }

  render() {
    const { name, phone } = this.state;

    return (
        <form onSubmit={this.handleSubmit} className={css.form} >
          <label className={css.label}>
            {' '}
            Name:
            <input className={css.input}
              onChange={this.controlInput}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.label}>
            {' '}
            Phone number:
            <input className={css.input}
              onChange={this.controlInput}
              value={phone}
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.button} type="submit">Add contact</button>
        </form>
    );
  }
}

export default ContactForm;
