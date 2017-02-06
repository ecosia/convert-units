var degree
  , radian;

degree = {
, arcsec: {
    name: {
      singular: 'Arc second'
    , plural: 'Arc seconds'
    }
  , to_anchor: 1 / (60 * 60)
  }
, arcmin: {
    name: {
      singular: 'Arc minute'
    , plural: 'Arc minutes'
    }
  , to_anchor: 1 / 60
  }
, deg: {
    name: {
      singular: 'Degree'
    , plural: 'Degrees'
    }
  , to_anchor: 1
  }
};

radian = {
  rad: {
    name: {
      singular: 'Radian'
    , plural: 'Radians'
    }
  , to_anchor: 1
  }
, grad: {
    name: {
      singular: 'Gradian'
    , plural: 'Gradians'
    }
  , to_anchor: 1 / (2 * Math.PI)
  }
};

module.exports = {
  degree: degree
, radian: radian
, _anchors: {
    degree: {
      unit: 'deg'
    , ratio: 1
    }
  , radian: {
      unit: 'rad'
    , ratio: 1 / (180 * Math.PI)
    }
  }
};
