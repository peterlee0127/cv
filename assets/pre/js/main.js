$( document ).ready( function() {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem, {});
});
import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-toolbar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
