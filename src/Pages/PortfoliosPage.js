import React from 'react';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

function PortfoliosPage() {
    const [menuItems] = useState(portfolios);

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
