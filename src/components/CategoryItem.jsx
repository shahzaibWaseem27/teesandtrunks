import React, { useState } from 'react'
import styled from 'styled-components'

let Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
`

let Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

let Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

let Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`

let Button = styled.button`
    border: none;
    paddding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({ item }) => {
  
    const [imageOpacity, setImageOpacity] = useState(1);
    const [infoOpacity, setInfoOpacity] = useState(0.32);
    const [titleColor, setTitleColor] = useState("white");

    const handleMouseEnter = () => {
        setImageOpacity(0.32);
        setInfoOpacity(1);
        setTitleColor("black");
    }

    const handleMouseLeave = () =>{
        setImageOpacity(1);
        setInfoOpacity(0.32);
        setTitleColor("white");
    }

    return (
        <div onMouseEnter={()=>handleMouseEnter()} onMouseLeave={()=>handleMouseLeave()}>
            <Container >
                <Image src={item.img} style={{opacity: imageOpacity, transition: "all 1.12s ease"}}/>
                <Info style={{opacity: infoOpacity, transition: "all 1.12s ease"}}>
                    <Title style={{color: titleColor, transition: "all 1.12s ease"}}>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
        </div>
  )
}

export default CategoryItem
