import type { NextPage } from "next";
import List from "../ui/components/List/List";
import Title from "../ui/components/Title/Title";
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado
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
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />

      <Dialog 
      open={petSelecionado !== null} 
      fullWidth
      PaperProps={{sx: { padding: 5}}}
      onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={'E-mail'}
              type={'email'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} spacing={2}>
            <TextField
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
            />
          </ Grid>

        </Grid>

        <DialogActions sx={{marginTop: 5}}>
          <Button
          color={'secondary'}
          onClick={() => setPetSelecionado(null)}
          >
            Cancelar
          </Button>
          <Button
          color={'primary'}
          variant={'contained'}>
            Adotar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
      open={false}
      message={''}
      />
    </div>
  );
};

export default Home;
