import styled from "styled-components";

export const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    flex: 0.3;

    > hr {
        margin-top: 5px;
        margin-bottom: 5px;
        border: 1px solid #49274b;
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 50px;
    }
`;

export const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 17px;
        font-weight: 800;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 14px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root { 
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;

