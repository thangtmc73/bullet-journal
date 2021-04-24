import React from 'react';
import { BulletType } from '../../constants';
import Section from './section/Section';
import Slider from 'react-native-app-intro-slider';

function ConventionsPage() {
  function renderItem({
    item,
  }: {
    item: {
      title: string;
      items: Array<number>;
    };
  }) {
    const { title, items } = item;
    return <Section title={title} items={items} />;
  }

  function keyExtractor({ title }: { title: string }) {
    return title;
  }

  return (
    <Slider
      data={listConventions}
      keyExtractor={keyExtractor}
      horizontal={true}
      renderItem={renderItem}
    />
  );
}

const listConventions = [
  {
    title: 'Task',
    items: [
      BulletType.TASK,
      BulletType.TASK_COMPLETED,
      BulletType.TASK_MIGRATED,
      BulletType.TASK_CANCELLED,
    ],
  },
  {
    title: 'Event',
    items: [
      BulletType.EVENT,
      BulletType.EVENT_COMPLETED,
      BulletType.EVENT_MIGRATED,
      BulletType.EVENT_CANCELLED,
    ],
  },
  {
    title: 'Appointment',
    items: [
      BulletType.APPOINTMENT,
      BulletType.APPOINTMENT_COMPLETED,
      BulletType.APPOINTMENT_MIGRATED,
      BulletType.APPOINTMENT_CANCELLED,
    ],
  },
  {
    title: 'Others',
    items: [
      BulletType.OTHER_NOTES,
      BulletType.OTHER_DUE_DATE,
      BulletType.OTHER_IMPORTTANT,
      BulletType.OTHER_REMINDER,
      BulletType.OTHER_EXPENSES,
      BulletType.OTHER_QUESTION,
    ],
  },
];

export default ConventionsPage;
