var metric
  , imperial;

metric = {
  kml: {
    name: {
      singular: 'Kilometre per litre'
    , plural: 'Kilometres per litre'
    }
  , to_anchor: 1
  }
, lkm: {
    name: {
      singular: 'Litre per 100km'
    , plural: 'Litres per 100km'
    }  
  , to_anchor: 1 / 100
  }
};

imperial = {
  mpbg: {    
    name: {
      singular: 'Miles per Gallon (Brit.)'
    , plural: 'Miles per Gallon (Brit.)'
    }
  , to_anchor: 1 / 1.20095045
  }
, mpg: {    
    name: {
      singular: 'Miles per Gallon (US)'
    , plural: 'Miles per Gallon (US)'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kml'
    , ratio: 1
    }
  , imperial: {
      unit: 'mpg'
    , ratio: 0.42514371
    }
  }
};
