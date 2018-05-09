/**
 * Created by vaibhav on 9/5/18
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import ReactTable from "react-table";
import * as actions from './actions';
import Loader from '../../components/Loader';
import ErrorPanel from '../../components/ErrorPanel';

class HomePage extends Component {
    componentWillMount() {
        this.props.actions.fetchCryptoList();
    }

    render() {
        const {cryptoList} = this.props;
        const columns = [{
            Header: 'Rank',
            accessor: 'rank',
            Cell: props => props.value
        }, {
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Circulating Supply ',
            accessor: 'available_supply',
        }, {
            Header: 'Symbol',
            accessor: 'symbol',
            Cell: props => <strong>{props.value}</strong>
        }, {
            Header: 'Market Cap',
            accessor: 'market_cap_usd',
            Cell: props => <span>$ {props.value}</span>
        }, {
            Header: 'Price',
            accessor: 'price_usd',
            Cell: props => <span>$ {props.value}</span>
        }, {
            Header: 'Volume (24 hours)',
            accessor: '24h_volume_usd',
            Cell: props => <span>$ {props.value}</span>
        }];
        return (
            <section className="section">
                <div className="container">
                    {cryptoList.loading
                        ? <Loader/>
                        : (cryptoList.error)
                            ? <ErrorPanel errors={[`Crypto Currency List - ${cryptoList.metadata.error}`]}/>
                            : <ReactTable className="table" data={cryptoList.data} columns={columns}/>
                    }
                </div>
            </section>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cryptoList: state.cryptoListReducer.cryptoList,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default withRouter(HomePageContainer);

