var metric
  , imperial;

metric = {
  kmh: {
    name: {
      singular: 'Kilometer per hour'
    , plural: 'Kilometer per hour'
    }
  , to_anchor: 1
  }
, mps: {
    name: {
      singular: 'Meter per second'
    , plural: 'Meter per second'
    }
  , to_anchor: 0.277778
  }
};

imperial = {
  mph: {
    name: {
      singular: 'Mile per hour'
    , plural: 'Miles per hour'
    }
  , to_anchor: 1
  }
, fps: {
    name: {
      singular: 'Foot per second'
    , plural: 'Feet per second'
    }
  , to_anchor: 1.46667
  }
, kn: {
    name: {
      singular: 'Knot'
    , plural: 'Knots'
    }
  , to_anchor: 0.868976
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kmh'
    , ratio: 1
    }
    imperial: {
      unit: 'mph'
    , ratio: 0.621371
    }
  }
};
