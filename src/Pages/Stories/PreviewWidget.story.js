import React, { useState } from 'react';
import Story, { DashboardItem } from './StoryBase/StoryBase';
import PreviewWidget from '@crystalclear506/preview-widget';

const ComponentInfo = {
    name: 'Preview Widget',
    path: 'preview-widget'
};

const PreviewWidgetPage = (props) => {
    const ref = React.createRef();

    const dashboardItems = [
    ];

    const imageUrls = [
        'https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000246747_t.jpg',
        'https://inwfile.com/s-dl/l9abeb.jpg',
        'https://cdn.pocket-lint.com/r/s/970x/assets/images/138767-games-review-ps4-slim-review-image2-loxpts1wdv-jpg.webp'
    ];

    return (
        <Story 
            title={ ComponentInfo.name }
            dashboardItems={ dashboardItems }>
            <PreviewWidget ref={ ref } imageUrls={ imageUrls }/>
        </Story> 
    );
}

export default { 
    componentInfo: ComponentInfo, 
    page: PreviewWidgetPage
};