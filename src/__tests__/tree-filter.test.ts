import { filterTreeList } from '../index';

var dataTree = [
    { title: 'a1' },
    { title: 'a2' },
    {
        title: 'a3', children: [
            { title: 'a3-1' },
            { title: 'a3-2' },
            { title: 'a3-3' },
            { title: 'a3-4' },
            { title: 'a3-5' },
        ]
    },
    {
        title: 'a4', children: [
            {
                title: 'a4-1', children: [
                    { title: 'a4-1-1' },
                    { title: 'a4-1-2' },
                    { title: 'a4-1-3' },
                    { title: 'a4-1-4' },
                ]
            }
        ]
    },
    { title: 'a5' }
];

test('filter items in level 1', () => {
    expect(filterTreeList(dataTree, (x => x.title.toLowerCase().includes('a1')))).toEqual([{ title: 'a1' }]);
});


test('filter items and find in level 2', () => {
    var expectedResult = [
        {
            title: 'a3', children: [
                { title: 'a3-3' }
            ]
        }];
    expect(filterTreeList(dataTree, (x => x.title.toLowerCase().includes('a3-3')))).toEqual(expectedResult);
});



test('filter items by find title include "4"', () => {
    var expectedResult = [

        {
            title: 'a3', children: [
                { title: 'a3-4' }
            ]
        },
        {
            title: 'a4', children: [
                {
                    title: 'a4-1', children: [
                        { title: 'a4-1-1' },
                        { title: 'a4-1-2' },
                        { title: 'a4-1-3' },
                        { title: 'a4-1-4' },
                    ]
                }
            ]
        }
    ];
    expect(filterTreeList(dataTree, (x => x.title.toLowerCase().includes('4')))).toEqual(expectedResult);
});


test('test children key is "nodes"', () => {
    var tree = [
        { title: 'a' },
        {
            title: 'b', nodes: [
                { title: 'c' }
            ]
        }
    ];
    var expectedResult = [
        {
            title: 'b', nodes: [
                { title: 'c' }
            ]
        }
    ];
    expect(filterTreeList(tree,
        (x => x.title.toLowerCase().includes('c')),
        {
            childrenKeyName: 'nodes'
        }))
        .toEqual(expectedResult);
});
