import { createElement } from 'lwc';
import Progarmmatically_child_emplyoee from 'c/progarmmatically_child_emplyoee';

describe('c-progarmmatically-child-emplyoee', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-progarmmatically-child-emplyoee', {
            is: Progarmmatically_child_emplyoee
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});