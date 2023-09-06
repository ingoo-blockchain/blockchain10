module.exports = function ({ title, body, style = "" }) {
    return `<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="/style" />
        ${
            style &&
            `<style>
            ${style}
        </style>`
        }
    </head>
    <body>
        <div>
            ${body}
        </div>
    </body>
</html>`
}
