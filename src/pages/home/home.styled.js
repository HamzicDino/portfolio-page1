import styled from "styled-components";

export const HomeStyle = styled.div`
/* Allgemeine Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px;
}

nav ul {
    max-width: 800px;
    margin: 20px auto;
    list-style: none;
    padding: 0;
    text-align: right;
}

nav li {
    display: inline;
    margin-right: 20px;
}

nav li:hover {
    text-decoration: underline;
}

nav a {
    text-decoration: none;
    color: #fff;
}

main {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
}

section {
    margin-bottom: 20px;
}

h1, h2 {
    color: #333;
}

/* Footer Styles */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}

footer ul {
    list-style: none;
    padding: 0;
}

footer li {
    display: inline;
    margin-right: 10px;
}

footer a {
    text-decoration: none;
    color: #fff;
}

`