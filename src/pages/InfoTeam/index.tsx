import React, { useEffect } from 'react';
import PlayerList, { IPlayer } from './components/List';
import ResultsTable from './components/Table';
import GoalsChart from './components/Graphic';
import {
  Container,
  ContentWrapper,
  GoalsChartWrapper,
  PlayerListWrapper,
  ResultsChartWrapper,
  ResultsTableWrapper,
  Title,
} from './style';
import { useUserContext } from '../../hooks/UserContext';

const InfoTeam: React.FC = () => {
  const {
    key,
    season,
    team,
    league,
    setFormation,
    setPlayers,
    setGoals,
    setResults,
  } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formationResponse = await fetch(
          `https://v3.football.api-sports.io/teams/statistics?season=${season.value}&team=${team.value}&league=${league.value}`,
          {
            headers: {
              'x-apisports-key': key,
            },
          },
        );
        const formationData = await formationResponse.json();
        const goalData = formationData.response.goals.for.minute;

        const transformedData = Object.entries(goalData).map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ([minute, goal]: [string, any]) => ({
            minute,
            total: goal.total,
            percentage: goal.percentage,
          }),
        );

        const fixturesData = formationData.response.fixtures;
        setResults({
          played: fixturesData.played,
          wins: fixturesData.wins,
          draws: fixturesData.draws,
          loses: fixturesData.loses,
        });

        setGoals(transformedData);
        setFormation(formationData.response.lineups[0].formation);

        let currentPage = 1;
        let totalPages = 1;
        let allPlayers: IPlayer[] = [];

        while (currentPage <= totalPages) {
          const response = await fetch(
            `https://v3.football.api-sports.io/players?season=${season.value}&team=${team.value}&page=${currentPage}`,
            {
              headers: {
                'x-apisports-key': key,
              },
            },
          );
          const data = await response.json();

          allPlayers = allPlayers.concat(data.response);

          totalPages = data.paging.total;
          currentPage++;
        }

        const transformedPlayers = allPlayers.map((item: any) => ({
          id: item.player.id,
          name: item.player.name,
          age: item.player.age,
          nationality: item.player.nationality,
        }));

        setPlayers(transformedPlayers);
      } catch (error) {
        console.log('Error fetching players:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>Informações do time</Title>
      <ContentWrapper>
        <PlayerListWrapper>
          <PlayerList />
        </PlayerListWrapper>
        <ResultsChartWrapper>
          <ResultsTableWrapper>
            <ResultsTable />
          </ResultsTableWrapper>
          <GoalsChartWrapper>
            <GoalsChart />
          </GoalsChartWrapper>
        </ResultsChartWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default InfoTeam;
