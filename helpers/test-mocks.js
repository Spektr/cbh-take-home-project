module.exports.testMocks  = [
    [ undefined, '0' ],
    [ null, '0' ],
    [ false, '0' ],
    [
        true,
        'ff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1a'
    ],
    [ '', '0' ],
    [ 0, '0' ],
    [
        -1,
        '40000e39c76cecb3825b1b3b7a209b438b8eb10fbd07beb48f283083a01a48e917883b3f55cc3105cde03597733600d498c776ad6cc9fd6b591c3c8012e36207'
    ],
    [
        -500000000000000000,
        'f78d31b6457afa4f00453d778347af20d317e7b65494a0ca80c869f605c8242e64fa42a631930355175f1a95e480e8b3eb6beb39fc9cbad94e522df4e35c5045'
    ],
    [
        500000000000000000,
        'f1b7d3a11221c05773ac68494dc617b1c60347b35df5554209f6eb3035f3ccbd87be236667bd862e1e94e2bf189de7fe4fbab99be5ef596b5266347fc7759dfd'
    ],
    [
        Infinity,
        '9375447cd5307bf7473b8200f039b60a3be491282f852df9f42ce31a8a43f6f8e916c4f8264e7d233add48746a40166eec588be8b7b9b16a5eb698d4c3b06e00'
    ],
    [
        -Infinity,
        '9375447cd5307bf7473b8200f039b60a3be491282f852df9f42ce31a8a43f6f8e916c4f8264e7d233add48746a40166eec588be8b7b9b16a5eb698d4c3b06e00'
    ],
    [
        [ 1, 2, 3 ],
        '90b44b7c9dc7d60ce7d3c815adf697f7408c955b7e4ab0d0e4a15314e5b5ac50da76a2c863fa9ba6aef2ee16bcf929351e06044e250cb2c6331c64d053cf6e79'
    ],
    [
        {},
        'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862'
    ],
    [
        { a: 'test' },
        'de07aef28a8717a6c7e62d9d1c4e4c114bfa344c8a6da1eab32978f3a4c0b96113275b76f1b4e55707ea41639bcdbc47ceb8b4e2a1a0cc7721116ad682527d24'
    ],
    [
        new Date('2023-04-01T08:44:11.761Z'),
    'e1d905f10082d20f0ecd52214df1a65361ddb7a60e20e69b6a5bed29f6c81c95430083511e24f6831bd28f6b2ce917a8ac1e884e813b8f5dc01da48a8bbbf527'
],
[
    { partitionKey: undefined },
    'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862'
],
    [
        { partitionKey: null },
        '58540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e2'
    ],
    [
        { partitionKey: false },
        '51a5f43b933ce152103a4789a17f1cf958e0b5e1c793082db6a6c74dd3f04c69ad8f558e28cf7c3eac61af4e484741f095129e815c4de4fdd30e3cd6c4e3c00f'
    ],
    [ { partitionKey: true }, 'true' ],
    [
        { partitionKey: '' },
        'b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6'
    ],
    [
        { partitionKey: 0 },
        'e65a0cb83a95cae7eb0642da576cac881e397c0405c63577c977068f7892f69f1c315baa294124da2a67e0c486d340f9d357377f894d0c0fd850484f8984f2e7'
    ],
    [ { partitionKey: -1 }, '-1' ],
    [ { partitionKey: -500000000000000000 }, '-500000000000000000' ],
    [ { partitionKey: 500000000000000000 }, '500000000000000000' ],
    [ { partitionKey: Infinity }, 'null' ],
    [ { partitionKey: -Infinity }, 'null' ],
    [ { partitionKey: [ 1, 2, 3 ] }, '[1,2,3]' ],
    [ { partitionKey: {} }, '{}' ],
    [ { partitionKey: { a: 'test' } }, '{"a":"test"}' ],
    [
        { partitionKey: new Date('2023-04-01T08:44:11.761Z') },
'"2023-04-01T08:44:11.761Z"'
]
]
;
