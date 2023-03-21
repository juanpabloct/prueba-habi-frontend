import { Grid, Typography } from "@mui/material";
import { useInformation } from "./context/informationContext";

export const ShowInformation = () => {
  const { characters, direction, email, name, piso } = useInformation();
  const keysCharacter = Object.keys(characters);
  return (
    <Grid container justifyContent={"center"}>
      <Grid>
        <Grid container spacing={4} alignItems={"center"} gap={"1rem"}>
          <h3>Name:</h3>
          <p>{name}</p>
        </Grid>
        <Grid container spacing={4} alignItems={"center"} gap={"1rem"}>
          <h3>Email:</h3>
          <p>{email}</p>
        </Grid>
        <Grid container spacing={4} alignItems={"center"} gap={"1rem"}>
          <h3>Direction:</h3>
          <p>{direction}</p>
        </Grid>
        <Grid container spacing={4} alignItems={"center"} gap={"1rem"}>
          <h3>Piso:</h3>
          <p>{piso}</p>
        </Grid>
        <Grid container spacing={4} alignItems={"center"} gap={"1rem"}>
          <h3>Characters :</h3>
          {keysCharacter.map((character, i) => {
            return (
              <p key={i}>
                <b>{character}</b>: {characters[character] ? "true" : "false"}
              </p>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
