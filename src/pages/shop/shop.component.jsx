import React from "react";
import {Route} from 'react-router-dom';
import { createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from "../collection/collection.component";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.action";
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component  {
    state = {
        loading: true
    }
    unsubscribeFromSnapShot =null;


    componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
    }


    render(){
        const {match, isCollectionFetching, isCollectionLoaded} = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}/>
            </div>
        )
    }

}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch =>({
    fetchCollectionsStartAsync: ()=>dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
