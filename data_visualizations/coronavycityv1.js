//Corona virus numbers by cities

//ACKNOWLEDGEMENT: Calculations and mapping information based on Coding Challenge #57: Mapping Earthquake Data at https://www.youtube.com/watch?v=ZiYdOwOrGyc

let mapimg;
let zoom = 1;

//Longitude is vertical lines and map to vertical or x values
//Yvalues are horizontal lattitude
//Range of values for longitude is 180 to -180 degrees
//Range of values for latitude is 90 to -90 degrees
//Use radians in code

//Center latitude/longitude
let clat = 0;
let clon = 0;

let countries;

function preload() {
  //Load image map and set longitude, latitude
  //maybe set varibles for width,and other settings
  mapimg = loadImage(
    "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibWFyeWwxMjMiLCJhIjoiY2thOGxmNzI3MGhkZDJ4bGptajExMTBndCJ9.D578ZtoH6VAUtL_zs01p2w"
  );

  //virusData = loadJSON("https://www.trackcorona.live/api/countries");
  virusData = loadJSON("https://www.trackcorona.live/api/cities");
}

//Takes a longitude value
//Use formala from  Web Mercator and break it down into steps
function mercX(lon) {
  //Need to convert from degrees to radians for the  Web Mercator formula
  lon = radians(lon);
  //first part of conversion
  //128 because center of a square but mapbox does boxes of 512
  //need to convert 128 from formula to 256 because used by mapbox
  let a = (256 / PI) * pow(2, zoom);
  let b = lon + PI;
  return a * b; //gives x location
}
function mercY(lat) {
  //need to convert from degrees to radians for the wb mercator formula
  lat = radians(lat);
  //need to convert 128 from formula to 256 because used by mapbox
  let a = (256 / PI) * pow(2, zoom);
  let b = tan(PI / 4 + lat / 2);
  let c = PI - log(b);
  return a * c; //gives y location
}

function setup() {
  //set canvas to match map size
  createCanvas(1024, 512);

  //moving to work from center
  translate(width / 2, height / 2);
  //setting image mode to center - image drawn from the center
  imageMode(CENTER);
  image(mapimg, 0, 0);

  //image drawn relative to center
  let cx = mercX(clon);
  let cy = mercY(clat);

  let filteredData = virusData.data.filter((city) => city.confirmed > 1000);

  //load the date, load string gives an array of strings
  for (let i = 0; i < filteredData.length; i++) {
    // use regular expression to map split on commas

    let lat = filteredData[i].latitude;
    let lon = filteredData[i].longitude;

    let x = mercX(lon) - cx;
    let y = mercY(lat) - cy;

    fill(197, 0, 0);
    stroke(197, 0, 0);
    ellipse(x, y, 2, 2);
  }
}
