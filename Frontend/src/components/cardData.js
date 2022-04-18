// "userId": "615b2fb6b7bb5d3d49078add", User
// "layer": "61ee87c295b8f129fcd554ad" layer ALL
// "layer": "61ee8fe647fa0837bcf42595" layer electricité

export const layerObject = {
  defaultLayerName: 'ALL',
  cardsLayers: [
    {
      _id: '61ee87c295b8f129fcd554ad',
      name: 'ALL',
      icon: 'list',
      order: 0
    },
    {
      _id: '61ee8fe647fa0837bcf42595',
      name: 'electricité',
      icon: 'power',
      order: 1
    }
  ]
};

export const cardObjectByLayerAll = {
  cards: [
    {
      parent: null,
      userId: [
        {
          userRole: 1,
          _id: '615b2fb6b7bb5d3d49078add',
          userName: 'zen'
        },
        {
          userRole: 1,
          _id: '615b2f7fb7bb5d3d49078adc',
          userName: 'Masmoudi'
        },
        {
          userRole: 1,
          _id: '616438bbdfd1131826723418',
          userName: 'Cherif'
        }
      ],
      entities: [
        {
          contentsNumber: 1,
          _id: '61fbfa582b12996bb0e5176f',
          name: 'ZEN Gremda',
          type: 'LOCAL',
          cardDestination: '61fd2a18012a1e66684ebc5a',
          order: 1,
          locationId: {
            _id: '615b2fe8b7bb5d3d49078ade',
            name: 'ZEN GREMDA',
            clientCode: 'ZEN',
            parent: 'parent 3'
          }
        }
      ],
      _id: '61fd2a18012a1e66684ebc59',
      title: 'Magasin',
      level: '0',
      type: 'LOCAL',
      layer: '61ee87c295b8f129fcd554ad',
      order: 1
    },
    {
      parent: '61fd2a18012a1e66684ebc59',
      userId: [
        {
          userRole: 1,
          _id: '615b2fb6b7bb5d3d49078add',
          userName: 'zen'
        },
        {
          userRole: 1,
          _id: '615b2f7fb7bb5d3d49078adc',
          userName: 'Masmoudi'
        },
        {
          userRole: 1,
          _id: '616438bbdfd1131826723418',
          userName: 'Cherif'
        }
      ],
      entities: [
        {
          contentsNumber: 3,
          _id: '61fbfa582b12996bb0e51770',
          name: 'TGBT',
          type: 'LOCAL',
          cardDestination: '6203964108d5366e4dcfc2ab',
          order: 1,
          locationId: {
            _id: '622a161ce99e91d083fca9b1',
            name: 'TGBT',
            clientCode: 'ZEN',
            parent: 'parent 3'
          }
        },
        {
          contentsNumber: 2,
          _id: '622a1b8ee99e91d083fca9b9',
          name: 'Virtuel',
          type: 'LOCAL',
          cardDestination: '62039c3008d5366e4dcfc2af',
          order: 1,
          locationId: {
            _id: '622a161ce99e91d083fca9b1',
            name: 'TGBT',
            clientCode: 'ZEN',
            parent: 'parent 3'
          }
        }
      ],
      _id: '61fd2a18012a1e66684ebc5a',
      title: 'ZEN GREMDA',
      level: '1',
      type: 'LOCAL',
      layer: '61ee87c295b8f129fcd554ad',
      order: 2
    },
    {
      parent: '61fd2a18012a1e66684ebc5a',
      userId: [
        {
          userRole: 1,
          _id: '615b2fb6b7bb5d3d49078add',
          userName: 'zen'
        },
        {
          userRole: 1,
          _id: '615b2f7fb7bb5d3d49078adc',
          userName: 'Masmoudi'
        },
        {
          userRole: 1,
          _id: '616438bbdfd1131826723418',
          userName: 'Cherif'
        }
      ],
      entities: [
        {
          contentsNumber: 0,
          _id: '620396c908d5366e4dcfc2ac',
          name: 'Arrivée generale',
          type: 'DEVICE',
          subType: 'REAL_MACHINE',
          cardDestination: '6203964108d5366e4dcfc2ab',
          order: 1,
          deviceId: {
            vectors: [
              '615c1c6fd363f41494e6a7a2',
              '615c1c6fd363f41494e6a7a3',
              '615c1c6fd363f41494e6a7a4',
              '615c1c6fd363f41494e6a7a6',
              '615c1c6fd363f41494e6a7aa',
              '615c1c6fd363f41494e6a7ab',
              '615c1c6fd363f41494e6a7ac',
              '615c1c6fd363f41494e6a7ad',
              '615c1c6fd363f41494e6a7ae',
              '615c1c6fd363f41494e6a7b1'
            ],
            _id: '615c1c6fd363f41494e6a7b2',
            dDevTable: 'zen_dev_0101',
            dHistogramIndex: 'zen_dev_0101'
          }
        },
        {
          contentsNumber: 0,
          _id: '62039d3c08d5366e4dcfc2b2',
          name: 'Clim 1',
          type: 'DEVICE',
          subType: 'REAL_MACHINE',
          cardDestination: '6203964108d5366e4dcfc2ab',
          order: 1,
          deviceId: {
            vectors: [
              '615c26ed4f5dae188a9130c2',
              '615c26ed4f5dae188a9130c3',
              '615c26ed4f5dae188a9130c4',
              '615c26ed4f5dae188a9130c6',
              '615c26ed4f5dae188a9130ca',
              '615c26ed4f5dae188a9130cb',
              '615c26ed4f5dae188a9130cc',
              '615c26ed4f5dae188a9130cd',
              '615c26ed4f5dae188a9130d1',
              '62260ef1f97cc9ce22cad61a'
            ],
            _id: '615c26ed4f5dae188a9130d2',
            dDevTable: 'zen_dev_0102',
            dHistogramIndex: 'zen_dev_0102'
          }
        },
        {
          contentsNumber: 0,
          _id: '62039d4508d5366e4dcfc2b3',
          name: 'Clim 2',
          type: 'DEVICE',
          subType: 'REAL_MACHINE',
          cardDestination: '6203964108d5366e4dcfc2ab',
          order: 1,
          deviceId: {
            vectors: [
              '615c2898d73150199613ce1f',
              '615c2898d73150199613ce20',
              '615c2898d73150199613ce21',
              '615c2898d73150199613ce23',
              '615c2898d73150199613ce27',
              '615c2898d73150199613ce28',
              '615c2898d73150199613ce29',
              '615c2898d73150199613ce2a',
              '615c2898d73150199613ce2b',
              '615c2898d73150199613ce2e'
            ],
            _id: '615c2898d73150199613ce2f',
            dDevTable: 'zen_dev_0103',
            dHistogramIndex: 'zen_dev_0103'
          }
        }
      ],
      _id: '6203964108d5366e4dcfc2ab',
      title: 'TGBT',
      level: '2',
      type: 'LOCAL',
      layer: '61ee87c295b8f129fcd554ad',
      order: 2
    },
    {
      parent: '6203964108d5366e4dcfc2ab',
      userId: [
        {
          userRole: 1,
          _id: '615b2fb6b7bb5d3d49078add',
          userName: 'zen'
        },
        {
          userRole: 1,
          _id: '615b2f7fb7bb5d3d49078adc',
          userName: 'Masmoudi'
        },
        {
          userRole: 1,
          _id: '616438bbdfd1131826723418',
          userName: 'Cherif'
        }
      ],
      entities: [
        {
          contentsNumber: 0,
          _id: '622a1ce6e99e91d083fca9bb',
          name: 'Éclairage',
          type: 'DEVICE',
          subType: 'VIRTUAL_MACHINE',
          cardDestination: '62039c3008d5366e4dcfc2af',
          order: 1,
          deviceId: {
            vectors: [
              '61c05874b6ef4e1910d16f52',
              '61c05874b6ef4e1910d16f53',
              '61c05874b6ef4e1910d16f5a',
              '61c05874b6ef4e1910d16f5b',
              '61c05874b6ef4e1910d16f5c',
              '61c05874b6ef4e1910d16f5d',
              '61c05874b6ef4e1910d16f5e',
              '61c05874b6ef4e1910d16f61'
            ],
            _id: '61c05874b6ef4e1910d16f62',
            dDevTable: 'zen_virt_0102',
            dHistogramIndex: 'zen_virt_0102'
          }
        },
        {
          contentsNumber: 0,
          _id: '622a1d0ae99e91d083fca9be',
          name: 'Climatisation',
          type: 'DEVICE',
          subType: 'VIRTUAL_MACHINE',
          cardDestination: '62039c3008d5366e4dcfc2af',
          order: 1,
          deviceId: {
            vectors: [
              '61c055454d67ef17a32d08e6',
              '61c055454d67ef17a32d08e7',
              '61c055454d67ef17a32d08ee',
              '61c055454d67ef17a32d08ef',
              '61c055454d67ef17a32d08f0',
              '61c055454d67ef17a32d08f1',
              '61c055454d67ef17a32d08f2',
              '61c055454d67ef17a32d08f5'
            ],
            _id: '61c055454d67ef17a32d08f6',
            dDevTable: 'zen_virt_0101',
            dHistogramIndex: 'zen_virt_0101'
          }
        }
      ],
      _id: '62039c3008d5366e4dcfc2af',
      title: 'Virtuel',
      level: '2',
      type: 'LOCAL',
      layer: '61ee87c295b8f129fcd554ad',
      order: 2
    }
  ]
};

export const cardObjectByLayerElectricity = {
  cards: [
    {
      parent: null,
      userId: [
        {
          userRole: 1,
          _id: '615b2fb6b7bb5d3d49078add',
          userName: 'zen'
        },
        {
          userRole: 1,
          _id: '615b2f7fb7bb5d3d49078adc',
          userName: 'Masmoudi'
        },
        {
          userRole: 1,
          _id: '616438bbdfd1131826723418',
          userName: 'Cherif'
        }
      ],
      entities: [
        {
          contentsNumber: 1,
          _id: '622a1059e99e91d083fca9a6',
          name: 'ZEN Gremda',
          type: 'LOCAL',
          cardDestination: '622a0d0de99e91d083fca99e',
          order: 1,
          locationId: {
            _id: '615b2fe8b7bb5d3d49078ade',
            name: 'ZEN GREMDA',
            clientCode: 'ZEN',
            parent: 'parent 3'
          }
        }
      ],
      _id: '622a0ae6e99e91d083fca99d',
      title: 'Magasin',
      level: '0',
      type: 'LOCAL',
      layer: '61ee8fe647fa0837bcf42595',
      order: 1
    },
    {
      parent: '622a0ae6e99e91d083fca99d',
      userId: [
        {
          userRole: 1,
          _id: '615b2fb6b7bb5d3d49078add',
          userName: 'zen'
        },
        {
          userRole: 1,
          _id: '615b2f7fb7bb5d3d49078adc',
          userName: 'Masmoudi'
        },
        {
          userRole: 1,
          _id: '616438bbdfd1131826723418',
          userName: 'Cherif'
        }
      ],
      entities: [
        {
          contentsNumber: 2,
          _id: '622a12bae99e91d083fca9a7',
          name: 'Arrivée générale',
          type: 'DEVICE',
          subType: 'REAL_MACHINE',
          cardDestination: '622a0d15e99e91d083fca99f',
          order: 1,
          deviceId: {
            vectors: [
              '615c1c6fd363f41494e6a7a2',
              '615c1c6fd363f41494e6a7a3',
              '615c1c6fd363f41494e6a7a4',
              '615c1c6fd363f41494e6a7a6',
              '615c1c6fd363f41494e6a7aa',
              '615c1c6fd363f41494e6a7ab',
              '615c1c6fd363f41494e6a7ac',
              '615c1c6fd363f41494e6a7ad',
              '615c1c6fd363f41494e6a7ae',
              '615c1c6fd363f41494e6a7b1'
            ],
            _id: '615c1c6fd363f41494e6a7b2',
            dDevTable: 'zen_dev_0101',
            dHistogramIndex: 'zen_dev_0101'
          }
        }
      ],
      _id: '622a0d0de99e91d083fca99e',
      title: 'ZEN Gremda',
      level: '1',
      type: 'LOCAL',
      layer: '61ee8fe647fa0837bcf42595',
      order: 2
    },
    {
      parent: '622a0d0de99e91d083fca99e',
      userId: [
        {
          userRole: 1,
          _id: '615b2fb6b7bb5d3d49078add',
          userName: 'zen'
        },
        {
          userRole: 1,
          _id: '615b2f7fb7bb5d3d49078adc',
          userName: 'Masmoudi'
        },
        {
          userRole: 1,
          _id: '616438bbdfd1131826723418',
          userName: 'Cherif'
        }
      ],
      entities: [
        {
          contentsNumber: 0,
          _id: '622a137de99e91d083fca9a8',
          name: 'Éclairage',
          type: 'DEVICE',
          subType: 'VIRTUAL_MACHINE',
          cardDestination: '622a0d15e99e91d083fca99f',
          order: 1,
          deviceId: {
            vectors: [
              '61c05874b6ef4e1910d16f52',
              '61c05874b6ef4e1910d16f53',
              '61c05874b6ef4e1910d16f5a',
              '61c05874b6ef4e1910d16f5b',
              '61c05874b6ef4e1910d16f5c',
              '61c05874b6ef4e1910d16f5d',
              '61c05874b6ef4e1910d16f5e',
              '61c05874b6ef4e1910d16f61'
            ],
            _id: '61c05874b6ef4e1910d16f62',
            dDevTable: 'zen_virt_0102',
            dHistogramIndex: 'zen_virt_0102'
          }
        },
        {
          contentsNumber: 2,
          _id: '622a13f0e99e91d083fca9aa',
          name: 'Climatisation',
          type: 'DEVICE',
          subType: 'VIRTUAL_MACHINE',
          cardDestination: '622a0d25e99e91d083fca9a1',
          order: 1,
          deviceId: {
            vectors: [
              '61c055454d67ef17a32d08e6',
              '61c055454d67ef17a32d08e7',
              '61c055454d67ef17a32d08ee',
              '61c055454d67ef17a32d08ef',
              '61c055454d67ef17a32d08f0',
              '61c055454d67ef17a32d08f1',
              '61c055454d67ef17a32d08f2',
              '61c055454d67ef17a32d08f5'
            ],
            _id: '61c055454d67ef17a32d08f6',
            dDevTable: 'zen_virt_0101',
            dHistogramIndex: 'zen_virt_0101'
          }
        }
      ],
      _id: '622a0d15e99e91d083fca99f',
      title: 'Arrivée generale',
      level: '2',
      type: 'LOCAL',
      layer: '61ee8fe647fa0837bcf42595',
      order: 2
    },
    {
      parent: '622a0d15e99e91d083fca99f',
      userId: [
        {
          userRole: 1,
          _id: '615b2fb6b7bb5d3d49078add',
          userName: 'zen'
        },
        {
          userRole: 1,
          _id: '615b2f7fb7bb5d3d49078adc',
          userName: 'Masmoudi'
        },
        {
          userRole: 1,
          _id: '616438bbdfd1131826723418',
          userName: 'Cherif'
        }
      ],
      entities: [
        {
          contentsNumber: 0,
          _id: '622a1465e99e91d083fca9ab',
          name: 'Clim 1',
          type: 'DEVICE',
          subType: 'REAL_MACHINE',
          cardDestination: '622a0d25e99e91d083fca9a1',
          order: 1,
          deviceId: {
            vectors: [
              '615c26ed4f5dae188a9130c2',
              '615c26ed4f5dae188a9130c3',
              '615c26ed4f5dae188a9130c4',
              '615c26ed4f5dae188a9130c6',
              '615c26ed4f5dae188a9130ca',
              '615c26ed4f5dae188a9130cb',
              '615c26ed4f5dae188a9130cc',
              '615c26ed4f5dae188a9130cd',
              '615c26ed4f5dae188a9130d1',
              '62260ef1f97cc9ce22cad61a'
            ],
            _id: '615c26ed4f5dae188a9130d2',
            dDevTable: 'zen_dev_0102',
            dHistogramIndex: 'zen_dev_0102'
          }
        },
        {
          contentsNumber: 0,
          _id: '622a14a7e99e91d083fca9ac',
          name: 'Clim 2',
          type: 'DEVICE',
          subType: 'REAL_MACHINE',
          cardDestination: '622a0d25e99e91d083fca9a1',
          order: 1,
          deviceId: {
            vectors: [
              '615c2898d73150199613ce1f',
              '615c2898d73150199613ce20',
              '615c2898d73150199613ce21',
              '615c2898d73150199613ce23',
              '615c2898d73150199613ce27',
              '615c2898d73150199613ce28',
              '615c2898d73150199613ce29',
              '615c2898d73150199613ce2a',
              '615c2898d73150199613ce2b',
              '615c2898d73150199613ce2e'
            ],
            _id: '615c2898d73150199613ce2f',
            dDevTable: 'zen_dev_0103',
            dHistogramIndex: 'zen_dev_0103'
          }
        }
      ],
      _id: '622a0d25e99e91d083fca9a1',
      title: 'Climatisation',
      level: '3',
      type: 'LOCAL',
      layer: '61ee8fe647fa0837bcf42595',
      order: 2
    }
  ]
};

export const vecteur1 = {
  vector1: [
    {
      _id: '615c1c6fd363f41494e6a7a2',
      variables: [
        '615c1c6fd363f41494e6a77b',
        '615c1c6fd363f41494e6a77c',
        '615c1c6fd363f41494e6a77d',
        '615c1c6fd363f41494e6a77e'
      ],
      order: 1,
      name: 'Ampérage',
      clientCode: 'ZEN',
      dDevTable: 'zen_dev_0101',
      device: '615c1c6fd363f41494e6a7b2'
    },
    {
      _id: '615c1c6fd363f41494e6a7a2',
      variables: [
        '615c1c6fd363f41494e6a77b',
        '615c1c6fd363f41494e6a77c',
        '615c1c6fd363f41494e6a77d',
        '615c1c6fd363f41494e6a77e'
      ],
      order: 1,
      name: 'Ampérage',
      clientCode: 'ZEN',
      dDevTable: 'zen_dev_0101',
      device: '615c1c6fd363f41494e6a7b2'
    },
    {
      _id: '615c1c6fd363f41494e6a7a2',
      variables: [
        '615c1c6fd363f41494e6a77b',
        '615c1c6fd363f41494e6a77c',
        '615c1c6fd363f41494e6a77d',
        '615c1c6fd363f41494e6a77e'
      ],
      order: 1,
      name: 'Ampérage',
      clientCode: 'ZEN',
      dDevTable: 'zen_dev_0101',
      device: '615c1c6fd363f41494e6a7b2'
    },
    {
      _id: '615c1c6fd363f41494e6a7a2',
      variables: [
        '615c1c6fd363f41494e6a77b',
        '615c1c6fd363f41494e6a77c',
        '615c1c6fd363f41494e6a77d',
        '615c1c6fd363f41494e6a77e'
      ],
      order: 1,
      name: 'Ampérage',
      clientCode: 'ZEN',
      dDevTable: 'zen_dev_0101',
      device: '615c1c6fd363f41494e6a7b2'
    },
    {
      _id: '615c1c6fd363f41494e6a7a2',
      variables: [
        '615c1c6fd363f41494e6a77b',
        '615c1c6fd363f41494e6a77c',
        '615c1c6fd363f41494e6a77d',
        '615c1c6fd363f41494e6a77e'
      ],
      order: 1,
      name: 'Ampérage',
      clientCode: 'ZEN',
      dDevTable: 'zen_dev_0101',
      device: '615c1c6fd363f41494e6a7b2'
    },
    {
      _id: '615c1c6fd363f41494e6a7a2',
      variables: [
        '615c1c6fd363f41494e6a77b',
        '615c1c6fd363f41494e6a77c',
        '615c1c6fd363f41494e6a77d',
        '615c1c6fd363f41494e6a77e'
      ],
      order: 1,
      name: 'Ampérage',
      clientCode: 'ZEN',
      dDevTable: 'zen_dev_0101',
      device: '615c1c6fd363f41494e6a7b2'
    }
  ]
};

export const variable1 = {
  variable1: [
    {
      _id: '615c1c6fd363f41494e6a77b',
      name: 'ILN1',
      vectorId: '615c1c6fd363f41494e6a7a2'
    },
    {
      _id: '615c1c6fd363f41494e6a77c',
      name: 'ILN2',
      vectorId: '615c1c6fd363f41494e6a7a2'
    },
    {
      _id: '615c1c6fd363f41494e6a77c',
      name: 'ILN2',
      vectorId: '615c1c6fd363f41494e6a7a2'
    },
    {
      _id: '615c1c6fd363f41494e6a77c',
      name: 'ILN2',
      vectorId: '615c1c6fd363f41494e6a7a2'
    }
  ]
};
