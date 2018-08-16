import React from 'react';
import ReactDOM from 'react-dom';
import { state } from 'domain/store/main';
import { onClickGetQuote } from 'domain/middleware/user';
import styled, {StyleSheetManager} from 'styled-components'
import  Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jssPreset from '@material-ui/core/styles/jssPreset';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
const jss: any = create(jssPreset());
import { Button } from '@material-ui/core';

const ExampleTag = styled('div')`
  padding: 10px;
  color: #fff;
  background: #000;
`
const theme = createMuiTheme({});

// We define a custom insertion point that JSS will look for injecting the styles in the DOM.

export function App({ store, cssMount }) {
  jss.options.insertionPoint = cssMount; // <- shadowRoot.div
  const _onClickGetQuote = _.partial(onClickGetQuote, store);
  return (
    <StyleSheetManager target={cssMount} >
    <JssProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
      <Paper>
        <ExampleTag>
          <p>Hello</p>
        </ExampleTag>
        <div className={`container`}>
        <Grid>
        <Typography variant="headline">
        Quote tsting
        </Typography>
          <Button>Testing</Button>
          {state(store).quote.quote}
        </Grid>
        </div>
        </Paper>
      </MuiThemeProvider>
    </JssProvider>
    </StyleSheetManager>);
}
