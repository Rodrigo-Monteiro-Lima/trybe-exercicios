import React, { Component } from 'react'
import {fetchAPI} from './redux/actions'
import {connect} from 'react-redux'

class App extends Component {
  constructor(){
    super();
    this.state ={
      name: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { isFetching, info, dispatch } = this.props;
    const {name} = this.state;
    if (isFetching) return <p>Loading</p>;
    return (
      <div>
        <div>
          <label htmlFor="name">
            Nome completo do personagem:
            <input 
            type="text" 
            name='name'
            value={name}
            onChange={this.handleChange}
            />
          </label>
          <button
            onClick={() => dispatch(fetchAPI(name))}
            type="button"
          >
            Buscar
          </button>
        </div>
        {info && !isFetching && (
          <div>
            <p>Name: {info.name}</p>
            <p>Gender: {info.gender}</p>
            <p>Born: {info.born}</p>
            {info.died !== "" && `Died: ${info.died}` }
            <div>Titles:
            <ol>
              {info.titles.map((title, index) => (
                <li key={`${title}-${index}`}>{title}</li>
              ))}
            </ol></div>
            <div> Aliases:
            <ol>
              {info.aliases.map((alias, index) => (
                <li key={`${alias}-${index}`}>{alias}</li>
              ))}
            </ol></div>
            <div>Seasons:
            {info.tvSeries.map((season, index) => (<li key={index}>{season}</li>))}
              </div>
              <p>Portrayded by: {info.playedBy}</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.char,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);