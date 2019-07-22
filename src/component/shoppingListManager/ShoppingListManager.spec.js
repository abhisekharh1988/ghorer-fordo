import ShoppingManager from './ShoppingListManager';

describe('shoppingListManager', () => {
    it('should render ShoppingManager', () => {
        const wrapper = shallow(<ShoppingManager />);
        const renderedElement = wrapper.children('table');

        expect(renderedElement).toHaveLength(1);
    });
});