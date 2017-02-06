var metric
  , imperial;

metric = {
  W: {
    name: {
      singular: 'Watt'
    , plural: 'Watt'
    }
  , to_anchor: 1
  }
, kW: {
    name: {
      singular: 'Kilowatt'
    , plural: 'Kilowatt'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megawatt'
    , plural: 'Megawatt'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigawatt'
    , plural: 'Gigawatt'
    }
  , to_anchor: 1000000000
  }
, TW: {
    name: {
      singular: 'Terawatt'
    , plural: 'Terawatt'
    }
  , to_anchor: 1000000000000
  }
, PW: {
    name: {
      singular: 'Petawatt'
    , plural: 'Petawatt'
    }
  , to_anchor: 1000000000000000
  }
, EW: {
    name: {
      singular: 'Exawatt'
    , plural: 'Exawatt'
    }
  , to_anchor: 1000000000000000000
  }
};

imperial = {
  hp: {
    name: {
      singular: 'Horsepower'
    , plural: 'Horsepower'
    }
  , to_anchor: 1
  }
}

module.exports = {
  metric: metric
, imperial: {}
, _anchors: {
    metric: {
      unit: 'W'
    , ratio: 746
    }
  , imperial: {
      unit: 'hp'
    , ratio: 1/746
    }
  }
};
