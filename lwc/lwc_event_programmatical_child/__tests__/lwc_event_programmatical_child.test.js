import { createElement } from 'lwc';
import Lwc_event_programmatical_child from 'c/lwc_event_programmatical_child';

describe('c-lwc-event-programmatical-child', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-event-programmatical-child', {
            is: Lwc_event_programmatical_child
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});