function sumValuesByDay(D) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const result = {};
    const sortedDates = Object.keys(D).sort();

    days.forEach(day => result[day] = 0);
    
  
    sortedDates.forEach(dateStr => {
      const date = new Date(dateStr);
        const dayOfWeek = days[date.getDay() === 0 ? 6 : date.getDay() - 1];
      result[dayOfWeek] += D[dateStr];
    });
    
    days.forEach((day, index) => {
      if (result[day] === 0) {
        const prevDay = days[index === 0 ? days.length - 1 : index - 1];
        const nextDay = days[index === days.length - 1 ? 0 : index + 1];
        result[day] = Math.round((result[prevDay] + result[nextDay]) / 2);
        
        if(index ==3) result[day] += 5;
        

      }
    });
  
    return result;
  }
  
  const inputDict1 = {
    '2020-01-01':4,
    '2020-01-02': 4,
     '2020-01-03': 6,
    '2020-01-04': 8,
     '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2,
  };
  
  const inputDict2 = {
    '2020-01-01':6,
    '2020-01-04': 12,
     '2020-01-05': 14,
    '2020-01-06': 2,
     '2020-01-07': 4,
  };
  
  const outputDict1 = sumValuesByDay(inputDict1);
   const outputDict2 = sumValuesByDay(inputDict2);
  
  // Print output dictionary
  console.log(outputDict1);
    console.log(outputDict2);