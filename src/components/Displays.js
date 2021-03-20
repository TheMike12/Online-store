import React from 'react';
import '../styles/Displays.css';

const Displays = () => {
    return (
        <div>
            <div id="pic0">
                <img src="/pictures/gathering.jpg" alt="" className="re-size-pic-0 size-0 pic-0-text"/>
                <div className="pic-0-text">Need an idea for dinner? We may be able to help.
                <br/>Check out the meals section.</div>
            </div>
            <div className="picture-align">
                <div id="pic1">
                    <img src="/pictures/pancakes.jpg" alt="" className="re-size"/>
                    <div className="size-attributes"><big>30%</big> off on pancakes.
                    <br/><br/><br/><br/><br/><br/>They're selling like hotcakes!</div>
                </div>
                <div id="pic2">
                    <img src="/pictures/noodles.jpg" alt="" className="re-size"/>
                    <div className="size-attributes">Going on a vegan diet?
                    <br/><br/><br/><br/><br/><br/>We might have what you're looking for.</div>
                </div>
                <div id="pic3">
                    <img src="/pictures/eggs.jpg" alt="" className="re-size"/>
                    <div className="size-attributes">Need to stock up on eggs?
                    <br/><br/><br/><br/><br/><br/>We've got some eggsellent deals.</div>
                </div>
                <div id="pic4">
                    <img src="/pictures/cake.jpg" alt="" className="re-size"/>
                    <div className="size-attributes">Got dessert?
                    <br/><br/><br/><br/><br/><br/>Check out our assortment of cakes.</div>
                </div>
            </div>
            <div className="picture-align-2">
                <div id="pic5">
                    <img src="/pictures/employment.jpg" alt="" className="re-size-2"/>
                    <div className="size-attributes"><br/>Looking for a job?
                    <br/><br/><br/><br/><br/><br/>We're hiring full time and offer great benefits!</div>
                </div>
                <div id="pic6">
                    <img src="/pictures/store.jpg" alt="" className="re-size-2"/>
                    <div className="size-attributes"><br/>Have you checked our weekly ad?
                    <br/><br/><br/><br/><br/>There are many great deals, but they won't be around for long.</div>
                </div>
            </div>
            <div className="picture-align-2">
                <div id="pic7">
                    <div className="re-size-3"></div>
                    <div className="size-attributes-2"><br/><br/><br/>We now have gift cards!</div>
                    <div className="size-attributes-3"><br/><br/><br/><br/>Look through our assortment of gift cards; we may have your favorites...</div>
                    <button className="pic7-button">View assortment →</button>
                </div>
                <div id="pic8">
                    <div className="re-size-3"></div>
                    <div className="size-attributes-2"><br/><br/><br/>Where we're located:</div>
                    <div className="size-attributes-3"><br/><br/><br/><br/>A complete list of all our locations across the country.</div>
                    <br/><button className="pic8-button">Find a store near me →</button>
                </div>
            </div>
            <div id="pic9">
                <img src="/pictures/grill.jpg" alt="" className="re-size-4 pic-9-text-attributes" />
                <div className="pic-9-text-a">Grilling season is on the way!</div>
                <br/><br/><br/><div className="pic-9-text-b">Be sure to get ahead of the crowd and buy a propane<br/>
                tank while they're 20% off.</div>
            </div>
        </div>
    );
}

export default Displays;