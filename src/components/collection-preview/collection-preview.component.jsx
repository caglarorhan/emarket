import React from "react";
import {CollectionPreviewContainer,PreviewContainer,TitleContainer} from './collection-preview.style';
import CollectionItem from "../collection-item/collection-item.component";



const CollectionPreviewComponent = ({title, items})=>(
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items.filter((item,idx)=>idx<4).map((item)=>(
                    <CollectionItem key={item.id} item={item}/>

                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreviewComponent;

