function reverse (n) {
  let reversed = 0; 
      while (num !== 0) {
      let oxirgiRaqam = num % 10; 
      reversed = (reversed * 10) + oxirgiRaqam; 
      num = (num - oxirgiRaqam) / 10; 
    }
    return reversed;
}
