import { createElement } from 'lwc';
import Lwc_event_pragammacticaly_parent from 'c/lwc_event_pragammacticaly_parent';

describe('c-lwc-event-pragammacticaly-parent', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-event-pragammacticaly-parent', {
            is: Lwc_event_pragammacticaly_parent
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});