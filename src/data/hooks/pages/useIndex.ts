import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService"
import { AxiosError } from "axios";

export function useIndex(){
    const [petList, setPetList] = useState<Pet[]>([
      {
        'id': 1,
        'name': 'Hercules',
        'history': 'hercules',
        'pic': 'https://scontent.fpll5-1.fna.fbcdn.net/v/t1.6435-9/104839433_3046075485487157_2574364800378329377_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=EvlZ7IL8i0kAX9jpnHY&tn=DedhSywW9FPpsjx5&_nc_ht=scontent.fpll5-1.fna&oh=00_AT9Cb1YgmaQhCLmthHjWDsyOgvLZ9Xfa5tGLCTK3XD3DhQ&oe=62C812B9'
      }
    ]),
        [selectedPet, setSelectedPet] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [value, setValue] = useState(''),
        [snackMessage, setSnackMessage] = useState('');

    useEffect(() =>{
      ApiService.get('/pets')
        .then((res) => {
          setPetList(res.data)
        })
    }, [])

    function adopt(){
      if(selectedPet !== null){
        if(validAdoptData()){
          ApiService.post('/adoptions', {
            pet_id: selectedPet.id,
            email,
            value
          })
            .then(() => {
              setSelectedPet(null);
              setSnackMessage('Pet adotado com sucesso');
              cleanForm();
            })
            .catch((error: AxiosError) => {
                    setSnackMessage(error.response?.data.message);
                  })
        }else{
          setSnackMessage('Preencha todos os campos corretamente')
        }
      }
    }

    function validAdoptData(){
      return email.length > 0 && value.length > 0;
    }

    function cleanForm(){
      setEmail('');
      setValue('');
    }

    return {
        petList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        value,
        setValue,
        snackMessage,
        setSnackMessage,
        adopt
    };
}