/**
 * Generates the HTML markup for a loading indicator with bounce animation.
 *
 * This function returns a string containing the HTML structure for a "bouncer" component,
 * which can be used as a loading indicator while content is being fetched or processed.
 *
 * @returns {string} - The HTML string representing the bouncer loading indicator.
 *
 * @example
 * // To use the bouncer in your application:
 * const loadingIndicator = bouncer();
 * document.getElementById('app').innerHTML = loadingIndicator;
 */
export function bouncer() {
  return `
        <div class="bouncer-container flex flex-col items-center justify-center p-4">
            <div class="
              bouncer 
              ease-linear 
              rounded-full 
              bg-primary
              h-8 w-8
              animate-bounce">
            </div>
        </div>
        `;
}
