import React, { useCallback, useEffect, useState } from "react";
import { Container } from "../../components/container";
import { MainTitle, StyledHomeContainer, HeroList, HeroCard, RequestButton, InputContainer } from "./Home.style";
import { Api } from '../../utils/api'

type ResponseData = {
    id?: string
    name: string;
    description?: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}

export function Home() {
    const [heroes, setHeroes] = useState<ResponseData[]>([])
    const [filter, setFilter] = useState('');

    const filteredHeroes = heroes.filter(hero =>
        hero.name.toLowerCase().includes(filter.toLowerCase())
      );
    
      const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
      };
     
    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await Api.get('/characters');
                console.log(response.data.data.results)
                setHeroes(response.data.data.results)
            } catch (e: any) {
                console.log(e)
            }
        }
        fetchHeroes()
    }, [])

    const handleMoreHeroes = useCallback(async () => {
        try {
            const offset = heroes.length;
            const response = await Api.get('/characters', {
                params: {
                    offset
                }
            })

            setHeroes([...heroes, ...response.data.data.results])
        } catch (e: any) {
            console.log(e)
        }
    }, [heroes])

    return (
        <Container>
            <MainTitle>Marvel Super Heroes</MainTitle>
            <StyledHomeContainer>
                <InputContainer>
                <input style={{height: 30, width: 200, borderRadius: 8, textAlign: 'center'}} type="text" placeholder="Digite o nome do herói" value={filter} onChange={handleFilterChange} />
                </InputContainer>
                <HeroList>
                    {filteredHeroes.map(hero => {
                        return (
                            <HeroCard key={hero.id} thumbnail={hero.thumbnail}>
                                <div id="img" />
                                <h3>
                                    {hero.name}
                                </h3>
                                <p>{hero.description}</p>
                            </HeroCard>
                        )
                    })}
                </HeroList>
                <RequestButton onClick={() => handleMoreHeroes()}>
                    <p>More</p>
                </RequestButton>
            </StyledHomeContainer>
        </Container>
    )
}