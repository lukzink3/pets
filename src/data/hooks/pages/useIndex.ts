import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService"
import { AxiosError } from "axios";

export function useIndex(){
    const [petList, setPetList] = useState<Pet[]>([]),
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

    useEffect(() => {
      if(selectedPet === null){
        cleanForm();
      }
    }, [selectedPet])

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
              //cleanForm();
            })
            .catch((error: AxiosError<any>) => {
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