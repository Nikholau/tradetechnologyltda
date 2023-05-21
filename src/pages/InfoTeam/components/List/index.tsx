import React from 'react';
import { useUserContext } from '../../../../hooks/UserContext';
import {
  PlayerListContainer,
  PlayerListTitle,
  FormationText,
  PlayerListItems,
  PlayerListItem,
} from './style';

export interface IPlayer {
  id: number;
  name: string;
  age: number;
  nationality: string;
}

const PlayerList: React.FC = () => {
  const { players, formation } = useUserContext();

  return (
    <PlayerListContainer>
      <PlayerListTitle>Lista de Jogadores</PlayerListTitle>
      {formation && (
        <FormationText>Formação mais utilizada: {formation}</FormationText>
      )}
      <PlayerListItems>
        {players.map((player) => (
          <PlayerListItem key={player.id}>
            Nome: {player.name}, Idade: {player.age}, Nacionalidade:{' '}
            {player.nationality}
          </PlayerListItem>
        ))}
      </PlayerListItems>
    </PlayerListContainer>
  );
};

export default PlayerList;
