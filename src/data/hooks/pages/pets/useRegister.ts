import { useState } from "react";
import { ApiService } from "../../../services/ApiService";
import { AxiosError } from "axios";

export function useRegister() {
  const [name, setName] = useState(""),
    [history, setHistory] = useState(""),
    [picture, setPicture] = useState(""),
    [message, setMessage] = useState("");

  function register() {
    if (validateForm()) {
      ApiService.post("/pets", {
        name,
        history,
        picture,
      })
        .then(() => {
          clean();
          setMessage("Pet cadastrado com sucesso!");
        })
        .catch((error: AxiosError<any, any>) => {
          setMessage(error.response?.data.message);
        });
    } else {
      setMessage("Preencha todos os campos!");
    }
  }

  function validateForm() {
    return name.length > 2 && history.length > 20 && picture.length > 5;
  }

  function clean() {
    setName("");
    setHistory("");
    setPicture("");
  }

  return {
    name,
    history,
    picture,
    message,
    setName,
    setHistory,
    setPicture,
    setMessage,
    register,
  };
}
