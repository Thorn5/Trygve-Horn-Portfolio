// useMockWeatherData.js
export default function useMockWeatherData() {
  const loading = null;
  const error = null;
  const apiData = {
    "queryCost": 1,
    "latitude": 51.1668,
    "longitude": 7.08844,
    "resolvedAddress": "Solingen, Nordrhein-Westfalen, Deutschland",
    "address": "Solingen",
    "timezone": "Europe/Berlin",
    "tzoffset": 2.0,
    "days": [
      {
        "datetime": "2023-10-20",
        "datetimeEpoch": 1697752800,
        "tempmax": 16.2,
        "tempmin": 13.0,
        "temp": 14.6,
        "feelslikemax": 16.2,
        "feelslikemin": 13.0,
        "feelslike": 14.6,
        "dew": 13.1,
        "humidity": 91.2,
        "precip": 14.6,
        "precipprob": 100.0,
        "precipcover": 62.5,
        "preciptype": [
          "rain"
        ],
        "snow": 0.0,
        "snowdepth": 0.0,
        "windgust": 40.3,
        "windspeed": 26.4,
        "winddir": 123.9,
        "pressure": 981.7,
        "cloudcover": 56.5,
        "visibility": 11.8,
        "solarradiation": 17.4,
        "solarenergy": 1.6,
        "uvindex": 1.0,
        "severerisk": 10.0,
        "sunrise": "08:02:56",
        "sunriseEpoch": 1697781776,
        "sunset": "18:29:15",
        "sunsetEpoch": 1697819355,
        "moonphase": 0.2,
        "conditions": "Rain, Partially cloudy",
        "description": "Partly cloudy throughout the day with a chance of rain throughout the day.",
        "icon": "rain",
        "stations": [
          "02968",
          "05717",
          "EDDK",
          "EDDL",
          "01078",
          "E0822",
          "01303",
          "02667",
          "13700"
        ],
        "source": "obs"
      }
    ],
    "stations": {
      "13700": {
        "distance": 25531.0,
        "latitude": 51.333,
        "longitude": 7.341,
        "useCount": 0,
        "id": "13700",
        "name": "Gevelsberg-Oberbröking",
        "quality": 100,
        "contribution": 0.0
      },
      "02968": {
        "distance": 21212.0,
        "latitude": 50.989,
        "longitude": 6.978,
        "useCount": 0,
        "id": "02968",
        "name": "Köln-Stammheim",
        "quality": 100,
        "contribution": 0.0
      },
      "05717": {
        "distance": 6649.0,
        "latitude": 51.226,
        "longitude": 7.105,
        "useCount": 0,
        "id": "05717",
        "name": "Wuppertal-Buchenhofen",
        "quality": 100,
        "contribution": 0.0
      },
      "EDDK": {
        "distance": 33530.0,
        "latitude": 50.87,
        "longitude": 7.17,
        "useCount": 0,
        "id": "EDDK",
        "name": "EDDK",
        "quality": 50,
        "contribution": 0.0
      },
      "EDDL": {
        "distance": 24924.0,
        "latitude": 51.28,
        "longitude": 6.78,
        "useCount": 0,
        "id": "EDDL",
        "name": "EDDL",
        "quality": 50,
        "contribution": 0.0
      },
      "01078": {
        "distance": 26531.0,
        "latitude": 51.296,
        "longitude": 6.769,
        "useCount": 0,
        "id": "01078",
        "name": "Düsseldorf",
        "quality": 100,
        "contribution": 0.0
      },
      "D2248": {
        "distance": 27803.0,
        "latitude": 50.999,
        "longitude": 6.794,
        "useCount": 0,
        "id": "D2248",
        "name": "DW2248 Pulheim DE",
        "quality": 0,
        "contribution": 0.0
      },
      "E0822": {
        "distance": 23661.0,
        "latitude": 50.955,
        "longitude": 7.111,
        "useCount": 0,
        "id": "E0822",
        "name": "EW0822 Cologne DE",
        "quality": 0,
        "contribution": 0.0
      },
      "01303": {
        "distance": 27721.0,
        "latitude": 51.404,
        "longitude": 6.968,
        "useCount": 0,
        "id": "01303",
        "name": "Essen-Bredeney",
        "quality": 100,
        "contribution": 0.0
      },
      "02667": {
        "distance": 33987.0,
        "latitude": 50.865,
        "longitude": 7.158,
        "useCount": 0,
        "id": "02667",
        "name": "Köln-Bonn",
        "quality": 100,
        "contribution": 0.0
      }
    },
    "currentConditions": {
      "datetime": "23:00:00",
      "datetimeEpoch": 1697835600,
      "temp": 12.5,
      "feelslike": 12.5,
      "humidity": 82.5,
      "dew": 9.6,
      "precip": 0.0,
      "precipprob": 0.0,
      "snow": 0.0,
      "snowdepth": 0.0,
      "preciptype": null,
      "windgust": 4.1,
      "windspeed": 7.4,
      "winddir": 145.0,
      "pressure": 983.0,
      "visibility": 10.0,
      "cloudcover": 25.0,
      "solarradiation": 0.0,
      "solarenergy": 0.0,
      "uvindex": 0.0,
      "conditions": "Partially cloudy",
      "icon": "partly-cloudy-night",
      "stations": [
        "EDDL",
        "D2248",
        "E0822"
      ],
      "source": "obs",
      "sunrise": "08:02:56",
      "sunriseEpoch": 1697781776,
      "sunset": "18:29:15",
      "sunsetEpoch": 1697819355,
      "moonphase": 0.2
    }
  };

  const moduleCalled = "Data faked by useMockWeatherData";
  
  return { loading, error, apiData, moduleCalled };
}








