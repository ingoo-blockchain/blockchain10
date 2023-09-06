module.exports = ({ num, title, writer, created_at, hit }) => {
    return `<tr>
    <td>${num}</td>
    <td>${title}</td>
    <td>${writer}</td>
    <td>${created_at}</td>
    <td>${hit}</td>
</tr>`
}
