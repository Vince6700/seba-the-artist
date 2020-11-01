import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export const theme = createMuiTheme({
         palette: {
           primary: { main: "#DCBA88", light: "#ffecb8", dark: "#a98a5a" },
         },
         overrides: {
           MuiFormHelperText: {
             root: { fontSize: " 1.2rem" },
           },
         },
       })
