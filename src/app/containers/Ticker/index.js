/**
 * Created by vaibhav on 10/5/18
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './actions';
import './styles.css';

class Ticker extends Component {
    componentWillMount() {
        this.props.actions.fetchCryptoTicker();
    }

    render() {
        const {cryptoTicker} = this.props;
        return (
            <div className="tabs is-small is-centered">
                {cryptoTicker.loading
                    ? <li><a><span className="loader"/></a></li>
                    : (cryptoTicker.error)
                        ? <span>{cryptoTicker.error}</span>
                        : <ul>
                            <li>
                                <a><strong>Cryptocurrencies: </strong>&nbsp;{cryptoTicker.data.active_currencies + cryptoTicker.data.active_assets}</a>
                            </li>
                            <li>
                                <a><strong>Markets: </strong>&nbsp;{cryptoTicker.data.active_markets}</a>
                            </li>
                            <li>
                                <a><strong>Total Market Cap: </strong>&nbsp;$ {cryptoTicker.data.total_market_cap_usd}</a>
                            </li>
                            <li>
                                <a><strong>Volume (24 hour): </strong>&nbsp;$ {cryptoTicker.data.total_24h_volume_usd}</a>
                            </li>
                            <li>
                                <a><strong>Bitcoin Dominance: </strong>&nbsp;{cryptoTicker.data.bitcoin_percentage_of_market_cap}%</a>
                            </li>
                        </ul>
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cryptoTicker: state.cryptoTickerReducer.cryptoTicker,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);