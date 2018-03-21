import React, { Component } from 'react';
import { array } from 'prop-types';
import 'whatwg-fetch';

function SelectOption(props) {
  return (
    <option value={props.value}>{props.name}</option>
  )
}

class SayHello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lang: '',
      hello: ''
    };

    this.langChange = this.langChange.bind(this);
    this.getHello = this.getHello.bind(this);

  }

  langChange(event) {
    this.setState({lang: event.target.value});
  }

  getHello() {
    let { lang } = this.state;
    fetch(`https://fourtonfish.com/hellosalut/?lang=${lang}`)
    .then(response => response.json())
    .then(json => this.setState({
       hello: `${json.hello}!`
    }))
    .catch(error => console.error(error));
  }

  render() {
    let { lang, hello } = this.state;
    let { languages } = this.props;

    return (
      <div className="SayHello">
          <h1>Choose a language and say hello!</h1>
          <select value={lang} onChange={this.langChange}>
              {
                languages.map(language =>
                  <SelectOption value={language.code} key={language.code} name={language.lang} />
                )
              }
          </select>
          <br /><br />
          <button onClick={this.getHello}>Say Hello!</button><br />
            <h3>{hello}</h3>
          {}
      </div>
    );
  }
}

SayHello.propTypes = {
  languages: array.isRequired,
};

export default SayHello;