import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import remotes from '../../reducer/remotes.js';
import Card from '../../components/Card';
import Pagination from "react-js-pagination";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
  }

  componentWillMount() {
    if(this.props.dispatch){
      this.props.dispatch();
    }
  }

  render() {
    const { loading, error, records} = this.props;
    const { activePage } = this.state;
    const indexOfLastCards = activePage * 5;
    const indexOfFirstCards = indexOfLastCards - 5;
    const Cards = records.slice(indexOfFirstCards, indexOfLastCards);
    
    if(loading || error){
      return <div className="alert">{loading || error}</div>;	
    } 

    const handlePageChange = (pageNumber) => {
      this.setState({activePage: pageNumber});
    }

    return (
      <div className="container">
        <div className="wrapper">
        {Cards.map((c,i) => 
          <article key={i} className="card">
            <Card title={c.title} text={c.body}/>
          </article>
        )}
        </div>
        <div className="col-xs-12 pagination">
          <Pagination
            hideNavigation
            pageRangeDisplayed={10}
            activePage={activePage}
            itemsCountPerPage={5}
            totalItemsCount={records.length}
            onChange={handlePageChange}
          />
        </div>
        
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
      loading : state.loading,
      error: state.error,
      records: state.records ? state.records : []
    }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch : () => remotes('/posts', dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
