# JS

The function takes an input dictionary inputDict as its argument.<br> It initializes an output dictionary outputDict with 0 values for each day of the week. <br> It then iterates over the keys in inputDict, converts the date string to a Date object, extracts the day of the week, and accumulates the corresponding value in outputDict. <br> Finally, it fills in missing days in outputDict with the mean of the values of the previous and next day. <br>

Note that the function assumes that the input dictionary contains at least Mon and Sun, <br> and that the date strings are in ISO format (YYYY-MM-DD). <br> It also assumes that the range of dates is within the range (1970-01-01, 2100-01-01).
