function takeANumber(line) {
  
  var lengthLine = line.length;
  
  lengthLine++;
  
  line.push(lengthLine)

  return `Welcome, You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

    return l;
  }

  return `The line is currently: ${lineInfo.join(', ')}`
}
