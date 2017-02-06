var bits
  , bytes;

bits = {
  b: {
    name: {
      singular: 'Bit'
    , plural: 'Bits'
    }
  , to_anchor: 1
  }
, Kb: {
    name: {
      singular: 'Kilobit'
    , plural: 'Kilobits'
    }
  , to_anchor: 1000
  }
, Kib: {
    name: {
      singular: 'Kibiit'
    , plural: 'Kibibits'
    }
  , to_anchor: 1024
  }
, Mb: {
    name: {
      singular: 'Megabit'
    , plural: 'Megabits'
    }
  , to_anchor: 1000000
  }
, Meb: {
    name: {
      singular: 'Mebibit'
    , plural: 'Mebibits'
    }
  , to_anchor: 1048576
  }
, Gb: {
    name: {
      singular: 'Gigabit'
    , plural: 'Gigabits'
    }
  , to_anchor: 1000000000
  }
, Gib: {
    name: {
      singular: 'Gibibit'
    , plural: 'Gibibits'
    }
  , to_anchor: 1073741824
  }
, Tb: {
    name: {
      singular: 'Terabit'
    , plural: 'Terabits'
    }
  , to_anchor: 1000000000000
  }
, Teb: {
    name: {
      singular: 'Tebibit'
    , plural: 'Tebibits'
    }
  , to_anchor: 1099511627776
  }
, Pb: {
    name: {
      singular: 'Petabit'
    , plural: 'Petabits'
    }
  , to_anchor: 1000000000000000
  }
, Peb: {
    name: {
      singular: 'Pebibit'
    , plural: 'Pebibits'
    }
  , to_anchor: 1125899906842624
  }
};

bytes = {
  B: {
    name: {
      singular: 'Byte'
    , plural: 'Bytes'
    }
  , to_anchor: 1
  }
, KB: {
    name: {
      singular: 'Kilobyte'
    , plural: 'Kilobytes'
    }
  , to_anchor: 1000
  }
, KiB: {
    name: {
      singular: 'Kibibyte'
    , plural: 'Kibibytes'
    }
  , to_anchor: 1024
  }
, MB: {
    name: {
      singular: 'Megabyte'
    , plural: 'Megabytes'
    }
  , to_anchor: 1000000
  }
, MeB: {
    name: {
      singular: 'Mebibyte'
    , plural: 'Mebibytes'
    }
  , to_anchor: 1048576
  }
, GB: {
    name: {
      singular: 'Gigabyte'
    , plural: 'Gigabytes'
    }
  , to_anchor: 1000000000
  }
, GiB: {
    name: {
      singular: 'Gibibyte'
    , plural: 'Gibibytes'
    }
  , to_anchor: 1073741824
  }
, TB: {
    name: {
      singular: 'Terabyte'
    , plural: 'Terabytes'
    }
  , to_anchor: 1000000000000
  }
, TeB: {
    name: {
      singular: 'Tebibyte'
    , plural: 'Tebibytes'
    }
  , to_anchor: 1099511627776  
, TeB: {
    name: {
      singular: 'Tebibyte'
    , plural: 'Tebibytes'
    }
  , to_anchor: 1000000000000  
}
, PeB: {
    name: {
      singular: 'Pebibyte'
    , plural: 'Pebibytes'
    }
  , to_anchor: 1125899906842624
  }
};

module.exports = {
  bits: bits
, bytes: bytes
, _anchors: {
    bits: {
      unit: 'b'
    , ratio: 1
    }
  , bytes: {
      unit: 'B'
    , ratio: 8
    }
  }
};
