document.addEventListener("DOMContentLoaded", () => {
    // 1. Updates to the current year
    document.getElementById("currentyear").innerHTML = new Date().getFullYear();

    // 2. Retrieves the last modified date
    const today = new Date(document.lastModified);

    // 3. Raw extraction of each component
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0') // Reminder January = 0
    const day = String(today.getDate()).padStart(2, '0')
    const hours = String(today.getHours()).padStart(2, '0')
    const minutes = String(today.getMinutes()).padStart(2, '0')
    const seconds = String(today.getSeconds()).padStart(2, '0')

    // 4. Assembly in ISO8601 format(YYYY-MM-DD HH:mm:ss)
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds};`

    // 5. Displays the result in the footer
    document.getElementById("lastModified").innerHTML = `Last Modification: ${formattedDate}`;
});
