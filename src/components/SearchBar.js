import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Search = styled.div`
  display: flex;
  > input {
    width: 100%;
    padding: 8px;
    border: solid 2px #f729e5;
    font-family: 'Poppins', sans-serif;
    &:focus {
      outline: none;
      border: solid 2px #ffb6C1;
    }
  }
  > button {
    justify-self: center;
    width: 10%;
    border: none;
    background: #f729e5;
    color: #fff;
  }
`;
const SearchBar = ({ handleSearch, data }) => (
  <Search>
    <input type="search" onChange={handleSearch} value={data} placeholder="Search..." />
    <button type="button">
      <FaSearch color="#fff" />
      .
    </button>
  </Search>
);

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};

export default SearchBar;
