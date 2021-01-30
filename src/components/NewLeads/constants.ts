import moment from 'moment';

import { loremIpsum } from 'lorem-ipsum';
import { ILeadItem } from './types';

export const defaultLeads: ILeadItem[] = [];

function fakeLead(id: number): ILeadItem {
  return {
    id,
    name: 'Nicolas Cage',
    timestamp: moment().subtract(id, 'hours').toDate(),
    avatar: 'https://www.placecage.com/64/64',
    message: loremIpsum(),
  };
}

for (let i = 0; i < 10; ++i) defaultLeads.push(fakeLead(i));
