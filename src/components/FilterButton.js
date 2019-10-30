import React from 'react';
import Button from './Button';
import filterbtnDownSurvol from '../icons/filterbtnDownSurvol.svg';
import filterbtnDown from '../icons/filterbtnDown.svg';
import filterbtnUp from '../icons/filterbtnUp.svg';
import './FilterButton.css';

const serchlist = [
  'Grossesse & enfants',
  'Maladie',
  'Mal de dos',
  'Nutrition',
  'Parapharmacie',
  'voyage',
];

class FilterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      searchtext: '',
      elemntactive: false,
      index: '',
    };
  }

  _handleClick(e) {
    e.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible,
      index: '',
      elemntactive: false,
    });
  }

  activesearch = (index) => {
    this.setState(
      {
        index: '',
        elemntactive: false,
      },
      () => {
        this.setState({
          index,
          elemntactive: !this.state.elemntactive,
        });
      }
    );
  };

  renderDropdown() {
    const { elemntactive, index } = this.state;
    console.log('elm : ' + elemntactive + 'indice ' + index);
    return (
      <ul className="FilterButton-dropdown">
        {serchlist.map((elm, i) => (
          <li
            className="FilterButton-menuItem"
            onClick={() => this.activesearch(i)}
          >
            <button
              className={`FilterBtn-menuItem-icon ${
                elemntactive == true && i === index ? 'activebottom' : ''
              }`}
            ></button>
            <span
              className={`FilterBtn-menuItem-text ${
                elemntactive == true && i === index ? 'activeTextSearch' : ''
              }`}
            >
              {elm}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div class="FilterButton-dropdownCont">
        <Button
          filtre={true}
          onClick={(e) => this._handleClick(e)}
          tabindex="1"
          onFocus={(e) => this._handleClick(e)}
        >
          FILTER PAR
          {this.state.isVisible ? (
            <img
              className="icon-filterUpbtndark"
              src={filterbtnUp}
              alt="filter button icon"
            />
          ) : (
            <span className="icon-filterContainer">
              <img
                className="icon-filterbtndark"
                src={filterbtnDown}
                alt="filter button icon"
              />
            </span>
          )}
        </Button>
        {this.state.isVisible ? this.renderDropdown() : null}
      </div>
    );
  }
}

export default FilterButton;
