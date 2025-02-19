import React from 'react';
import './mainproduct.css';

const MainProduct = () => {
    return (
        <div className='mainproduct'>
            <div className='product1'>
                <div className='product1details'>
                    <h1>
                        Dog Carrier Bag
                    </h1>
                    <p>
                        Product: Super Cat bed warm sleeping cat nest soft long pluh best pet dog bed for dogs basket cushion cat bed cat mat animals sleeping
                    </p>
                    <h2>VIEW DETAILS</h2>
                </div>
                <div className='product1image'>
                    <img src="image/mainproduct1.svg" id='dogbag'></img>
                </div>
            </div>
            <div className='product2'>
                <div className='product2image'>
                    <img src="image/mainproduct2.png" id='catbelt'></img>
                </div>
                <div className='product2details'>
                    <h1>
                        Colourful Cat Collar Necklass - Purple
                    </h1>
                    <p>
                        Colourful Cat Collar Necklass, Paw Printing, Adjustable Collar Tone Footprints, Pet Collar Pendant With Bells
                    </p>
                    <h2>VIEW DETAILS</h2>
                </div>
            </div>
            <div className='product3'>
                <div className='product3details'>
                    <h1>
                        Breathable Harness Vest</h1>
                    <p>
                        Breathable Harness Vest Suitable for Dogs And Cats, Reflective Pet Harness, Collar Adjustable, Cat, Kitten, Small Dogs, Chest Strap                    </p>
                        <h2>VIEW DETAILS</h2>
                        </div>
                <div className='product3image'>
                    <img src="image/mainproduct3.svg" id='vest'></img>
                </div>
            </div>
        </div>
    )
}

export default MainProduct