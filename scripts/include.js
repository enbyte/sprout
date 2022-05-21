function insert(key) {
    const includes = {
        'header' : `
        <div class="header">
            <h1 class="title">sprout</h1>
            <h2>Fostering STEM knowledge</h2>
        </div>
        <hr/>`,

        'footer' : `
        <div class="footer">
        <p>Made for HawkHacks 2022.</p>
        </div>
        `,

        'skill-list' : `
        <ul>
         <li class="skill-button"><a href="skills/math.html">Math</a></li>
         <li class="skill-button"><a href="failed.html">Science</a></li>
         <li class="skill-button"><a href="failed.html">Programming</a></li>
        </ul>`
    }
    document.write(includes[key]);
}
