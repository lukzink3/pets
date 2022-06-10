import { useState } from "react";
import { Pet } from "../../@types/Pet";

export function useIndex(){
    const [listaPets, setListaPets] = useState(
        [
          {
            id: 1,
            name: "Hercules e Luna",
            history: "Casal de Pitbulls",
            pic: "https://scontent.fpll5-1.fna.fbcdn.net/v/t1.6435-9/104839433_3046075485487157_2574364800378329377_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=u3UvB26NRfUAX87YYw4&tn=DedhSywW9FPpsjx5&_nc_ht=scontent.fpll5-1.fna&oh=00_AT-8dpe3XgEZXbar6SvcVPRY7kALc1iip7TbFLkr9mZPZQ&oe=62C029B9",
          },
          {
            id: 1,
            name: "Hercules e Luna",
            history: "Casal de Pitbulls",
            pic: "https://scontent.fpll5-1.fna.fbcdn.net/v/t1.6435-9/104839433_3046075485487157_2574364800378329377_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=u3UvB26NRfUAX87YYw4&tn=DedhSywW9FPpsjx5&_nc_ht=scontent.fpll5-1.fna&oh=00_AT-8dpe3XgEZXbar6SvcVPRY7kALc1iip7TbFLkr9mZPZQ&oe=62C029B9",
          },
        ]
    ),
    
        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null);    

    return {
        listaPets,
        petSelecionado,
        setPetSelecionado
    };
}