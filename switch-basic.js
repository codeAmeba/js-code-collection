var temperature = 20;
var feeling;

switch (temperature) {
  case 10:
    feeling = 'cold';
    break;
  case 15:
    feeling = 'cool';
    break;
  case 20:
    feeling = 'warm';
    break;
  case 25:
    feeling = 'hot';
    break;
	 default:
    feeling = 'soso';
}

console.log(feeling); // warm