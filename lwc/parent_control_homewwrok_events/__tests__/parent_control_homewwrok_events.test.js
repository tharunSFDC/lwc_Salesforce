import { createElement } from 'lwc';
import Parent_control_homewwrok_events from 'c/parent_control_homewwrok_events';

describe('c-parent-control-homewwrok-events', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-parent-control-homewwrok-events', {
            is: Parent_control_homewwrok_events
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});