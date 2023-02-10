
// UdemyWCCourse: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './udemywccourse.core.js';
import {
  Spinner,
  StockFinder,
  StockPrice,
  StoryComp,
  accordionComponent,
  bodyTable,
  buttonExample,
  cardComponent,
  dropDown,
  dropLink,
  featureBox,
  gifContainer,
  gridComp,
  headItem,
  headItem,
  headItem,
  headTable,
  listGroup,
  listGroup,
  listGroupItem,
  navigationBar,
  searchGif,
  tabComponent,
  table,
  tabsComponent
} from './udemywccourse.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    Spinner,
    StockFinder,
    StockPrice,
    StoryComp,
    accordionComponent,
    bodyTable,
    buttonExample,
    cardComponent,
    dropDown,
    dropLink,
    featureBox,
    gifContainer,
    gridComp,
    headItem,
    headItem,
    headItem,
    headTable,
    listGroup,
    listGroup,
    listGroupItem,
    navigationBar,
    searchGif,
    tabComponent,
    table,
    tabsComponent
  ], opts);
}
