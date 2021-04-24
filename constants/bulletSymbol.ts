import * as BulletType from './bulletType';

interface BulletSymbolType<T> {
  [Key: number]: T;
}

interface BulletSymbolValueType {
  symbol: string;
  name: string;
  shortName: string;
}

const BulletSymbol: BulletSymbolType<BulletSymbolValueType> = {
  [BulletType.TASK]: {
    symbol: '( )',
    name: 'Task',
    shortName: 'Task',
  },
  [BulletType.TASK_COMPLETED]: {
    symbol: '(V)',
    name: 'Task completed',
    shortName: 'Completed',
  },
  [BulletType.TASK_MIGRATED]: {
    symbol: '(>)',
    name: 'Task migrated',
    shortName: 'Migrated',
  },
  [BulletType.TASK_CANCELLED]: {
    symbol: '(X)',
    name: 'Task cancelled',
    shortName: 'Cancelled',
  },
  [BulletType.EVENT]: {
    symbol: '[ ]',
    name: 'Event',
    shortName: 'Event',
  },
  [BulletType.EVENT_COMPLETED]: {
    symbol: '[V]',
    name: 'Event completed',
    shortName: 'Completed',
  },
  [BulletType.EVENT_MIGRATED]: {
    symbol: '[>]',
    name: 'Event migrated',
    shortName: 'Migrated',
  },
  [BulletType.EVENT_CANCELLED]: {
    symbol: '[X]',
    name: 'Event cancelled',
    shortName: 'cancelled',
  },
  [BulletType.APPOINTMENT]: {
    symbol: '{ }',
    name: 'Appointment',
    shortName: 'Appointment',
  },
  [BulletType.APPOINTMENT_COMPLETED]: {
    symbol: '{V}',
    name: 'Appointment completed',
    shortName: 'Completed',
  },
  [BulletType.APPOINTMENT_MIGRATED]: {
    symbol: '{>}',
    name: 'Appointment migrated',
    shortName: 'Appointment',
  },
  [BulletType.APPOINTMENT_CANCELLED]: {
    symbol: '{X}',
    name: 'Appointment cancelled',
    shortName: 'Cancelled',
  },
  [BulletType.OTHER_NOTES]: {
    symbol: '-',
    name: 'Notes',
    shortName: 'Notes',
  },
  [BulletType.OTHER_DUE_DATE]: {
    symbol: '(L)',
    name: 'Due date',
    shortName: 'Due date',
  },
  [BulletType.OTHER_IMPORTTANT]: {
    symbol: '*',
    name: 'Important',
    shortName: 'Important',
  },
  [BulletType.OTHER_REMINDER]: {
    symbol: '!',
    name: 'Reminder',
    shortName: 'Reminder',
  },
  [BulletType.OTHER_EXPENSES]: {
    symbol: '$$',
    name: 'Expenses',
    shortName: 'Expenses',
  },
  [BulletType.OTHER_QUESTION]: {
    symbol: '?',
    name: 'Question',
    shortName: 'Question',
  },
};

export default BulletSymbol;
