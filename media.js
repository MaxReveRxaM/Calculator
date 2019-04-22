window.onload = function() {
  var display = document.getElementById('display');
  var numbers_9 = document.getElementById('number_9');
  var numbers_8 = document.getElementById('number_8');
  var numbers_7 = document.getElementById('number_7');
  var numbers_6 = document.getElementById('number_6');
  var numbers_5 = document.getElementById('number_5');
  var numbers_4 = document.getElementById('number_4');
  var numbers_3 = document.getElementById('number_3');
  var numbers_2 = document.getElementById('number_2');
  var numbers_1 = document.getElementById('number_1');
  var numbers_0 = document.getElementById('number_0');
  var clear = document.getElementById('clear');
  var plus = document.getElementById('plus');
  var minus = document.getElementById('minus');
  var multiply = document.getElementById('multiply');
  var divide = document.getElementById('divide');
  var dot = document.getElementById('dot');
  var result = document.getElementById('result');
  var backspace = document.getElementById('backspace');
  var percent = document.getElementById('percent');
  PermanentMemory = 0;
  MemoryCurrentNumber = 0;
  MemoryNewNumber = 0;
  MemoryPendingOperation = '';

  numbers_9.onclick = function() {
    if (display.value === '0') {
      display.value = '9';
      PermanentMemory = 9;
    } else {
      display.value += '9';
      PermanentMemory = 9;
    };
  };

  numbers_8.onclick = function() {
    if (display.value === '0') {
      display.value = '8';
      PermanentMemory = 8;
    } else {
      display.value += '8';
      PermanentMemory = 8;
    };
  };

  numbers_7.onclick = function() {
    if (display.value === '0') {
      display.value = '7';
      PermanentMemory = 7;
    } else {
      display.value += '7';
      PermanentMemory = 7;
    };
  };

  numbers_6.onclick = function() {
    if (display.value === '0') {
      display.value = '6';
      PermanentMemory = 7;
    } else {
      display.value += '6';
      PermanentMemory = 7;
    };
  };

  numbers_5.onclick = function() {
    if (display.value === '0') {
      display.value = '5';
      PermanentMemory = 5;
    } else {
      display.value += '5';
      PermanentMemory = 5;
    };
  };

  numbers_4.onclick = function() {
    if (display.value === '0') {
      display.value = '4';
      PermanentMemory = 4;
    } else {
      display.value += '4';
      PermanentMemory = 4;
    };
  };

  numbers_3.onclick = function() {
    if (display.value === '0') {
      display.value = '3';
      PermanentMemory = 3;
    } else {
      display.value += '3';
      PermanentMemory = 3;
    };
  };

  numbers_2.onclick = function() {
    if (display.value === '0') {
      display.value = '2';
      PermanentMemory = 2;
    } else {
      display.value += '2';
      PermanentMemory = 2;
    };
  };

  numbers_1.onclick = function() {
    if (display.value === '0') {
      display.value = '1';
      PermanentMemory = 1;
    } else {
      display.value += '1';
      PermanentMemory = 1;
    };
  };

  numbers_0.onclick = function() {
    if (display.value === '0') {
      display.value = '0';
    } else {
      display.value += '0';
    };
  };

  dot.onclick = function() {
    var display = document.getElementById('display');
    var localDecimalMemory = display.value;

    if (MemoryNewNumber) {
      localDecimalMemory = '0.';
      MemoryNewNumber = false;
    } else {
      if (localDecimalMemory.indexOf('.') === -1) {
        localDecimalMemory += '.';
      };
    };

    display.value = localDecimalMemory;
  };


  plus.onclick = function() {
    MemoryPendingOperation = '+';
    MemoryCurrentNumber = parseFloat(display.value);
    display.value = "";
  }


  minus.onclick = function() {
    MemoryPendingOperation = '-';
    MemoryCurrentNumber = parseFloat(display.value);
    display.value = "";
  }

  multiply.onclick = function() {
    MemoryPendingOperation = '*';
    MemoryCurrentNumber = parseFloat(display.value);
    display.value = "";
  }


  divide.onclick = function() {
    MemoryPendingOperation = '/';
    MemoryCurrentNumber = parseFloat(display.value);
    display.value = "";
  }

  percent.onclick = function() {
    MemoryPendingOperation = '%';
    MemoryCurrentNumber = parseFloat(display.value);
    display.value = "";
  }


  backspace.onclick = function() {
    var n = parseFloat(display.value)
    display.value = "";
  }



  clear.onclick = function() {
    display.value = 0;
    MemoryNewNumber = 0;
    MemoryCurrentNumber = 0;
  }


  result.onclick = function() {
    var result = 0;
    MemoryNewNumber = parseFloat(display.value);

    if (MemoryCurrentNumber == false) {} else {
      MemoryNewNumber = PermanentMemory;
    }

    if (MemoryPendingOperation === '+') {
      result = MemoryCurrentNumber + MemoryNewNumber;
    } else if (MemoryPendingOperation === '-') {
      result = MemoryCurrentNumber - MemoryNewNumber;
    } else if (MemoryPendingOperation === '*') {
      result = MemoryCurrentNumber * MemoryNewNumber;
    } else if (MemoryPendingOperation === '/') {
      result = MemoryCurrentNumber / MemoryNewNumber;
    } else if (MemoryPendingOperation === '%') {
      result = (MemoryNewNumber / 10) * MemoryCurrentNumber;
    }

    display.value = result;
  }
}
