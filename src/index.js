import './sass/index.scss';
import {Excel} from './components/excel/Excel';
import {ToolBar} from './components/toolbar/Toolbar';
import {Header} from './components/header/Header';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table';

const excel = new Excel('#app', {
  components: [Header, ToolBar, Formula, Table],
});

excel.render();
