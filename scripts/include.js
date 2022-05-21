function insert(key) {
    const includes = {
        'header' : `
        <div class="header">
            <h1>sprout</h1><h2>Fostering STEM knowledge in disadvantaged communities</h2>
        </div>`,

        'footer' : `
        <div class="footer">
        <p>Made for HawkHacks 2022.</p>
        </div>
        `,

        'skill-list' : `
        <ul>
         <li>Math</li>
         <li>Science</li>
         <li>Milk</li>
        </ul>`
    }
    document.write(includes[key]);
}
