import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const Prodgallery = styled.div`
    display: flex;
    height: 100%;
    padding-top: 50px;
`;

export const FilterBar = styled.div`
    width: 20%;
    height: 100%;
    box-shadow: rgb(96, 125, 139) 0px 0px 60px;
`;
// export const FilterBar = styled.div`

// `;
export const Gallery = styled.div`
    width: 80%;
    height: 100%;
    overflow-y: scroll;
    `;

export const GallContainer = styled.div`
    padding: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 50px;
    flex-wrap: wrap;
    `;  

export const SortingBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-top: 20px;
`;