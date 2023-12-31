module.exports = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #333;
}

ul,
li {
    list-style: none;
}

table {
    border-collapse: collapse;
    border: 0;
}

.board-table {
    width: 100%;
    margin-top: 20px;
}

.board-table > thead {
    background: #333;
    color: #fff;
}

.board-table > thead > tr > th {
    padding: 7px 14px;
}

.board-table > tbody > tr > td {
    padding: 7px 14px;
    border-bottom: 1px solid #ddd;
    text-align: center;
}

.btn {
    display: inline-block;
    padding: 7px 14px;
    background: #efefef;
    border: 1px solid #999;
    margin-top: 10px;
    font-size: 11px;
}

.board-title {
    padding: 18px 0;
}

.board-write-form {
    width: 500px;
}

form li {
    display: flex;
    flex-direction: column;
}

form ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

li > span {
    width: 50px;
    position: relative;
    top: 11px;
    left: 10px;
    background: #fff;
}

li > input {
    padding: 10px 18px;
    border: 1px solid #999;
}

li > textarea {
    height: 500px;
    padding: 20px;
    border: 1px solid #999;
    resize: none;
}
`
