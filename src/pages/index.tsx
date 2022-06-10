import type { NextPage } from "next";
import List from "../ui/components/List/List";
import Title from "../ui/components/Title/Title";
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br /> pode{" "}
            <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <List
        pets={petList}
        onSelect={(pet) => setSelectedPet(pet)}
      />

      <Dialog 
      open={selectedPet !== null} 
      fullWidth
      PaperProps={{sx: { padding: 5}}}
      onClose={() => setSelectedPet(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} spacing={2}>
            <TextField
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </ Grid>

        </Grid>

        <DialogActions sx={{marginTop: 5}}>
          <Button
          color={'secondary'}
          onClick={() => setSelectedPet(null)}
          >
            Cancelar
          </Button>
          <Button
          color={'primary'}
          variant={'contained'}
          onClick={() => adopt()}
          >
            Adotar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar  
        open={snackMessage.length > 0}
        message={snackMessage}
        autoHideDuration={2500}
        onClose={() => setSnackMessage('')}
      />
    </div>
  );
};

export default Home;
