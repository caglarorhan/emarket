import React from "react";
import {connect} from 'react-redux';


import CollectionItem from "../../components/collection-item/collection-item.component";

import {selectCollection} from "../../redux/shop/shop.selector";

import {CollectionPageContainer, ItemsDiv, CollectionTitle} from "./collection.style";


const CollectionPage = ({collection})=>{
    // console.log(collection)
    const {title, items} = collection;
return(
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <ItemsDiv>
            {
                items.map(item => (<CollectionItem key={item.id} item={item} />))
            }
        </ItemsDiv>
    </CollectionPageContainer>
)
}

const mapStateToProps = (state, ownProps)=>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);

