import React, { Component } from 'react';
import { Table } from 'react-toolbox';

const ShoppingItem = {
    itemName: { type: String },
    quantity: { type: Number},
    unit: { type: String }
}
export default class ShoppingManager extends Component {
    state = { source: [] };

    render() {
        return (
            <div className="shoppingManager">
                <Table 
                    model={ShoppingItem}
                />
                My name is Abhishek
            </div>
        );
    }
}