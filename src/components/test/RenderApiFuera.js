import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import './RenderApi.css'
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";



import useGiphy from './ApiOriLlamada'

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }

}));


export default function AsyncHooks() {
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useGiphy(query);
  // console.log(results)
  return (
    <div className="form">
      <h1>Componente separado</h1>
      <div className="botonNach">

        <Button type="submit" onClick={e => {
          e.preventDefault();
          setQuery(search);
        }}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </Button>
        <InputBase
          onChange={e => setSearch(e.target.value)}
          // value={searchVal}
          placeholder="Buscar Gif…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>

      <br />

      {/* <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for Gifs!"
        />
        <button type="submit">Search</button>
      </form> */}
      <br />
      {loading ? (
        <h1>GIVE ME GIFS</h1>
      ) : (
          results.map(item => <video autoPlay loop key={item} src={item} />)
        )}
    </div>
  );
}
