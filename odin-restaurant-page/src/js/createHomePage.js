export const createHomePage = () => {

    const htmlContent = `
        <div class="grid">
            <section aria-labelledby="hours-title">
                <p><strong>The Brickhouse has the best pizza in town!</strong>
                The warm atmosphere and friendly service make you feel like
                you’ve stepped into an Italian kitchen,
                where every bite is fresh from the oven.
            </section>

            <section aria-labelledby="hours-title">
                <h2 id="hours-title">Hours</h2>
                <dl class="hours">
                    <dt>Sunday</dt><dd>11am – 9pm</dd>
                    <dt>Monday</dt><dd>11am – 9pm</dd>
                    <dt>Tuesday</dt><dd>11am – 9pm</dd>
                    <dt>Wednesday</dt><dd>11am – 9pm</dd>
                    <dt>Thursday</dt><dd>11am – 10pm</dd>
                    <dt>Friday</dt><dd>11am – 11pm</dd>
                    <dt>Saturday</dt><dd>11am – 11pm</dd>
                </dl>
            </section>

            <section aria-labelledby="location-title">
                <h2 id="location-title">Location</h2>
                <address>
                    <span class="pin">📍</span>
                    123 Main Street<br />
                    Forestville, Maine
                </address>
            </section>
        </div>
    `;

    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = htmlContent;
}
