type Event = {
  id: number;
  name: string;
};

function aggregateEvents(events: Event[]) {
  const result = events.reduce((accumulator: any, currentValue) => {
    const { name } = currentValue;
    accumulator[name] = (accumulator[name] || 0) + 1;
    return accumulator;
  }, {});

  return result;
}

export default aggregateEvents;
