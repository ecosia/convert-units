var metric
  , imperial;

metric = {
  mcg: {
    name: {
      singular: 'Microgram'
    , plural: 'Micrograms'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligram'
    , plural: 'Milligrams'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gram'
    , plural: 'Grams'
    }
  , to_anchor: 1
  }
, kg: {
    name: {
      singular: 'Kilogram'
    , plural: 'Kilograms'
    }
  , to_anchor: 1000
  }
, t: {
    name: {
      singular: 'Ton'
    , plural: 'Tonnes'
    }
  , to_anchor: 1000000
  }
, qtl: {
    name: {
      singular: 'Metric quintal'
    , plural: 'Metric quintals'
    }
  , to_anchor: 100000
  }
};

imperial = {
  oz: {
    name: {
      singular: 'Ounce'
    , plural: 'Ounces'
    }
  , to_anchor: 1/16
  }
, lb: {
    name: {
      singular: 'Pound'
    , plural: 'Pounds'
    }
  , to_anchor: 1
  }
, ton: {
    name: {
      singular: 'Long ton'
    , plural: 'Long tonnes'
    }
  , to_anchor: 2240
  }
, ston: {
    name: {
      singular: 'Short ton'
    , plural: 'Short tonnes'
    }
  , to_anchor: 2000
  }
, st: {
    name: {
      singular: 'Stone'
    , plural: 'Stone'
    }
  , to_anchor: 14
  }
, usqtl: {
    name: {
      singular: 'US quintal'
    , plural: 'US quintals'
    }
  , to_anchor: 100
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1/453.592
    }
  , imperial: {
      unit: 'lb'
    , ratio: 453.592
    }
  }
};
