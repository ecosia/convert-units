var energy;

energy = {
  ev: {
    name: {
      singular: 'Electron volt'
    , plural: 'Electron volts'
    }
  , to_anchor: 1.602e-19
  }
, cal: {
    name: {
      singular: 'Calorie'
    , plural: 'Calories'
    }
  , to_anchor: 0.23900574
  }
, J: {
    name: {
      singular: 'Joule'
    , plural: 'Joule'
    }
  , to_anchor: 1
  }
, BTU: {
    name: {
      singular: 'British Thermal Unit'
    , plural: 'British Thermal Units'
    }
  , to_anchor: 1054000
  }
, kWh: {
    name: {
      singular: 'Kilowatt hour'
    , plural: 'Kilowatt hours'
    }
  , to_anchor: 3600000
  }
};

module.exports = {
  energy: energy
, _anchors: {
    energy: {
      unit: 'J'
    , ratio: 1
    }
  }
};
