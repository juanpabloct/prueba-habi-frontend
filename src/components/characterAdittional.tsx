import { FormControlLabel, Grid, Switch } from "@mui/material";
import { useInformation } from "../context/informationContext";

export const CharacterAditional = () => {
  const { setCharacters, characters } = useInformation();
  const form = [
    {
      label: "Zona BBQ",
      value: characters.zonaBBQ,
      setValue: (newValue: boolean) => {
        setCharacters((current) => ({ ...current, zonaBBQ: newValue }));
      },
    },
    {
      label: "Parque de Juegos",
      value: characters.parqueJuegos,
      setValue: (newValue: boolean) => {
        setCharacters((current) => ({ ...current, parqueJuegos: newValue }));
      },
    },
    {
      label: "Salon Comunal",
      value: characters.salonComunal,
      setValue: (newValue: boolean) => {
        setCharacters((current) => ({ ...current, salonComunal: newValue }));
      },
    },
  ];
  return (
    <Grid>
      {form.map((item, i) => {
        return (
          <FormControlLabel
            key={i}
            control={
              <Switch
                onChange={({ target }) => {
                  item.setValue(target.checked);
                }}
                checked={item.value}
              />
            }
            label={item.label}
          />
        );
      })}
    </Grid>
  );
};
