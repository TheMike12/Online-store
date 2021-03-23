import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div>
            <nav className="header">
                <i class="fas fa-store fa-6x"></i>
                <h1>The Food Store</h1>
            </nav>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Food<i class="fas fa-caret-down"></i>
                        <ul className="list">
                            <li>Bakery</li>
                            <li>Candy</li>
                            <li>Condiments</li>
                            <li>Dairy</li>
                            <li>Meat and Cold Cuts</li>
                            <li>Produce</li>
                            <li>Snacks</li>
                        </ul>
                    </li>
                    <li>Meals<i class="fas fa-caret-down"></i>
                        <ul className="list">
                            <li>Breakfast</li>
                            <li>Lunch</li>
                            <li>Dinner</li>
                            <li>Dessert</li>
                        </ul>
                    </li>
                    <li>Weekly ad</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div> 
    );
}

export default Header;
