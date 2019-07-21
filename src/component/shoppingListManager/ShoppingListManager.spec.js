import ShoppingManager from './ShoppingListManager';

describe('shoppingListManager', () => {
    it('shpuld render ShoppingManager', () => {
        const wrapper = shallow(<ShoppingManager />);
        const renderedElement = wrapper.children('h1');

        expect(renderedElement).toHaveLength(1);
    });
});