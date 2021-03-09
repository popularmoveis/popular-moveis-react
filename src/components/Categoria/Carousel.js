import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel autoPlay>
        <div>
            <img alt="" src="http://quartadivisaomoveis.com.br/wp-content/uploads/2020/05/MIAMI-6PTAS-2020-CAST-ESP-400.png" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="http://quartadivisaomoveis.com.br/wp-content/uploads/2020/05/GENEBRA-3PTAS-2020-BRANCO-400.png" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="http://quartadivisaomoveis.com.br/wp-content/uploads/2020/05/ORLANDO-3PTAS-2020-CHOC-ESP-400.png" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src="http://quartadivisaomoveis.com.br/wp-content/uploads/2018/12/CAIRO-3PTAS-2017-CASTANHO.jpg" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img alt="" src="http://quartadivisaomoveis.com.br/wp-content/uploads/2018/12/CAIRO-2PTAS-2018-BRANCO-3.jpg" />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img alt="" src="http://quartadivisaomoveis.com.br/wp-content/uploads/2020/05/ZURIQUE-6PTAS-2020-CHOC-OFF-WHITE-400.png" />
            <p className="legend">Legend 6</p>
        </div>
    </Carousel>
);