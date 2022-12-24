import fs from 'fs';
import path from 'path'
import { marked } from 'marked';
import { parseISO, format } from 'date-fns';

let tmp = parseISO('2021-08-09');

console.log(format(tmp, 'yyyy-MM-dd'));
