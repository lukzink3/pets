import { Button } from "@mui/material";
import {
  ListStyled,
  ItemList,
  Picture,
  Info,
  Name,
  Description,
} from "./List.style";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
  const tamanhoMaximoTexto = 200;

  return (
    <ListStyled>
      {props.pets.map((pet) => (
        <ItemList key={pet.id}>
          <Picture src={pet.picture} alt={pet.name} />
          <Info>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.limitarTexto(pet.history, tamanhoMaximoTexto)}
            </Description>
            <Button 
            variant="contained" 
            fullWidth
            onClick={() => props.onSelect(pet)}
            >
              Adotar {pet.name}
            </Button>
          </Info>
        </ItemList>
      ))}
    </ListStyled>
  );
}
