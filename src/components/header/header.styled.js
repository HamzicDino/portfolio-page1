import styled from "styled-components";

export const HeaderStyle = styled.div`
.content {
    background-color: #333;
    color: #fff;
    padding: 10px;

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
}


`